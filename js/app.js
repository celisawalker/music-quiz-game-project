//Game Choice: Music-Themed Quiz
//Objective: 
    // Player attempts to answer 10 questions based on music trivia. This game will be on the style of a Buzzfeed quiz but
        //if the player gets three questions wrong, the game ends
//Game: 
    //Create a list of 14 music trivia questions to be stored in an array of objects
        //The questions presented to the player will be a mix of true/false and multiple choice
    //present one question at a time to the player - if question is answered correctly, the next question appears
        //If the question is answered incorrectly, one of the player's three "lives" is removed
            //Include sound effects for when the player correctly answers a question, when they incorrectly answer a question and when they win or lose the game
            //Create a counter that starts at three and decrements by one when a question is answered incorrectly
    //Create a score counter that tallies the player's score - they receive 10 points for each question that is answered correctly
        //If the player makes it to the end of the game, present them with a congratulatory message and their final score
    //Include a replay button at the end of the game that appears regardless of whether the player wins or loses


//SKILLS TO-DO LIST
//game should open to screen with the two options for gameplay; 
    // once player selects which era they would like to play; the questions container should appear
//learn how to add audio to browser
//have user choose between multiple answers
//how to add photos to game

/*-------------- Constants -------------*/
const startEightiesQuiz = document.getElementById("play-btn-eighties");
const startOughtsQuiz = document.getElementById("play-btn-modern"); 
const container = document.getElementById("container");
const questionEl = document.querySelector("#question");
const quizProgress = document.getElementById("quiz-progress");


const answerBtnOne = document.querySelector(".option-one")
const answerBtnTwo = document.querySelector(".option-two")
const answerBtnThree = document.querySelector(".option-three")
const answerBtnFour = document.querySelector(".option-four")

const eightiesQuizQuestions = [
    {question: "Which singer was the only solo musician to have a #1 hit in every year of the 1990s?", 
        answers:[
            {option: "Mariah Carey", correct: true},
            {option: "Madonna", correct: false},
            {option: "Alanis Morissette", correct: false},
            {option: "Celine Dion", correct: false}
         ],
    },
    {question: "What is the best-selling album of all time?",
        answers: [
            {option: "Whitney Houston - The Bodyguard", correct: false},
            {option: "AC/DC - Back In Black", correct: false},
            {option: "Michael Jackson - Thriller", correct: true},
            {option: "Celine Dion - Let's Talk About Love", correct: false}
        ]
    },
    {question: "What Kate Bush song was featured in Season 4 of Stranger Things?",
        answers: [
            {option: "Running Up That Trail", correct: false}, 
            {option: "Running Up That Mountain", correct: false}, 
            {option: "Trying to Climb That Hill", correct: false},
            {option: "Running Up That Hill", correct: true}
        ]
    },
    {question: "What Nirvana album is 'Heart Shaped Box' on?", 
        answers: [
            {option: "Nevermind", correct: false},
            {option: "In Utero", correct: true},
            {option: "Bleach", correct: false},
            {option: "Insecticide", correct: false}
        ]
    },
    {question: "Which band was Michael Jackson's song 'Human Nature' originally written for?", 
        answers: [
            {option: "Toto", correct: true},
            {option: "U2", correct: false},
            {option: "Pink Floyd", correct: false},
            {option: "The Beatles", correct: false}
        ]
    },
    {question: "What's the name of the Spice Girls' debut album?", 
        answers: [
            {option: "Sugar", correct: false},
            {option: "Spice", correct: true},
            {option: "Everything Nice", correct: false},
            {option: "One Hour of Girl Power", correct: false},
        ]
    },
    {question: "What's the end of this lyric: 'Strumming my pain with his fingers / ________________'?",
        answers:[
            {option: "Telling my whole life with his words", correct: false},
            {option: "I heard he sang a good song", correct: false},
            {option: "Singing my live with his words", correct: true},
            {option: "Killing me softly", correct: false}
        ]
    },
    {question: "'In the Air Tonight' is one of the signature songs of which artist?", 
        answers: [
            {option: "Bono", correct: false},
            {option: "Ringo Starr", correct: false},
            {option: "Metallica", correct: false},
            {option: "Phil Collins", correct: true}
        ]
    },
    {question: "What rock song begins with the line, “Just a small-town girl”?",
        answers: [
            {option: "The Bangles - Manic Monday", correct: false},
            {option: "David Bowie - Modern Love", correct: false},
            {option: "Journey - Any Way You Want It", correct: false},
            {option: "Journey - Don't Stop Believin'", correct: true}
        ]
    },
    {question: "Which artist released the 1997 hit “You Make Me Wanna…”", 
        answers:[
            {option: "Maxwell", correct: false},
            {option: "Usher", correct: true},
            {option: "Tevin Campbell", correct: false},
            {option: "D'Angelo", correct: false}
        ]
    },
    {question: "What artist refused to attend the Grammys after being snubbed for Best New Artist in 1989?",
        answers: [
            {option: "Vanilla Ice", correct: false},
            {option: "Indigo Girls", correct: false},
            {option: "Neneh Cherry", correct: false},
            {option: "Milli Vanilli", correct: true}
        ]
    },
    {question: "What artist won the first-ever Grammy for Best R&B Album?",
        answers: [
            {option: "Babyface", correct: false},
            {option: "Toni Braxton", correct: false},
            {option: "Boyz II Men", correct: true},
            {option: "TLC"}
        ]
    },
    {question: "What song from The Lion King won the Academy Award for Best Original Song in 1994?",
        answers: [
            {option: "Can You Feel The Love Tonight", correct: true},
            {option: "Hakuna Matata", correct: false},
            {option: "The Circle of Life", correct: false},
            {option: "Be Prepared", correct: false}
        ]
    },
    {question: "Finish the lyric: “525,600 minutes…”",
        answer:[
            {option: "In daylights, in sunsets, in midnights, in cups of coffee", correct: false},
            {option: "How about love?", correct: false},
            {option: "525,000 moments so dear", correct: true},
            {option: "Measure in love", correct: false}
        ]
    }
]

