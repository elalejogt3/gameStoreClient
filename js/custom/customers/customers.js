var baseURL ="https://gameapi20210518195935.azurewebsites.net/";
$( document ).ready(function() {
  
        // ..
        getCustomersFromService();
        // ..
  
   
});
function getCustomersFromService(){
    $.get( baseURL+"api/customer", function( data ) {
        console.log( typeof data ); // string
        console.log( data ); // HTML content of the jQuery.ajax page
      });
}