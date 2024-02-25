let main = document.querySelectorAll("main");
let main2 = document.querySelector("main");
let divs = main[0].children
// console.log();
let footer = document.querySelector('footer')
let body = document.querySelector('body')
let change = document.querySelector(".toggler");
let mode = document.querySelector("#mode");
let text = document.querySelectorAll(".dark")
let slides = document.querySelector('.carousel-slides')
let card = document.querySelectorAll(".swiper-card")
// 040D12

let count = true;

let arr = []
for(el in divs){
  arr.push(divs[el]);
  
}

arr = arr.slice(0,7)
console.log(arr)


let sliderChange = (color) =>{
  card.forEach(element =>{
    element.style.backgroundColor = color;
  })
}



let colorChange = (color) => {
text.forEach(element => {
  element.style.color = color;
});
}

let darkMode = (color) =>{
  arr.forEach(element =>{
    element.style.backgroundColor = color;
  })
}
















change.addEventListener("click", () => {
  if (count) {
    change.classList.replace("fa-solid", "fa-regular");
    mode.innerText = "LITE";
    main2.style.backgroundColor = "#040D12";
    darkMode("#040D12")
    footer.style.backgroundColor = "#040D12";
    body.style.backgroundColor = "#040D12"
    colorChange("whitesmoke")
    sliderChange("#040D12")
    slides.style.backgroundColor = "#040D12"

    

    count = false;
    
  } else {
    change.classList.replace("fa-regular", "fa-solid");
    mode.innerText = "DARK";
    
    main2.style.backgroundColor = "whitesmoke"
    darkMode("#eef0f1")
    body.style.backgroundColor = "#eef0f1"
    colorChange("#2c3740")
    sliderChange("#eef0f1")
    count = true;

  }
});

