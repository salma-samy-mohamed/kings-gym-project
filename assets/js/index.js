const images=['photo5868381428079769192',
'photo5868381428079769193',
'photo5868381428079769194',
'photo5868381428079769195',
'photo5868381428079769196',
'photo5868381428079769197',
'photo5868381428079769198',
'photo5868381428079769190',
'photo5868381428079769191']

let nextImage = 0

const bgCover = document.querySelector('#bg-cover');

function getNextImage (){
    if(nextImage >= images.length) nextImage=0
    console.log(nextImage);
    return `assets/images/cover-images/${images[nextImage++]}.jpg`
}

setInterval(()=>{
    setTimeout(()=>{
        bgCover.style.opacity='0'
    },1000)
    setTimeout(()=>{
        bgCover.setAttribute('src',getNextImage())
    },1800)
    setTimeout(()=>{
        bgCover.style.opacity='1'
    },2400)
},3500)

bgCover.setAttribute('src',`assets/images/cover-images/${images[images.length-1]}.jpg`)