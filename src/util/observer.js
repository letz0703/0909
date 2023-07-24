const mutationObserver = new MutationObserver((entries) => {
  console.log(entries)
})

const parent = document.querySelector(".input")

parent &&
  mutationObserver.observe(parent, {
    subtree: true,
    characterData: true,
    characterDataOldValue: true,
  })

parent && console.log(parent)

//잘 모르것다 https://youtu.be/Mi4EF9K87aM?t=639
