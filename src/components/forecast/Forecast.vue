<template>
  <div class="forecast"
       v-if="station">
    <h1>Weather forecast for {{station.city}}, {{station.state}}</h1>
    <div v-if="currentForecast">
      <forecast-segment v-bind:forecast="forecast"
                        :key="forecast.period"
                        v-for="forecast in currentForecast"></forecast-segment>
    </div>
    <span v-if="!currentForecast">Forecast unavailable</span>
  </div>
</template>

<script>
  import ForecastService from "@/services/forecast.js";
  import ForecastSegment from "@/components/forecast/ForecastSegment.vue"

  export default {
    name: 'Forecast',
    props: ['station'],
    components: {
      ForecastSegment
    },
    data() {
      return {
        currentForecast: undefined
      }
    },
    mounted() {
      ForecastService.getForecastByStation(this.station)
                     .then(forecast => (this.currentForecast = forecast.txt_forecast.forecastday));
    }
  };
</script>

<style>
  .forecast-segment {
    display: inline-block;
    width: 140px;
    height: 240px;
    text-align: center;
    box-shadow: 1px 1px 1px #ABABAB;
    margin: 5px;
    font-size: 80%;
    overflow: hidden;
  }

  .segment-header {
    background-color: #0b6bab;
    line-height: 40px;
    padding: 4px;
    font-size: 120%;
    font-weight: 700;
    color: #FFF;
  }
</style>
