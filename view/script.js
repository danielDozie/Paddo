//Get the elements we need to work with
const promptBox = document.querySelector("#promptBox");
const button = document.querySelector("#submitButton");
const container = document.querySelector(".container");
const answerContainer = document.querySelector(".answer-container");
const answer = document.querySelector("#answer");
const returnButton = document.querySelector("#returnButton");
const copyButton = document.querySelector("#copyButton");
const tooltip = document.querySelector("#myTooltip");


const dummyText = `Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by humans or by other animals. Example tasks in which this is done include speech recognition, computer vision, translation between (natural) languages, as well as other mappings of inputs. 

Paddo is going to be powered by ChatGPT3 for streamlined contents.`;
        

//Change the button state when an input is detected. Either by copy/paste or typing.
promptBox.addEventListener("keyup", () => {
    if (promptBox.value !== "" && promptBox.value.length > 2) {
        button.removeAttribute("disabled")
    } else {
        button.setAttribute("disabled", "")
    }
});

//button click event
button.addEventListener("click", () => {
    button.innerHTML = `<i style="color:#fff;" class="fa-sharp fa-regular fa-face-smile fa-beat-fade"></i>`;
    setTimeout(() => {
        promptBox.value = "";
        button.innerHTML = "Ask me";
        container.style.display = "none";
        answer.innerHTML = dummyText;
        answerContainer.style.display = "flex";
    }, 500);
})

returnButton.addEventListener("click", () => {
    answerContainer.style.display = "none";
    container.style.display = "flex";
    button.setAttribute("disabled", "")
})

copyButton.addEventListener("click", () => {
    tooltip.innerHTML = "Copied";
    navigator.clipboard.writeText(answer.value);
})