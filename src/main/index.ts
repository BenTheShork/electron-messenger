import { app, BrowserWindow } from 'electron';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  console.log('Creating window...');
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  console.log('Loading URL...');

  const startUrl = process.env.ELECTRON_START_URL || 'http://localhost:1234';
  console.log('Start URL:', startUrl);
  
  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools();

  mainWindow.webContents.on('did-finish-load', () => {
    console.log('Page loaded successfully');
  });

  mainWindow.webContents.on('did-fail-load', (_event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription);
  });
}

app.whenReady().then(createWindow);