const oughtsQuizQuestions = [
    {question: "What is the most decorated rap song in Grammy Awards history?", 
     answers:[
        {option: "Drake", correct: false},
        {option: "Kendrick Lamar", correct: true},
        {option: "Lil Wayne", correct: false},
        {option: "Eminem", correct: false}
        ]
    },
    {question: "In 2015, members of the Beyhive were disappointed at Beyonce’s loss to which Grammy’s Album of the Year winner?",
        answers: [
            {option: "Adele", correct: false},
            {option: "Macklemore", correct: false},
            {option: "Beck", correct: true},
            {option: "Taylor Swift", correct: false}
        ]
    },
    {question: "Who are the three members of Boygenius?", 
        answers: [
            {option: "Billie Eilish, Olivia Rodrigo, Sabrina Carpenter", correct: false},
            {option: "Lizzy McAlpine, Gracie Abrams, Maisie Peters", correct: false},
            {option: "Danielle Haim, Este Haim, Alana Haim", correct: false},
            {option: "Phoebe Bridgers, Lucy Dacus, Julien Baker", correct: true}
        ]
    },
    {question: "Which album won Album of the Year at the Grammy Awards in 2023?", 
        answers: [
            {option: "Harry's House - Harry Styles", correct: true},
            {option: "Midnights" - "Taylor Swift", correct: false},
            {option: "We Are - Jon Batiste", correct: false},
            {option: "30 - Adele", correct: false}
        ]
    },
    {question: "What does Ed Sheeran name his albums after?", 
        answers:[
            {option: "Ages", correct: false},
            {option: "Math Symbols", correct: true},
            {option: "Highway Names", correct: false},
            {option: "Colors", correct: false}
        ]
    },
    {question: "Which song went 14 times platinum in 2021?", 
        answers: [
            {option: "Save Your Tears - The Weeknd", correct: false},
            {option: "Drivers License - Olivia Rodrigo", correct: false},
            {option: "Bad Habits - Ed Sheeran", correct: false},
            {option: "Old Town Road - Lil Nas X", correct: true}
        ]
    },
    {question: "Who won Best New Artist at the 2025 Grammy Awards?", 
        answers: [
            {option: "Doechii", correct: false},
            {option: "Raye", correct: false},
            {option: "Chappell Roan", correct: true},
            {option: "Benson Boone", correct: false}
        ]
    },
    {question: "What is the name of the Post Malone song that opens the 2018 movie “Spider-Man: Into the Spider-Verse?”", 
        answers: [
            {option: "Sunflower", correct: true},
            {option: "Way Up", correct: false},
            {option: "Start a Riot", correct: false},
            {option: "What's Up Danger", correct: false}
        ]
    },
    {question: "Which boy band hailed from the UK television talent show The X Factor in 2010 and consisted of members Harry Styles, Liam Payne, Niall Horan, Louis Tomlinson and Zayn Malik?",
        answers: [
            {option: "Jonas Brothers", correct: false},
            {option: "One Direction", correct: true},
            {option: "The Wanted", correct: false},
            {option: "Take That", correct: false}
        ]
    },
    {question: "Billie Eilish co-writes many of her songs with her singer-songwriter brother. What’s his name?",
        answers: [
            {option: "Phillip", correct: false},
            {option: "Fionn", correct: false},
            {option: "Frederick", correct: false},
            {option: "Finneas", correct: true}
        ]
    },
    {question: "Patrick Stump is lead singer of what band?", 
        answers:[
            {option: "Panic at the Disco", correct: false},
            {option: "Fall Out Boy", correct: true},
            {option: "All Time Low", correct: false},
            {option: "My Chemical Romance", correct: false}
        ]
    },
    {question: "What pop song features the lyrics “I stay out too late, got nothing in my brain”?", 
        answers: [
            {option: "Shake It Off", correct: true},
            {option: "Cruel Summer", correct: false},
            {option: "Espresso", correct: false},
            {option: "You Belong With Me", correct: false}
        ]
    },
    {question: "What pop star named her fourth studio album “Sweetener”?", 
        answers: [
            {option: "Olivia Rodrigo", correct: false},
            {option: "Sabrina Carpenter", correct: false},
            {option: "Ariana Grande", correct: true},
            {option: "Beyonce", correct: false}
        ]
    },
    {
     question: "What's the end of this lyric: I'm in the business of misery _______",
     answers: [
        { option: "let's rewind it", correct: false },
        { option: "let's take it from the top", correct: true },
        { option: "let's go back a bit", correct: false },
        { option: "let's take it there", correct: false }
        ]
    }
]
/*---------- Variables (state) ---------*/
let score = 0;
let lives = 0;

