

function show() {

    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var email=document.getElementById("email").value ;
    //var email= document.getElementById("email").value;


     firebase.database().ref('User/' + name).set({
            name : name,
            comment : comment,
            email: email
            //email : email
          //}, function(error) {
            //if (error) {
              // The write failed...
            //} else {
                //alert("DONE");
              
           
           // }
          });
 } 

