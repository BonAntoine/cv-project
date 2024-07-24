<script lang="ts" setup>


</script>

<template>


    <div class="flex flex-col border border-gray-300 rounded-lg shadow-lg py-10 px-10 bg-white bg-opacity-85">
        <img v-on:mouseover="$emit('over', 'profil')" class="bg-cover bg-no-repeat rounded-full h-52 w-52 mx-auto" src="../../assets/profil.jpg" alt="Profil">
        </img>


        <div class="grid justify-items-end">
            <h1 v-on:mouseover="$emit('over', 'profil')" class="text-7xl font-extrabold">Antoine Bon</h1>
            <p class="text-xl mt-5">Développeur Full Stack</p>
            <p class="text-slate-400">5 ans d'experiences</p>
        </div>
        
        <h2 class="text-2xl font-semibold">Coordonnées</h2>
        <ul class="mt-2">
            <li class="mt-1"><strong class="mr-1">Téléphone </strong>
                <a href="tel:+33782084175" class="block">07 82 08 41 75</a>
            </li>
            <li class="mt-1"><strong class="mr-1">E-mail </strong>
                <a href="mailto:" class="block">bon.antoine.ab@gmail.com</a>
            </li>
        </ul>

    </div>

</template>