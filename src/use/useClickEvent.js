const clickEvent = new MouseEvent("click", {
  view: window,
  bubbles: true,
  cancelable: false,
})

export const useClickEvent = (el) => {
  el.dispatchEvent(clickEvent)
}
