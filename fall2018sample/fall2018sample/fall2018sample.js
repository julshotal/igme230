/* Don't use <script> tags in a linked js file! */
$(".menuitem").click(function () {
    $(".submenu").slideToggle("slow");
});

let initSelect = "content1.txt";
$("#choose-content").val(initSelect);
$("article").load(initSelect);

$("#choose-content").change(function() {
    initSelect = $(this).val();
    $("article").load(initSelect); 
});