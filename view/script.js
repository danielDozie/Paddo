//Get the elements we need to work with
const promptBox = document.querySelector("#promptBox");
const button = document.querySelector("#submitButton");


//Change the button state when an input is detected. Either by copy/paste or typing.
promptBox.addEventListener("keyup", () => {
    if (promptBox.value !== "") {
        button.removeAttribute("disabled")
    } else {
        button.setAttribute("disabled", "")
    }
})

