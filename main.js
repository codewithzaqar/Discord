const { app, BrowserWindow, session } = require('electron')
const path = require('path')
require('v8-compile-cache')
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            enableRemoteModule: true,
            nodeIntegration: false,
        }
    })

    mainWindow.loadFile('index.html')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.whenReady().then(() => {
    createWindow()
    session.defaultSession.loadExtension(`${require('electron').app.getAppPath()}/goosemod/`)

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})