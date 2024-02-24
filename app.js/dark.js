let main = document.querySelectorAll("main");
let main2 = document.querySelector("main");
let divs = main[0].children;
// console.log(divs)
let zero = document.querySelector(".container")
let one = document.querySelector('.experiences')
let two = document.querySelector('.carousel-slides')
let three = document.querySelector('.gallery')
let four = document.querySelector('.video')
let five = document.querySelector('.about')
let six = document.querySelector('.marquee-container')



let change = document.querySelector(".toggler");
let mode = document.querySelector("#mode");


let text = document.querySelectorAll(".dark")
function colorchange(clr){
    for(let i = 0; i<=text.length; i++){
        console.log(text[i])
        text[i].style.color = `${clr}`
    }
}












let count = true;






change.addEventListener("click", () => {
  if (count) {
    change.classList.replace("fa-solid", "fa-regular");
    mode.innerText = "LITE";
    main2.style.backgroundColor = "#040D12";
    zero.style.backgroundColor = "#0c1920"
    one.style.backgroundColor = "#0c1920";
    two.style.backgroundColor = "#0c1920";
    three.style.backgroundColor = "#0c1920";
    four.style.backgroundColor = "#0c1920";
    five.style.backgroundColor = "#0c1920";
    six.style.backgroundColor = "#0c1920";
   

    

    count = false;
    
  } else {
    change.classList.replace("fa-regular", "fa-solid");
    mode.innerText = "DARK";
    
    main2.style.backgroundColor = "whitesmoke"
    zero.style.backgroundColor = "#eef0f1"
    one.style.backgroundColor = "#eef0f1";
    two.style.backgroundColor = "#eef0f1";
    three.style.backgroundColor = "#eef0f1";
    four.style.backgroundColor = "#eef0f1";
    five.style.backgroundColor = "#eef0f1";
    six.style.backgroundColor = "#0b1a66";
    count = true;
  }
});

