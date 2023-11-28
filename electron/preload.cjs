const { contextBridge, ipcRenderer } = require('electron')
// const fs = require('fs')
//
// const content = fs.readFileSync('package.json', 'utf-8')
//
// console.log(content)

// 桥接
contextBridge.exposeInMainWorld('api', {
    a: 333,
    zd: () => {
        // console.log('00000')
        ipcRenderer.send('saveFile')
    }
})
