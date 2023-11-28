/*
 * @Author: zdh
 * @Date: 2023-11-27 14:24:15
 * @LastEditTime: 2023-11-27 14:49:39
 * @Description:
 */
const { BrowserWindow, app, ipcMain } = require('electron')
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // alwaysOnTop: true,
    webPreferences: {
      preload: path.resolve(__dirname, './preload.cjs'),
      nodeIntegration: true
    }
  })
  mainWindow.loadURL('http://localhost:5173/')
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('saveFile', () => {
  console.log('save')
})
