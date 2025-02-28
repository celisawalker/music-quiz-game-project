/*-------------- Constants -------------*/
const startEightiesQuiz = document.getElementById("play-btn-eighties");
const startOughtsQuiz = document.getElementById("play-btn-modern"); 
const container = document.getElementById("container");
const questionEl = document.querySelector("#question");
const winnerContainer = document.querySelector(".message-container");
const quizProgress = document.getElementById("quiz-progress");

const answerButtons = document.querySelectorAll(".answer-btn");
const playAgainBtn = document.createElement("button");
playAgainBtn.setAttribute("class", "btn play-again-btn");
playAgainBtn.innerHTML = "Play again?";


const answerBtnOne = document.querySelector(".option-one")
const answerBtnTwo = document.querySelector(".option-two")
const answerBtnThree = document.querySelector(".option-three")
const answerBtnFour = document.querySelector(".option-four")

const eightiesQuizQuestions = [
    {question: "Which singer was the only solo musician to have a #1 hit in every year of the 1990s?", 
        answers:[
            {option: "Mariah Carey"},
            {option: "Madonna"},
            {option: "Alanis Morissette"},
            {option: "Celine Dion"}
         ],
         correctAnswer: "Mariah Carey"
    },
    {question: "What is the best-selling album of all time?",
        answers:[
            {option: "Whitney Houston - The Bodyguard"},
            {option: "AC/DC - Back In Black"},
            {option: "Michael Jackson - Thriller"},
            {option: "Celine Dion - Let's Talk About Love"}
        ],
        correctAnswer: "Michael Jackson - Thriller"
    },
    {question: "What Kate Bush song was featured in Season 4 of Stranger Things?",
        answers:[
            {option: "Running Up That Trail"}, 
            {option: "Running Up That Mountain"}, 
            {option: "Climb Up That Hill"},
            {option: "Running Up That Hill"}
        ],
        correctAnswer: "Running Up That Hill"
    },
    {question: "What Nirvana album is 'Heart Shaped Box' on?",
        answers:[
            {option: "Nevermind"},
            {option: "In Utero"},
            {option: "Bleach"},
            {option: "Insecticide"}
        ],
        correctAnswer: "In Utero"
    },
    {question: "Which band was Michael Jackson's song 'Human Nature' originally written for?", 
        answers:[
            {option: "Toto"},
            {option: "U2"},
            {option: "Pink Floyd"},
            {option: "The Beatles"}
        ],
        correctAnswer: "Toto"
    },
    {question: "What's the name of the Spice Girls' debut album?", 
        answers:[
            {option: "Sugar"},
            {option: "Spice"},
            {option: "Everything Nice"},
            {option: "One Hour of Girl Power"},
        ],
        correctAnswer: "Spice"
    },
    {question: "What's the end of this lyric: 'Strumming my pain with his fingers / ________________'?",
        answers:[
            {option: "Telling my whole life with his words"},
            {option: "I heard he sang a good song"},
            {option: "Singing my life with his words"},
            {option: "Killing me softly"}
        ],
        correctAnswer: "Singing my life with his words"
    },
    {question: "'In the Air Tonight' is one of the signature songs of which artist?", 
        answers:[
            {option: "Bono"},
            {option: "Ringo Starr"},
            {option: "Metallica"},
            {option: "Phil Collins"}
        ],
        correctAnswer :"Phil Collins"
    },
    {question: "What rock song begins with the line, “Just a small-town girl”?",
        answers:[
            {option: "The Bangles - Manic Monday"},
            {option: "David Bowie - Modern Love"},
            {option: "Journey - Any Way You Want It"},
            {option: "Journey - Don't Stop Believin'"}
        ],
        correctAnswer: "Journey - Don't Stop Believin'"
    },
    {question: "Which artist released the 1997 hit “You Make Me Wanna…”",
        answers:[
            {option: "Maxwell"},
            {option: "Usher"},
            {option: "Tevin Campbell"},
            {option: "D'Angelo"}
        ],
        correctAnswer: "Usher"
    },
    {question: "What artist refused to attend the Grammys after being snubbed for Best New Artist in 1989?",
        answers:[
            {option: "Vanilla Ice"},
            {option: "Indigo Girls"},
            {option: "Neneh Cherry"},
            {option: "Milli Vanilli"}
        ],
        correctAnswer: "Milli Vanilli"
    },
    {question: "What artist won the first-ever Grammy for Best R&B Album?",
        answers:[
            {option: "Babyface"},
            {option: "Toni Braxton"},
            {option: "Boyz II Men"},
            {option: "TLC"}
        ],
        correctAnswer: "TLC"
    },
    {question: "What song from The Lion King won the Academy Award for Best Original Song in 1994?",
        answers:[
            {option: "Can You Feel The Love Tonight"},
            {option: "Hakuna Matata"},
            {option: "The Circle of Life"},
            {option: "Be Prepared"}
        ],
        correctAnswer: "Can You Feel The Love Tonight"
    },
    {question: "Finish the lyric: “525,600 minutes…”",
        answers:[
            {option: "In daylights, in sunsets, in midnights, in cups of coffee"},
            {option: "How about love?"},
            {option: "525,000 moments so dear"},
            {option: "Measure in love"}
        ],
        correctAnswer: "525,000 moments so dear"
    },
    {question: "Who sings the 1987 hit,'I Wanna Dance With Somebody'",
        answers:[
            {option: "Whitney Houston"},
            {option: "Cyndi Lauper"},
            {option: "Diana Ross"},
            {option: "Janet Jackson"}
        ],
        correctAnswer: "Whitney Houston"
    }
]

