const { create } = require('domain');
const {app, BrowserWindow, ipcMain, dialog} = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload:path.join(__dirname, 'preload.js'),
        }
    });

    mainWindow.loadURL('http://localhost:3000/');

    //开发者工具
    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
};

async function handleFileOpen() {
    const {canceled, filePaths} = await dialog.showOpenDialog({
        properties:['openDirectory', 'openFile']});
    if (!canceled && filePaths.length > 0) {
        return filePaths[0];
    }
}

app.whenReady().then(() => {
    ipcMain.handle('open-file-dialog', handleFileOpen);

    createWindow();

    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});