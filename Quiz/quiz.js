const questionText=document.querySelector(".qtntext");
const optionBox=document.querySelector(".optionbox");
const currentQuestionNum=document.querySelector(".currentqtnno");
const answerDescription=document.querySelector(".answerdescription");
const nextQuestionBtn=document.querySelector(".nextqtnbtn");
const correctAnswers=document.querySelector(".correctanswers");
const seeResultBtn=document.querySelector(".seeresultbtn");
const remainingTime=document.querySelector(".remainingtime");
const timeUpText=document.querySelector(".timeuptext");
const quizHome=document.querySelector(".quizhome");
const quizBox=document.querySelector(".quizbox");
const quizOverBox=document.querySelector(".quizoverbox");
const startAgainQuizBtn=document.querySelector(".startagainquiz");
const goHomeBtn=document.querySelector(".gohome");
const categoryBox=document.querySelector(".categorybox");
const categoryText=document.querySelector(".categorytext");
//const startQuizBtn=document.querySelector(".startquiz");
let attempt=0;
let questionIndex=0;
let score=0;
let number=0;
let myArray=[];
let interval;
let categoryIndex;

//Questions and options and answer and answer description
//Array of objects
myQuiz=[
{
	category:"Computer Science",
	quizwrap:[
		{
			question:"A light sensetive device that converts images into digital form is:",
			options:["Scanner","Keyboard","Plotter","OMR"],
			answer:0,
		},
		{
			question:"Second Generation Computers are made of Vaccum Tubes",
			options:["True","False"],
			answer:1,
			description:"Second Generation Computers are made of Transistors"
		},
		{
			question:"Which of the following memory is non-volatile?",
			options:["SRAM","DRAM","ROM","All of the above"],
			answer:2,
		},
		{
			question:"Which network protocol is used to send Email?",
			options:["FTP","SMTP","POP3","None of these"],
			answer:1,
		},
		{
			question:"The most advanced form of ROM is:",
			options:["PROM","RAM","EEPROM","Cache Memory"],
			answer:2,
			description:"Electrically Erasable Programmable Read Only Memory (EEPROM) is a special type of PROM that can be erased by exposing it to an electrical charge."
		},
		{
			question:"One nibble is equal to:",
			options:["4 bits","8 bits","6 bits","16 bits"],
			answer:0,
		},
		{
			question:"One kilobyte is equal to:",
			options:["1000 bytes","1048 bytes","1024 bytes","512 bytes"],
			answer:2,
		},
		{
			question:"The IC chip used in computer is made of?",
			options:["Chromium","Silica","Silicon","None of these"],
			answer:2,
		},
		{
			question:"GUI stands for Graphical User Interface",
			options:["True","False"],
			answer:0,
			description:"A Graphical User Interface is a computer interface that allows users to interact with a device through graphical elements such as pictures and annimation,as opposed to text-based commands."
		},
		{
			question:"One byte is equal to 1024 bits",
			options:["True","False"],
			answer:1,
			description:"One byte is equal to 8 bits"
		}
			]
},
{
	category:"Sports",
	quizwrap:[
		{
			question:"When was the first Common Wealth Games held?",
			options:["1930","1934","1938","1948"],
			answer:0,
		},
		{
			question:"In which sport is the participants called puglist?",
			options:["Sprinter","Boxing","Wrestling","Javelin Throw"],
			answer:1,
		},
		{
			question:"The term 'Butterfly Stroke' is refered to in which sport?",
			options:["Wrestling","Volleyball","Tennis","Swimming"],
			answer:3,
		},
		{
			question:"Thomas Cup is related to Tennis",
			options:["True","False"],
			answer:1,
			description:"Thomas Cup is related to Badminton",
		},
		{
			question:"The number of players in each side in Water Polo is:",
			options:["6","7","8","9"],
			answer:1,
		},
		{
			question:"The term 'Pitcher' is associated with which sport?",
			options:["Basketball","Baseball","Boxing","Wrestling"],
			answer:1,
		},
		{
			question:"The first World Cup in cricket was held in 1977",
			options:["True","False"],
			answer:1,
			description:"The first World Cup in cricket was held in 1975",
		},
		{
			question:"Where did the game of Chess originate?",
			options:["India","Persia","Arabia","Europe"],
			answer:0,
		}
			]
},
{
	category:"General Knowledge",
	quizwrap:[
		{
			question:"The World Largest desert is:",
			options:["Thar","Kalahari","Sahara","Sonoran"],
			answer:2,
		},
		{
			question:"Mount Everest is located in Africa",
			options:["True","False"],
			answer:1,
			description:"Mount Everest is located in Asia",
		},
		{
			question:"The device used for measuring altitudes is:",
			options:["Altimeter","Ammeter","Audiometer","Galvanometer"],
			answer:0,
		},
		{
			question:"Pink city in India is:",
			options:["Mysore","Karnataka","Hyderabad","Jaipur"],
			answer:3,
		},
		{
			question:"Deficiency of Iron leads to:",
			options:["Rickets","Malaria","Dental Cavity","Anaemia"],
			answer:3,
		},
		{
			question:"The chemical name of Chloroform is:",
			options:["Sulphuric Acid","Sodium Chloride","Sodium Carbonate","Trichloromethane"],
			answer:3,
		},
		{
			question:"The hottest planet in the solar system is Jupiter",
			options:["True","False"],
			answer:1,
			description:"Venus is the hottest planet in the solar system.",
		},
		{
			question:"Which gas is used in the preparation of Soda water?",
			options:["Oxygen","Carbon Dioxide","Ammonia","Hydrogen"],
			answer:1,
		},
		
		{
			question:"Headquaters of UNO is situated at:",
			options:["New York","Singapore","Paris","Geneva"],
			answer:0,
		},
		
		{
			question:"Where electricity supply was first introduced in India?",
			options:["Darjeeling","Chennai","Kolkata","Mumbai"],
			answer:2,
		}
			]
},
{
	category:"English",
	quizwrap:[
		{
			question:"He told me that he _______ watching the movie.",
			options:["is finished","was finished","had finished","not finished"],
			answer:2,
		},
		{
			question:"He is very good _______ making stories.",
			options:["in","about","at","for"],
			answer:2,
		},
		{
			question:"I know him.",
			options:["He is known to me.","He was known to me.","He has been known to me.","He is known to me."],
			answer:3,
		},
		{
			question:"The medicines are _______ for curing cold.",
			options:["Proper","Real","Effective","Capable"],
			answer:2,
		},
		{
			question:"She _______ me of a girl I used to know.",
			options:["remembers","recalls","recollects","reminds"],
			answer:3,
		},
		{
			question:"The philosophical theory of knowledge:",
			options:["genealogy","epistemology","ethnology","sociology"],
			answer:1,
		},
		{
			question:"A place where ship load and unload goods:",
			options:["Port","Termial","Coach","Hanger"],
			answer:0,
		}
			]
}
	  ]

