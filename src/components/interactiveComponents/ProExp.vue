<script setup lang="ts">
import workExperiences from '../../assets/WorkExperienceList';
import InteractiveProSection from '../InteractiveProSection.vue';

</script>


<template>
    <div class="flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-85 p-6">

        <div>
            <p v-on:mouseover="$emit('over', 'Eviden')" class="text-slate-400">Eviden</p>
        </div>
        <div class="flex flex-row">
            <li v-for="workExp in workExperiences.slice(0, 3)" class="">
                <InteractiveProSection v-bind:workExp="workExp" @categories="$emit('categories', $event)"></InteractiveProSection>
            </li>
        </div>
        <div>
            <p v-on:mouseover="$emit('over', 'Atos')" class="text-slate-400">Atos</p>
        </div>
        <div class="flex flex-row">
            <li v-for="workExp in workExperiences.slice(3, 6)" class="">
                <InteractiveProSection v-bind:workExp="workExp" @categories="$emit('categories', $event)"></InteractiveProSection>
            </li>
        </div>

    </div>
</template>