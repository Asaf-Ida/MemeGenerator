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
    
    const elImg = new Image()
    elImg.src = memeImg.url
    
    resizeCanvas()
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        for (let i = 0; i < meme.lines.length; i++) {
            const memeLine = getLine(i)
            renderMemeText(memeLine)
        }
    }
}

function renderMemeText(line) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor

    gCtx.font = line.size + 'px ' + line.fontStyle

    gCtx.fillText(line.txt, line.positionX, line.positionY)
    gCtx.strokeText(line.txt, line.positionX, line.positionY)
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

function onChangeFontSize(fontChange) {
    const meme = getMeme()
    changeFontSize(meme.selectedLineIdx, fontChange)
    renderMeme()
}

function onAddingLine() {
    const elSelect = document.querySelector('.control-text select')
    elSelect.selectedIndex = null

    createLine()
    renderMeme()
}

function onChangeFontStyle(elSelect) {
    console.log(elSelect.value)

    const meme = getMeme()
    changeFontStyle(meme.selectedLineIdx, elSelect.value)
    renderMeme()
}