import {axios} from "axios";

const BASE_URL = `http://api.wunderground.com/api/${process.env.WEATHER_API_KEY}/geolookup/q/`;

export default class StationService {
  constructor(axios) {
     this.axios = axios;
  }

  getNearestStationToZipcode(zipcode) {
    return this.axios.get(BASE_URL + zipcode + ".json")
        .map(res => res.location);
  }

}

StationService.parameters = [[axios]];
