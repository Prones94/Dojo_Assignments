$('document').ready(function(){
    $('img').hover(function(){
        let tempPic = $(this).attr("data-alt-src");
        $(this).attr("src", tempPic);
    }, function(){
        let originalPic = $(this).attr("orig-src");
        console.log(originalPic);
        $(this).attr("src", originalPic)
    })
})