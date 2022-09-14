const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => button.addEventListener('click', (e) => {
    const xInside = e.clientX - e.target.offsetLeft
    const yInside = e.clientY - e.target.offsetTop
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
    e.target.appendChild(circle)
    setTimeout(() => circle.remove(), 500)
}))