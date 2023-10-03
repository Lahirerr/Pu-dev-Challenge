<script setup>
import { ref } from 'vue';

const props = defineProps({
  isNotFirstSection: Boolean,
});

const backtoTop = () => {
  if (props.isNotFirstSection) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    const sections = document.querySelector('.sections');
    if (sections) {
      sections.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
};


</script>
 
<template>
<button
    class="fixed bottom-5 right-8 transition duration-150 ease-in-out rotate-button"
    :class="{ 'rotate-180': isNotFirstSection }"
    @click="backtoTop"
  >
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 12L13 16L19 12" stroke="#636363"/>
      <circle cx="13" cy="13" r="12.5" stroke="#636363"/>
    </svg>
  </button>
</template>
 
<style scoped>
.rotate-button {
  transition: transform 0.3s ease-in-out;
}
.rotate-180 {
  transform: rotate(180deg);
}

</style>