'use strict'

let gImgs

var gId = 0

let gMeme = {
    lineTxt: 'Add Text Here',
    imgUrl: 'img/19.jpg'
}

_createImages()

function _createImages() {
    gImgs = [
        _createImage(['celeb', 'funny']),
        _createImage(['dogs', 'cute']),
        _createImage(['dogs', 'cute', 'babies', 'sleeping']),
        _createImage(['cats', 'cute', 'sleeping']),
        _createImage(['babies']),
        _createImage(['celeb', 'funny'])
    ]
}

function _createImage(keywords) {
    return {
        id: ++gId, 
        url: 'img/' + gId + '.jpg',
        keywords
    }
}

function getMeme() {
    return gMeme
}

function setImg(imgUrlSelected) {
    console.log(gImgs)
    gMeme.imgUrl = imgUrlSelected
}

function setLineTxt(newTxt) {
    gMeme.lineTxt = newTxt
}