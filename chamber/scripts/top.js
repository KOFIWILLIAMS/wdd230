const date = new Date();
const week = date.getDay()
let topMessage = document.querySelector('#topMessage')

if (week === 1 || week === 2) {
    topMessage.style.display = 'flex'

}
else {
    topMessage.style.display = 'none'
}
const closeBtn = document.querySelector('.closeBtn')
closeBtn.addEventListener('click', () => {
    topMessage.remove(topMessage)
})