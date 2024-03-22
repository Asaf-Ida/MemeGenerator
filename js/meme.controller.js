'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('.editor-meme canvas')
    gCtx = gElCanvas.getContext('2d')

    console.log('canvas is ready')

    window.addEventListener('resize', renderMeme)
}

function resetMeme() {
    createDefaultMeme()
}

function renderMeme() {
    const meme = getMeme()

    const memeImg = getImg(meme.selectedImgId)
    const elImg = new Image()
    elImg.src = memeImg.url

    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    resizeCanvas()

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderMemeLines()
    }
}

function renderMemeLines() {
    const meme = getMeme()
    const currLine = meme.lines[meme.selectedLineIdx]
    renderEditorDisplay(currLine)

    for (var i = 0; i < meme.lines.length; i++) {
        const memeLine = getLine(i)
        renderMemeText(memeLine)
    }

    drawFrame(currLine)
}

function drawFrame(currLine) {
    gCtx.strokeStyle = 'black'
    gCtx.lineWidth = 4

    const positionX = calcPositionX(currLine.txtAlign)

    const originX = positionX - 10
    const originY = currLine.positionY - currLine.fontSize
    const lineWidth = gCtx.measureText(currLine.txt).width + currLine.fontSize - 10
    const lineHeight = currLine.fontSize + 10

    gCtx.strokeRect(originX, originY, lineWidth, lineHeight)

    const meme = getMeme()
    updateMemeSize(meme.selectedLineIdx, originX, originY, lineWidth, lineHeight)
}

function renderEditorDisplay(currLine) {
    const elInput = document.querySelector('.line-text')
    elInput.value = currLine.txt

    const elSelect = document.querySelector('.control-text select')
    elSelect.value = currLine.fontStyle
}

function renderMemeText(line) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.fillColor

    gCtx.font = line.fontSize + 'px ' + line.fontStyle

    const positionX = calcPositionX(line.txtAlign)

    gCtx.fillText(line.txt, positionX, line.positionY)
    gCtx.strokeText(line.txt, positionX, line.positionY)
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth
    gElCanvas.height = elContainer.clientHeight
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
    const elInput = document.querySelector('.line-text')
    elInput.value = 'Add Text Here'

    const elSelect = document.querySelector('.control-text select')
    elSelect.selectedIndex = null

    createLine()
    renderMeme()
}

function onChangeFontStyle(elSelect) {
    const meme = getMeme()
    changeFontStyle(meme.selectedLineIdx, elSelect.value)
    renderMeme()
}

function onSwitchLine() {
    SwitchLine()
    renderMeme()
}

function onAlignTextLeft() {
    const meme = getMeme()
    alignTextLeft(meme.selectedLineIdx)
    renderMeme()
}

function onAlignTextCenter() {
    const meme = getMeme()
    alignTextCenter(meme.selectedLineIdx)
    renderMeme()
}

function onAlignTextRight() {
    const meme = getMeme()
    alignTextRight(meme.selectedLineIdx)
    renderMeme()
}

function onPositionTextUp() {
    const meme = getMeme()
    positionTextUp(meme.selectedLineIdx)
    renderMeme()
}

function onPositionTextDown() {
    const meme = getMeme()
    positionTextDown(meme.selectedLineIdx)
    renderMeme()
}

function calcPositionX(lineAlignment) {
    var positionX
    switch (lineAlignment) {
        case 'left':
            positionX = 20
            break;
        case 'center':
            positionX = (gElCanvas.width / 2) - 100
            break
        case 'right':
            positionX = gElCanvas.width - 150
            break
    }
    return positionX
}

function onRemoveLine() {
    const meme = getMeme()
    removeLine(meme.selectedLineIdx)
    renderMeme()
}

function onSelectLine(ev) {
    const { offsetX, offsetY } = ev

    checkSelectLine(offsetX, offsetY)
    renderMeme()
}