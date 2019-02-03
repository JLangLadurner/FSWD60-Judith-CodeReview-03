

	function processFormData(){

	var name_element = document.getElementById("name");
	var name = name_element.value;
	var age_element = document.getElementById("age");
	var age = age_element.value;
	var horsepower = document.getElementById("HP");
	var horse = horsepower.value;

	var selected_index =myForm.elements["country"].selectedIndex;


	if (selected_index == 1) {

			 var insurance = Math.round(Number(horse)*100/Number(age)+50);

	}

	else if (selected_index == 2)
	{
		var insurance = Math.round(Number(horse)*120/Number(age)+100);
	}

	else {
		var insurance = Math.round(Number(horse)*150/(Number(age)+3)+50);
	}



	document.getElementById("result").innerHTML="<p> Hi "+ name + " your car insurance is € " + insurance + ".</p";

	console.log("Hi " + name + "<p>  your carinsurance is € " + insurance+ " and you live in " + selected_index + "</p");
}
}







