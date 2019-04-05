$(document).ready(
  function(){

       
    $(".todo_add").on('click', function(event){

              var toAdd = $('.todo_text').val();
               
               $('ul').append(
               '<input class="checkbox1" type="checkbox" id="hi">' +
               "<li id='li1'>" + 
               toAdd + 
               '<hr>' +
               '</li>'
               
               );
               
               var elems =$("li");
               for(var i=0; i<elems.length; i++);

                       
              
               
                console.log(elems);
               
                           
                          

              //  let parent = document.querySelector('#li1');

              //  let values = [];
               
              //  for ( let i = 0; i < parent.children.length; i++ ) {
              //    values.push( parent.children[i].innerHTML );
              //  }
               
              //  console.dir( values );
              

               var colors = ['#ef6e69', '#f379a2', '#9170cb', '#5eb3f6', '#67d7e5', '#ffe083'];
                  

               $(elems[elems.length - 1]).css("background-color", function(i,val){
                if($(this).text())
                   return colors[Math.random() * colors.length ^ 0 ];
                else   
                   return val;
                   
                  });
                
                  console.log();
                  
                    
              //           $('.checkbox1').click(function(){
              //   console.log('@@@@@@@@@@@@@@@@@@@@@@@@')
              // $('body input:checkbox').prop('checked', true)
              //   if ($(this).is(':checked')){
             

                //   $('input:checkbox').on('change', function () {
                //     array2 = $('input:checkbox:checked').map(function() {
                //         return $(this).val();
                //     }).get();
                // });
               
                  // var array1 = [];
                  // 
                  // $(this).each(function(e){
                  //  
                  // })
                // } 
              //   var dann = $.map( $(":checkbox:checked"), function(el){
              //     return $(el).val(); 
              //    });

            //   var checker = (function(){
            //   $('input[type=checkbox]').on('change', function(){
            //     if ($(this).is(':checked')) {
            //     let post = 
            //     }
            //     else {
            //       $("li").css({
            //               'background-color': '#ef6e69',
            //           });
            //     }
              // });

            // console.log(this);

            // var ARR = [];
            // $('input[type=checkbox]').on('change', function(){
            //   if ($(this).is(':checked')) { 
            //     ARR.push(1);
            //   } else {
                  
            //       ARR.splice(0, 1);
            //   }
            //   $.each(ARR,function(index,value){

            //     console.log( '; Значение: ' + value);
                
              // });


                          $( '.button-square' ).on( 'click', function() {
                              if(
                            $( 'input[type=checkbox]' ).is(':checked')
                            )
                            {
                            $('input[type=checkbox]:checked').next().css({
                              'background-color': '#ef6e69',
                              });
                          }
                          else(val)
                          });

                          $( '.button-square2' ).on( 'click', function() {
                            if(
                          $( 'input[type=checkbox]' ).is(':checked')
                          )
                          {
                          $('input[type=checkbox]:checked').next().css({
                            'background-color': '#f379a2',
                            });
                        }
                        else(val)
                        });

                        $( '.button-square3' ).on( 'click', function() {
                          if(
                        $( 'input[type=checkbox]' ).is(':checked')
                        )
                        {
                        $('input[type=checkbox]:checked').next().css({
                          'background-color': '#9170cb',
                          });
                        }
                        else(val)
                        });

                          $( '.button-square4' ).on( 'click', function() {
                            if(
                          $( 'input[type=checkbox]' ).is(':checked')
                          )
                          {
                          $('input[type=checkbox]:checked').next().css({
                            'background-color': '#5eb3f6',
                            });
                        }
                        else(val)
                        });

                        $( '.button-square5' ).on( 'click', function() {
                          if(
                        $( 'input[type=checkbox]' ).is(':checked')
                        )
                        {
                        $('input[type=checkbox]:checked').next().css({
                          'background-color': '#67d7e5',
                          });
                          }
                          else(val)
                          });

                          $( '.button-square6' ).on( 'click', function() {
                            if(
                          $( 'input[type=checkbox]' ).is(':checked')
                          )
                          {
                          $('input[type=checkbox]:checked').next().css({
                            'background-color': '#ffe083',
                            });
                        }
                          else(val)
                        });
       
                // $(".button-square").click(
                //   function(){
                //     $("input[type=checkbox]:checked").css({
                //       'background-color': '#ef6e69',
                //   });
                //   }
                // // )
                // $(".button-square2").click(
                //   function(){
                //     $($(":checked")).css({
                //       'background-color': '#f379a2',
                //   });
                //   }
                // )
                //     $(".button-square3").click(
                //       function(){
                //         $("#li1").css({
                //           'background-color': '#9170cb',
                //       });
                //       }
                //     )
                
                //     $(".button-square4").click(
                //       function(){
                //         $("li").css({
                //           'background-color': '#5eb3f6',
                //       });
                //       }
                //     )
                
                //     $(".button-square5").click(
                //       function(){
                //         $("li").css({
                //           'background-color': '#67d7e5',
                //       });
                //       }
                //     )
                
                //     $(".button-square6").click(
                //       function(){
                //         $("li").css({
                //           'background-color': '#ffe083',
                //       });
                //       }
                //     )
                    
              //  ( 
              //   $(".button-square").prop('disabled', true)
              //  )
               
            });
              
                $( "h1" ).html( "hello world" );
                $( ".h1-hide" ).hide('slow');
                console.log();
              
          }); 

         
        
          //});
          
          //  
            // (jQuery.grep([], arr)) {
              // $("li").css({
                // 'background-color': '#ef6e69',
            // });
            // }
            // $("li").on('click', function(){

            //   var txt = $(this).text(); 
            //   alert('Вы нажали на элемент с текстом - «' + txt + '»');
            // });
          
          // });
              // var arr = [];
              // $('input[type=checkbox]').on('change', function(){
              //   if ($(this).is(':checked')) { 
              //     arr.push($());
              //   } else {
              //     let idx = arr.indexOf($(this).html('name'));
              //     arr.splice(idx, 1);
              //   }
                
              //   console.log(arr.join(', '));
              //  var program = [];
               
              //  function scancheckboxes() {
              //      program = [];
               
              //      $('input:checkbox:checked').each(function () {
              //          program.push($(this).val());
              //      });
              //      if (program ==["on"]){
              //        $("li").css({
              //          'background-color': '#ef6e69',
              //      });
              //      }
              //    }
              //    console.log(dann);
              //    console.log(program);
              
        
          //      function handler1 (
                 
          //      );
              
          //      if ($('body input:checkbox').is(':checked')){
          //       $("li").css({
          //         'background-color': '#ef6e69',
          //     });
          //     }
      
          //      console.log();
              
          //});
           
          
                
     
        /*  
            
            if ([val="on"]) {
                alert("kik");
              }

        var a= $('input:checkbox:checked').map(function() { return this.value; }).get(); //выбираем все отмеченные checkbox
              var out=[]; //выходной массив
 
              for (var x=0; x<a.length;x++){ //перебераем все объекты
              out.push(a[x].value); //добавляем значения в выходной массив
               }

         if (out="on") {
                  
               

               }
            


               var checked = [Array];
               $('input:checkbox:checked').each(function() {
               checked.push($(this).val());
              });
              console.log(checked); */
          
              


/*var = $("checkbox").prop("checked"), function(){
            if ($("input:checkbox:checked")) {
            alert("ok");}
            else{
            alert("not yet");
            }

  $('#btn-on').click(function(){
      $('body input:checkbox').prop('checked', true);
    });
    $('#btn-off').click(function(){
      $('body input:checkbox').prop('checked', false);
    });

color: #ef6e69 $(".checkbox").prop("checked") 
   $('.todo_text').keyup(function(){
            {
              $('.todo_add').click();
            }         
        });

$( init );

  
            

function init() {

  $('#myButton').bind( 'click', sayHello );

}

function sayHello() {

  alert( "Всем - привет!" );
}
*/