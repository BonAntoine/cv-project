<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import * as THREE from 'three';
import { createTerrain, createLight, importFbx, setModelProperty, setModelsInGrid, getOutModels, animateModels, importGlb } from '../utils/utils.three';
import { useScroll } from '../hooks/useScroll';
import { LogoFileInfo, logoFileList, Steps } from '../utils/constant';
import { useMouse } from '../hooks/useMouse';
import gsap from 'gsap';
import { watchDebounced } from '@vueuse/core';


const props = defineProps(['overed', 'step', 'categories']);
let needUpdate = true;
let categoriesToTrigger: { name: string, needTrigger: boolean, needTriggerOut: boolean }[] = [];
watch(() => props.step, () => {
    needUpdate = true;
});

// Need debounced, ideally with waiting a value of the time of the animation in
// Because otherwise, the animation in and animation out would override each other
watchDebounced(() => props.categories, () => {

    const res = props.categories.map((cat: string) => ({ name: cat, needTrigger: false }));
    categoriesToTrigger = [...categoriesToTrigger, ...res.filter((cat: { name: string; }) => !categoriesToTrigger.some((cat2) => cat2.name === cat.name))]


    categoriesToTrigger.forEach((cat) => {
        if (props.categories.includes(cat.name)) {
            cat.needTrigger = true;
        } else {
            cat.needTriggerOut = true;
        }
    });
}, { debounce: 500, maxWait: 1000 });
const { scrollMaxY } = useScroll();
const { normX, normY } = useMouse()

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

let { light } = createLight('white')

scene.fog = new THREE.Fog('white', 30, 90);

scene.background = new THREE.Color(0xcceafc);


// 3D Models loading
const logoList: { modelInstance?: THREE.Object3D, modelBackup?: any }[] = []
const logoGroup = new THREE.Group();
scene.add(logoGroup);

logoFileList.forEach(async (logoFileInfo: LogoFileInfo) => {
    switch (logoFileInfo.name.slice(logoFileInfo.name.lastIndexOf('.') + 1)) {
        case 'fbx':
            await importFbx(logoFileInfo.name).then((model: any) => {
                // TODO : set name and size in the constant array
                setModelProperty(model, logoFileInfo, logoGroup, logoFileInfo.size ? logoFileInfo.size : 0.01)
                logoList.push({ modelInstance: scene.getObjectByName(logoFileInfo.name.slice(0, logoFileInfo.name.lastIndexOf("."))) })
            });
            break;
        case 'glb':
            await importGlb(logoFileInfo.name).then((model: any) => {
                setModelProperty(model.scene, logoFileInfo, logoGroup, logoFileInfo.size ? logoFileInfo.size : 1)
                logoList.push({ modelInstance: scene.getObjectByName(logoFileInfo.name.slice(0, logoFileInfo.name.lastIndexOf("."))) })
            });
            break;
        case 'gltf':
            break;
        default:
            break;
    }
    setModelsInGrid(logoList.map((logo) => logo.modelInstance), 4);

})



scene.add(terrain, light);

function animate() {

    const currentFrame = requestAnimationFrame(animate);

    dev3Dmd.rotation.x += 0.01;
    dev3Dmd.rotation.y += 0.01;

    dev3Dmd.position.set(getLinear(), 0, 0);

    // Step has changed
    if (needUpdate) {
        gsap.to(logoGroup.position, {
            duration: 1,
            ease: 'power3.out',
            x: -1,
            y: -1,
            z: -1,
        })
        switch (props.step) {
            case Steps.PROFIL:

                break;
            case Steps.PROEXP:
                setModelsInGrid(logoList.map((logo) => logo.modelInstance), 4);

                gsap.to(logoGroup.position, {
                    duration: 1,
                    ease: 'power3.out',
                    x: -0.50,
                    y: 0.60,
                    z: 3,
                })

                logoList.forEach((logo) => {
                    logo.modelBackup = {
                        x: logo.modelInstance?.position.x,
                        y: logo.modelInstance?.position.y,
                        z: logo.modelInstance?.position.z,
                        scale: {
                            x: logo.modelInstance?.scale.x,
                            y: logo.modelInstance?.scale.y,
                            z: logo.modelInstance?.scale.z,
                        }
                    }
                })
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

    // CATEGORIES ANIMATION

    // TODO Scrolling animation
    // if(props.step === Steps.PROEXP) {
    //     logoGroup.position.y = logoGroup.position.y + document.documentElement.scrollHeight * 0.00001
    // }

    // Standing animation
    animateModels(logoList.map((logo) => logo.modelInstance));

    // Categories animation with gsap, to trigger the animation only once
    categoriesToTrigger.forEach((cat) => {

        const logoInstanceAndBackup = logoList.find((logo) => logo.modelInstance?.name === cat.name);
        const categoryToAnimate = logoInstanceAndBackup?.modelInstance;
        if (categoryToAnimate) {
            if (cat.needTrigger) {

                cat.needTrigger = false;

                const tl = gsap.timeline();

                tl.to(categoryToAnimate.position, {
                    duration: 1,
                    ease: 'back.inOut',
                    z: 0.2,
                })
                    .to(categoryToAnimate.scale, {
                        duration: 1,
                        ease: 'back.inOut',
                        x: logoInstanceAndBackup.modelBackup.scale.x * 1.2,
                        y: logoInstanceAndBackup.modelBackup.scale.y * 1.2,
                        z: logoInstanceAndBackup.modelBackup.scale.z * 1.2,
                    }, 0) // To happend on the same time as the previous animation
                    .to(categoryToAnimate.rotation, {
                        duration: 0.4,
                        ease: 'power3.out',
                        x: Math.PI * 2, // on Y axis is impossible because animation already in progress
                        onComplete: () => {
                            categoryToAnimate.rotation.x = 0;
                        }
                    })

            }
            if (cat.needTriggerOut) {

                cat.needTriggerOut = false;

                // Animation out
                const tl = gsap.timeline();
                tl.to(categoryToAnimate.position, {
                    duration: 1,
                    ease: 'power3.inOut',
                    z: logoInstanceAndBackup.modelBackup.z,
                })
                    .to(categoryToAnimate.scale, {
                        duration: 1,
                        ease: 'back.inOut',
                        x: logoInstanceAndBackup.modelBackup.scale.x,
                        y: logoInstanceAndBackup.modelBackup.scale.y,
                        z: logoInstanceAndBackup.modelBackup.scale.z,
                    }, 0.5)
            }
        }
    });

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