var Stream = require('node-rtsp-stream')
let store = require('../storage/storage.js')
const wss = require('ws')


function startRTSP(storage){
    let i = 1
    let rtsp = storage.rtspData
    let streams = []

    for(i = 1; i < 5; i++){
        let streamUrl = `rtsp://${rtsp.user}:${rtsp.password}@${rtsp.IP}:${rtsp.PORT}/cam/realmonitor?channel=${i}&subtype=0`

        if(i === 1){
            var stream1 = new Stream({
                name: 'name',
                streamUrl: streamUrl,
                wsPort: 9999,
                ffmpegOptions: { // options ffmpeg flags
                  '-stats': '', // an option with no neccessary value uses a blank string
                }
            })
            streams.push(stream1)
        }
        if(i === 2){
            var stream2 = new Stream({
                name: 'name',
                streamUrl: streamUrl,
                wsPort: 9998,
                ffmpegOptions: { // options ffmpeg flags
                '-stats': '', // an option with no neccessary value uses a blank string
                '-r': 30 // options with required values specify the value after the key
                }
            })
            streams.push(stream2)
        }
        if(i === 3){
            var stream3 = new Stream({
                name: 'name',
                streamUrl: streamUrl,
                wsPort: 9997,
                ffmpegOptions: { // options ffmpeg flags
                '-stats': '', // an option with no neccessary value uses a blank string
                }
            })
            streams.push(stream3)
        }
        if(i === 4){
            var stream4 = new Stream({
                name: 'name',
                streamUrl: streamUrl,
                wsPort: 9996,
                ffmpegOptions: { // options ffmpeg flags
                    '-stats': '', // an option with no neccessary value uses a blank string
                    '-r': 30 // options with required values specify the value after the key
                }
            })
            streams.push(stream4)
        }
    }
    return streams
}

module.exports = startRTSP