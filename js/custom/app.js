var questions = document.getElementsByClassName('js-question')
var initialFontSize = getComputedStyle(questions[0]).getPropertyValue('font-size')
var initialFontSizeNumber = Number(initialFontSize.split('px')[0])

var previousFontSizeNumber

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
    addEffect(svgDiv, questionNumber)
  } else {
    removeEffect(svgDiv, questionNumber)
  }
}

function addEffect(svgDiv, questionNumber) {
  var svgList = [
    'poof',
    'pop',
    'sparkles',
    'swoosh1',
    'swoosh2',
    'swoosh3',
    'swoosh4',
    'swoosh5'
  ]

  var svgId = svgList[Math.floor(Math.random() * svgList.length)]
  svgDiv.firstElementChild.setAttribute('src', 'assets/img/' + svgId + '.svg')
  svgDiv.classList.remove('hidden')
}

function removeEffect(svgDiv, questionNumber) {
  svgDiv.firstElementChild.setAttribute('src', 'assets/img/slam2.svg')
  setTimeout(function () {
    svgDiv.classList.add('hidden')
    svgDiv.firstElementChild.removeAttribute('src')
  }, 300)
}
