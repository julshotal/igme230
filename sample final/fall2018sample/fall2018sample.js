/* Don't use <script> tags in a linked js file! */
$(".menuitem").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});
//this makes whatever was just clciked your object

let initSelect = "content1.txt";
$("#choose-content").val(initSelect);
$("article").load(initSelect);

$("#choose-content").change(function() {
    initSelect = $(this).val();
    $("article").load(initSelect); 
});