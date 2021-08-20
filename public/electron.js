const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
  });

  mainWindow.loadURL("http://localhost:3000");
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
