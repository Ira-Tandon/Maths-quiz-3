function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer= number1 * number2;
    question_number= "<div id='output'><h3>" + number1 + "X" + number2 + "</h3>";
    input_box= "<br> <span>Answer: </span> <input type='number' id='input_check_box' placeholder='Type your answer'>";
    check_button = "<br><br><button id='check' onclick='check()' style='background-color:hotpink; color:aliceblue; border:aliceblue; border-radius:20px;border-width:1px;'>Check</button></div>"
    write= question_number + input_box + check_button;
document.getElementById("none").outerHTML= write;
document.getElementById("number1").innerHTML="";
document.getElementById("number2").innerHTML="";
}

