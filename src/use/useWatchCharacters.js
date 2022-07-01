import { watch } from 'vue'
export function  useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newVal) => {
    if(newVal.length === maxChars) {
      alert(`Only ${ maxChars } characters allowed`)
    }
  })
}