const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')
const correctAnswers = ['B', 'D', 'C', 'B', 'A', 'D', 'C', 'C', 'D', 'A']

let score = null

const getUserAnswer = () => correctAnswers.map((_, index) => 
  form[`inputQuestion${index + 1}`].value)

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]

    if (isUserAnswerCorrect) {
      score += 10
    }
  })
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearTimeout(timer)
    }
    finalScoreContainer.querySelector('span').textContent = `${counter++}%` 
  }, 20)
}


form.addEventListener('submit', event => {
  event.preventDefault()

  score = 0

  const userAnswers = getUserAnswer()

  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore() 
})
