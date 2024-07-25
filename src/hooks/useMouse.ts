import { ref, onMounted, onUnmounted } from 'vue'


export function useMouse() {

  const x = ref(0)
  const y = ref(0)
  const normX = ref(0)
  const normY = ref(0)

  function update(event: any) {
    x.value = event.clientX
    y.value = event.clientY
    normX.value = (event.clientX / window.innerWidth) - 0.5
    normY.value = (event.clientY / window.innerHeight) - 0.5
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  // normX value between -0.5 and 0.5, same for normY
  return { x, y, normX, normY }
}