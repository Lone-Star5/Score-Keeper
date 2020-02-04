var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var spanp1 = document.querySelector("#p1score");
var spanp2 = document.querySelector("#p2score");
var number = document.querySelector("input[type = 'number']");
var spanWinScore = document.querySelector("p span");

var p1Score = 0;
var p2Score=0;
var gameOver = false;
var winScore = 5;

p1Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p1Score++;
		if(p1Score===winScore)
		{
			gameOver=true;
			spanp1.classList.add("winner");
		}
		spanp1.textContent = p1Score;
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver)
	{		
		p2Score++;
		if(p2Score===winScore)
		{
			gameOver=true;
			spanp2.classList.add("winner");
		}
		spanp2.textContent = p2Score;
	}
});


function reset()
{
	p1Score=0;
	p2Score=0;
	gameOver = false;
	spanp1.textContent = 0;
	spanp2.textContent = 0;
	spanp1.classList.remove("winner");
	spanp2.classList.remove("winner");
}


resetButton.addEventListener("click",function(){
	reset();
});

number.addEventListener("change",function(){
	if(Number(this.value)<1)
		this.value=5;
	spanWinScore.textContent = this.value;
	winScore = Number(this.value);
	reset();
});