let currentQuestionIdx = 0;

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function startQuizOne(){
    startEightiesQuiz.classList.add("hide");
    startOughtsQuiz.classList.add("hide");
    container.classList.remove('hide');
    handleQuizOneQuestion(currentQuestionIdx);
}

function startQuizTwo(){
    startEightiesQuiz.classList.add("hide");
    startOughtsQuiz.classList.add("hide");
    container.classList.remove('hide');
    handleQuizTwoQuestion(currentQuestionIdx);
}

function handleQuizOneQuestion(index){
    eightiesQuizQuestions.forEach((question) => {
        quizProgress.innerHTML += "<span></span>";
    });
    let spans = document.querySelectorAll("span");
    for(let i = 0; i <= index; i++){
        spans[i].classList.add("seen");
    }
    questionEl.innerHTML = `<p>${eightiesQuizQuestions[index].question}</p>`;

    eightiesQuizQuestions[index].answers.forEach((answer) => {
        answerBtnOne.innerHTML = eightiesQuizQuestions[index].answers[0].option;
        answerBtnTwo.innerHTML = eightiesQuizQuestions[index].answers[1].option;
        answerBtnThree.innerHTML = eightiesQuizQuestions[index].answers[2].option;
        answerBtnFour.innerHTML = eightiesQuizQuestions[index].answers[3].option;
    })
    let answerButtons = document.querySelectorAll(".answer-btn");
    
    answerButtons.forEach((answerButton) => {
        answerButton.addEventListener("click", (e) => {
            console.log(e.target.textContent);
        })
    })
}

function handleQuizTwoQuestion(index){
    oughtsQuizQuestions.forEach((question) => {
        quizProgress.innerHTML += "<span></span>";
    });
    let spans = document.querySelectorAll("span");
    for(let i = 0; i <= index; i++){
        spans[i].classList.add("seen");
    }
    questionEl.innerHTML = `<p>${oughtsQuizQuestions[index].question}</p>`;

    oughtsQuizQuestions[index].answers.forEach((answer) => {
        answerBtnOne.innerHTML = oughtsQuizQuestions[index].answers[0].option;
        answerBtnTwo.innerHTML = oughtsQuizQuestions[index].answers[1].option;
        answerBtnThree.innerHTML = oughtsQuizQuestions[index].answers[2].option;
        answerBtnFour.innerHTML = oughtsQuizQuestions[index].answers[3].option;
    })
    let answerButtons = document.querySelectorAll(".answer-btn");
    
    answerButtons.forEach((answerButton) => {
        answerButton.addEventListener("click", (e) => {
            console.log(e.target.textContent);
        })
    })
}
// function selectAnswer(){

// }

/*----------- Event Listeners ----------*/
startEightiesQuiz.addEventListener("click", startQuizOne)
startOughtsQuiz.addEventListener("click", startQuizTwo)
//document.getElementById("play-again-btn").addEventListener("click", )