let title = document.querySelector("h3")
let first_color = document.querySelector('.color1')
let second_color = document.querySelector('.color2')
let body = document.querySelector('body')

const setColor = () => {
    body.style.background = "linear-gradient(to right, " + first_color.value + ", " + second_color.value + ")"

    title.textContent = body.style.background
}

first_color.addEventListener("input", setColor)
second_color.addEventListener("input", setColor)