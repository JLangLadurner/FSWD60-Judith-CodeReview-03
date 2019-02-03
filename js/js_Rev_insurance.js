// function validateForm(){

// 	if (name= null || name=="", age==null || age=="", horse==null || horse=="", selected_index == null || selected_index =="") {

// 	alert("Please Fill All Required Fields");
// 	return false
// 	}
// }

function processFormData (){
	var name = document.getElementById("name").value;
	var country = document.getElementById("country").value;
	var age = document.getElementById("age").value;
	var horseP = document.getElementById("HP").value;

	if (country == "None") {
		document.getElementById("result").innerHTML = "Please choose country of residence";
	}
	else if (country == "Austria") {

		var insurance = Math.round(Number(horseP)*100/Number(age)+50);

		document.getElementById("result").innerHTML = "<p>Hi " + name + " your Car Insurance is € " + insurance + ".</p>"; 
	}

	else if (country == "Greece") {

		var insurance = Math.round(Number(horseP)*120/Number(age)+100);

		document.getElementById("result").innerHTML = "<p>Hi " + name + " your Car Insurance is € " + insurance + ".</p>";
	}

	else {

		var insurance = Math.round(Number(horseP)*150/(Number(age)+3)+50);

		document.getElementById("result").innerHTML = "<p>Hi " + name + " your Car Insurance is € " + insurance + ".</p>"; 

	}
}
document.getElementById("btn").addEventListener('click', processFormData, false);
