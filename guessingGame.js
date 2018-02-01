
let colorArray = [];
let correct = -1;
let showCorrect = document.querySelector("h1");
let btnHard = document.querySelector("#btnHard");
let btnEasy = document.querySelector("#btnEasy");
let prevCorrect = true;
let score = 0;
let highScore = 0;

randomColor = function(){
	return "rgb("+Math.floor((Math.random() * 255) + 1) +", "+ Math.floor((Math.random() * 255) + 1) +", "+ Math.floor((Math.random() * 255) + 1)+")";
}

initHard = function(){
	tds = document.querySelectorAll("td");
	for(let i = 0;i<tds.length;i++){
		colorArray[i] = randomColor();
		tds[i].style.background = colorArray[i];
		tds[i].style.opacity = 1;
		}
	correct = Math.floor((Math.random() * 9));
	showCorrect.textContent = colorArray[correct];

}

initEasy = function(){
	tds = document.querySelectorAll("td");
	for(let i = 0;i<6;i++){
		colorArray[i] = randomColor();
		tds[i].style.background = colorArray[i];
		tds[i].style.opacity = 1;
	}
	for(let i = 6;i<9;i++){
		tds[i].style.opacity = 0;
	}
	correct = Math.floor((Math.random() * 6));
	showCorrect.textContent = colorArray[correct];
}




tds = document.querySelectorAll("td");

for(let i = 0;i<tds.length;i++){
	tds[i].addEventListener("click",function(){
		if(this.style.background==colorArray[correct]){
			alert("Congrats");
			score++;
			if(score>highScore){
				highScore = score;
			}

			initHard();
		}
		else{
			this.style.opacity = 0;
			score = 0;
		}
		document.querySelector("h2").textContent = "Score: "+score +" || Highscore: "+highScore;
	})
}

btnHard.addEventListener("click", function(){
	initHard();
});

btnEasy.addEventListener("click", function(){
	initEasy();
});



initHard();