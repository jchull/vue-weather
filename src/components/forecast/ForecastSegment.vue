<template>
  <div class="forecast-segment">
    <div class="segment-header">
      {{forecast.title}}
    </div>
    <div>
      <img :src="forecast.icon_url" :alt="forecast.conditions"/>
    </div>
    <div class="day-summary">{{forecast.fcttext}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ForecastSegment',
    props: ['forecast']
  };
</script>


