<script lang="ts" setup>
import Badge from './Badge.vue'
import ProSection from './ProSection.vue';
import workExperiences from '../assets/WorkExperienceList';
import githubSrc from '../assets/github.svg';
import linkedinSrc from '../assets/linkedin.svg';
</script>

<template>
    <div class="fixed bg-gradient-to-r from-orange-200 via-orange-200/0 w-screen h-screen my-0 -z-10">

    <!-- <body class="flex justify-center content-center text-slate-900 text-center"> -->
        <body class="my-10 mx-10">
        <!-- outer container aspect-[210/297] -->
        <!-- <div
            class="z-10 bg-opacity-85 bg-white border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10 max-w-5xl"> -->
            <div>
            <!-- header (profile) -->
            <header>
                <!-- social icons-->
                <ul class="flex flex-wrap justify-end gap-2">
                    <!-- linkedin -->
                    <li>
                        <a href="https://www.linkedin.com/in/antoine-bon-1b23b012b/"
                            class=" font-semibold text-white inline-flex items-center space-x-2 rounded w-12"
                            target=”_blank”>
                            <img :src="linkedinSrc" alt="linkedin">
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/BonAntoine"
                            class="bg-gray-100 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded w-12"
                            target=”_blank”>
                            <img :src="githubSrc" alt="github">
                        </a>
                    </li>
                </ul>
                <div class="flex justify-between items-center pl-10">
                    <div>
                        <img class="bg-cover bg-no-repeat rounded-full h-52 w-52" src="../assets/profil.jpg">
                        </img>
                    </div>
                    <div class="grid justify-items-end">
                        <h1 class="text-7xl font-extrabold">Antoine Bon</h1>
                        <p class="text-xl mt-5">Développeur Full Stack</p>
                        <p class="text-slate-400">5 ans d'experiences</p>
                    </div>
                </div>
            </header>
            <!-- detailed info -->
            <main class="flex gap-x-10 mt-10">
                <div class="w-2/6">
                    <!-- contact details -->
                    <h2 class="text-2xl font-semibold">Coordonnées</h2>
                    <ul class="mt-2 mb-10">
                        <li class="px-2 mt-1"><strong class="mr-1">Téléphone </strong>
                            <a href="tel:+33782084175" class="block">07 82 08 41 75</a>
                        </li>
                        <li class="px-2 mt-1"><strong class="mr-1">E-mail </strong>
                            <a href="mailto:" class="block">bon.antoine.ab@gmail.com</a>
                        </li>
                    </ul>

                    <section>
                        <h2 class="text-2xl mt-6 pb-1 font-semibold">Formations</h2>
                        <p class="mt-4">
                        <ul>
                            <li>ThreeJS - Mai 2024</li>
                            <li>Vue - Janvier 2024</li>
                            <li>Sécurité web m2i - Mars 2024</li>
                            <li>Industrialisation et automatisation des tests - Mai 2022</li>
                        </ul>
                        </p>

                    </section>

                    <div class="mt-10"></div>

                    <!-- skills -->
                    <strong class="text-xl font-medium">Compétences</strong>
                    <ul class="mt-2 flex">

                        <Badge msg="Vue"></Badge>
                        <Badge msg="React"></Badge>
                        <Badge msg="Angular"></Badge>
                        <Badge msg="Svelte"></Badge>
                    </ul>
                    <div class="border-b w-6 ml-28 my-2"></div>
                    <ul class="flex mt-2">
                        <Badge msg="NestJS"></Badge>
                        <Badge msg="Node.js"></Badge>
                        <Badge msg="Go"></Badge>
                    </ul>
                    <div class="border-b w-6 ml-28 my-2"></div>
                    <ul class="mt-2 flex">
                        <Badge msg="Typescript"></Badge>
                        <Badge msg="Javascript"></Badge>
                    </ul>
                    <div class="border-b w-6 ml-28 my-2"></div>
                    <ul class="mt-2 flex">
                        <Badge msg="BabylonJS"></Badge>
                        <Badge msg="ThreeJS"></Badge>
                        <Badge msg="Tailwind"></Badge>
                    </ul>
                    <div class="border-b w-6 ml-28 my-2"></div>
                    <ul class="mt-2 mb-10 flex">
                        <Badge msg="ESLint"></Badge>
                        <Badge msg="Prettier"></Badge>
                    </ul>


                    <section>
                        <!-- education -->
                        <h2 class="text-xl pb-1 font-semibold">Parcours scolaire</h2>
                        <ul class="mt-2">
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">Master E-Services</strong>2022-2019
                                </p>
                                <p class="flex justify-between text-sm">Campus de Lille 1, alternance Atos</p>
                            </li>
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">Licence 3 informatique</strong>2022-2019
                                </p>
                                <p class="flex justify-between text-sm">Stage Atos</p>
                            </li>
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">DUT IUT A Lille 1</strong>2022-2019
                                </p>
                                <p class="flex justify-between text-sm">Stage à l'étranger à Glasgow
                                </p>
                                <p class="flex justify-between text-sm">Projet Drawinguess
                                </p>
                            </li>
                            <li class="pt-2">
                                <p class="flex justify-between text-sm">
                                    <strong class="text-base">Bac S spé ISN</strong>2022-2019
                                </p>
                                <div>
                                    <p class="text-justify">Projet
                                        <a class="text-justify"
                                            href="http://debonmatin.free.fr/monpremierjeu/Ex1.html">Warcross</a>
                                    </p>
                                </div>


                            </li>
                        </ul>
                    </section>



                    <div class="mt-10"><strong class="text-xl font-medium">Centres d'intérêt</strong></div>
                    <ul class="mt-2">
                        <li class="px-2 mt-1">Course sur route et trail, marathon</li>
                        <li class="px-2 mt-1">Randonnées, trek</li>
                        <li class="px-2 mt-1">Guitare</li>
                    </ul>
                </div>



                <div class="w-5/6">

                    <h2 class="text-2xl font-semibold mb-2">Expériences professionnelles</h2>
                    <!-- work experiences -->
                    <section>
                        <ul class="text-center">
                            <div>
                                <p class="text-slate-400">Eviden</p>
                            </div>
                            <li v-for="workExp in workExperiences.slice(0, 3)" class="">
                                <ProSection v-bind:workExp="workExp"></ProSection>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <ul class="text-center">
                            <div>
                                <p class="text-slate-400">Atos</p>
                            </div>
                            <li v-for="workExp in workExperiences.slice(3, 6)" class="">
                                <ProSection v-bind:workExp="workExp"></ProSection>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    </body>
</div>
</template>