function createCategory(){
	//console.log(myQuiz[1].category);
	for(let i=0;i<myQuiz.length;i++){
		const categoryList=document.createElement("div");
		categoryList.innerHTML=myQuiz[i].category;
		categoryList.setAttribute("data-id",i);
		categoryList.setAttribute("onclick","selectCategory(this)");
		categoryBox.appendChild(categoryList);
	}
}

function selectCategory(ele){
	categoryIndex=ele.getAttribute("data-id");
	//console.log(categoryIndex);
	categoryText.innerHTML=myQuiz[categoryIndex].category;
	quizHome.classList.remove("show");
	quizBox.classList.add("show");
	nextQuestion();
}

function load(){
	number++;
	questionText.innerHTML=myQuiz[categoryIndex].quizwrap[questionIndex].question;
	createOptions();
	scoreBoard();
	currentQuestionNum.innerHTML=number+"/"+myQuiz[categoryIndex].quizwrap.length;
}

function createOptions(){
	optionBox.innerHTML="";
	let animationDelay=0.2;
	for(let i=0;i<myQuiz[categoryIndex].quizwrap[questionIndex].options.length; i++){
		const option=document.createElement("div");
		option.innerHTML=myQuiz[categoryIndex].quizwrap[questionIndex].options[i];
		option.classList.add("option");
		option .id=i;
		option.style.animationDelay=animationDelay+"s";
		animationDelay=animationDelay+0.2;
		option.setAttribute("onclick","check(this)");
		optionBox.appendChild(option);
	}
}

function generateRandomQuestion(){
	const randomNumber=Math.floor(Math.random()*myQuiz[categoryIndex].quizwrap.length);
	let hitDuplicate=0;
	if(myArray.length==0){
		questionIndex=randomNumber;
	}
	else{
		for(let i=0;i<myArray.length;i++){
			if(randomNumber==myArray[i]){
				//if duplicate found
				hitDuplicate=1;
			}
		}
		if(hitDuplicate==1){
			generateRandomQuestion();
			return;
		}
		else{
			questionIndex=randomNumber;
		}
	}
	myArray.push(randomNumber);
	console.log(myArray)
	load();
}

