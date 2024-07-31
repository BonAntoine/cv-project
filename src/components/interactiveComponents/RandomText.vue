<script lang="tsx" setup>
import { ref } from 'vue';


const props = defineProps<{ text: string }>()
let randomTxt = ref(props.text);

const allowedCharacters = ['X', '$', 'Y', '#', '?', '*', '0', '1', '+'];

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
  return allowedCharacters[randomIndex];
}

function handleHoverEvent() {
  const randomizedText = props.text.split('').map(getRandomCharacter).join('');

  for (let i = 0; i < props.text.length; i++) {
    setTimeout(() => {
      const nextIndex = i + 1;
      randomTxt.value = `${props.text.substring(0, nextIndex)}${randomizedText.substring(nextIndex)}`;
    }, i * 70);
  }
}

</script>

<template>
    <p @mouseover="handleHoverEvent">{{ randomTxt }}</p>
</template>