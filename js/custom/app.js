// FAQ PAGE
var questions = document.getElementsByClassName('js-question')

if (questions.length) {
  var initialFontSize = getComputedStyle(questions[0]).getPropertyValue('font-size')
  var initialFontSizeNumber = Number(initialFontSize.split('px')[0])
  var previousFontSizeNumber

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i]
    if (i < 10) {
      q.addEventListener('click', toggleAnswer)
    } else if (i % 5 == 0) {
      q.addEventListener('click', toggleAnswer)
    }
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
      'swoosh4'
    ]

    var svgId = svgList[Math.floor(Math.random() * svgList.length)]
    svgDiv.firstElementChild.setAttribute('src', 'assets/img/' + svgId + '.svg')
    svgDiv.classList.remove('hidden')
  }

  function removeEffect(svgDiv, questionNumber) {
    var openEffectDiv = svgDiv.firstElementChild
    var closeEffectDiv = svgDiv.querySelector('.effect-img--slam')

    openEffectDiv.classList.add('hidden')
    closeEffectDiv.classList.remove('hidden')

    closeEffectDiv.addEventListener('animationend', function () {
      svgDiv.classList.add('hidden')
      openEffectDiv.classList.remove('hidden')
      closeEffectDiv.classList.add('hidden')
      svgDiv.firstElementChild.removeAttribute('src')
    }, false)
  }
}


// GET ALONG GIF PAGE

var gifList = [
  'getalong1',
  'getalong2',
  'getalong3',
  'getalong4',
  'getalong5',
  'getalong6',
  'getalong7',
  'getalong8',
  'getalong9',
  'getalong10'
]

var gifId = gifList[Math.floor(Math.random() * gifList.length)]
var gifEl = document.getElementsByClassName('js-gif')[0]

if (gifEl) gifEl.setAttribute('src', 'assets/img/' + gifId + '.gif')
