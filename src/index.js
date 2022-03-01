import { app, BrowserWindow } from 'electron'


import { format } from 'url' 
import { join } from 'path'  




let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(format ({ 
      pathname: join(__dirname, 'index.html'), 
      protocol: 'file:',
      slashes: true 
   }))
}  



app.on('ready', createWindow) 