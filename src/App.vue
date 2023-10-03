<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Firstsection from './components/Firstsection.vue';
import Secondsection from './components/Secondsection.vue';
import Backtotopbutton from './components/Backtotopbutton.vue';
import Thirdsection from './components/Thirdsection.vue';
import Footerpage from './components/Footerpage.vue';


const isNotFirstSection = ref(false);

const handleScroll = () => {
  const sections = document.querySelector('.sections');
  if (sections) {
    const sectionRect = sections.getBoundingClientRect();
    isNotFirstSection.value = sectionRect.top < window.innerHeight / 2;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});



</script>


<template>
    <Firstsection/>
    <Secondsection class="sections"/>
    <Thirdsection class="sections"/>
    <Footerpage class="sections"/>
    <Backtotopbutton :isNotFirstSection="isNotFirstSection"/>
</template>
<style scoped>  
</style>
