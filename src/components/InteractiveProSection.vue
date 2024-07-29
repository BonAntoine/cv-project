<script setup lang="ts">
import { ref } from 'vue';
import WorkExperience from '../models/WorkExperience';
import { useMouse } from '../hooks/useMouse';


const props = defineProps<{ workExp: WorkExperience }>()
let actShow = ref(false)
const emit = defineEmits(['categories']);
const { x, y } = useMouse();

let delayedX = ref(0);
let delayedY = ref(0);

function setActShow(v: boolean) {
  actShow.value = v;
  if(v) {
    emit('categories', props.workExp.skills);
  } else {
    emit('categories', []);
  }
}

function getX() {
  return delayedX.value + 15 + 'px';
}

function getY() {
  return delayedY.value + 15 + 'px';
}

setInterval(function () {
  delayedX.value += (x.value - delayedX.value) / 10;
  delayedY.value += (y.value - delayedY.value) / 10;
}, 20);


</script>

<template>
  <div @mouseover="setActShow(true)" @mouseleave="setActShow(false)" class="max-w-[300px] p-4">
    <strong class="text-2xl">{{ workExp.company }}</strong>
    <p class="text-xl py-5">{{ workExp.title }}</p>
    <p class="text-xl py-5">{{ workExp.dateFromTo }}</p>
    <p class="text-justify text-base mb-2">
      {{ workExp.description }}
    </p>
    <div v-if="actShow && workExp.activities?.length"
      id="followMouse"
      class="border border-gray-300 rounded-lg shadow-lg py-10 px-10 bg-white bg-opacity-85 absolute w-[550px]">
      <ul v-for="act in workExp.activities" class="list-disc text-sm text-justify">
        <li>{{ act }}</li>
      </ul>
    </div>
  </div>

</template>

<style>
  #followMouse {
      left: v-bind('getX()');
      top: v-bind('getY()');
  }
</style>