const oughtsQuizQuestions = [
    {question: "What is the most decorated rap song in Grammy Awards history?", 
     answers:[
        {option: "Drake"},
        {option: "Kendrick Lamar"},
        {option: "Lil Wayne"},
        {option: "Eminem"}
        ],
        correctAnswer: "Kendrick Lamar"
    },
    {question: "In 2015, members of the Beyhive were disappointed at Beyonce’s loss to which Grammy’s Album of the Year winner?",
        answers: [
            {option: "Adele"},
            {option: "Macklemore"},
            {option: "Beck"},
            {option: "Taylor Swift"}
        ],
        correctAnswer: "Beck"
    },
    {question: "Who are the three members of Boygenius?", 
        answers: [
            {option: "Billie Eilish, Olivia Rodrigo, Sabrina Carpenter"},
            {option: "Lizzy McAlpine, Gracie Abrams, Maisie Peters"},
            {option: "Danielle Haim, Este Haim, Alana Haim"},
            {option: "Phoebe Bridgers, Lucy Dacus, Julien Baker"}
        ],
        correctAnswer: "Phoebe Bridgers, Lucy Dacus, Julien Baker"
    },
    {question: "Which album won Album of the Year at the Grammy Awards in 2023?", 
        answers: [
            {option: "Harry's House - Harry Styles"},
            {option: "Midnights - Taylor Swift",},
            {option: "We Are - Jon Batiste"},
            {option: "30 - Adele"}
        ],
        correctAnswer: "Harry's House - Harry Styles"
    },
    {question: "What does Ed Sheeran name his albums after?", 
        answers:[
            {option: "Ages"},
            {option: "Math Symbols"},
            {option: "Highway Names"},
            {option: "Colors"}
        ],
        correctAnswer: "Math Symbols"
    },
    {question: "Which song went 14 times platinum in 2021?", 
        answers: [
            {option: "Save Your Tears - The Weeknd"},
            {option: "Drivers License - Olivia Rodrigo"},
            {option: "Bad Habits - Ed Sheeran"},
            {option: "Old Town Road - Lil Nas X"}
        ],
        correctAnswer: "Old Town Road - Lil Nas X"
    },
    {question: "Who won Best New Artist at the 2025 Grammy Awards?", 
        answers: [
            {option: "Doechii"},
            {option: "Raye"},
            {option: "Chappell Roan"},
            {option: "Benson Boone"}
        ],
        correctAnswer: "Chappell Roan"
    },
    {question: "What is the name of the Post Malone song that opens the 2018 movie “Spider-Man: Into the Spider-Verse?”", 
        answers: [
            {option: "Sunflower"},
            {option: "Way Up"},
            {option: "Start a Riot"},
            {option: "What's Up Danger"}
        ],
        correctAnswer: "Sunflower"
    },
    {question: "Which boy band hailed from the UK television talent show The X Factor in 2010 and consisted of members Harry Styles, Liam Payne, Niall Horan, Louis Tomlinson and Zayn Malik?",
        answers: [
            {option: "Jonas Brothers"},
            {option: "One Direction"},
            {option: "The Wanted"},
            {option: "Take That"}
        ],
        correctAnswer: "One Direction"
    },
    {question: "Billie Eilish co-writes many of her songs with her singer-songwriter brother. What’s his name?",
        answers: [
            {option: "Phillip"},
            {option: "Fionn"},
            {option: "Frederick"},
            {option: "Finneas"}
        ],
        correctAnswer: "Finneas"
    },
    {question: "Patrick Stump is lead singer of what band?", 
        answers:[
            {option: "Panic at the Disco"},
            {option: "Fall Out Boy"},
            {option: "All Time Low"},
            {option: "My Chemical Romance"}
        ],
        correctAnswer: "Fall Out Boy"
    },
    {question: "What pop song features the lyrics “I stay out too late, got nothing in my brain”?", 
        answers: [
            {option: "Shake It Off"},
            {option: "Cruel Summer"},
            {option: "Espresso"},
            {option: "You Belong With Me"}
        ],
        correctAnswer: "Shake It Off"
    },
    {question: "What pop star named her fourth studio album “Sweetener”?", 
        answers: [
            {option: "Olivia Rodrigo"},
            {option: "Sabrina Carpenter"},
            {option: "Ariana Grande"},
            {option: "Beyonce"}
        ],
        correctAnswer: "Ariana Grande"
    },
    {
     question: "What's the end of this lyric: I'm in the business of misery _______",
     answers: [
        { option: "let's rewind it"},
        { option: "let's take it from the top"},
        { option: "let's go back a bit"},
        { option: "let's take it there"}
        ],
        correctAnswer: "let's take it from the top"
    },
    {question: "What is the name of the Olivia Rodrigo song that held the number one spot on the Billboard Hot 100 for eight consecutive weeks?",
        answers: [
            {option: "good 4 u"},
            {option: "deja vu"},
            {option: "drivers license"},
            {option: "traitor"}
        ],
        correctAnswer: "drivers license"
    }
]
/*---------- Variables (state) ---------*/
let attemptsRemaining = document.querySelector(".lives-counter");


