let date = document.querySelector(".date")

let time = document.querySelector(".time")

setInterval(() => {
    let currentTime = new Date()
    date.textContent = currentTime.toLocaleDateString()
    time.textContent = currentTime.toLocaleTimeString()
}, 1000);