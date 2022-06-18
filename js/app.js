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

// 
let filterBtns = document.querySelectorAll('.filter-btn');
let filterCards = document.querySelectorAll('.filter-cards .card');

filterBtns.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        filterBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        filterBtns[i].classList.add('active')
        let dataSet = btn.getAttribute('data-set');
        showCategory(dataSet)
    })
})
function showCategory(dataSet){
    filterCards.forEach((card)=>{
        card.classList.add('all')
        if(card.classList.contains(dataSet)){
            card.classList.remove('hide')
            card.classList.add('show')
        }else{
            card.classList.add('hide')
            card.classList.remove('show')
        }
    })
}