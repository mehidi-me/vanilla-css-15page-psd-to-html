$(document).ready(function(){
    $("a").on("click", function(n) {
        if ("" !== this.hash) {
            n.preventDefault();
            var o = this.hash;
            $("html, body").animate({
                scrollTop: $(o).offset().top
            }, 800, function() {
                window.location.hash = o
            })
        }
    })


    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
           $('.sacound_nav').addClass('sticy');
        } else {
           $('.sacound_nav').removeClass('sticy');
        }
    });
    
    $(".toggle_nav").click(function(){
        $(".toggle_nav").toggleClass("active")
    })
    $("#solutions").click(function(){
        $('.sub_manu').toggleClass("sub_manu_active")
    })
    $("#pages").click(function(){
        $('.pages_sub_manu').toggleClass("pages_sub_manu_active")
    })
    $("#blog").click(function(){
        $('.blog_sub_manu').toggleClass("blog_sub_manu_active")
    })
    $(".main_nav .solutions").click(function(){
        $(this).toggleClass("manu_active")
    })
    $(".toggle_nav").click(function(){
        $(".main_nav").toggleClass("open_nav")
    })
    $(".main_nav .solutions").click(function(){
        $(".main_nav").toggleClass("auto")
    })
    $(".toggle_nav").click(function(){
        $('.sub_manu').removeClass("sub_manu_active")
    })
    $(".toggle_nav").click(function(){
        $('.blog_sub_manu').removeClass("blog_sub_manu_active")
    })
    $(".toggle_nav").click(function(){
        $('.pages_sub_manu').removeClass("pages_sub_manu_active")
    })
    $(".toggle_nav").click(function(){
        $('.main_nav .solutions').removeClass("manu_active")
    })
    $(".toggle_nav").click(function(){
        $(".main_nav").removeClass("auto")
    })



    $("#solutions").click(function(){
        $('.pages_sub_manu').removeClass("pages_sub_manu_active")
    })
    $("#solutions").click(function(){
        $('.blog_sub_manu').removeClass("blog_sub_manu_active")
    })
    $("#pages").click(function(){
        $('.sub_manu').removeClass("sub_manu_active")
    })
    $("#pages").click(function(){
        $('.blog_sub_manu').removeClass("blog_sub_manu_active")
    })
    $("#blog").click(function(){
        $('.sub_manu').removeClass("sub_manu_active")
    })
    $("#blog").click(function(){
        $('.pages_sub_manu').removeClass("pages_sub_manu_active")
    })





    $("#solutions").click(function(){
        $('.main_nav .solutions').removeClass("manu_active")
    })
    $("#pages").click(function(){
        $('.main_nav .solutions').removeClass("manu_active")
    })
    $("#blog").click(function(){
        $('.main_nav .solutions').removeClass("manu_active")
    })
    // $(".main_nav li").click(function(){
    //     $(".main_nav").removeClass("open_nav")
    // })
    
 
        $("#owl-demo1").owlCarousel({

            slideSpeed : 300,
            paginationSpeed : 400,
            autoplayHoverPause : true,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:4000,
            items : 1, 
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false
       
        });
        $("#owl-demo").owlCarousel({
       
            nav : true,  // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            autoplayHoverPause : true,
            loop:true,
            responsiveClass:true,
            autoplay:true,
            autoplayTimeout:5000,
            items : 1, 
            itemsDesktop : false,
            itemsDesktopSmall : false,
            itemsTablet: false,
            itemsMobile : false
       
        });
        $(".owl-carousel").owlCarousel();

        $(document).ready(function() {
     
            $(".owl-carousel").owlCarousel();

        });
        var mixer = mixitup(".container");
        
});

// mobile menu

function openNav() {
    document.querySelector("#openNav").style.width = "100%"
}

function closeNav() {
    document.querySelector("#openNav").style.width = "0"
}











let question = document.getElementsByClassName('question');
let answer = document.getElementsByClassName('answer');
let i;

for(i = 0; i < question.length; i++){
    let show = answer[i];
    let ques = question[i];
   question[i].addEventListener("click", () =>{
       show.classList.toggle("show_content");
       ques.classList.toggle("new_style");
   })
}  
  
