
var creationTime; //Zeit beim Erzeugen Kreis
var clickedTime;  // Zeit beim Wegklicken
var reactionTime; // Reaktionszeit

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function kreisCreator(){

	var zufallsZahl = Math.random(); // Zufallszahlen für setTimeout
	zufallsZahl = zufallsZahl*5000;  // Zufallszahlen für setTimeout
	var top= Math.random();    // Zufallszahlen für Position
	top = top*200;             // Zufallszahlen für Position
	var left=Math.random();    // Zufallszahlen für Position
	left = left*400;           // Zufallszahlen für Position


	setTimeout(function(){
		document.getElementById("kreis").style.top = top + "px";
		document.getElementById("kreis").style.left = left + "px";
		document.getElementById("kreis").style.backgroundColor=getRandomColor();
		document.getElementById("kreis").style.display="block";
		creationTime=Date.now();
	},zufallsZahl)
}


document.getElementById("kreis").onclick=function(){
	
	clickedTime = Date.now();
	reactionTime = (clickedTime - creationTime)/1000;
	document.getElementById("zeit").innerHTML=reactionTime;
	document.getElementById("kreis").style.display="none";
	kreisCreator();

}

document.getElementById("start").onclick=function(){
	kreisCreator();
}



