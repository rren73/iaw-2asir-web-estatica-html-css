$("#pag1").css("display","block");
$("#pag2").css("display","none");
$("#pag3").css("display","none");
$("#pag4").css("display","none");


$(document).ready(function () {
    $(".navbar-nav a.nav-link").click(function (e) {
        e.preventDefault(); 
        $("#pag1").hide();
        $("#pag2").hide();
        $("#pag3").hide();
        $("#pag4").hide();
        var id = $(this).attr("href");
        $(id).show();
    });
});
