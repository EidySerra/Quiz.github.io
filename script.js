const quizData = [
    {
      question: "Qual é o presidente de angola?",
      options: ["1 João Lourenco", "2 Jose Eduardo", " 3 Agustinho Neto", "4 Isabel Dos Santos"],
      correctAnswer: 1
    },
    {
      question: "Qual é a capital de angola",
      options: ["1 Uige", "2 Malange", "3 Bengela", "4 Luanda"],
      correctAnswer: 4
    },
    {
      question: "Qual é o maior planeta do sistema solar?",
      options: ["1 Terra", " 2 Vênus", "3 Júpiter", "4 Saturno"],
      correctAnswer: 3
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Função para carregar a pergunta atual
  function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    
    document.getElementById("question").innerText = questionData.question;
    
    for (let i = 0; i < 4; i++) {
      const answerButton = document.getElementById("answer" + (i + 1));
      answerButton.innerText = questionData.options[i];
    }
  }
  
  // Função para verificar a resposta
  function checkAnswer(answerIndex) {
    const questionData = quizData[currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;
  
    if (answerIndex === correctAnswer) {
      score++;
      document.getElementById("result").innerText = "Resposta correta! 😊 ";
      result.style= "color: rgb(4, 253, 25)"
    } else {
      document.getElementById("result").innerText = "Resposta errada! 😭";
      result.style = 'color: rgb(253, 4, 4)'
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      setTimeout(() => {
        document.getElementById("result").innerText = "";
        loadQuestion();
      }, 1000);
    } else {
      setTimeout(() => {
        document.getElementById("pontuacao").innerText = `${score}`;
      result.style = 'color: black'
      }, 1000);
     
    }
    document.getElementsByClassName('home')
    
  function fexarSom(){
    
  }

  }

  // Carregar a primeira pergunta ao iniciar
  loadQuestion();