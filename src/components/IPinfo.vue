<template>
    <div 
    class="absolute 
    -bottom-64
    lg:-bottom-20
    flex
    flex-col
    lg:flex-row
    bg-white
    gap-y-4
    gap-x-12
    px-8 pt-8 pb-12
    rounded-md
    ">


      <!-- Flex item #1  -->
      <div class="flex flex-col">
        <h3 class="text-xs mb2 uppercase">Ip Адрес</h3>
        <span class="text-2xl">{{ ipInfo.address }}</span>
      </div>
      <!-- Flex item #2  -->
      <div class="flex flex-col">
        <h3 class="text-xs mb2 uppercase">Место нахождения</h3>
        <span class="text-2xl">{{ ipInfo.state }}</span>
      </div>

    <!-- Flex item #3  -->
    <div class="flex flex-col">
      <h3 class="text-xs mb2 uppercase">Временная зона</h3>
      <span class="text-2xl">{{ ipInfo.timezone }}</span>
    </div>
    <!-- Flex item #4  -->
    <div class="flex flex-col">
      <h3 class="text-xs mb2 uppercase">Isp</h3>
      <span class="text-2xl">{{ ipInfo.isp }}</span>
    </div>  
  </div>
</template>

<script>
export default {
  props: ['ipInfo']
}
</script>

