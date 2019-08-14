$(function(){
    /************************ border of input**********************************/
    
    /**** when mousenter **/
    $("input").on("mouseenter",function(){
        
        $(this).css({
           border:"2px solid #a572b0" 
        });
    });
      /*** when mouse leave ********/
    $("input").on("mouseleave",function(){
        
        $(this).css({
           border:"1px solid #CCC" 
        });
    });
    
/***************************** finish the file *************/
    


});
