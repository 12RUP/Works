const slides =document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('click',function(){
        clearactiveClass()
        slide.classList.add('active')
        
    })
}

function clearactiveClass(){
    slides.forEach(function(slide){
        slide.classList.remove('active')
    })
}

let watch=document.querySelector('.watch')
watch.addEventListener('click',function(){
    window.open('Переходы/ep.html')
})
let watch2=document.querySelector('.watch2')
let watch3=document.querySelector('.watch3')
let watch4=document.querySelector('.watch4')
watch2.addEventListener('click',function(){
    window.open('Переходы/e2p.html')
})
watch3.addEventListener('click',function(){
    window.open('Переходы/ep3.html')
})
watch4.addEventListener('click',function(){
    window.open('Переходы/ep4.html')
})