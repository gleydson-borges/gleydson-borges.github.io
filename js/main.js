/**
 * Created by Gleydson Borges on 22/07/2016.
 */
$(function(){
    $('#KCarousel').carousel({
        interval: 7000 //changes the speed
   });

    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 40,
        backDelay: 600,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: 2,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }


});