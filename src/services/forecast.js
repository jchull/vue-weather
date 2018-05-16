import axios from "axios";

const BASE_URL = `http://api.wunderground.com/api/${process.env.WEATHER_API_KEY}/forecast/q/`;

export default class ForecastService {
  constructor(axios){
    this.axios = axios;
  }

  getForecastByStation(station){
    return this.axios.get(BASE_URL + station.state + "/" + station.city + ".json")
        .map(res => res.forecast);
  }

}

ForecastService.parameters = [[axios]];