function check(ele){
	const id=ele.id;
	if(id==myQuiz[categoryIndex].quizwrap[questionIndex].answer){
		ele.classList.add("correct");
		score++;
		scoreBoard();
	}
	else{
		ele.classList.add("wrong");
		//show correct option when clicked answer is wrong
		for(let i=0;i<optionBox.children.length;i++){
			if(optionBox.children[i].id==myQuiz[categoryIndex].quizwrap[questionIndex].answer){
				optionBox.children[i].classList.add("showcorrect");
			}
		}
	}
	attempt++;
	disableOptions();
	showAnswerDescription();
	showNextQuestionBtn();
	stopTimer();
	
	if(number==myQuiz[categoryIndex].quizwrap.length){
		quizOver();
	}
}

function timeIsUp(){
	showTimeUpText();
	//when time is up show correct answer
	for(let i=0;i<optionBox.children.length;i++){
		if(optionBox.children[i].id==myQuiz[categoryIndex].quizwrap[questionIndex].answer){
			optionBox.children[i].classList.add("showcorrect");
		}
	}
	disableOptions();
	showAnswerDescription();
	if(number+1>myQuiz[categoryIndex].quizwrap.length){
		showSeeResultBtn();
	}
	else{
		showNextQuestionBtn();
	}
	stopTimer();
}

function startTimer(){
	if(number>myQuiz[categoryIndex].quizwrap.length){
		quizOver();
	}
	let timeLimit=16;
	remainingTime.innerHTML+timeLimit;
	remainingTime.classList.remove("lesstime");
	interval=setInterval(()=>{
		timeLimit--;
		if(timeLimit<10){
			timeLimit="0"+timeLimit;
		}
		if(timeLimit<6){
			remainingTime.classList.add("lesstime");
		}
		remainingTime.innerHTML=timeLimit;
		if(timeLimit==0){
			clearInterval(interval);
			timeIsUp();
		}
	},1000)
}

function stopTimer(){
	clearInterval(interval);
}

function disableOptions(){
	for(let i=0; i<optionBox.children.length; i++){
		optionBox.children[i].classList.add("already-answered");
	}
}

function showAnswerDescription(){
	if(typeof myQuiz[categoryIndex].quizwrap[questionIndex].description !== "undefined"){
	answerDescription.classList.add("show");
	answerDescription.innerHTML=myQuiz[categoryIndex].quizwrap[questionIndex].description;
	}
}

function hideAnswerDescription(){
	answerDescription.classList.remove("show");
	answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
	nextQuestionBtn.classList.add("show");
}

function showSeeResultBtn(){
	seeResultBtn.classList.add("show");
	nextQuestionBtn.classList.remove("show");
}

function hideNextQuestionBtn(){
	nextQuestionBtn.classList.remove("show");
}

function showTimeUpText(){
	timeUpText.classList.add("show");
}

function hideTimeUpText(){
	timeUpText.classList.remove("show");
}

function scoreBoard(){
	correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
	generateRandomQuestion();
	hideNextQuestionBtn();
	hideAnswerDescription();
	hideTimeUpText();
	startTimer();
}

function quizResult(){
	document.querySelector(".totalqtns").innerHTML=myQuiz[categoryIndex].quizwrap.length;
	document.querySelector(".totalattempt").innerHTML=attempt;
	document.querySelector(".totalcorrect").innerHTML=score;
	document.querySelector(".totalwrong").innerHTML=attempt-score;
	const percentage=(score/myQuiz[categoryIndex].quizwrap.length)*100;
	document.querySelector(".percentage").innerHTML=percentage.toFixed(2)+"%";
}

function resetQuiz(){
	attempt=0;
	//questionIndex=0;
	score=0;
	number=0;
	myArray=[];
}

function quizOver(){
	nextQuestionBtn.classList.remove("show");
	seeResultBtn.classList.add("show");
}

seeResultBtn.addEventListener("click",()=>{
	quizBox.classList.remove("show");
	seeResultBtn.classList.remove("show");
	quizOverBox.classList.add("show");
	quizResult();
})

startAgainQuizBtn.addEventListener("click",()=>{
	quizBox.classList.add("show");
	quizOverBox.classList.remove("show");
	resetQuiz();
	nextQuestion();
})

goHomeBtn.addEventListener("click",()=>{
	quizOverBox.classList.remove("show");
	quizHome.classList.add("show");
	resetQuiz();
})

/*startQuizBtn.addEventListener("click",()=>{
	quizHome.classList.remove("show");
	quizBox.classList.add("show");
	nextQuestion();
})*/

window.onload=()=>{
	createCategory();
	
}