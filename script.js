
const accordion = document.querySelectorAll('#accord')

accordion.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active')
  })
})