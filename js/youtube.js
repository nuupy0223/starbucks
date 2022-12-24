
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // html > <div id="plyer"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거, 준비된 영상이 실행되면 음소거하겠다
      } // 객체 데이터 내부에 함수가 할당되면 메소드, onready라는 메소드가 실행되면 어떻게 할거냐?
      //event? onReady, 준비가 되면 이 함수를 실행해주는데 그 함수의 인수로 동영상이 실행되는 상황 자체를 데이터로서 넘겨주게 되고, 그걸 함수 내에서 event라는 매개변수로 받아서 함수 내에서 활용해서 사용 가능 
    }
  });
}