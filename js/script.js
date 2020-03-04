// function submit(){
//   var input1 = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var user = document.getElementById('message').value;
//   if (input1==''|| email==''||user==''){
//     alert('Invalid input');
//   }
//   else {
//     alert ('Thanks ' +   input1 + " we have received your message. Thank you for reaching out to us.")
//   }
    
// };
function output(){
  var name=document.getElementById("name").value;
  var email= document.getElementById("email").value;
  var user=document.getElementById("message").value;
  if(name==""||email==""||user==""){
    alert("invalid imput")
  }
  else{
    alert ('Thanks ' + name + " we have received your message. Thank you for reaching out to us.")
  }
};
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
      //   $('.test').hover(function () {
      //     $(this).animate({opacity:'1'});
      //     },
      //     function () {
      //     $(this).animate({opacity:'0'});
      // });
        // $("button#button").click(function(){
        //   var input1 = document.getElementById('name').val;
        //   var email = document.getElementById('email').val;
        //   var user = document.getElementById('message').val;
        //   $if (input1==""|| email==""||user==""){
        //       alert('Invalid input');
        //   }
        //   $else {
        //     alert ('Thanks ' +   input1 + " we have received your message. Thank you for reaching out to us.")
        //   }
      
        //    });
          }); 

$(document).ready(function(){
  $("#image4").mouseover(function(){
    $("#safe").show();
  }).mouseout(function(){
    $("#safe").hide();
  });
});

$(document).ready(function(){
  $("#image3").mouseover(function(){
    $("#app").show();
  }).mouseout(function(){
    $("#app").hide();
  });
});
$(document).ready(function(){
  $("#image3").mouseover(function(){
    $("#app").show();
  }).mouseout(function(){
    $("#app").hide();
  });
});