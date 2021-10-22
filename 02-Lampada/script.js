const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken()) {
        lamp.src = './images/ligada.jpg'
    }
}

function lampOff () {
    if (!isLampBroken()) {
        lamp.src = './images/desligada.jpg'
    }
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn()
        turnOnOff.textContent = 'Desligar'
        turnOnOff.style.background = 'rgb(167, 10, 10)'
    } else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
        turnOnOff.style.background = 'rgb(12, 185, 21)'
    }
}

function lampBroken () {
    lamp.src = './images/quebrada.jpg'
}

turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
