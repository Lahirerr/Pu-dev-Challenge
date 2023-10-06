<script setup>

</script>
 
<template>
  <div class="bg-black w-full text-white font-market flex items-center justify-center h-screen">
    <div class="text-center p-5">
      <h1 class="xl:text-[164px] text-[130px]">ม.๑๑๒</h1>
      <p class="xl:text-[30px] text-[20px]">“ผู้ใดหมิ่นประมาท ดูหมิ่น หรือแสดงความอาฆาตมาดร้าย พระมหากษัตริย์ พระราชินี
        รัชทายาท <span class="inline-block xl:block">หรือผู้สำเร็จราชการแทนพระองค์
          ต้องระวางโทษจำคุกตั้งแต่สามปีถึงสิบห้าปี”</span>
      </p>
    </div>
  </div>
</template>
 
<style scoped>
h1 {
  position: relative;
  z-index: 1;
  display: inline-block;
}

h1::before {
  content: '';
  width: 0%;
  height: 120px;
  background: black;
  position: absolute;
  padding: 5;
  top: 30%;
  bottom: 0;
  animation: animate 3s;
}

@keyframes animate {
  0% {
    width: 100%;
    z-index: 1;

  }

  100% {
    width: 100%;
    z-index: 1;
    transform: translateX(100%);
  }
}
</style>