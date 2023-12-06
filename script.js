const value = document.querySelector(".counter-value");
const btns = document.querySelectorAll(".btn");
let count = localStorage.getItem("value") ? JSON.parse(localStorage.getItem("value")) : 0;

const handelColrChnage = () => {
    if (count > 0) {
        value.style.color = "green"
    }
    else {
        value.style.color = "black"
    }
}

window.onload = () => {
    value.textContent = count;
    handelColrChnage()
};

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        let classname = e.currentTarget.classList;
        if (classname.contains("decrease")) {
            if (value.innerHTML == 0) {
                count = 0;
                alert("Now you can't decrease the Value")
            }
            else {
                count--;
            }
        }
        else if (classname.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }

        // Color change on Positive, Negative and 0 Value
        handelColrChnage()

        localStorage.setItem("value", count)
        value.textContent = localStorage.getItem("value");
    });
});


// btns.forEach((btn) => {
//     btn.addEventListener("click", function (e) {
//         let classname = e.currentTarget.classList;
//         if (classname.contains("decrease")) {
//             count--;
//         }
//         else if (classname.contains("increase")) {
//             count++;
//         }
//         else {
//             count = 0;
//         }

//         // Color change on Positive, Negative and 0 Value

//         if (count > 0) {
//             value.style.color = "green"
//         }
//         else if (count < 0) {
//             value.style.color = "red"
//         }
//         else {
//             value.style.color = "black"
//         }
//         value.textContent = count
//     });
// });
