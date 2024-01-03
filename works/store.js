const store = require('electron-json-storage');

store.set('rtspData', {
    rtspData: {
        user: '',
        password: '',
        IP: '',
        PORT: '',
    }
});

store.set('settings', {
    settings: {
        hideInfo: 'false'
    }
});

module.exports = store