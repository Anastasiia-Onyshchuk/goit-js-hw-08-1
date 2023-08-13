import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

const localStorageKey = 'videoplayer-current-time';
player.on('timeupdate', throttle(onPlay, 1000))
function onPlay(event) {
   const currentTime = event.seconds;
  localStorage.setItem(localStorageKey, currentTime); 
}

const savedTime = parseFloat(localStorage.getItem(localStorageKey));
if (savedTime) {
    player.setCurrentTime(savedTime)
}
