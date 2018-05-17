import axios from "axios";

const BASE_URL = `http://api.wunderground.com/api/${process.env.VUE_APP_WEATHER_API_KEY}/forecast/q/`;

export default {
  getForecastByStation(station){
    return axios.get(BASE_URL + station.state + "/" + station.city + ".json")
        .then(res => res.data.forecast);
  }

}

