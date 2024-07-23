<script setup lang="ts">
import workExperiences from './assets/WorkExperienceList';
import Badge from './components/Badge.vue'
import ProSection from './components/ProSection.vue';
import githubSrc from './assets/github.svg';
import linkedinSrc from './assets/linkedin.svg';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { createTerrain, createLight } from './utils/utils.three';


// SCENE DEFINITION

const target = ref();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

camera.position.set(0, 0, 5);
cube.position.set(0, 0, 0);


const randomVals: number[] = [];

for (let i = 0; i < 12675; i++) {
    randomVals.push(Math.random() - 0.5);
}

let terrain = createTerrain({
    color: 'green',
});

let { light, lightHelper } = createLight('white')

scene.fog = new THREE.Fog('white', 30, 90);

scene.add(cube, terrain, light);

function animate() {
    const currentFrame = requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube.position.set(getLinear(), 0, 0);

    const { array } =  terrain.geometry.attributes.position;

    for (let i = 0; i < array.length; i += 3) {
     // Accessing the z coord
     // Try switching these numbers up, or using sine instead of cosine, see how the animation changes.
     array[i + 2] = array[i + 2] + Math.sin(currentFrame/100 + randomVals[i + 2]) * 0.009;
   }
   terrain.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}

onMounted(() => {
    target.value.appendChild(renderer.domElement);
    animate();

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onResize);
})


// UTILS 

let scrollMaxY = 0;


function onScroll() {
    calculateScrollMaxY();
    console.log(window.scrollY, scrollMaxY)
}

function onResize() {
    resetRendererSize()
}

function resetRendererSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function calculateScrollMaxY() {
    scrollMaxY = document.documentElement.scrollHeight - window.innerHeight;
}
function getLinear() {
    if (scrollMaxY === 0) return 0;
    return (window.scrollY / scrollMaxY) * 5;
}

</script>

<template>

    <div ref="target" class="fixed"></div>

    <body class="flex justify-center content-center text-slate-900 text-center">
        <!-- outer container aspect-[210/297] -->
        <div
            class="z-10 bg-opacity-85 bg-white border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10 max-w-5xl">
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
                        <img class="bg-cover bg-no-repeat rounded-full h-52 w-52" src="./assets/profil.jpg">
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
                        <Badge msg="HTML"></Badge>
                        <Badge msg="CSS"></Badge>
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
                        <Badge msg="Tailwind"></Badge>
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
                        <ul class="">
                            <div>
                                <p class="text-slate-400">Eviden</p>
                            </div>
                            <li v-for="workExp in workExperiences.slice(0, 3)" class="">
                                <ProSection v-bind:workExp="workExp"></ProSection>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <ul>
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





</template>
