const correctAnswer = ['B', 'B', 'A', 'B', 'A', 'B', 'A', 'A', 'B', 'B']
const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

form.addEventListener('submit', event => {
  event.preventDefault()


  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value,
    form.inputQuestion7.value,
    form.inputQuestion8.value,
    form.inputQuestion9.value,
    form.inputQuestion10.value
  ]

  let score = 0

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswer[index]) {
      score += 10
    }
  })
  
  scrollTo(0, 0)

  finalResult.classList.remove('d-none')
  
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearTimeout(timer)
    }
    finalResult.querySelector('span').textContent = `${counter}%`
    counter++  
  }, 10)
  
})