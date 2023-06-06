var tag = document.createElement('script')

tag.src = '//www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var player

function onYouTubeIframeAPIReady() {
  player = new YT.Player('#ytplayer', {
    events: {
      "onReady": onPlayerReady,
      "onStateChange": onPlayerStateChange,
    },
  })
}

function onPlayerReady() {
  // NOTE: WHY IT IS NOT WORKING ANYWHERE?

  console.log('onPlayerReady triggered')

  player.playVideo()
  player.unMute()
}

function onPlayerStateChange() {
  // NOTE: WHY IT IS NOT WORKING ANYWHERE?

  console.log('onPlayerStateChange works')
  player.unMute()
}
