


	for (i=0; i < data.length; i++){

		var json = data[i];
		var team = "<br>" +json.firstName+ "<br>" + json.email + "<br>" + "<img id='pix'src='"+json.image+"'>" + "<br>";

		document.getElementById("team").innerHTML += team +"<br>";

	}