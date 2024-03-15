'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.editor-meme canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas()
    renderMeme()

    window.addEventListener('resize', resizeCanvas)
}

function renderMeme() {
    const elImg = new Image()
    elImg.src = getMeme()

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderMemeText()
    }
}

function renderMemeText() {
    // gCtx.lineWidth = 2
    // gCtx.strokeStyle = 'blue'
    // gCtx.fillStyle = 'orange'

    gCtx.font = '45px Arial'

    gCtx.fillText('Add Text Here', 50, 50)
    gCtx.strokeText('Add Text Here', 50, 50)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth
}