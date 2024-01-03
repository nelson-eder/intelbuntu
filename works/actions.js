const startRTSP = require('./rtsp')
const store = require('../storage/storage.js');

var streams = null
const storage = store.get()
console.log('storage: ', storage)
const rtspData = storage.rtspData
const settings = storage.settings

function presets(){
    var inputs = document.querySelectorAll('.headerInput')

    if(settings.hideInfo == 'true') hideInfos(true)

    inputs.forEach((input) =>{
        if(input.id === 'user'){
            input.value = rtspData.user
        }
        if(input.id === 'password'){
            input.value = rtspData.password
        }
        if(input.id === 'IP'){
            input.value = rtspData.IP
        }
        if(input.id === 'PORT'){
            input.value = rtspData.PORT
        }
    })
}

function start(){
    let _data = storage
    var inputs = document.querySelectorAll('.headerInput')

    if(streams){
        streams.forEach((str) => {
            //str.prototype.stop();
            str.stop()
        })
    }

    inputs.forEach((input) =>{

        if(input.id === 'user'){
            _data.rtspData.user = input.value
        }
        if(input.id === 'password'){
            _data.rtspData.password = input.value
        }
        if(input.id === 'IP'){
            _data.rtspData.IP = input.value
        }
        if(input.id === 'PORT'){
            _data.rtspData.PORT = input.value
        }

        store.set(_data)
    })

    streams = startRTSP(_data);
}

function hideInfos(auto){
    var inputs = document.querySelectorAll('.headerInput')

    if(!auto){
        if(!inputs[0].classList.contains('blur')){
            inputs.forEach((input) =>{
                input.classList.add('blur')
                input.readOnly = true

                storage.settings.hideInfo = 'true'
                store.set(storage)
                console.log('blu')
            })
        }else{
            inputs.forEach((input) =>{
                input.classList.remove('blur')
                input.readOnly = false
                
                storage.settings.hideInfo = 'false'
                store.set(storage)
                console.log('noBlu')
            })
        }
    }else{
        if(!inputs[0].classList.contains('blur')){
            inputs.forEach((input) =>{
                input.classList.add('blur')
                input.readOnly = true
            })
        }else{
            inputs.forEach((input) =>{
                input.classList.remove('blur')
                input.readOnly = false
            })
        }
    }
}

module.exports = { presets, start, hideInfos }