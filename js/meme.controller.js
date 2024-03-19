'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.editor-meme canvas')
    gCtx = gElCanvas.getContext('2d')

    console.log('canvas is ready')

    window.addEventListener('resize', renderMeme)
}

function renderMeme() {
    const meme = getMeme()
    const memeImg = getImg(meme.selectedImgId)
    const memeLine = getLine(meme.selectedLineIdx)

    const elImg = new Image()
    elImg.src = memeImg.url

    resizeCanvas()
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderMemeText(memeLine)
    }
}

function renderMemeText(line) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor

    gCtx.font = '45px Arial'

    gCtx.fillText(line.txt, 50, 50)
    gCtx.strokeText(line.txt, 50, 50)
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

function setSelectedImage(selectedImgId) {
    setImg(selectedImgId)
    renderMeme()
}

function onDownloadMeme(elLink) {
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
}

function onSetStrokeColor(elInput) {
    const strokeColor = elInput.value

    const meme = getMeme()
    setStrokeColor(meme.selectedLineIdx, strokeColor)
    renderMeme()
}

function onSetFillColor(elInput) {
    const fillColor = elInput.value

    const meme = getMeme()
    setFillColor(meme.selectedLineIdx, fillColor)
    renderMeme()
}