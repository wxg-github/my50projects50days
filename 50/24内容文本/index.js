const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1000)

function getData() {
  header.innerHTML = '<img src="https://picsum.photos/400/400" alt="模拟图片">'
  title.innerHTML = '这是一个标题'
  excerpt.innerHTML = '这是标题下的内容'
  profile_img.innerHTML = '<img src="https://picsum.photos/100/100" alt="头像">'
  name.innerHTML = '微笑_g'
  date.innerHTML = '2022-9-4'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}