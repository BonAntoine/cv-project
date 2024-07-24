<script setup lang="ts">
import workExperiences from '../../assets/WorkExperienceList';
import ProSection from '../ProSection.vue';

</script>


<template>
    <div class="flex flex-col border border-gray-300 rounded-lg shadow-lg py-10 px-10 bg-white bg-opacity-85">
        <ul>
            <div>
                <p v-on:mouseover="$emit('over', 'Eviden')" class="text-slate-400">Eviden</p>
            </div>
            <li v-for="workExp in workExperiences.slice(0, 3)" class="">
                <ProSection v-bind:workExp="workExp"></ProSection>
            </li>
        </ul>
    </div>
</template>