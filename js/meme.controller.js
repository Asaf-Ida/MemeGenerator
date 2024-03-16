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
    const memeImg = getImg(meme.selectedImgId)
    const memeLine = getLine(meme.selectedLineIdx)

    const elImg = new Image()
    elImg.src = memeImg.url

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderMemeText(memeLine.txt)
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
    const meme = getMeme()
    setLineTxt(meme.selectedLineIdx, newTxt)
    renderMeme()
}

function setSelectedImage(imgUrlSelected) {
    setImg(imgUrlSelected)
    renderMeme()
}