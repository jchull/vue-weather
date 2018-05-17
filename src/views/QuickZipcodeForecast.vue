<template>
  <div class="forecast">
    <img class="logo" src="../assets/logo.png">
    <form style="margin:20px;">
      <label for="zipcode">Zipcode</label>
      <input type="text"
             name="zipcode"
             id="zipcode"
             minlength="5"
             maxlength="5"
             required
             v-model="zipcode"/>
      <button @click="findStation()">Submit
      </button>
      <button @click="clear()">Clear</button>
      <forecast :station="station" v-if="station"></forecast>
    </form>
  </div>
</template>

<script>

  import Forecast from '@/components/forecast/Forecast.vue';
  import StationService from '@/services/station.js';

  export default {
    name: 'QuickZipCodeForecast', components: {
      Forecast
    }, data() {
      return {
        zipcode: undefined, station: undefined
      };
    }, methods: {
      clear() {
        this.zipcode = undefined;
        this.station = undefined;
      },

      findStation() {
        this.station = undefined;
        if(this.zipcode && this.zipcode.length === 5) {
          StationService.getNearestStationToZipcode(this.zipcode)
                        .then(stationlocation => (this.station = stationlocation.nearby_weather_stations.pws.station[0]));
        }
      }
    }
  };
</script>

<style scoped>
 .logo {
   height: 80px;
 }
</style>
