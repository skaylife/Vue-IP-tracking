<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Поиск / и Результаты -->
      <div class="z-20 flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32">
        <div class="w-full max-w-screen-sm">
          <h1 class="text-red-600 font-semibold text-center text-3xl pb-4 text-shadow-sm ">IP Адрес трекер</h1>
        <div class="flex">
          <input

              class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
              type="text"
              placeholder="Поиск любого IP-адреса, оставьте поле пустым и получите информацию о своём IP"
            />
            <i class="cursor-pointer 
            bg-blue-600
            text-white
            px-4 
            rounded-tr-md 
            rounded-br-md flex items-center
            fas fa-chevron-right"></i>
        </div>
      </div>
      <!-- IP информация -->
      <IPInfo/>
    </div>

    <!-- Карта  -->
   <div id="mapid" class="h-full  z-10 "></div>
  </div>
</template>

<script>
// @ is an alias to /src
import IPInfo from "../components/IPinfo.vue";
import leaflet from "leaflet";
import { onMounted } from '@vue/runtime-core';


export default {
  name: 'Home',
  components: { IPInfo },
  setup() {
    let mymap;

    onMounted(() => {mymap = leaflet.map('mapid').setView([51.505, -0.09], 13);

    leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2theWxpZmUiLCJhIjoiY2tyM2N3bWh1MHB6ZzJvcHR5czQ1Z3AzYSJ9.Kjs3yXzzwPa3WcetHXTA0w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2theWxpZmUiLCJhIjoiY2tyM2N3bWh1MHB6ZzJvcHR5czQ1Z3AzYSJ9.Kjs3yXzzwPa3WcetHXTA0w'
}).addTo(mymap);
    });
 
  },
};
</script>
