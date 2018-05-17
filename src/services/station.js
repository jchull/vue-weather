import axios from "axios";

const BASE_URL = `http://api.wunderground.com/api/${process.env.VUE_APP_WEATHER_API_KEY}/geolookup/q/`;

export default {
  getNearestStationToZipcode(zipcode) {
    return axios.get(BASE_URL + zipcode + ".json")
        .then(res => res.data.location);
  }

}

