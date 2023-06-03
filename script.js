const tag = document.createElement('script')

tag.src = '//www.youtube.com/iframe_api'
const firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let player

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytplayer', {
    events: {
      onReady: onPlayerReady,
    },
  })
}

function onPlayerReady() {
  player.unMute()
}
