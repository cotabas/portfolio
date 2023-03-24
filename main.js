import './style.css'

const words = window.document.getElementsByClassName('line');
const centerText = window.document.getElementById("center_text");
const curtainToggles = window.document.getElementsByClassName("curtainToggle");
var rlToggle = 0;

const leterize = element => {
  const text = element.innerText.split("");
  element.innerText = "";

  text.forEach(letter => {
    const span = document.createElement("span");
    span.className = "letter"
    span.innerText = letter;

    element.appendChild(span);
  });
}
Array.from(words).forEach(word => {
  leterize(word);
});

const letters = window.document.getElementsByClassName("letter");
Array.from(letters).forEach(letter => {
  letter.addEventListener("mouseover", (event) => { 
    if (document.body.dataset.curtain == "false") { 
      const span = document.createElement("span");
      span.className = "looseLetter";
      span.innerText = letter.innerText;

      var rect = letter.getBoundingClientRect();
      span.style = `top: ${rect.top}px; left: ${rect.left}px;`;

      if (rlToggle == 0) {
        span.classList.add("moveUpLeft");
        span.classList.remove("moveUpLeft");
        span.classList.add("moveDownLeft");
        rlToggle = 1
      }else {
        span.classList.add("moveUpRight");
        span.classList.remove("moveUpRight");
        span.classList.add("moveDownRight");
        rlToggle = 0
      }
      centerText.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, "3000");
    }
  });
});

Array.from(curtainToggles).forEach(toggle => {
  toggle.addEventListener("click", (event) => {
    document.body.dataset.curtain = document.body.dataset.curtain == "true" ? "false" : "true";
  });
});
