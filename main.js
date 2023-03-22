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
  letter.addEventListener("mouseover", (event) => { letterMove(letter) });

});

function letterMove(letter) {
    const span = document.createElement("span");
    span.className = "looseLetter";
    span.innerText = letter.innerText;

    var rect = letter.getBoundingClientRect();
    span.style = `top: ${rect.top + 50}px; left: ${rect.left}px;`;

    centerText.appendChild(span);

    var letterKeyFrame = new KeyframeEffect(
      span,
      [
        { transform: "translate(-50%, -50%)" },
      ],
      {
        duration: 500,
      }
    );

    var letterAnimation = new Animation(letterKeyFrame, document.timeline);

    letterAnimation.play();


    setTimeout(() => {
      span.remove();
    }, "1800");
}
