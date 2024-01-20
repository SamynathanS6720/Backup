import axios from "axios";

const Driver_API_BASE_URL = 'http://localhost:8080/api/v1/driverlocations';

class DriverLocation{

    getDriversLocation(){
        return axios.get(Driver_API_BASE_URL);
    }

    createdriver(){
        return axios.post(Driver_API_BASE_URL);
    }
}
export default new DriverLocation() ;