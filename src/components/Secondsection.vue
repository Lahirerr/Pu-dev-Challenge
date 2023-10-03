<script setup>
import Papa from 'papaparse';
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
const data = './112-cases-by-year.csv';
const chartData = ref({});

const fetchCsv = async () => {
  const response = await fetch(data);
  const csv = await response.text();
  const parsedCsvData = Papa.parse(csv).data;
  console.log(parsedCsvData);
  const parsedCsvDataMod = parsedCsvData.slice(1).filter(row => row[0] !== '');
  chartData.value = {
    labels: parsedCsvDataMod.map(row => row[0]),
    datasets: [
      {
        data: parsedCsvDataMod.map(row => row[1]),
        label: null,
        backgroundColor: 'rgb(0,0,0)',
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
      },
    ],
  };
  console.log(chartData.value);
  const ctx = document.getElementById('myChart')
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData.value,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      title: {
      font: {
        size: 25,
        family: 'Modern',
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
  console.log("teststs");
};


onMounted(() => {
  fetchCsv();
});


onresize = () => {
  responsiveFont();
};

const responsiveFont = () => {
  // if (window.outerWidth > 999) {
  //   Chart.defaults.scales.x.title.fontSize = 12;
  //   Chart.defaults.scales.y.title.fontSize = 12;
  //   Chart.defaults.font.family = 'Modern';
  // }
  // if (window.outerWidth < 999 && window.outerWidth > 500) {
  //   Chart.defaults.font.size = 5;
  //   Chart.defaults.font.family = 'Modern';
  // }
  // if (window.outerWidth < 500) {
  //   Chart.defaults.font.size = 8;
  //   Chart.defaults.font.family = 'Modern';
  // }
  // console.log(window.outerWidth);
  if (window.outerWidth < 700) {
    Chart.defaults.scales.x.title.font.size = 12;
    Chart.defaults.scales.y.title.font.size = 12;
  }
};

</script>
 
<template>
    <section>
        <div class="bg-white xl:w-full xl:h-screen flex items-center justify-center h-screen" >
        <div class="flex items-center flex-col">
            <div class="flex flex-col font-modern text-black p-10 ">
                <h1 class="xl:text-7xl text-5xl font-modern font-bold text-center">จำนวณคดีที่เกิดขึ้น</h1>
                <p class="xl:text-2xl text-xl text-left"> <span class="xl:inline-block block">มาตรา 112</span> มีการตีความการกระทำอย่างไร้ขอบเขต
                    แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้
                    <br>จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี 2548 เป็นต้นมา
                </p>
            </div>
            <div class="chartBox xl:w-[1000px] xl:h-[500px]" onresize="responsiveFont()">
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
@media only screen and (max-width: 700px) {
    .chartBox {
        width: 90%;
        height: 45%;
    }
}
</style>