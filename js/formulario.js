// Fichoro .xml que está en rawgit

var url = "https://rawgit.com/AlvaroCabreraDAM1/Formulario/master/xml/formulario.xml";

var xhttp = new XMLHttpRequest();

var a = 0;
var b = 0;
var c = 0;
var r = 0;

var num = 0;

var nota = 0;

var corregido = false;

var respuestas = [];
var numRespuestas = [];

window.onload = function() {
	
	formElement = document.getElementById("formulario");
	
	formElement.onsubmit = function(){
		
		nota = 0;
		
		if (comprobarContestadas() == true && corregido == false) {
			
			corregirText();
			corregirSelect();
			corregirSelectMultiple();
			corregirCheckbox();
			corregirRadio();
			
			mostrarNota();
			
		
			corregido = true;
		
			return false;
			
		}
		
		return false;
		
	}
	
	xhttp.onreadystatechange = function() {
	
		if (this.readyState == 4 && this.status == 200) {
			// función personalizada que gestiona la respuesta a la petición de fichero
			gestionarXml(this); 
		}
	
	}

	xhttp.open("GET", url, true); //url del fichero
	xhttp.send();
	
}

// función personalizada que gestiona la respuesta a la petición de fichero

function gestionarXml(dadesXml){
	
	var xmlDoc = dadesXml.responseXML;
	
	//Titulos
	
	for (var aux = 0; aux < xmlDoc.getElementsByTagName("title").length; aux ++) {
		document.getElementsByClassName("preguntaT")[aux].innerHTML = xmlDoc.getElementsByTagName("title")[aux].childNodes[0].nodeValue;
	}
	
	//Preguntas Select
	
	for (numPregunta=2; numPregunta< 6; numPregunta++) {
        var opcionesSelect = [];
        var nopt = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option').length;
        for (i = 0; i < nopt; i++) {
            opcionesSelect[i] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option')[i].innerHTML;
        }
        ponerDatosSelectHtml( opcionesSelect, numPregunta);
    }

	//Preguntas Chaeckbox
	
	num = 0;
	
	for (numPregunta=6; numPregunta<8; numPregunta++) {
        var opcionesSelect = [];
        var nopt = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option').length;
        for (i = 0; i < nopt; i++) {
            opcionesSelect[i] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option')[i].innerHTML;
        }
        ponerDatosCheckboxHtml( opcionesSelect, numPregunta);
    }
	
	//Preguntas Radio
	
	num = 0;
	
	for (numPregunta=8; numPregunta<10; numPregunta++) {
        var opcionesSelect = [];
        var nopt = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option').length;
        for (i = 0; i < nopt; i++) {
            opcionesSelect[i] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option')[i].innerHTML;
        }
        ponerDatosRadioHtml( opcionesSelect, numPregunta);
    }
	
	//Respuestas
	
	for (numPregunta = 0; numPregunta < 10; numPregunta++) {
		
		numRespuestas[numPregunta] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName("answer").length;
		respuestas[numPregunta] = [];
		
		for (aux = 0; aux < numRespuestas[numPregunta]; aux++) {
			
			respuestas[numPregunta][aux] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName("answer")[aux].innerHTML;
			
		}
		
	}
	
}

function ponerDatosSelectHtml(opt, numPregunta) {
	
	var select = document.getElementsByTagName("select")[numPregunta-2];
	
	for (aux = 0; aux < opt.length; aux++) {
		var option = document.createElement("option");
		option.text = opt[aux];
		option.value = aux;
		select.options.add(option);
	}
}
	
function ponerDatosCheckboxHtml(opt, numPregunta) {
	
	var radioCont = document.getElementsByClassName("preguntaC")[numPregunta-6];
	for (i = 0; i < opt.length; i++,c ++) {
		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML=opt[i];
		label.htmlFor=("checkbox" + c);
		input.id=("checkbox" + c);
		input.type="checkbox";
		input.name= ("checkbox" + num);
		input.value=i;
		radioCont.appendChild(input);
		radioCont.appendChild(label);
		radioCont.appendChild(document.createElement("br"));
	}
	
	num ++;
	
}

