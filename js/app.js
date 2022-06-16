let SliderContainer = document.querySelectorAll('.sliders');
let nextbtn = document.querySelectorAll('.nextBtn');
let prevBtn = document.querySelectorAll('.prevBtn');
let wrapperCard =document.querySelector('.wrappers')

let wrapperCardw = wrapperCard.getBoundingClientRect().width;
console.log(wrapperCardw);

SliderContainer.forEach((conttainer,i,wrapperCard)=>{
    let conttainerWith = conttainer.getBoundingClientRect().width;
    nextbtn[i].addEventListener('click',()=>{
        conttainer.scrollLeft += wrapperCardw
    })
    prevBtn[i].addEventListener('click',()=>{
        conttainer.scrollLeft -= wrapperCardw
    })
})