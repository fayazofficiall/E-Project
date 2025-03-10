$(document).ready(function () {
    $("#checkbox").click(function () {
        $("#sidebar").toggleClass("open");  // Class toggle karega
    });
});



$(document).ready(function () {

    $("#menuBtn").click(function () {
        $("#sidebar").toggleClass("open");
    });

    $(".dropBtn").click(function (e) {
        e.preventDefault();
        $(this).next(".sdropdown-menu").slideToggle(); 
    });
});

