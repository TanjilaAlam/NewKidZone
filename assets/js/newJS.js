

function show() {

    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var email=document.getElementById("email").value ;
    var subject= document.getElementById("subject").value;


     firebase.database().ref('User/' + name).set({
            name : name,
            comment : comment,
            email: email,
            subject : subject
          //}, function(error) {
            //if (error) {
              // The write failed...
            //} else {
                //alert("DONE");
              
           
           // }
          });
 } 
 function search() 
{
    var name= document.getElementById("name1").value;

firebase.database().ref('User/'+ name).once('value').then(function(snapshot) {
                if (snapshot.exists()) {
                     var name_ = snapshot.val().name;
                     var comment_ = snapshot.val().comment;
                    var mail_ = snapshot.val().email;
                    var subject_ =snapshot.val().subject;
                      document.getElementById("name").value = name_;
                      document.getElementById("comment").value = comment_;
                      document.getElementById("email").value =  mail_;
                      document.getElementById("subject").value = subject_;
                }
                else
                {

                }
        }, function(error) {
            if (error) {

            } else {

            }
          });
}

