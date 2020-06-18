$(document).ready(function () {

   $('#home-options3 li' ).click( function(e){
       $('#home-options3 li').removeClass('active')
       $(this).addClass('active')

      
   })

   $('#home-options1 li' ).click( function(e){
    $('#home-options1 li').removeClass('active')
    $(this).addClass('active')
})

$('#home-options2 li' ).click( function(e){
    $('#home-options2 li').removeClass('active')
    $(this).addClass('active')
})

})