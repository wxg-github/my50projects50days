const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentIdx = 1
next.addEventListener('click', () => {
    currentIdx++
    if (currentIdx > circles.length) {
        currentIdx = circles.length
    }
    update()
})
prev.addEventListener('click', () => {
    currentIdx--
    if (currentIdx < 1) {
        currentIdx = 1
    }
    update()
})
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentIdx) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if (currentIdx === 1) {
        prev.disabled = true
    } else if (currentIdx === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}