'use strict'

renderGallery()

function renderGallery() {
    resetMeme()

    const imgs = getImgs()
    let imgsStr = ''

    imgsStr = imgs.map(img => 
        `<img class="images pointer" src="${img.url}" data-id="${img.id}" onclick="onImgSelect(this)">`)

    const elSection = document.querySelector('.gallery-images')
    elSection.innerHTML = imgsStr.join('')
}

function onImgSelect(imgSelected) {
    toggleDisplay()
    
    const selectedImgId = imgSelected.dataset.id
    setSelectedImage(selectedImgId)
}

function toggleDisplay() {
    const elGallery = document.querySelector('.gallery-images')
    elGallery.classList.toggle('hidden')

    const elEditor = document.querySelector('.editor-meme')
    elEditor.classList.toggle('hidden')
}

function onDisplayGallery() {
    resetMeme()

    const elGallery = document.querySelector('.gallery-images')
    if (elGallery.classList.contains('hidden')) toggleDisplay()
}