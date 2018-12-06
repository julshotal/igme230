$(".mainmenu").click(function () {
    $(this).next(".submenu").slideToggle("slow");
});

let initSelect = "article0.txt";
$("article").load(initSelect);

$(':radio').change(function() {
    initSelect = $(this).val();
    $("article").load(initSelect); 
});

let count = 0;
$('#count').append(count);

$('#clickme').click(function() {
    count = count + 1;
    $('#count').html(count);
});