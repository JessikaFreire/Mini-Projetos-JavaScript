"use strict"

const formatDigit = (digit) => `0${digit}`.slice(-2)

const update = (time) => {
    const seconds = document.getElementById("segundos")
    const minutes = document.getElementById("minutos")
    const hours = document.getElementById("horas")
    const days = document.getElementById("dias")

    const qtdSeconds = time % 60
    const qtdMinutes = Math.floor((time % (60 * 60)) / 60)
    const qtdHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60))
    const qtdDays = Math.floor(time / (60 * 60 * 24))

    seconds.textContent = formatDigit(qtdSeconds)
    minutes.textContent = formatDigit(qtdMinutes)
    hours.textContent = formatDigit(qtdHours)
    days.textContent = formatDigit(qtdDays)
}

const countdown = (time) => {
    const stopCount = () => clearInterval(id)

    const count = () => {
        if (time === 0) {
            stopCount()
        }
        update(time)
        time--
    }
    const id = setInterval(count, 1000)
}

const timeLeft = () => {
    // 1 de janeiro de 1970
    const eventDate = new Date("2021-11-14 15:20:00")
    const today = Date.now()
    return Math.floor((eventDate - today) / 1000)
}

countdown(timeLeft())