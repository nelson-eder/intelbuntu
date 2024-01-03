const fs = require('fs')

const store = () => {
    const get = () => {
        let _data
        /*fs.readFile(__dirname + '/storage.json', (err, data) => {
            if(err) throw err

            const objData = JSON.parse(data)

            _data = objData

            return objData
        })*/

        _data = fs.readFileSync(__dirname + '/storage.json')

        return JSON.parse(_data)
    }

    const set = (data) => {
        let _data = JSON.stringify(data)

        fs.writeFile(__dirname + '/storage.json', _data, (err) => {if(err) throw err})
    }

    return { get, set}
}

module.exports = store()