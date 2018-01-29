// fichoro xml que está en el servidor rawgit
var url="https://rawgit.com/JuanAntonioBieto/LM-Formulario/master/xml/xml.xml";

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// función personalizada que gestiona la respuesta a la petición de fichero
		gestionarXml(this); 
	}
};

xhttp.open("GET", url, true); //url del fichero
xhttp.send();

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML;
	//Pregunta 1
	document.getElementById("pregunta1").innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
	//Pregunta 2
	document.getElementById("pregunta2").innerHTML = xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
	//Pregunta 3
    document.getElementById("pregunta3").innerHTML = xmlDoc.getElementsByTagName("title")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[0].innerHTML = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[1].innerHTML = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("option")[2].innerHTML = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[3].innerHTML = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	//Pregunta 4
	document.getElementById("pregunta4").innerHTML = xmlDoc.getElementsByTagName("title")[3].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[4].innerHTML = xmlDoc.getElementsByTagName("question")[3].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[5].innerHTML = xmlDoc.getElementsByTagName("question")[3].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("option")[6].innerHTML = xmlDoc.getElementsByTagName("question")[3].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[7].innerHTML = xmlDoc.getElementsByTagName("question")[3].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	//Pregunta 5
	document.getElementById("pregunta5").innerHTML = xmlDoc.getElementsByTagName("title")[4].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[8].innerHTML = xmlDoc.getElementsByTagName("question")[4].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[9].innerHTML = xmlDoc.getElementsByTagName("question")[4].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("option")[10].innerHTML = xmlDoc.getElementsByTagName("question")[4].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[11].innerHTML = xmlDoc.getElementsByTagName("question")[4].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	//Pregunta 6
	document.getElementById("pregunta6").innerHTML = xmlDoc.getElementsByTagName("title")[5].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[12].innerHTML = xmlDoc.getElementsByTagName("question")[5].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[13].innerHTML = xmlDoc.getElementsByTagName("question")[5].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("option")[14].innerHTML = xmlDoc.getElementsByTagName("question")[5].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("option")[15].innerHTML = xmlDoc.getElementsByTagName("question")[5].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	//Pregunta 7
	document.getElementById("pregunta7").innerHTML = xmlDoc.getElementsByTagName("title")[6].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[0].innerHTML = xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[1].innerHTML = xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("label")[2].innerHTML = xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[3].innerHTML = xmlDoc.getElementsByTagName("question")[6].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	//Pregunta 8
	document.getElementById("pregunta8").innerHTML = xmlDoc.getElementsByTagName("title")[7].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[4].innerHTML = xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[5].innerHTML = xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("label")[6].innerHTML = xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[7].innerHTML = xmlDoc.getElementsByTagName("question")[7].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	//Pregunta 9
	document.getElementById("pregunta9").innerHTML = xmlDoc.getElementsByTagName("title")[8].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[8].innerHTML = xmlDoc.getElementsByTagName("question")[8].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[9].innerHTML = xmlDoc.getElementsByTagName("question")[8].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("label")[10].innerHTML = xmlDoc.getElementsByTagName("question")[8].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[11].innerHTML = xmlDoc.getElementsByTagName("question")[8].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	//Pregunta 10
	document.getElementById("pregunta10").innerHTML = xmlDoc.getElementsByTagName("title")[9].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[12].innerHTML = xmlDoc.getElementsByTagName("question")[9].getElementsByTagName("option")[0].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[13].innerHTML = xmlDoc.getElementsByTagName("question")[9].getElementsByTagName("option")[1].childNodes[0].nodeValue;		
	document.getElementsByTagName("label")[14].innerHTML = xmlDoc.getElementsByTagName("question")[9].getElementsByTagName("option")[2].childNodes[0].nodeValue;
	document.getElementsByTagName("label")[15].innerHTML = xmlDoc.getElementsByTagName("question")[9].getElementsByTagName("option")[3].childNodes[0].nodeValue;
	}