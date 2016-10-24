var questions = document.getElementsByClassName('js-question')

for (var i = 0; i < questions.length; i++) {
  var q = questions[i]
  q.addEventListener('click', toggleAnswer)
}

function toggleAnswer() {
  var questionNumber = this.getAttribute('data-question-number')
  var itemEl = this.parentElement.classList.add('is-expanded')
  var answerEl = document.getElementById('a' + questionNumber)
  var svgDiv = document.getElementsByClassName('js-effect' + questionNumber)[0]

  if (answerEl.className.indexOf('collapse in') < 0) {
    // answerEl.classList.remove('fade')
    addEffect(svgDiv, questionNumber)
  } else {
    // answerEl.classList.add('fade')
    removeEffect(svgDiv, questionNumber)
  }
}

function addEffect(svgDiv, questionNumber) {
  var svgList = [
    'poof',
    'pop',
    'slam1',
    'slam2',
    'sparkles',
    'swoosh1',
    'swoosh2',
    'swoosh3',
    'swoosh4',
    'swoosh5',
    'type',
    'wow'
  ]

  var svgId = svgList[Math.floor(Math.random() * svgList.length)]
  svgDiv.firstElementChild.setAttribute('src', 'assets/img/' + svgId + '.svg')
  svgDiv.classList.remove('hidden')
}

function removeEffect(svgDiv, questionNumber) {
  svgDiv.classList.add('hidden')
  svgDiv.firstElementChild.removeAttribute('src')
}
