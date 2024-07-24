<script lang="ts" setup>
import ProfilSummary from './interactiveComponents/ProfilSummary.vue';
import ProExp from './interactiveComponents/ProExp.vue';
import Training from './interactiveComponents/Training.vue';
import Hobbies from './interactiveComponents/Hobbies.vue';

const emit = defineEmits(['over']);

function overEvent(overedObject: string) {
    emit('over', overedObject)
}
</script>

<template>


        <div class="text-slate-900">

            <ul class="flex flex-col px-32 py-32">

                <li class="flex mb-32">
                    <ProfilSummary @over="overEvent"/>
                </li>
                <li class="flex flex-row-reverse my-32">
                    <ProExp @over="overEvent"/>
                </li>
                <li class="flex my-32">
                    <Training @over="overEvent"/>
                </li>
                <li class="flex flex-row-reverse my-32">
                    <Hobbies @over="overEvent"/>
                </li>

            </ul>

        </div>

</template>