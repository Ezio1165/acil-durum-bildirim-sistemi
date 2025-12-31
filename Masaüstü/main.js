const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: width,        // Tüm ekran genişliği
    height: height,      // Tüm ekran yüksekliği
    x: 0,
    y: 0,
    transparent: true,   // ARKA PLAN ŞEFFAF (Önemli)
    frame: false,        // Pencere kenarlığı yok (Kapatma tuşu vs. yok)
    alwaysOnTop: true,   // HER ZAMAN ÜSTTE (Oyunların üstünde durur)
    skipTaskbar: true,   // Görev çubuğunda görünmez (Gizli çalışır)
    hasShadow: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Tıklanabilirlik Ayarı:
  // Pencerenin boş yerlerine tıklayınca arkadaki uygulamaya (oyuna/tarayıcıya) geçsin.
  // Sadece dolu olan (bizim alarm kutumuz) yerler tıklamayı yakalasın istiyorsan:
  mainWindow.setIgnoreMouseEvents(true, { forward: true });

  // Mouse hareketlerini dinleyip, eğer mouse bizim alarmın üzerindeyse tıklamayı açabiliriz
  // (Bu biraz ileri seviye, şimdilik ignoreMouseEvents(true) ile tamamen hayalet yapalım)

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});