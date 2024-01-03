const { app, BrowserWindow } = require('electron')
const defaultWinSize =  { width: 700, height: 400 }

const createWindow = () => {
    _win = new BrowserWindow({
      width: defaultWinSize.width,
      height: defaultWinSize.height,
      minWidth: defaultWinSize.width,
      minHeight: defaultWinSize.height,

      title: 'Intelbuntu',
      icon: './build/512x512.png',
      show: false,
      autoHideMenuBar: true,
      transparent: true,
      resizable: true,
      darkTheme: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    });
    _win.setBackgroundColor('rgba(0, 0, 0, 0)')
    _win.loadFile('index.html')
    _win.once('ready-to-show', () => {
      _win.show()
    })
}

app.whenReady().then(() => {
    createWindow()
})