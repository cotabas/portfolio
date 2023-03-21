import './style.css'

const words = window.document.getElementsByClassName('line');
const centerText = window.document.getElementById("center_text");

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
    const span = document.createElement("span");
    span.className = "looseLetter";
    span.innerText = letter.innerText;

    var rect = letter.getBoundingClientRect();
    span.style = `top: ${rect.top}px; left: ${rect.left}px;`;

    centerText.appendChild(span);

    span.animate(
      [
        { transform: "translate(-200%, -200%)" },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );

    var spanRect = span.getBoundingClientRect();
    span.style = `top: ${spanRect.top}px; left: ${spanRect.left}px;`;

    span.animate(
      [
        { transform: "translate(-200%, 200%)" },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );

    setTimeout(() => {
      span.remove();
    }, "1800");
  });

});