function ponerDatosRadioHtml(opt, numPregunta) {
	var radioCont = document.getElementsByClassName("preguntaR")[numPregunta-8];
	for (i = 0; i < opt.length; i++, r++) {
		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML=opt[i];
		label.htmlFor=("radio" + r);
		input.id=("radio" + r);
		input.type="radio";
		input.value=i;
		input.name=("radio"+ num);
		radioCont.appendChild(input);
		radioCont.appendChild(label);
		radioCont.appendChild(document.createElement("br"));
	}
	
	num ++;
}

function corregirText() {
	
	for(numPregunta = 0; numPregunta < 2; numPregunta++) {
		
		if(respuestas[numPregunta][0] == document.getElementsByTagName("input")[numPregunta].value) {
			
			nota += 1.0;
			
			explicar("La pregunta " + (numPregunta + 1) + " es correcta. " + "+ 1.0 Puntos");
			
		} else {
			
			nota -= 1.0;
			
			explicar("La pregunta " + (numPregunta + 1) + " es incorrecta. " + "- 1.0 Puntos");
			
		}
		
	}
	
}

function corregirSelect() {
	
	for(numPregunta = 2; numPregunta < 4; numPregunta++) {
		
		if(respuestas[numPregunta][0] == document.getElementsByTagName("Select")[numPregunta - 2].value) {
			
			nota += 1.0;
			
			explicar("La pregunta " + (numPregunta + 1) + " es correcta. " + "+ 1.0 Puntos");
			
		} else {
			
			nota -= 1.0;
			
			explicar("La pregunta " + (numPregunta + 1) + " es incorrecta. " + "- 1.0 Puntos");
			
		}
		
	}
	
}

function corregirSelectMultiple() {
	
	for (numPregunta = 4; numPregunta < 6; numPregunta++) {
		
		var sma = document.getElementsByTagName("select")[numPregunta - 2];
		
		var correcto = false;
		
		for (aux = 0; aux < (sma.length); aux++) {
			
			var smo = document.getElementsByTagName("select")[numPregunta - 2].options[aux];
			
			//Comprobamos si la opcion seleccionada es correcta
			
			if (smo.selected) {
				
				correcto = false;
					
				for (auz = 0; auz < numRespuestas[numPregunta]; auz++) {
					
					if (aux == respuestas[numPregunta][auz]) {
						
						correcto = true;
							
					}
						
				}
					
				//Puntuacion
				
				if (correcto == true) {
					
					nota += 1.0/numRespuestas[numPregunta];
					
					explicar("La opccion " + (auz + 1) + " de la pregunta " + (numPregunta + 1) + " es correcta. " + ((1.0/numRespuestas[numPregunta]).toFixed(2)) + " Puntos");
					
				}
				
				if (correcto == false) {
					
					nota -= 1.0/numRespuestas[numPregunta];
					
					explicar("La opccion " + (auz + 1) + " de la pregunta " + (numPregunta + 1) + " es incorrecta. " - ((1.0/numRespuestas[numPregunta]).toFixed(2)) + " Puntos");
					
				}
				
			}
			
		}
		
	}
}

function corregirCheckbox() {
	
	var numCheckbox;
	
	for (numPregunta = 6; numPregunta < 8; numPregunta++) {
		
		var correcto = false;
		
		if (numPregunta == 6) {
			
			numCheckbox = document.getElementsByName("checkbox0")
			
		} else {
			
			numCheckbox = document.getElementsByName("checkbox1")
			
		}
		
		for (aux = 0; aux < (numCheckbox.length); aux++) {
			
			if (numCheckbox[aux].checked) {
				
				correcto = false;
				
				for (auz = 0; auz < numRespuestas[numPregunta]; auz++) {
					
					if (aux == respuestas[numPregunta][auz]) {
						
						correcto = true;
						
					}
					
				}
				
				//Puntuacion
				
				if (correcto == true) {
					
					nota += 1.0/numRespuestas[numPregunta];
					
					explicar("La opccion " + (auz + 1) + " de la pregunta " + (numPregunta + 1) + " es correcta. " + ((1.0/numRespuestas[numPregunta]).toFixed(2)) + " Puntos");
					
				}
					
				if (correcto == false) {
					
					nota -= 1.0/numRespuestas[numPregunta];
					
					explicar("La opccion " + (auz + 1) + " de la pregunta " + (numPregunta + 1) + " es incorrecta. " - ((1.0/numRespuestas[numPregunta]).toFixed(2)) + " Puntos");
					
				}
				
			}
			
		}
		
	}
	
}

