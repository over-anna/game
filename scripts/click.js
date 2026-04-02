//doc ready shorthand in jQ 
$(()=> {
    
    $("#gamePiece").draggable(
          { axis: "x"},
          {
             stop: ()=> {
               /* class 🐞: position is a method, not a property!
               position.left ==> position().left. 
               duh! 
               */
               // window.alert(`stopped! ${$("#gamePiece").position().left}`)
             
               if($("#gamePiece").position().left < 300){
                 $('#gameResult').text('u lose')
               }
               else if($("#gamePiece").position().left > 300){
                 $('#gameResult').text('u win')
               }
               else {
                 $('#gameResult').text('e r r o r.')
               }
          
               
             }
          }
    );
     
  } );
