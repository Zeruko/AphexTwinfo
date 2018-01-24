(function($){
    $(document).ready(function(){
        
        //Removes active from the previously clicked parent <li> of <a> in the navbar and adds the active
        //class to the parent <li> of the clicked <a>.
        $(".nav a").on("click", function(){
            $("nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });
        
        //Add/Remove the sidebar by clicking button
        $(".buttonContainer").on("click", function(){
            $("#sideNav").toggleClass("sideNavWidth");
            $(".opacityContainerDiv").toggleClass("opacityForContainerDiv");
        });
        
        
        //Remove sidebar if the window is resized
        $(window).resize(function(){
            $("#sideNav").removeClass("sideNavWidth");
            $(".opacityContainerDiv").removeClass("opacityForContainerDiv");
        });
        
        //Swap positions of two divs on window resize
        $(window).resize(function(){
            if($('body').innerWidth() <= 445){
                $("#multipleBoxesHeadliner").insertAfter("#multipleBoxesHeadlinerPic");   
            }
            else if($('body').innerWidth() >= 445){
                $("#multipleBoxesHeadlinerPic").insertAfter("#multipleBoxesHeadliner");
            }
        });
        
        //Swap positions of two divs on window load if it's above or below a certain width
            if($('body').innerWidth() <= 480){
                $("#multipleBoxesHeadliner").insertAfter("#multipleBoxesHeadlinerPic");   
            }
            else if($('body').innerWidth() >= 480){
                $("#multipleBoxesHeadlinerPic").insertAfter("#multipleBoxesHeadliner");
            }
//Purple Section Start
        //Make background of div parent purple and the color of the immediate child p white
            $(".purple").hover(function(){
                $(this).toggleClass("purpleBackgroundClass");
                $(this).find(">p").toggleClass("whiteWritingClass");
            });
        //Make background of parent purple and the font color of p and span descendants white
            $(".purpleNonDirect").hover(function(){
                $(this).toggleClass("purpleBackgroundClass");
                $(this).find("p,span").toggleClass("whiteWritingClass");
            });
        //Make background of direct div's and p's purple and make any p descendants font white
            $(".purpleBoxes").hover(function(){
                $(this).find(">div,>p").toggleClass("purpleBackgroundClass");
                $(this).find("p").toggleClass("whiteWritingClass");
            });
        //Purple effect for Headliner
        $("#multipleBoxesHeadliner").hover(function(){
            $(this).toggleClass("purpleBackgroundClass");
            $(this).find(">div, >p").toggleClass("purpleBackgroundClass");
            $(this).find("p").toggleClass("whiteWritingClass");
        });
        //Purple effect for HeadlinerPart
        $("#multipleBoxesHeadlinerPic").hover(function(){
            $("#multipleBoxesHeadliner").find(">div, >p").toggleClass("purpleBackgroundClass");
            $("#multipleBoxesHeadliner").find("p").toggleClass("whiteWritingClass");
        });
//Purple Section End
        
        //Display navbar on hover
        $(".navbarBio").hover(function(){
            $(this).css("top", "0");
        }, function(){
            $(this).css("top", "-6vh");
        });
        
        //Display and hide mobile nav menu + make navbar fixed/unfixed & unbind/bind hover event
        $("#menu").click(function(){
            if($(".mobileNavbar").is(":hidden")){
                $(".mobileNavbar").css("display", "block");
                $(".navbarBio").css({"top": "0", "position": "fixed"});
                $(".navbarBio").unbind("mouseenter mouseleave");
            }
            else{
                $(".mobileNavbar").css("display", "none");
                $(".navbarBio").css({"top": "-6vh", "position": "absolute"});
                $(".navbarBio").mouseenter(function(){
                    $(this).css("top", "0");
                }).mouseleave(function(){
                    $(this).css("top", "-6vh");
                });
            }
        });
        
        //Remove mobileNavbar if its showing on window resize and also rebind hover events to navbarBio
        $(window).resize(function(){
            if($(".mobileNavbar").is(":visible")){
               $(".mobileNavbar").css("display", "none");
                $(".navbarBio").css({"top": "-6vh", "position": "absolute"});
                $(".navbarBio").mouseenter(function(){
                    $(this).css("top", "0");
                }).mouseleave(function(){
                    $(this).css("top", "-6vh");
                });
            }
        });
        
    });
    
})(jQuery);