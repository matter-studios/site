// FAQ PAGE
var questions = document.getElementsByClassName('js-question')
var answers = document.getElementsByClassName('js-answer')
var audio = new Audio('./assets/audio/matter-studios.wav')
var starterPack = document.getElementsByClassName('image--starterpack')[0]

if (starterPack) {
  starterPack.addEventListener('click', function () {
    audio.play()
  })
}

if (questions.length) {
  var initialFontSize = getComputedStyle(questions[0]).getPropertyValue('font-size')
  var initialFontSizeNumber = Number(initialFontSize.split('px')[0])
  var previousFontSizeNumber

  for (var i = 0; i < questions.length; i++) {
    var q = questions[i]
    if (i < 6) {
      q.addEventListener('click', toggleAnswer)
    } else if (i % 12 == 0) {
      q.addEventListener('click', toggleAnswer)
    }

    $(answers[i]).on('hide.bs.collapse', function () {
      audio.pause()
    })
  }
}

function toggleAnswer() {
  if (this.className.indexOf('js-question') == -1) return

  var questionNumber = this.getAttribute('data-question-number')
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
    openEffectDiv.removeAttribute('src')
  }, false)
}


var pitchHelper = document.getElementsByClassName('js-pitchHelper')[0]
if (pitchHelper) {
  pitchHelper.addEventListener('mouseover', function () {
    pitchHelper.classList.add('hover')
  })

  pitchHelper.addEventListener('mouseleave', function () {
    pitchHelper.classList.remove('hover')
  })
}
var pitchLinks = document.getElementsByClassName('js-pitch')
if (pitchLinks.length) {
  for (var k = 0; k < pitchLinks.length; k++) {
    pitchLinks[k].addEventListener('mouseover', function () {
      pitchHelper.classList.add('hover')
    })

    pitchLinks[k].addEventListener('mouseleave', function () {
      pitchHelper.classList.remove('hover')
    })
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
