import { onMounted, onUnmounted, ref } from "vue";


export function useScroll() {
    
    const scrollMaxY = ref(0);

    onMounted(() => window.addEventListener('scroll', calculateScrollMaxY))
    onUnmounted(() => window.removeEventListener('scroll', calculateScrollMaxY))

    function calculateScrollMaxY() {
        scrollMaxY.value = document.documentElement.scrollHeight - window.innerHeight;
    }

    return {
        scrollMaxY
    }
}
