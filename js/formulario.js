// Fichoro .xml que está en rawgit

var url = "https://rawgit.com/AlvaroCabreraDAM1/Formulario/master/xml/formulario.xml";

var xhttp = new XMLHttpRequest();

var a = 0;
var b = 0;
var c = 0;
var r = 0;

xhttp.onreadystatechange = function() {
	
	if (this.readyState == 4 && this.status == 200) {
		// función personalizada que gestiona la respuesta a la petición de fichero
		gestionarXml(this); 
	}
	
}

xhttp.open("GET", url, true); //url del fichero
xhttp.send();

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
	
	for (numPregunta=6; numPregunta<8; numPregunta++) {
        var opcionesSelect = [];
        var nopt = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option').length;
        for (i = 0; i < nopt; i++) {
            opcionesSelect[i] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option')[i].innerHTML;
        }
        ponerDatosCheckboxHtml( opcionesSelect, numPregunta);
    }
	
	//Preguntas Radio
	
	for (numPregunta=8; numPregunta<10; numPregunta++) {
        var opcionesSelect = [];
        var nopt = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option').length;
        for (i = 0; i < nopt; i++) {
            opcionesSelect[i] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option')[i].innerHTML;
        }
        ponerDatosRadioHtml( opcionesSelect, numPregunta);
    }
}

function ponerDatosSelectHtml( opt, numPregunta) {
	var select = document.getElementsByTagName("select")[numPregunta-2];
	for (i = 0; i < opt.length; i++) {
		var option = document.createElement("option");
		option.text = opt[i];
		option.value = i;
		select.options.add(option);
	}
}
	
function ponerDatosCheckboxHtml( opt, numPregunta) {
	var radioCont = document.getElementsByClassName("preguntaC")[numPregunta-6];
	for (i = 0; i < opt.length; i++,c ++) {
		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML=opt[i];
		label.htmlFor=("checkbox" + c);
		input.id=("checkbox" + c);
		input.type="checkbox";
		input.value=i;
		radioCont.appendChild(input);
		radioCont.appendChild(label);
		radioCont.appendChild(document.createElement("br"));
	}
}

function ponerDatosRadioHtml( opt, numPregunta) {
	var radioCont = document.getElementsByClassName("preguntaR")[numPregunta-8];
	for (i = 0; i < opt.length; i++, r++) {
		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML=opt[i];
		label.htmlFor=("radio" + r);
		input.id=("radio" + r);
		input.type="radio";
		input.value=i;
		input.name=("nombre"+a);
		radioCont.appendChild(input);
		radioCont.appendChild(label);
		radioCont.appendChild(document.createElement("br"));
		}
	a++;
}