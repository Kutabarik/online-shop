import axios from "axios";

const GOOGLE_MAPS_API = "https://maps.googleapis.com/maps/api/geocode/json"
const KEY = "AIzaSyCv7U6HQJQtRDVFmM3C_drz6U60wEckkmw"

export default {
    getAddress: (latitude, longitude) => {
        return axios.get(`${GOOGLE_MAPS_API}?latlng=${latitude},${longitude}&key=${KEY}`)
    }
}