function corregirRadio() {
	
	var fe = formElement;
	var numRadio = fe.radio1;
	
	for (numPregunta = 8; numPregunta < 10; numPregunta ++) {
		
		if (numPregunta == 8) {
			
			numRadio = fe.radio0;
			
		} else {
			
			numRadio = fe.radio1;
			
		}
		
		if (numRadio.value == respuestas[numPregunta][0]) {
			
			nota += 1.0;
			
			explicar("La pregunta " + (numPregunta + 1) + " es correcta. " + "+ 1.0 Puntos");
			
		} else {
			
			nota -= 1.0;
			
			explicar("La pregunta " + (numPregunta + 1) + " es incorrecta. " + "- 1.0 Puntos");
			
		}
		
	}
}

function mostrarNota(){
	var p = document.createElement("h2");
	if (nota < 0) {
		nota = 0;
	}
	var node = document.createTextNode("Tu nota es: " + nota.toFixed(2))
	p.appendChild(node);
	document.getElementById("respuesta2").appendChild(p);
	document.getElementById("respuesta").style.display="inline-block";
	document.getElementById("formulario").style.display="none";
	window.location.hash = "#respuesta2";
}

function comprobarContestadas() {
	
	//Comprobar Select
	
	for(numPregunta = 2; numPregunta < 4; numPregunta++) {
		
		var checked = false;
		
		if(document.getElementsByTagName("Select")[numPregunta - 2].value != -1) {
			
			checked = true;
			
		}

		if (checked == false) {
		
			alert("Pregunta " + (numPregunta + 1) + " no contestada.")
			return false;
		
		}
		
	}
	
	//Comprobar Select Multiple
	
	for (numPregunta = 4; numPregunta < 6; numPregunta++) {
		
		var sma = document.getElementsByTagName("select")[numPregunta - 2];
		
		var checked = false;
		
		for (aux = 0; aux < (sma.length); aux++) {
			
			var smo = document.getElementsByTagName("select")[numPregunta - 2].options[aux];
			
			if (smo.selected) {
				
				checked = true;
				
			}
			
		}
		
		if (checked == false) {
		
			alert("Pregunta " + (numPregunta + 1) + " no contestada.")
			return false;
		
		}
		
	}
	
	//Comprobar Checkbox
	
	for (numPregunta = 6; numPregunta < 8; numPregunta++) {
		
		var checked = false;
		
		if (numPregunta == 6) {
			
			numCheckbox = document.getElementsByName("checkbox0")
			
		} else {
			
			numCheckbox = document.getElementsByName("checkbox1")
			
		}
		
		for (aux = 0; aux < (numCheckbox.length); aux++) {
			
			if (numCheckbox[aux].checked) {
				
				checked = true;	
				
			}
			
		}
		
		if (checked == false) {
		
			alert("Pregunta " + (numPregunta + 1) + " no contestada.")
			return false;
		
		}
		
	}
	
	//Comprobar Radio
	
	var fe = formElement;
	var numRadio = fe.radio1;
	
	for (numPregunta = 8; numPregunta < 10; numPregunta ++) {
		
		var checked = false;
		
		if (numPregunta == 8) {
			
			numRadio = fe.radio0;
			
		} else {
			
			numRadio = fe.radio1;
			
		}
		
		if (numRadio.value != "") {
			
			checked = true;
			
		}

		if (checked == false) {
		
			alert("Pregunta " + (numPregunta + 1) + " no contestada.")
			return false;
		
		}
		
	}
	
	//Si todas estan chekeadas
	
	return true

}

function explicar(e) {
	
	var p = document.createElement("h4");
	var node = document.createTextNode(" - " + e);
	p.appendChild(node);
	document.getElementById("respuesta2").appendChild(p);
	
}
