$(document).ready(function(){
    // clicking button with class "category-button"
    $(".category-button").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        
        // show all items
        if(filterValue == "all")
        {
            $(".all").show("500");
        }
        else
        {   
            // hide all items
            $(".all").not('.'+filterValue).hide("500");
            // and then, show only items with selected data-filter value
            $(".all").filter('.'+filterValue).show("500");
        }
    });


    baguetteBox.run('.tz-gallery');


});

