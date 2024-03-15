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
    const meme = getMeme()

    const elImg = new Image()
    elImg.src = meme.imgUrl

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderMemeText(meme.lineTxt)
    }
}

function renderMemeText(txt) {
    // gCtx.lineWidth = 2
    // gCtx.strokeStyle = 'blue'
    // gCtx.fillStyle = 'orange'

    gCtx.font = '45px Arial'

    gCtx.fillText(txt, 50, 50)
    gCtx.strokeText(txt, 50, 50)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth
}

function updateLineTxt(newTxt) {
    setLineTxt(newTxt)
    renderMeme()
}