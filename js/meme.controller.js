'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.editor-meme canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas()
    renderMeme()
    renderMemeText()

    window.addEventListener('resize', () => resizeCanvas())
}

function renderMeme() {
    const elImg = new Image()
    elImg.src = getMeme()

    elImg.onload = () => 
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMemeText() {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'orange'
    gCtx.fillStyle = 'orange'
    
    gCtx.font = '45px Arial'
    
    gCtx.fillText('I am stupid!', gElCanvas.width / 2, gElCanvas.height / 2)
    gCtx.strokeText('I am stupid!', gElCanvas.width / 2, gElCanvas.height / 2)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth
}