
window.addEventListener('load', async function() {
  // if(document.querySelector(".computer-effect")){
  //   var div = "<div id ='__next_computer'></div>"
  //   $(".computer-effect").html(div);
  // }
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
    setTimeout(() => {
      $(".computer-effect").append(ddd);
      $("#__next_computer").show();
      // if(this.window.ddd){
      //   this.window?.ddd?.className =  "sdf"
      // }
    }, 1000);

  //   var iframe = document.createElement("iframe");
  //   iframe.id = 'computer-iframe';

  //   // Get the document object of the iframe
  //   iframe.onload = function() {
  //     // Get the document object of the iframe
  //       var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    
  //       // Set the HTML content of the iframe document
  //       iframeDocument.open();
  //       iframeDocument.write(computerEffect);
  //       iframeDocument.close();
  //   };

// Append the iframe to the element with the class name "computer-effect"
  // $('.computer-effect').append(computerEffect);


    // window.addEventListener("scroll", A),
    // window.addEventListener("resize", A);
    // const d_oJ=(e)=> {
    //   let t = 0;
    //   for (; e; ) (t += e.offsetTop), (e = e.offsetParent);
    //   return t;
    // }
    // let d_uZ = (e, t, r) => (e < t ? t : e > r ? r : e);
    // function A(){
    //   let A = $("div[data-component=sticky]")[0];
    //   if (A) {
    //     let t = window.pageYOffset || window.scrollY,
    //       e = d_oJ(A),
    //       i = A.getBoundingClientRect().height,
    //       n = Math.max(
    //         document.documentElement.clientHeight,
    //         window.innerHeight || 0
    //       ),
    //       a = d_uZ((t - e) / (i - n) || 0, 0, 1);
    //     requestAnimationFrame(() => A_result(Number(a.toPrecision(2))));
    //   }
    // }
    // function A_result(value){
    //   console.log(value,'444444444');
    // }

});