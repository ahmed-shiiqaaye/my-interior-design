let SliderContainer = document.querySelectorAll('.sliders');
let nextbtn = document.querySelectorAll('.nextBtn');
let prevBtn = document.querySelectorAll('.prevBtn');
let wrapperCard =document.querySelector('.wrappers')

SliderContainer.forEach((conttainer,i)=>{
    let conttainerWith = conttainer.getBoundingClientRect().width;
    nextbtn[i].addEventListener('click',()=>{
        conttainer.scrollLeft += conttainerWith
    })
    prevBtn[i].addEventListener('click',()=>{
        conttainer.scrollLeft -= conttainerWith
    })
})

// TabContents
let tabContents = document.querySelectorAll('.tab-content');
let tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        tabButtons.forEach((btnn,i)=>{
               btnn.classList.remove('active')   
        })
        tabContents.forEach((content,i)=>{
               content.classList.remove('active')   
        })
        
        tabButtons[i].classList.add('active')
        tabContents[i].classList.add('active')
    })
})