'use strict'

let gImgs

let gIdImg = 0

let gIdLine = 0

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            id: 0,
            txt: 'Add Text Here',
            size: 30,
            strokeColor: 'black',
            fillColor: 'white',
            fontStyle: 'Impact',
            positionX: 150,
            positionY: 30
        }
    ]
}

_createImgs()

function createLine() {
    const line = {
        id: ++gIdLine,
        txt: 'Add Text Here',
        size: 30,
        strokeColor: 'black',
        fillColor: 'white',
        fontStyle: 'Impact',
        positionX: 150,
        positionY: 100 * gIdLine
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx++
}

function _createImgs() {
    gImgs = [
        _createImg(['celeb', 'funny', 'stupid']),
        _createImg(['dogs', 'cute']),
        _createImg(['dogs', 'cute', 'babies', 'sleeping']),
        _createImg(['cats', 'cute', 'sleeping']),
        _createImg(['babies', 'angry']),
        _createImg(['celeb', 'funny'])
    ]
}

function _createImg(keywords) {
    return {
        id: ++gIdImg,
        url: 'img/' + gIdImg + '.jpg',
        keywords
    }
}

function getImg(imgId) {
    return gImgs.find(img => img.id === imgId)
}

function getLine(lineId) {
    const lines = gMeme.lines
    return lines.find(line => line.id === lineId)
}

function getMeme() {
    return gMeme
}

function getImgs() {
    return gImgs
}

function setLineTxt(selectedLineIdx, newTxt) {
    gMeme.lines[selectedLineIdx].txt = newTxt
}

function setImg(selectedImgId) {
    gMeme.selectedImgId = +selectedImgId
}

function setStrokeColor(selectedLineIdx, newStrokeColor) {
    gMeme.lines[selectedLineIdx].strokeColor = newStrokeColor
}

function setFillColor(selectedLineIdx, newFillColor) {
    gMeme.lines[selectedLineIdx].fillColor = newFillColor
}

function changeFontSize(selectedLineIdx, fontChange) {
    gMeme.lines[selectedLineIdx].size += fontChange
}

function changeFontStyle(selectedLineIdx, fontStyleNew) {
    gMeme.lines[selectedLineIdx].fontStyle = fontStyleNew
}