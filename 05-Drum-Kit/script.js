"use strict"

const sounds = {
  1: "boom.wav",
  2: "clap.wav",
  3: "hihat.wav",
  4: "kick.wav",
  5: "openhat.wav",
  6: "ride.wav",
  7: "snare.wav",
  8: "tink.wav",
  9: "tom.wav",
}

const createDiv = (text) => {
  const div = document.createElement("div")
  div.classList.add("key")
  div.textContent = text
  div.id = text
  document.getElementById("container").appendChild(div)
}

const display = (sounds) => Object.keys(sounds).forEach(createDiv)

const playSound = (letters) => {
  const audio = new Audio(`./sounds/${sounds[letters]}`)
  audio.play()
}

const addEffect = (letters) =>
  document.getElementById(letters).classList.toggle("active")

const removeEffect = (letters) => {
  const div = document.getElementById(letters)
  const removeActive = () => div.classList.remove("active")
  div.addEventListener("transitionend", removeActive)
}

const activate = (event) => {
  const letters =
    event.type == "click" ? event.target.id : event.key.toUpperCase()

  const allowedLetters = sounds.hasOwnProperty(letters)
  if (allowedLetters) {
    addEffect(letters)
    playSound(letters)
    removeEffect(letters)
  }
}

display(sounds)
document.getElementById("container").addEventListener("click", activate)

window.addEventListener("keyup", activate)
