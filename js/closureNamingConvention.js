$(document).ready(function(){
  console.log('get closure.');

  function firstClosure(){
    
    function showTheCode(name){
      var myName=name;
      return 'hello, my name is ' + myName;
    }
    
    var whoIsIt = showTheCode('Hannah');

    function sayHello(whoIsIt){
      $('.first-closure').click(function(){
        console.log(whoIsIt);
      });
    }

    return sayHello(whoIsIt);
  };

  function secondClosure(){
    
    console.log('whee');
    
    function myTurtle(myTurtle){
      $("input:radio[name=turtles]").click(function() {
          var value = $(this).attr('id');
          console.log(value);
          if(value == 'turtleLove'){
            console.log('Turtles are awesome!');
          }
          if(value == 'noTurtleLove'){
            console.log('Turtles Suck!');
          }
      });
    };

    return myTurtle($('form#turtleForm'));
  }

  function showCode(callbackOne, callbackTwo){
    
    var showMyWork = callbackOne;
    var superFunc = callbackTwo;

    function whoLikesTurtles(superFunc){
      $('.second-closure').click(function(){
         $('.closure-two').toggle('slow', function(){
          $(this).fadeIn().html('<pre>' + superFunc + '</pre>');
        });

      });
    }


    function whoAmI(showMyWork){
      $('.first-closure').click(function(){
        $('.closure').toggle('slow', function(){
          $(this).fadeIn().html('<pre>' + showMyWork + '</pre>');
        });
      });
    }

    whoAmI(showMyWork);
    whoLikesTurtles(superFunc);
  }


  showCode(firstClosure, secondClosure);
});


