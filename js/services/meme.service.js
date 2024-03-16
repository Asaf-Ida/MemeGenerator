'use strict'

let gImgs

let gId = 0

let gMeme = { 
    selectedImgId: 1, 
    selectedLineIdx: 0, 
    lines: [
        {   
            id: 0,
            txt: 'Add Text Here', 
            size: 20, 
            color: 'black' 
        }
    ] 
}

_createImgs()

function _createImgs() {
    gImgs = [
        _createImg(['celeb', 'funny']),
        _createImg(['dogs', 'cute']),
        _createImg(['dogs', 'cute', 'babies', 'sleeping']),
        _createImg(['cats', 'cute', 'sleeping']),
        _createImg(['babies']),
        _createImg(['celeb', 'funny'])
    ]
}

function _createImg(keywords) {
    return {
        id: ++gId,
        url: 'img/' + gId + '.jpg',
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

function setImg(imgUrlSelected) {
    console.log(gImgs)
    gMeme.imgUrl = imgUrlSelected
}

function setLineTxt(selectedLineIdx, newTxt) {
    gMeme.lines[selectedLineIdx].txt = newTxt
}