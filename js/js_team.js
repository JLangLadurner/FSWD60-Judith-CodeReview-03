
var team =[];

		function teams (data){
			team.push(data)
		}

		for (var i=0; i<data.length; i++){

			var employee = data[i];

			document.getElementById("team").innerHTML += "<div><img id='pix'src='" + employee.image + "'>" + "<br><p>" + employee.firstName + "<br>" + employee.email + "</p></div>";

		}	

		document.addEventListener('DOMContentLoaded',function(){teams(employee[i])}, false);