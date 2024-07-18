<script setup lang="ts">
import WorkExperience from '../models/WorkExperience';


defineProps<{ workExp: WorkExperience }>()


</script>

<template>
  <h2 class="text-2xl my-2 pb-1 border-b font-semibold"></h2>
  <p class="flex justify-between text-sm"><strong class="text-base">{{ workExp.company }}</strong></p>
  <div class="flex justify-between text-base my-2">
    <p>{{ workExp.title }}</p>
    <p>{{ workExp.dateFromTo }}</p>
  </div>
  <p class="text-justify text-xs mb-2">
    {{ workExp.description }}
  </p>
  <ul v-for="act in workExp.activities" class="list-disc text-xs text-justify">
    <li>{{ act }}</li>
  </ul>

</template>
