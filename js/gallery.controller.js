'use strict'

renderGallery()

function renderGallery() {
    resetMeme()

    const imgs = getImgs()
    let imgsStr = ''

    imgsStr = imgs.map(img => 
        `<img class="pointer" src="${img.url}" data-id="${img.id}" onclick="onImgSelect(this)">`)

    const elSection = document.querySelector('.gallery-images')
    elSection.innerHTML = imgsStr.join('')
}

function onImgSelect(imgSelected) {
    displayEditor()
    
    const selectedImgId = imgSelected.dataset.id
    setSelectedImage(selectedImgId)
}

function onDisplayGallery() {
    resetMeme()

    const elGallery = document.querySelector('.gallery-images')
    elGallery.classList.remove('hidden')

    const elEditor = document.querySelector('.editor-meme')
    elEditor.classList.add('hidden')
    
    const elSaved = document.querySelector('.saved-memes-container')
    elSaved.classList.add('hidden')
}

function displayEditor() {
    const elGallery = document.querySelector('.gallery-images')
    elGallery.classList.add('hidden')

    const elEditor = document.querySelector('.editor-meme')
    elEditor.classList.remove('hidden')

    const elSaved = document.querySelector('.saved-memes-container')
    elSaved.classList.add('hidden')
}

function displaySavedMemes() {
    const elGallery = document.querySelector('.gallery-images')
    elGallery.classList.add('hidden')

    const elEditor = document.querySelector('.editor-meme')
    elEditor.classList.add('hidden')

    const elSaved = document.querySelector('.saved-memes-container')
    elSaved.classList.remove('hidden')
}