const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClassACtive()
        panel.classList.add('active')
    })
})

function removeClassACtive() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}