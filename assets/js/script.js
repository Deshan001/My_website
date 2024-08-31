// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-icons');
    navbar.classList.toggle('active');
}

////////////////////////////////////////

let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currenWordIndex = 0;
let maxWordIndex = words.length -1;
words[currenWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currenWordIndex];
    let nextWord = currenWordIndex === maxWordIndex ? words[0] : words[currenWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in"
        },340 + i * 80);
    });
    currenWordIndex = currenWordIndex === maxWordIndex ? 0 : currenWordIndex + 1;
};

changeText();
setInterval(changeText,3000)
////////////////////////////////////////

// scroll sections
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });

           /* active section for animation onscroll*/
            sec.classList.add('show-animate');
        }else {
            sec.classList.remove('show-animate');
        }

    })
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

   /* remove toggle icon and navbar when click navbar links (scroll)*/
    menuIcon.classList.remove('fa-icons');
    navbar.classList.remove('active');
}

//mix it up myWork section
var mixer = mixitup('.works-gallery');