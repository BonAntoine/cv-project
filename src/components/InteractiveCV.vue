<script lang="ts" setup>
import ProfilSummary from './interactiveComponents/ProfilSummary.vue';
import ProExp from './interactiveComponents/ProExp.vue';
import Training from './interactiveComponents/Training.vue';
import Hobbies from './interactiveComponents/Hobbies.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Steps } from '../utils/constant';

const profil = ref<HTMLElement | null>(null);
const proExp = ref<HTMLElement | null>(null);
const training = ref<HTMLElement | null>(null);
const hobbies = ref<HTMLElement | null>(null);

const emit = defineEmits(['over', 'scroll']);

function overEvent(overedObject: string) {
    emit('over', overedObject)
}


onMounted(() => {

    window.addEventListener('scroll', whatFocus);

});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', whatFocus);
})

function whatFocus() {

    const profilScrollValue = profil.value?.scrollHeight as number;
    const proExpScrollValue = proExp.value?.scrollHeight as number + profilScrollValue;
    const trainingScrollValue = training.value?.scrollHeight as number + proExpScrollValue;
    const hobbiesScrollValue = hobbies.value?.scrollHeight as number + trainingScrollValue;

    // If the current scroll value window.scrollY is between one of the four values, log the name of the value
    if (window.scrollY >= 0 && window.scrollY <= profilScrollValue) {
        emit("scroll", Steps.PROFIL)
    }
    if (window.scrollY >= profilScrollValue && window.scrollY <= proExpScrollValue) {
        emit("scroll", Steps.PROEXP)
    }
    if (window.scrollY >= proExpScrollValue && window.scrollY <= trainingScrollValue) {
        emit("scroll", Steps.TRAINING)
    } 
    if (window.scrollY >= trainingScrollValue && window.scrollY <= hobbiesScrollValue) {
        emit("scroll", Steps.HOBBIES)
    }


}



</script>

<template>


    <div class="text-slate-900">

        <ul class="flex flex-col px-32 py-32">

            <li ref="profil" class="flex mb-32">
                <ProfilSummary @over="overEvent" />
            </li>
            <li ref="proExp" class="flex flex-row-reverse my-32">
                <ProExp @over="overEvent" />
            </li>
            <li ref="training" class="flex my-32">
                <Training @over="overEvent" />
            </li>
            <li ref="hobbies" class="flex flex-row-reverse my-32">
                <Hobbies @over="overEvent" />
            </li>

        </ul>

    </div>

</template>