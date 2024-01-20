import axios from "axios";

const Driver_API_BASE_URL = 'http://localhost:8080/api/v1/driver';

const Driver_Location_API = 'http://localhost:8080/api/v1/driverlocations';

class DriverService{

    getDrivers(){
        return axios.get(Driver_API_BASE_URL);
    }

    getDriversLocation(){
        return axios.get(Driver_Location_API)
    }
}
export default new DriverService() ;