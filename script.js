
window.addEventListener('load', async function() {
    const _computerEffect = await fetch('/_public/computer-effect.json');
    const computerEffect = await _computerEffect.text();
    $('.carousel').slick({
      slidesToShow: 2,
      dots:true,
      centerMode: true,
    });
    setTimeout(() => {
      $(".computer-effect").append(ddd);
      $("#__next").show();
      // if(this.window.ddd){
      //   this.window?.ddd?.className =  "sdf"
      // }
    }, 700);


});