$(window).scroll(function(e) {
    // Get the position of the location where the scroller starts.
    var scroller_anchor = $(".scroller_anchor").offset().top;
     
    // Check if the user has scrolled and the current position is after the scroller start location and if its not already fixed at the top 
    if ($(this).scrollTop() >= scroller_anchor && $('#dropdown').css('position') != 'fixed') 
    {    // Change the CSS of the scroller to hilight it and fix it at the top of the screen.
        $('#dropdown').css({
           'background-color': '#FFFFFF';
		   'padding': '16px 20px';
		   'text-decoration': 'none';

        });
    } 
    else if ($(this).scrollTop() < scroller_anchor && $('#dropdown').css('position') != 'relative') 
    {    
        // Change the CSS and put it back to its original position.
        $('#dropdown').css({
           'background-color': '#000000';
		   'padding': '16px 20px';
		   'text-decoration': 'none';
		   

        });
    }
});