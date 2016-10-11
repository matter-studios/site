var videoPlayer = document.getElementsByClassName('js-video')[0]
var gifPlayer = document.getElementsByClassName('js-gif')[0]
var rsvpLink = document.getElementsByClassName('js-rsvpLink')[0]
var notification = document.getElementsByClassName('js-notification')[0]
var rsvpContainer = document.getElementsByClassName('js-rsvpContainer')[0]
var isMobile = navigator.userAgent.indexOf('Mobile') > 0
var videosList = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11'
]

if (!isMobile) {
  videoPlayer.addEventListener('ended', function () {
    this.pause()

    var videoToPlay = videosList[Math.floor(Math.random() * videosList.length)]
    document.querySelector('#mp4').setAttribute('src', 'assets/vid/' + videoToPlay + '.mp4')

    this.load()
    this.play()

  }, false)

  videoPlayer.play()
} else {
  setTimeout(function () {
    var gifToPlay = videosList[Math.floor(Math.random() * videosList.length)]
    gifPlayer.setAttribute('src', 'assets/img/' + gifToPlay + '.gif')
  }, 10000)
}

rsvpLink.addEventListener('click', function (e) {
  var email = document.getElementsByClassName('js-rsvpEmail')[0]

  if (!isMobile) {
    var emailText = 'rsvp@matter.com'
    var textArea = document.createElement('textarea')
    textArea.style.position = 'fixed'
    textArea.style.top = 0
    textArea.style.left = 0
    textArea.style.width = '2em'
    textArea.style.height = '2em'
    textArea.style.padding = 0
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.style.background = 'transparent'

    textArea.value = emailText
    document.body.appendChild(textArea)

    textArea.select()
    document.execCommand('copy', false, null)
    document.body.removeChild(textArea)
  } else {
    var selection = window.getSelection()
    var range = document.createRange()
    range.selectNodeContents(email)
    selection.removeAllRanges()
    selection.addRange(range)
    $(email).select()
  }

  rsvpContainer.classList.add('is-selected')
  notification.classList.remove('hidden')
  email.classList.remove('hidden')
  rsvpLink.classList.add('hidden')
})
