const { hideInfos, start } = require('./works/actions')

document.querySelector('#hideInfo')
.addEventListener('click', () => { hideInfos(false) })

document.querySelector('#start')
.addEventListener('click', start)

document.querySelector('#knowMoreButton')
.addEventListener('click', () => { require('electron').shell.openExternal("https://github.com/nelson-eder") })