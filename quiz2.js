function send() {
	number1 = document.getElementById("number1").value;
		actual_answer = parseInt(number1);
	console.log(actual_answer);

  question_number = "<h4>" + number1;
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  hide=document.getElementById("ques").style.display = "none";
  row =  question_number + input_box + check_button ; 
  document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
var hide="";



}