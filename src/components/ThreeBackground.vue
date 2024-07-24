<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { createTerrain, createLight } from '../utils/utils.three';
import { useScroll } from '../hooks/useScroll';
import { FBXLoader } from 'three/examples/jsm/Addons.js';

const props = defineProps(['overed'])

const { scrollMaxY } = useScroll();

// SCENE DEFINITION

const target = ref();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Developper animated 3D model
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const dev3Dmd = new THREE.Mesh(geometry, material);

camera.position.set(0, 0, 5);
dev3Dmd.position.set(0, 0, 0);


const randomVals: number[] = [];

for (let i = 0; i < 12675; i++) {
    randomVals.push(Math.random() - 0.5);
}

let terrain = createTerrain({
    color: 'green',
});

let { light, lightHelper } = createLight('white')

scene.fog = new THREE.Fog('white', 30, 90);


// 3D Models loading

const loader = new FBXLoader();

loader.load('cv-project/ressources/models/react-logo.fbx', function (fbxObj) {

    fbxObj.name = 'react-logo';
    fbxObj.position.set(0, 0, 0);
    fbxObj.scale.set(0.001, 0.001, 0.001);
    scene.add(fbxObj);

}, undefined, function (error) {

    console.error(error);

});

scene.add(dev3Dmd, terrain, light);

function animate() {

    const currentFrame = requestAnimationFrame(animate);

    dev3Dmd.rotation.x += 0.01;
    dev3Dmd.rotation.y += 0.01;

    dev3Dmd.position.set(getLinear(), 0, 0);

    const reactLogo = scene.getObjectByName('react-logo') as THREE.Mesh;

    if(reactLogo) {

        
        var time = Date.now() * 0.001;  // Temps en secondes
        reactLogo.rotation.y += (Math.sin(time) * 0.01) - 0.005;
        reactLogo.position.y = Math.sin(time) * 0.08;  // Ajustez l'amplitude du mouvement ici
    }

    // Background terrain animation

    const { array } = terrain.geometry.attributes.position;

    for (let i = 0; i < array.length; i += 3) {
        // Accessing the z coord
        array[i + 2] = array[i + 2] + Math.sin(currentFrame / 100 + randomVals[i + 2]) * 0.009;
    }
    terrain.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}

onMounted(() => {
    target.value.appendChild(renderer.domElement);
    animate();
    window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
})

function onResize() {
    resetRendererSize()
}

function resetRendererSize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

function getLinear() {
    if (scrollMaxY.value === 0) return 0;
    return (window.scrollY / scrollMaxY.value) * 5;
}
</script>

<template>
    <div ref="target" class="fixed -z-10"></div>
</template>