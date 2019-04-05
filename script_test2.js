$(document).ready(
    function(){
        $(".todo_add").click(
            function(){
                var toAdd = $('.todo_text').val();
                 $('ul').append(
                 '<input class="checkbox1" type="checkbox" id="chk"> ' +
                 '<li>' + 
                 toAdd + 
                 '<hr>' + 
                 '</li>');
            });
            
  
            $("input").click(function(){
  
              if ($(this).is(':checked')){
                  alert("HI");
              } 
              console.log('alert');
            });
             
        }); 
    