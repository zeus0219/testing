window.addEventListener('load', async function() {
    const _carousel = await fetch("/_public/carousel.json");
    const _computerEffect = await fetch('/_public/computer-effect.json');
    const carousel =  await _carousel.text();
    const computerEffect = await _computerEffect.text();
    var beforeCarousel = document.getElementById("beforeCarousel");
    beforeCarousel.parentElement.insertAdjacentHTML('afterend',carousel);
    $('.carousel').slick({
      slidesToShow: 2,
      dots:true,
      centerMode: true,
    });
    $('.computer-effect').append(computerEffect)    
    window.addEventListener("scroll", (e)=>{
        const helloUI = document.getElementById("style-Becmw");
        const fy = this.scrollY/20;
        helloUI.style.transform = `translate3d(0px, ${-62}px, ${190}px) rotateX(${-56.5+fy}deg) scale3d(${0.825}, ${0.765}, 1)`;
    });
});