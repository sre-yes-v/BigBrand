const html=document.documentElement;
const canvas=document.querySelector('.airpods-scrolling');
const context=canvas.getContext('2d');

const currentFrame= index => (
        `assets/seq2/${index.toString().padStart(4, '0')}.png`
        
    )



    



const frameCount = 250;
canvas.height=1920;
canvas.width=1920;

const img=new Image();
img.src=currentFrame(0);
img.onload= function(){
    context.drawImage(img,0,0);
}

const updateImage=index =>{
    img.src=currentFrame(index);
    console.log(img);
    context.drawImage(img,0,0)
}

window.addEventListener('scroll',()=> {
    const scrollTop  = html.scrollTop;
    const maxScrollTop=html.scrollHeight-window.innerHeight;
    const scrollFraction=scrollTop/maxScrollTop;
    const frameIndex=Math.min(frameCount-1,Math.floor(scrollFraction*frameCount));


    requestAnimationFrame( () => updateImage(frameIndex + 1))
})

const preloadImage = () =>{
    for(let i=1;i<=frameCount;i++){
        const img = new Image();
        img.src=currentFrame(i);
    }
}

preloadImage();

























var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });






  var swiper = new Swiper(".blog-slider", {
    loop: true,
    slidesPerView: "1",
    speed: 500,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false,
    },
    mousewheel: {
        invert: false,
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            effect: "slide",
            centeredSlides: false,
        },
        768: {
            slidesPerView: "2",
            centeredSlides: true,
        },
        1200: {
            slidesPerView: "3",
            centeredSlides: true,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction"
    },

});



let dropDown = document.querySelector('.drop-down');

document.getElementById('shopping-link').addEventListener('mouseover', function () {
  dropDown.style.transition = 'all 0.8s ease-in-out';
  dropDown.style.opacity='1';
  dropDown.style.visibility='visible';
  document.getElementById('drop-nav').style.transition = 'all 1s ease-in-out';
  document.getElementById('drop-nav').style.opacity='1';
  dropDown.style.height='310px';
});



html.addEventListener('mouseout', function () {
    dropDown.style.transition = 'all 0.8s ease-in-out';
    document.getElementById('drop-nav').style.transition = 'all 1s ease-in-out';
    document.getElementById('drop-nav').style.opacity='0';
    dropDown.style.visibility='hidden';
    dropDown.style.opacity = '0';
    dropDown.style.height='0px';
  });



// listen for the transitionend event to reset the height and opacity properties
dropDown.addEventListener('transitionend', function () {
  if (dropDown.style.opacity === '0' && dropDown.style.height === '0') {
    dropDown.style.height = null;
    dropDown.style.opacity = null;
  }
});
