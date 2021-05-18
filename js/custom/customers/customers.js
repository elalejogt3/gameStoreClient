$( document ).ready(function() {
  
        // ..
        getCustomersFromService();
        // ..
  
   
});
function getCustomersFromService(){
    $.get( "https://localhost:44342/api/customer", function( data ) {
        console.log( typeof data ); // string
        console.log( data ); // HTML content of the jQuery.ajax page
      });
}