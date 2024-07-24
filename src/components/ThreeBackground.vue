<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import * as THREE from 'three';
import { createTerrain, createLight, importFbx, setModelProperty, setModelsInGrid, getOutModels } from '../utils/utils.three';
import { useScroll } from '../hooks/useScroll';
import { logoFileList, Steps } from '../utils/constant';
import { useMouse } from '../hooks/useMouse';


const props = defineProps(['overed', 'step']);
let needUpdate = false;
watch(() => props.step, () => {
    needUpdate = true;
});
const { scrollMaxY } = useScroll();
const { x, y, normX, normY } = useMouse()

// SCENE DEFINITION

const target = ref<HTMLElement | null>(null);

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

const logoList: Array<THREE.Object3D | undefined> = []
const logoGroup = new THREE.Group();
scene.add(logoGroup);

logoFileList.forEach((logoName: string) => {

    const nameWithoutExtension = logoName.slice(0, logoName.length-3);

    importFbx(logoName).then((model: any) => {
        setModelProperty(model, nameWithoutExtension, logoGroup)

        logoList.push(scene.getObjectByName(nameWithoutExtension))
    });

})



scene.add(terrain, light);

function animate() {

    const currentFrame = requestAnimationFrame(animate);

    dev3Dmd.rotation.x += 0.01;
    dev3Dmd.rotation.y += 0.01;

    dev3Dmd.position.set(getLinear(), 0, 0);

    // Step has changed
    if(needUpdate) {
        getOutModels(logoList)
        switch (props.step) {
            case Steps.PROFIL:
                
                break;
            case Steps.PROEXP:
                setModelsInGrid(logoList, 3);
                break;
            case Steps.TRAINING:
                
                break;
            case Steps.HOBBIES:
                
                break;
            default:
                break;
        }
        needUpdate = false;
    }

    // const reactLogo = scene.getObjectByName('react') as THREE.Mesh;

    // if(reactLogo) {

        
    //     var time = Date.now() * 0.001;  // Temps en secondes
    //     reactLogo.rotation.y += (Math.sin(time) * 0.01) - 0.005;
    //     reactLogo.position.y = Math.sin(time) * 0.08;  // Ajustez l'amplitude du mouvement ici
    // }

    // Background terrain animation

    const { array } = terrain.geometry.attributes.position;

    for (let i = 0; i < array.length; i += 3) {
        // Accessing the z coord
        array[i + 2] = array[i + 2] + Math.sin(currentFrame / 100 + randomVals[i + 2]) * 0.009;
    }
    terrain.geometry.attributes.position.needsUpdate = true;

    // Parallax effect, with smoothness with easing
    const parallaxX = normX.value / 5;
    const parallaxY = -normY.value / 5;
    camera.position.x += (parallaxX - camera.position.x) * 0.15;
    camera.position.y += (parallaxY - camera.position.y) * 0.15;

    renderer.render(scene, camera);
}

onMounted(() => {
    target.value?.appendChild(renderer.domElement);
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