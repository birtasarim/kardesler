
var genislik = $(window).width();
if (genislik >= 1200) {

    $(document).ready(function () {
        $(".down_btn a").click(function () {
            $("html, body").animate({ scrollTop: 400 }, 800);
            return false;
        });
    });

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $(".down_btn, .down-btn").css("display", "none");
        }
        else {
            $(".down_btn, .down-btn").css("display", "block");
        }

        if (scroll >= 1) {

            $(".header .top_fix ul").css("background-color", "#003399");
            $(".header .top_fix ul li.border-left").css("border-color", "#003399");
            $(".header h1.logo, .header h1.logo img").css("height", "60px");
            $(".header h1.logo").css("margin", "10px");
            $(".header h1.logo").css("background-image", "url(/images/logo.png)");
            $(".header .menu ul li a").css("padding", "30px 8px 30px 8px");
            $(".header .menu ul li a").css("color", "#003399");
            $(".header .menu ul li a:hover").css("color", "#fff");
            $(".header .upper").css("position", "fixed");
            $(".header .upper").css("width", "100%");
            $(".header .upper").css("background-color", "#fff");
            $(".header .upper").css("border-bottom", "2px solid #ccc");
            $(".header .pattern").css("height", "492px");

        }
        else {
            $(".header .top_fix ul").css("background-color", "transparent");
            $(".header .top_fix ul li.border-left").css("border-color", "#fff");
            $(".header h1.logo, .header h1.logo img").css("height", "96px");
            $(".header h1.logo").css("margin-top", "20px");
            $(".header h1.logo").css("margin-bottom", "10px");
            $(".header h1.logo").css("background-image", "url(/images/logo2.png)");
            $(".header .menu ul li a").css("padding", "60px 8px 30px 8px");
            $(".header .menu ul li a").css("color", "#fff");
            $(".header .menu ul li a:hover").css("color", "#0a9b8e");
            $(".header .upper").css("position", "relative");
            $(".header .upper").css("background-color", "transparent");
            $(".header .upper").css("width", "100%");
            $(".header .upper").css("border-bottom", "0px solid #ccc");
            $(".header .pattern").css("height", "653px");
        }
    });
}
else {

    $(document).ready(function () {
        $(".down_btn a").click(function () {
            $("html, body").animate({ scrollTop: 600 }, 800);
            return false;
        });
    });

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $(".down_btn, .down-btn").css("display", "none");
        }
        else {
            $(".down_btn, .down-btn").css("display", "block");
        }
    })
}