let currentQuestionIdx = 0;
let lives = 3;
winner = false;

correctSound = new Audio("assets/correct-6033.mp3");
incorrectSound = new Audio("assets/wronganswer-37702.mp3");
losingSound = new Audio("assets/cartoon-trombone-sound-effect-241387.mp3");
winningSound = new Audio("assets/winning-218995.mp3");

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function startQuizOne(){
    startEightiesQuiz.classList.add("hide");
    startOughtsQuiz.classList.add("hide");
    container.classList.remove('hide');
    
    attemptsRemaining.textContent = `Attempts Remaining: ${lives}`;
    handleQuizOneQuestion(currentQuestionIdx);
}

function startQuizTwo(){
    startEightiesQuiz.classList.add("hide");
    startOughtsQuiz.classList.add("hide");
    container.classList.remove('hide');

    attemptsRemaining.textContent = `Attempts Remaining: ${lives}`;
    handleQuizTwoQuestion(currentQuestionIdx);
}

function handleQuizOneQuestion(index){
    if(winner) return;
    questionEl.innerHTML = `<p>${eightiesQuizQuestions[index].question}</p>`;

    answerBtnOne.innerHTML = "";
    answerBtnTwo.innerHTML = "";
    answerBtnThree.innerHTML = "";
    answerBtnFour.innerHTML = "";

    eightiesQuizQuestions[index].answers.forEach(() => {
        answerBtnOne.innerHTML = eightiesQuizQuestions[index].answers[0].option;
        answerBtnTwo.innerHTML = eightiesQuizQuestions[index].answers[1].option;
        answerBtnThree.innerHTML = eightiesQuizQuestions[index].answers[2].option;
        answerBtnFour.innerHTML = eightiesQuizQuestions[index].answers[3].option;
    })
    checkQuizOneAnswer();
}

