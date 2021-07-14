<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Поиск / и Результаты -->
      <div class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32">
        <div class="w-full max-w-screen-sm">
          <h1 class="text-red-600 font-semibold text-center text-3xl pb-4 text-shadow-sm ">IP Адрес трекер</h1>
        <div class="flex">
          <input
              v-model="queryIp"
              class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
              type="text"
              placeholder="Поиск любого IP-адреса, оставьте поле пустым и получите информацию о своём IP"
            />
            <i 
            @click="getIpInfo"
            class="cursor-pointer 
            bg-blue-600
            text-white
            px-4 
            rounded-tr-md 
            rounded-br-md flex items-center
            fas fa-chevron-right"></i>
        </div>
      </div>
      <!-- IP информация -->
      <IPInfo v-if="ipInfo" v-bind:ipInfo="ipInfo"/>
    </div>

    <!-- Карта  -->
   <div id="mapid" class="h-full  z-10 "></div>
  </div>
</template>

<script>
// @ is an alias to /src
import IPInfo from "../components/IPinfo.vue";
import leaflet from "leaflet";
import { onMounted, ref } from '@vue/runtime-core';
import axios from 'axios';

export default {
  name: 'Home',
  components: { IPInfo },
  setup() {
    let mymap;
    const queryIp = ref("");
    const ipInfo = ref(null);

    onMounted(() => {
      mymap = leaflet.map('mapid').setView([55.755, 37.5], 8);

    leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2theWxpZmUiLCJhIjoiY2tyM2N3bWh1MHB6ZzJvcHR5czQ1Z3AzYSJ9.Kjs3yXzzwPa3WcetHXTA0w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2theWxpZmUiLCJhIjoiY2tyM2N3bWh1MHB6ZzJvcHR5czQ1Z3AzYSJ9.Kjs3yXzzwPa3WcetHXTA0w'
}).addTo(mymap);
    });
 
    const getIpInfo = async () => {
      try {
        const data = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_3qjQQPcPDvapefL8wWwIrSQ1JuncO&ipAddress=${queryIp.value}`)
      
      const result = data.data;
      ipInfo.value = {
        address: result.ip,
        state: result.location.region,
        timezone: result.location.timezone,
        isp: result.isp,
        lat: result.location.lat,
        lng: result.location.lng
      }
      leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap);
      mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 13);
      } catch (err) {
        alert(err.message);
      }
    }
    return { queryIp, ipInfo, getIpInfo }
  },
};
</script>
