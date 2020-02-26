 $(document).ready(function(){
        $("#img1").click(function(){
          $("#img1").hide();
          $("#p1").toggle();
          $("#img1").show();
        });
      });
      $(document).ready(function(){
        $("#img2").click(function(){
          $("#img2").hide();
          $("#p2").toggle();
          $("#img2").show();
        });
      }); 

      $(document).ready(function(){
        $("#img3").click(function(){
          $("#img3").hide();
          $("#p3").toggle();
          $("#img3").show();
        });
      }); 
        $('.test').hover(function () {
          $(this).animate({opacity:'1'});
          },
          function () {
          $(this).animate({opacity:'0'});
      });
        $("button").click(function(event){
          event.preventDefault();
          var input1 = document.getElementById('name').value;
          var email = document.getElementById('email').value;
          var user = document.getElementById('contactform').reset();
          if (input1 && email != ''){
              alert('Thanks ' +   input1 + " we have received your message. Thank you for reaching out to us.");
          }else {
            alert ('Invalid input')
          }
      
           });