let circles = document.querySelectorAll(".circle");
let line = document.querySelector(".line");
let buttons = document.querySelectorAll("button");

let step = 1;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        step = (e.target.id == "next") ? ++step : --step;

        circles.forEach((circle, index) => {
            (index < step) ? circle.classList.add("active") : circle.classList.remove("active");
        })

        line.style.width = `${((step - 1) / (circles.length - 1)) * 100}%`

        if (step == circles.length)
            buttons[1].disabled = true;
        else if (step == 1)
            buttons[0].disabled = true;
        else
            buttons.forEach((button) => (button.disabled = false))
    })
});


