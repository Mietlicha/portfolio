function counting() {
  let watchBox = document.querySelector('#watch');
  let watch = new Date();
  let hour = watch.getHours();
  let minutes = watch.getMinutes();
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  let seconds = watch.getSeconds();
  seconds < 10 ? (seconds = `0${seconds}`) : seconds;

  watchBox.innerHTML = `${hour}:${minutes}:${seconds}`;
  setTimeout('counting()', 1000);
}

window.addEventListener('load', counting);

// Fetch all details element
const details = Array.from(document.querySelectorAll('details'));

// Add onclick listeners
details.forEach(targetDetail => {
  targetDetail.addEventListener('click', () => {
    // Close all details that are not targetDetail
    details.forEach(detail => {
      if (detail !== targetDetail) {
        detail.removeAttribute('open');
      }
    });
  });
});
