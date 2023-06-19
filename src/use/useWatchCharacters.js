import { watch } from "vue"

export const useWatchCharacters = (valueToWatch, numChars = 100) => {
  watch(valueToWatch, (newVal) => {
    if (newVal.length === numChars)
      alert(`Only ${numChars} characters allowed!`)
  })
}
