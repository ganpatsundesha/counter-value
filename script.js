const value = document.querySelector(".counter-value");
const btns = document.querySelectorAll(".btn");
let count = 0;

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

        if (count > 0) {
            value.style.color = "green"
        }
        else {
            value.style.color = "black"
        }
        value.textContent = count
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
