'use strict'

let gIdImg = 0
let gImgs
let gIdLine
let gMeme

_createImgs()

function createDefaultMeme() {
    gIdLine = 0

    gMeme = {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            {
                id: gIdLine++,
                txt: 'Add Text Here',
                fontSize: 30,
                strokeColor: 'black',
                fillColor: 'white',
                fontStyle: 'Impact',
                txtAlign: 'center',
                // positionX: 140,
                positionY: 50
            }
        ]
    }
}

function createLine() {
    const line = {
        id: gIdLine++,
        txt: 'Add Text Here',
        fontSize: 30,
        strokeColor: 'black',
        fillColor: 'white',
        fontStyle: 'Impact',
        txtAlign: 'center',
        // positionX: 140,
        positionY: 50 + (70 * (gIdLine - 1))
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
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
    gMeme.lines[selectedLineIdx].fontSize += fontChange
}

function changeFontStyle(selectedLineIdx, fontStyleNew) {
    gMeme.lines[selectedLineIdx].fontStyle = fontStyleNew
}

function SwitchLine() {
    gMeme.selectedLineIdx === gMeme.lines.length - 1 ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
}

function alignTextLeft(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].txtAlign = 'left'
}

function alignTextCenter(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].txtAlign = 'center'
}

function alignTextRight(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].txtAlign = 'right'
}

function positionTextUp(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].positionY -= 20
}

function positionTextDown(selectedLineIdx) {
    gMeme.lines[selectedLineIdx].positionY += 20
}

function removeLine(selectedLineIdx) {
    if (gMeme.lines.length === 1) return

    gMeme.lines.splice(selectedLineIdx, 1)
    gIdLine = 0
    gMeme.lines.forEach(line => line.id = gIdLine++)

    if (selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function updateMemeSize(selectedLineIdx, originX, originY, lineWidth, lineHeight) {
    gMeme.lines[selectedLineIdx].size = {
        originX,
        originY,
        lineWidth,
        lineHeight
    }
}

function checkSelectLine(offsetX, offsetY) {
    gMeme.lines.forEach(line => {
        if (offsetX > line.size.originX && offsetX < (line.size.originX + line.size.lineWidth) && 
        offsetY > line.size.originY && offsetY < (line.size.originY + line.size.lineHeight)) {
                gMeme.selectedLineIdx = line.id
            }
    })
}

// Service functions
function _createImgs() {
    gImgs = [
        _createImg(['celeb', 'funny', 'stupid']),
        _createImg(['dogs', 'cute']),
        _createImg(['dogs', 'cute', 'babies', 'sleeping']),
        _createImg(['cats', 'cute', 'sleeping']),
        _createImg(['babies', 'angry']),
        _createImg(['celeb', 'funny']), 
        _createImg(['baby', 'funny', 'cute']), 
        _createImg(['crazy', 'funny', 'movie']), 
        _createImg(['baby', 'funny',]), 
        _createImg(['celeb', 'funny']), 
        _createImg(['movie', 'fight']), 
        _createImg(['celeb']), 
        _createImg(['celeb', 'movie']), 
        _createImg(['crazy', 'movie']), 
        _createImg(['movie']), 
        _createImg(['movie', 'funny']), 
        _createImg(['crazy', 'angry', 'celeb']), 
        _createImg(['cartoon', 'movie']), 
        _createImg(['cute', 'king', 'dog']), 
    ]
}

function _createImg(keywords) {
    return {
        id: ++gIdImg,
        url: 'img/' + gIdImg + '.jpg',
        keywords
    }
}