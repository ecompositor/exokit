const {BrowserWindow} = require('electron');
const {app} = require('electron');

const { execFile, spawn } = require('child_process');

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let window = null;



// Wait until the app is ready
app.once('ready', () => {

  spawn('node', ['C:\\Users\\ceddy\\Documents\\GitHub\\exokit\\launcherNew\\public\\server.js'], {detached: true, stdio: ['ignore', 'ignore', 'ignore']});

  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 800px
    width: 1200,
    // Set the initial height to 600px
    height: 800,
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
    backgroundColor: '#D6D8DC',
    // Don't show the window until it's ready, this prevents any white flickering
    show: false,

    icon: path.join(__dirname, 'ExokitLogo.png')
  });

  window.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show();
  });
});
