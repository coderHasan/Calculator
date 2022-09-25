
const btn = document.querySelectorAll('.button')
const input = document.querySelector('.input')
const active = document.querySelector('.ac')

let string = ''

btn.forEach((e) => {
    e.addEventListener("click", (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string)
            input.value = string
        }else if (e.target.innerHTML == "AC") {
            string = ''
            input.value = string
        } else if (e.target.innerHTML == `<i class="fa-solid fa-arrow-left-long"></i>`) {
            string = string.slice(0, -1)
            input.value = string
        }else{
            string +=  e.target.innerHTML
            input.value = string
        }
    })
})

