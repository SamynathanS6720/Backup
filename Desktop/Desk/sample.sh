#!/bin/bash

export tarenv=$1

echo "Building Application"

echo "$SYSTEM_DEFAULTWORKINGDIRECTORY"
cd 
source ~/.bashrc


# Change directory to working directory
cd $SYSTEM_DEFAULTWORKINGDIRECTORY

#Check the current path
pwd

#make a application directory
cd 
mkdir webapps
rm $tarenv-webapps.zip
rm -rf webapps/*
cd /
cd $SYSTEM_DEFAULTWORKINGDIRECTORY/Api/Com.Corltech.Api
rm -rf bin/
rm -rf obj/
cd ..

#publish the application
dotnet publish -c release Com.Corltech.Api

#enter to the publish folder
cd /
cd $SYSTEM_DEFAULTWORKINGDIRECTORY/Api/Com.Corltech.Api/bin/release/net6.0/
pwd

#remove json and config files
cd publish/
rm *.config
find  . -name 'appsettings*' -exec rm {} \;

cp $SYSTEM_DEFAULTWORKINGDIRECTORY/Content/ConfigFiles/$tarenv/* .
cd ..
mv publish/ $tarenv-api-publish
mv -v $tarenv-api-publish /home/ec2-user/webapps
cd /
cd /home/ec2-user/webapps
chmod +R 777 $tarenv-api-publish
chmod +R 777 $tarenv-corlportal
chmod +R 777 $tarenv-clientportal
chmod +R 777 $tarenv-vendorportal
cd /

#build clientportalui
cd $SYSTEM_DEFAULTWORKINGDIRECTORY/clientportal.ui
rm -rf node_modules/
npm install env-cmd
if [ "$tarenv" != "production" ]
then
    npm run build:$tarenv
else
    npm run build
fi
mv build/ $tarenv-clientportal
mv -v $tarenv-clientportal/ /home/ec2-user/webapps
cd ..

#build  corlportal.ui
cd corlportal.ui
rm -rf node_modules/
npm install env-cmd
if [ "$tarenv" != "production" ]
then
    npm run build:$tarenv
else
    npm run build
fi
mv build/ $tarenv-corlportal
mv -v $tarenv-corlportal/ /home/ec2-user/webapps
cd ..

#build and zip vendorportal.ui
cd vendorportal.ui
rm -rf node_modules/
npm install env-cmd
if [ "$tarenv" != "production" ]
then
    npm run build:$tarenv
else
    npm run build
fi
mv build/ $tarenv-vendorportal
mv -v $tarenv-vendorportal/ /home/ec2-user/webapps
cd ..

#moving the Installation and appspec files
cd IAC/Installation
rm *.bat
cp afterinstall.txt  afterinstall.bat
cp beforeinstall.txt  beforeinstall.bat


if [[ $tarenv == "dev" || $tarenv == "qa" ]]; then
    sed -i 's|$target|'"$tarenv"'|' afterinstall.bat beforeinstall.bat
    sed -i 's/$domain/corldevqa/g' afterinstall.bat beforeinstall.bat
elif [[ $tarenv == "uat" ]]; then
    sed -i 's|$target|'"$tarenv"'|' afterinstall.bat beforeinstall.bat
    sed -i 's/$domain/corltech/g' afterinstall.bat beforeinstall.bat
else 
    sed -i 's/$target-api.$domain.com/api.corltech.com/' afterinstall.bat beforeinstall.bat
    sed -i 's/$target-client.$domain.com/client.corltech.com/' afterinstall.bat beforeinstall.bat
    sed -i 's/$target-corl.$domain.com/corl.corltech.com/' afterinstall.bat beforeinstall.bat
    sed -i 's/$target-supplier.$domain.com/supplier.corltech.com/' afterinstall.bat beforeinstall.bat
fi
rm *.txt
cd ..
mv -v Installation /home/ec2-user/webapps
cd Spec/
rm *.yml
cp appspec appspec.yml
sed -i 's|$target|'"$tarenv"'|' appspec.yml
cp appspec.yml /home/ec2-user/webapps


#zip the artifact and push to s3
cd 
zip -r $tarenv-webapps.zip webapps/
aws s3 cp $tarenv-webapps.zip s3://tools-prod-webapps

#enter to the pipeline script
cd $SYSTEM_DEFAULTWORKINGDIRECTORY/IAC/AWSCodePipelines
rm *.json
cp $tarenv $tarenv.json
sed -i 's|$target|'"$tarenv"'|' $tarenv.json

#update the pipeline 
aws codepipeline update-pipeline --cli-input-json file://$tarenv.json

#start the pipeline 
aws codepipeline start-pipeline-execution --name tools-prod-webapp-codepipeline





