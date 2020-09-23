// Click Function
$("#clicker").click(function() {
    alert("This button has been clicked");
})

// Show, Hide, and Toggle Functions
$("#show").click(function(){
    $("#visibility p").show()
})
$("#hide").click(function(){
    $("#visibility p").hide()
})
$("#show-toggle").click(function(){
    $("#visibility p").toggle()
})

// Slide Functions
$("#up").click(function(){
    $("#slider p").slideUp();
})
$("#down").click(function(){
    $("#slider p").slideDown();
})
$("#slide-toggle").click(function(){
    $("#slider p").slideToggle();
})

// Fade Functions
$("#in").click(function(){
    $("#fader p").fadeIn()
})
$("#out").click(function(){
    $("#fader p").fadeOut()
})

//Before & After Functions
$("#before").click(function(){
    $("#before-after p").before("<h4>Before</h4>")
})
$("#after").click(function(){
    $("#before-after p").after("<h4>After</h4>")
})


// Append & Prepend Functions
$("#append").click(function(){
    $("#pend p").append("<p>Appended Text</p>")
})
$("#prepend").click(function(){
    $("#pend p").prepend("<p>Prepended text</p>")
})

// HTML Function
$("#changed").click(function(){
    $("#html p").html("<h3>Changed using jQuery,</h3>")
})

//Atribute Function
let attributes = $("#attr").attr("class")
$("#attr div").text(attributes)

// Value Function
$("#val input").keydown(function(){
    let value = $(this).val();
    $("#val p").text(value)
})

// Text Function
$("#text-button").click(function(){
    $("#text p").text("After")
})