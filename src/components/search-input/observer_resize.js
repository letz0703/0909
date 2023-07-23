const box = document.querySelector(".box")
const observer = new ResizeObserver((entries) => {
  const isThereABox = entries[0]
  console.log(isThereABox)
})

observer.observe(box)

//https://youtu.be/M2c37drnnOA?t=155 observed
/**
 * contentRect
 *
 */
