import './style.css'

const words = window.document.getElementsByClassName('line');

const leterize = element => {
  const text = element.innerText.split("");
  element.innerText = "";
console.log(text);
  text.forEach(letter => {
    const span = document.createElement("span");

    span.className = "letter"

    span.innerText = letter;

    element.appendChild(span);
  });
}
console.log(words);
Array.from(words).forEach(word => {
  leterize(word);
});

