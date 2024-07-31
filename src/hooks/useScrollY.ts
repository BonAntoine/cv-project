import { onMounted, onUnmounted, ref } from "vue";


export function useScrollY() {
    
    const scrollY = ref(0);

    onMounted(() => window.addEventListener('scroll', calculateScrollY))
    onUnmounted(() => window.removeEventListener('scroll', calculateScrollY))

    function calculateScrollY() {
        scrollY.value = window.scrollY;
    }

    return {
        scrollY
    }
}
