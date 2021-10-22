'use strict'

const images = [
    {'id': '1', 'url':'./images/pitch-perfect-1-1.jpg'},
    {'id': '2', 'url':'./images/pitch-perfect-1-2.jpg'},
    {'id': '3', 'url':'./images/pitch-perfect-2.jpg'},
    {'id': '4', 'url':'./images/pitch-perfect-3.jpg'},
    {'id': '5', 'url':'./images/rizzoli-and-isles.jpg'},
    {'id': '6', 'url':'./images/castle.jpg'},
    {'id': '7', 'url':'./images/shield.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems )

let items = document.querySelectorAll('.item')

const next = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const previous = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0] )
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)