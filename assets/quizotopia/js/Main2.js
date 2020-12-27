  var counter=0;
  var interval;
  var score = 0;
  var t=16;
function sound()
{
    var audio = new Audio("audio/select-sound2.wav");
    audio.play();
}  
    function oncontinue(){
         timer();
         setTimeout(function() {
         document.getElementById('rules').style.visibility = "hidden";
         document.getElementById('questionA').style.visibility = "visible"; 

}, 800);
     }
     function myQ1(o,c) {
         var select = document.forms[0];
         var i;
         var check=false;
         var k = "option" + o;
         var cor = "option" + c;
         for(i=0;i<select.length;i++){
            if(select[i].checked && select[i].value==c)
            {
                document.getElementById(k).style.backgroundColor = "green"; 
                score = score+10;
                break;
            }
            else if(select[i].checked)
              {
                    document.getElementById(cor).style.backgroundColor = "green"; 
                    document.getElementById(k).style.backgroundColor = "red"; 
                    break;
              }
         }
         clearInterval(interval);
         t=0;
         timer();
 }
 
function timer()
{ 
    interval = setInterval(function() {
     if (t == 0) {
         var res = String.fromCharCode(65+counter);
            var elem = document.getElementById('question'+res);
            elem.parentNode.removeChild(elem);
            counter=counter+1;
            if(counter<=9){
            var vis = "question" + String.fromCharCode(65+counter);
            document.getElementById(vis).style.visibility = "visible"; 
            t=16;
        }
        else{
            clearInterval(interval);
            alert("Total-Score="+score);
            window.location.href = "Quiz-Home.html";
            document.getElementById('timers').style.visibility = "hidden";
        }
    }
    t--;
    document.getElementById("timers").innerHTML ="Time-Left:"+ t;
}, 1000);
}