<script setup lang="ts">
import SinglePageCV from './components/SinglePageCV.vue';
import InteractiveCV from './components/InteractiveCV.vue';
import ThreeBackground from './components/ThreeBackground.vue';
import { computed, ref } from 'vue';

// PATH

const routes: any = {
    '/': InteractiveCV,
    '/single-page-cv': SinglePageCV
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})

const currentView = computed(() => {
    return routes[currentPath?.value?.slice(1) || '/']
})

const overed = ref('')
const step = ref('')

function setOvered(overedValue: string) {
    overed.value = overedValue;
}

function setStep(value: string) {
    step.value = value;
}

</script>

<template>

    <ThreeBackground :overed="overed" :step="step"></ThreeBackground>

    <a href="#/single-page-cv" class="fixed">CV</a>

    <component :is="currentView" @over="setOvered" @scroll="setStep"/>





</template>
