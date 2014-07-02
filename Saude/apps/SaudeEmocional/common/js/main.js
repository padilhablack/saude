
var resultado = 0;
var pagAtual = 0;
var pagTotal = 20;

function sair(){
	  WL.App.close();
}

function wlCommonInit(){
	busy = new WL.BusyIndicator('AppBody');
	document.getElementById("body").innerHTML ="<h1>Ol� Jonas Padilha</h1>";
}
function paginator(){
	pagAtual += 1; 
	document.getElementById("contador").innerHTML = pagAtual +"/"+ pagTotal;
}

function resetar(){
	document.getElementById("result").style.display = "block";
	document.getElementById("options").style.display = "none";
	document.getElementById("contador").style.display = "block";
	document.getElementById("texto").innerHTML = "";
	resultado = 0;
	pagAtual = 0;

}

function mostrar(){
	document.getElementById("parcial").innerHTML= "Resultado:"+ resultado;
}

function mostrarFinal(){
	document.getElementById("final").innerHTML= "Resultado:"+ resultado;
}


function addValor(){
	resultado += 2; 
}


function exibe(){

	if(resultado <= 15){
		document.getElementById("texto").innerHTML = "Sua inteligência emocional ainda é fraca. Você deve procurar fortalece-la.";
		document.getElementById("result").style.display = "none";
		document.getElementById("options").style.display = "block";
		document.getElementById("contador").style.display = "none";


	}else if((resultado>15)&&(resultado<=30)){
		document.getElementById("texto").innerHTML ="Você está quase na média da inteligência emocional. " +
		"Logicamente pode melhorar. Organize sua vida, tendo melhores relacionamentos " +
		"e maior conhecimento de suas emoções.";
		document.getElementById("result").style.display = "none";
		document.getElementById("options").style.display = "block";
		document.getElementById("contador").style.display = "none";

	}else if(resultado > 30){
		document.getElementById("texto").innerHTML ="Você possui uma ótima inteligência emocional e tem grande possibilidade de alcançar uma vida emocional equilibrada.";
		document.getElementById("result").style.display = "none";
		document.getElementById("options").style.display = "block";
		document.getElementById("contador").style.display = "none";
	}
}
