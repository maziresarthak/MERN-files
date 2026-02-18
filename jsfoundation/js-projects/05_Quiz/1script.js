// I could have put all the button eventlistener one after other after startBtn but I wanted the flow of program to understand it better
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },

    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },

    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0; // First thing we have to keep track of is where we are because when we start the quiz we can be on any page, its a good idea alway to do this for such projects
  let score = 0; // Ofc intitial score is 0

  startBtn.addEventListener("click", startQuiz); // Here we are doing the callback thing that is the function as a different code outside this just remember not to write startQuiz() as this is calling the function here we just want to provide the reference

  function startQuiz() {
    startBtn.classList.add("hidden");
    // Once we remove this button then result container needs to be hidden and question container needs to be showed up
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion(); // We can write the code for showing the question here itself but its a good practise to break it in functions
  }

  function showQuestion() {
    // Here we are just worried about the question
    nextBtn.classList.add("hidden"); // Here we dont want the user to click next button before awnsering the question. Now this button already has the hidden class but I want to explicitly make sure that this happens
    questionText.innerHTML = questions[currentQuestionIndex].question;
    // Now I cannot write questions[0] coz that will be hardcoded and we wont have access to other questions and we will update currentQuestionIndex further

    // Now lets add choices
    choicesList.innerHTML = ""; // Clear previous choices, why clear this bcoz this same method of showQuestion() will be used in the next que where previous que will be also there thats why we need to clear it
    // Now basically we have the questions array where we access currentQuestionIndec then we access choices which is further an array and we want to use forEach loop to loop through each choice and then create li and further so on append.... we know it
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      choicesList.appendChild(li);
      //   li.addEventListener('click', selectAnswer) NOW THIS IS VERY VERY IMP I can do this but the problem here is I cannot pass the parameter here and I cant also use brackets as then it will execute the fn immediately which is not what I want we just want the reference, this is common thing that people dont really learn in the react aswell this is not a react prob its a js prob. Turns out the solution is to use a call back : '() => {}'
      li.addEventListener("click", () => selectAnswer(choice));
      // Now both the purpose is solved with this callback function you are passing the reference of a fn, you are not executing it immediately but as we are writing in this way I can write the parameter aswell
      // Very imp that whenever you see this syntax where a person is passing a callback that means somebody wanted to pass a parameter thats the only way only reason anyone is using this syntax. This concept if not known boils down the mind when using React
    });
  }

  function selectAnswer(choice) {
    // I ofc want a parameter here which is choice which will tell which choice I selected otherwise how will Ik as later on this particular choice needs to be matched with the ansert aswell in the questions array
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  nextBtn.addEventListener("click", proceedToNextQuestion);

  function proceedToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion(); // Ata as currentQuestionIndex increment jhala tyamule we see next que
    } else {
      showResult();
    }
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    scoreDisplay.textContent = `${score} out of ${questions.length}`; // Each correct ans mhanje 1 score so 3 questions mhanje array length ofc
  }

  restartBtn.addEventListener("click", restartQuiz);

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  }
});
