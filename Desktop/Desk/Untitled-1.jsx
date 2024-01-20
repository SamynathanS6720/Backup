if [[ $tarenv == "dev" || $tarenv == "qa" ]]; then
    sed -i 's|$target|'"$tarenv"'|' afterinstall.txt beforeinstall.txt
    sed -i 's/$domain/corldevqa/g' afterinstall.txt beforeinstall.txt
elif [[ $tarenv == "uat" ]]; then
    sed -i 's|$target|'"$tarenv"'|' afterinstall.txt beforeinstall.txt
    sed -i 's/$domain/corltech/g' afterinstall.txt beforeinstall.txt
else 
    sed -i 's/$target-api.$domain.com/api.corltech.com/' afterinstall.txt beforeinstall.txt
    sed -i 's/$target-client.$domain.com/client.corltech.com/' afterinstall.txt beforeinstall.txt
    sed -i 's/$target-corl.$domain.com/corl.corltech.com/' afterinstall.txt beforeinstall.txt
    sed -i 's/$target-supplier.$domain.com/supplier.corltech.com/' afterinstall.txt beforeinstall.txt
    sed -i 's|$target|'"$tarenv"'|' afterinstall.txt beforeinstall.txt   
fi