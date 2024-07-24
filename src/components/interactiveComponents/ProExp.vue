<script setup lang="ts">
import workExperiences from '../../assets/WorkExperienceList';
import ProSection from '../ProSection.vue';

</script>


<template>
    <div class="flex flex-col border border-gray-300 rounded-lg shadow-lg py-10 px-10 bg-white bg-opacity-85">

            <div>
                <p v-on:mouseover="$emit('over', 'Eviden')" class="text-slate-400">Eviden</p>
            </div>
            <h2>Renault</h2>
            <h2>Sanofi</h2>
            <h2>Renault</h2>
            <div>
                <p v-on:mouseover="$emit('over', 'Atos')" class="text-slate-400">Atos</p>
            </div>
            <h2>Renault</h2>
            <h2>Sanofi</h2>
            <h2>Renault</h2>
            
    </div>
</template>