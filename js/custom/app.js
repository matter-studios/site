var videoPlayer = document.getElementsByClassName('video-content')[0]
var rsvpLink = document.getElementsByClassName('js-rsvpLink')[0]
var notification = document.getElementsByClassName('js-notification')[0]
var rsvpContainer = document.getElementsByClassName('js-rsvpContainer')[0]

videoPlayer.addEventListener('ended', function () {
  this.pause()

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

  var videoPlay = videosList[Math.floor(Math.random() * videosList.length)]
  document.querySelector('#mp4').setAttribute('src', 'assets/vid/' + videoPlay + '.mp4')

  this.load()
  this.play()

}, false)

videoPlayer.play()

rsvpLink.addEventListener('click', function (e) {
  e.preventDefault()

  var email = 'rsvp@matter.com'
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

  textArea.value = email
  document.body.appendChild(textArea)

  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)

  rsvpContainer.classList.add('is-selected')
  rsvpLink.innerHTML = 'rsvp@matter.com'
  notification.classList.remove('hidden')
})
