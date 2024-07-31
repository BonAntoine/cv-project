<script lang="ts" setup>
import RandomText from './RandomText.vue';



</script>

<template>


    <div class="text-slate-100">


        <div class="grid justify-items-end pr-44 pt-32">
            <h1 v-on:mouseover="$emit('over', 'profil')" class="text-7xl font-extrabold">Antoine Bon</h1>
            <p class="text-3xl mt-5">Développeur Full Stack</p>
            <p class="text-slate-300 text-2xl mt-5">5 ans d'experience</p>
        </div>

        <div class="pl-48">
        <RandomText text="Coordonnées" class="text-5xl font-semibold"></RandomText>
        <ul class="mt-2 text-2xl">
            <li class="mt-6"><strong class="mr-1">Téléphone</strong>
                <a href="tel:+33782084175" class="block">07 82 08 41 75</a>
            </li>
            <li class="mt-1"><strong class="mr-1">E-mail</strong>
                <a href="mailto:bon.antoine.ab@gmail.com" class="block">bon.antoine.ab@gmail.com</a>
            </li>
            <li class="mt-1"><strong class="mr-1">Adresse</strong>
                <a class="block">Lille - France</a>
            </li>
        </ul>
    </div>

    </div>

</template>