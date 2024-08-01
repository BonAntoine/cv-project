<script lang="ts" setup>
import ProfilSummary from './interactiveComponents/ProfilSummary.vue';
import ProExp from './interactiveComponents/ProExp.vue';
import Training from './interactiveComponents/Training.vue';
import Hobbies from './interactiveComponents/Hobbies.vue';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Steps } from '../utils/constant';
import gsap from 'gsap';
import { useScrollY } from '../hooks/useScrollY';

const profil = ref<HTMLElement | null>(null);
const proExp = ref<HTMLElement | null>(null);
const training = ref<HTMLElement | null>(null);
const hobbies = ref<HTMLElement | null>(null);

const emit = defineEmits(['over', 'scroll', 'categories']);

const { scrollY } = useScrollY();
const bgPosition = ref(0)
const textProfilPosition = ref(0)

watch(() => scrollY.value, () => {

    gsap.to(bgPosition, {
        duration: 0.2,
        ease: "power3.out",
        value: window.innerHeight * (1 - window.innerHeight / (window.innerHeight + scrollY.value)),
    });

    gsap.to(textProfilPosition, {
        duration: 0.4,
        ease: "power2.out",
        value: window.innerHeight * (1 - window.innerHeight / (window.innerHeight + scrollY.value)) * 0.8,
    });
})

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

    const profilScrollValue = profil.value?.scrollHeight as number * 0.70; // Because 110vh
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


    <div ref="profil" :style="{ backgroundPosition: '50% ' + bgPosition + 'px' }"
        class="bg-cover bg-center bg-no-repeat bg-[url('/ressources/profil_full_blur.jpg')] h-[110vh] mask-gradient-to-bottom">
        <ProfilSummary :style="{paddingTop: textProfilPosition + 'px'}"/>
    </div>
    <div class="text-slate-900">

        <ul class="flex flex-col px-32 py-32">

            <li ref="proExp" class="flex flex-row-reverse my-32">
                <ProExp @over="overEvent" @categories="$emit('categories', $event)" />
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