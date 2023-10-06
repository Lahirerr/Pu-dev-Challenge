<script setup>
import Papa from 'papaparse';
import { ref, onUpdated } from 'vue';
import Chart from 'chart.js/auto';
const data = './112-cases-by-year.csv';
const chartData = ref({});
const props = defineProps({
  isNotFirstSection: Boolean,
});


const fetchCsv = async () => {
  const response = await fetch(data);
  const csv = await response.text();
  const parsedCsvData = Papa.parse(csv).data;
  const parsedCsvDataMod = parsedCsvData.slice(1).filter(row => row[0] !== '');
  chartData.value = {
    labels: parsedCsvDataMod.map(row => row[0]),
    datasets: [
      {
        data: parsedCsvDataMod.map(row => row[1]),
        label: '',
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
      },
    ],
  };
  const ctx = document.getElementById('myChart')
  myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData.value,
    options: {
      animation: {
        duration: 2000,
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      title: {
        font: {
          size: 25,
          family: 'Market',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'ปี',
            color: 'black',
          },
        },
        y: {
          title: {
            display: true,
            text: 'จำนวณคดี',
            color: 'black',
          },
          beginAtZero: true,
        },
      },
    },
  })
};

onUpdated(() => {
  if (props.isNotFirstSection) {
    fetchCsv();
  }
});

</script>
 
<template>
  <section>
    <div class="bg-white xl:w-full xl:h-screen flex items-center justify-center h-screen">
      <div class="flex items-center flex-col">
        <div class="flex flex-col info font-market text-black space-y-5 p-5">
          <Transition name="slide-fade">
            <h1 class="xl:text-7xl text-5xl font-market font-bold" v-if="isNotFirstSection">จำนวณคดีที่เกิดขึ้น</h1>
          </Transition>
          <Transition name="slide-fade">
            <p class="xl:text-2xl text-xl" v-if="isNotFirstSection"> <span class="xl:inline-block block">มาตรา 112</span>
              มีการตีความการกระทำอย่างไร้ขอบเขต
              แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้
              <br>จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี 2548 เป็นต้นมา
            </p>
          </Transition>
        </div>
        <div class="xl:w-[1200px] xl:h-[400px] w-[350px] h-[300px] pt-5" v-if="isNotFirstSection">
          <canvas id="myChart"></canvas>
        </div>
        <div>
          ที่มา: <a href="https://freedom.ilaw.or.th/node/817">iLaw</a>
        </div>
      </div>
    </div>
  </section>
</template>
 
<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}
</style>