
  function playSound(event) {
      var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
      if (!audio) return; // Will stop the function from running all together
      audio.currentTime = 0; // Rewind to start
      audio.play();
      key.classList.add("playing");
  }

  function removeTransition (event) {
    if (event.propertyName !== "transform") return // skip if not transform
    this.classList.remove("playing");
  }

  var keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
  window.addEventListener("keydown", playSound);
