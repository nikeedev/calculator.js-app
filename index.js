const { app, BrowserWindow } = require('electron')


const { format } = require('url')
const { join } = require('path')



let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(format ({ 
      pathname: join(__dirname, 'src/index.html'), 
      protocol: 'file:',
      slashes: true 
   }))
}  



app.on('ready', createWindow) 