function checkQuizOneAnswer() {
    answerButtons.forEach((answerButton) => {
        if (!answerButton.hasListener) {
            answerButton.addEventListener("click", (e) => {
                if (e.target.textContent === eightiesQuizQuestions[currentQuestionIdx].correctAnswer) {
                    correctSound.volume = 0.5;
                    correctSound.play();
                } else {
                    incorrectSound.volume = 0.5;
                    incorrectSound.play();
                    lives--;
                    attemptsRemaining.textContent = `Attempts Remaining: ${lives}`;
                }

                
                if (currentQuestionIdx + 1 >= eightiesQuizQuestions.length) {
                    currentQuestionIdx = 0;
                    winner = true;
                    winGame();
                } else {
                    currentQuestionIdx++;
                }
                

                handleQuizOneQuestion(currentQuestionIdx);
                loseGame();
            });

            answerButton.hasListener = true; 
        }
    });
}

function handleQuizTwoQuestion(index){
    questionEl.innerHTML = `<p>${oughtsQuizQuestions[index].question}</p>`;

    answerBtnOne.innerHTML = "";
    answerBtnTwo.innerHTML = "";
    answerBtnThree.innerHTML = "";
    answerBtnFour.innerHTML = "";

    oughtsQuizQuestions[index].answers.forEach(() => {
        answerBtnOne.innerHTML = oughtsQuizQuestions[index].answers[0].option;
        answerBtnTwo.innerHTML = oughtsQuizQuestions[index].answers[1].option;
        answerBtnThree.innerHTML = oughtsQuizQuestions[index].answers[2].option;
        answerBtnFour.innerHTML = oughtsQuizQuestions[index].answers[3].option;
    })
    checkQuizTwoAnswer();
}

function checkQuizTwoAnswer(){
    answerButtons.forEach((answerButton) => {
        if (!answerButton.hasListener) {
            answerButton.addEventListener("click", (e) => {
                if (e.target.textContent === oughtsQuizQuestions[currentQuestionIdx].correctAnswer) {
                    correctSound.volume = 0.5;
                    correctSound.play();
                } else {
                    incorrectSound.volume = 0.5;
                    incorrectSound.play();
                    lives--;
                    attemptsRemaining.textContent = `Attempts Remaining: ${lives}`;
                }

                
                if (currentQuestionIdx + 1 >= oughtsQuizQuestions.length) {
                    currentQuestionIdx = 0;
                    winner = true;
                    winGame();
                } else {
                    currentQuestionIdx++; 
                }
                

                handleQuizTwoQuestion(currentQuestionIdx);
                loseGame();
            });

            answerButton.hasListener = true; 
        }
    });
}

function loseGame(){
    if(!winner && lives < 1){
        losingSound.play();
        losingSound.volume = .25;
        container.classList.add("hide");
        winnerContainer.classList.remove("hide");
        winnerContainer.textContent = "Sorry. You lose :(";
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", reset);
    }
    return;
}

function winGame(){
    if (winner = true){
        winningSound.play();
        winningSound.volume = .25;
        container.classList.add("hide");
        winnerContainer.classList.remove("hide");
        winnerContainer.textContent = "You win!!!";
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", reset);
    }
}

function reset(){
   window.location.reload()
}

/*----------- Event Listeners ----------*/
startEightiesQuiz.addEventListener("click", startQuizOne)
startOughtsQuiz.addEventListener("click", startQuizTwo)