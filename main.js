import './style.css'

const root = document.documentElement;
const words = window.document.getElementsByClassName('line');
const centerText = window.document.getElementById("center_text");
const curtainToggles = window.document.getElementsByClassName("curtainToggle");
var rlToggle = 0;

// give each letter it's own span tag
//
const leterize = element => {
  const text = element.innerText.split("");
  element.innerText = "";

  text.forEach(letter => {
    const span = document.createElement("span");
    span.className = "letter"
    span.innerText = letter;

    if (span.innerText == ".") {
      span.classList.add("orange");
    }
    element.appendChild(span);
  });
}
Array.from(words).forEach(word => {
  leterize(word);
});

// logic for the letter pop off effect
//
const letters = window.document.getElementsByClassName("letter");
Array.from(letters).forEach(letter => {
  letter.addEventListener("mouseover", (event) => { 
    if (document.body.dataset.curtain == "false") { 
      const span = document.createElement("span");
      span.className = "looseLetter";
      span.innerText = letter.innerText;

      if (span.innerText == ".") {
        span.classList.add("orange");
      }
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

// logic for showing the navs
//
const workNav = window.document.getElementById("navWork");
const aboutNav = window.document.getElementById("navAbout");
const blogNav = window.document.getElementById("navBlog");

Array.from(curtainToggles).forEach(toggle => {
  toggle.addEventListener("click", (event) => {
    resetWork();
    document.body.dataset.content = "false";
    document.body.dataset.curtain = document.body.dataset.curtain == "true" ? "false" : "true";
    if (toggle.id == "workButt") {
      workNav.classList.add("visible");
      aboutNav.classList.remove("visible");
      blogNav.classList.remove("visible");
    }
    if (toggle.id == "aboutButt") {
      aboutNav.classList.add("visible");
      workNav.classList.remove("visible");
      blogNav.classList.remove("visible");
    }
    if (toggle.id == "blogButt") {
      blogNav.classList.add("visible");
      workNav.classList.remove("visible");
      aboutNav.classList.remove("visible");
    }
  });
});

// show work
// 
const workLinks = window.document.getElementsByClassName("nav-link");
const workParas = window.document.getElementsByClassName("workPara");
const workImages = window.document.getElementsByClassName("workImage");

Array.from(workLinks).forEach(work => {

  work.addEventListener("click", (event) => {
    document.body.dataset.content = "true";
    Array.from(workLinks).forEach(link => {
      if (link.id == work.id) {
        work.classList.remove("hide");
        work.classList.remove("reset");
        // needs to be after removing hide
        var rect = work.getBoundingClientRect();
        root.style.setProperty("--posOffset", rect.left + "px"); 
        work.classList.add("showWork");
      } else {
        link.classList.add("hide");
        link.classList.remove("showWork");
      }
    });
    Array.from(workImages).forEach(image => {
      if (image.id == `${work.id}Img`) {
        image.classList.add("imageScale");
      } else {
        image.classList.remove("imageScale");
      }

    });
    Array.from(workParas).forEach(para => {
      if (para.id == `${work.id}Para`) {
        para.classList.add("showPara");
      } else {
        para.classList.remove("showPara");
      }
    });
  });
});

const resetWork = () => {
    Array.from(workLinks).forEach(work => {
        work.classList.remove("hide");
        work.classList.add("reset");
        work.classList.remove("showWork");
    });
    Array.from(workParas).forEach(para => {
        para.classList.remove("showPara");
    });
    Array.from(workImages).forEach(image => {
      image.classList.remove("imageScale");
    });
}

const buttLabels = window.document.getElementsByClassName("buttLabel");

document.onmousemove = (event) => {
  if (event.clientY > window.screen.availHeight - (window.screen.availHeight / 3) ) {
    Array.from(buttLabels).forEach(label => {
      label.classList.add("open");
    });
  } else {
    Array.from(buttLabels).forEach(label => {
      label.classList.remove("open");
    });
  }
}
