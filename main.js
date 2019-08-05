const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  // Create Browser Window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/image/system-task.png",
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Open devtools
  //   win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

// Run create window function
app.on("ready", createWindow);

// Quit when all windoes are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
