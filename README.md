🚨 Acil Durum Bildirim Sistemi (Desktop & Mobile)

Bu proje, bir mobil cihaz (kumanda) üzerinden, hedef masaüstü bilgisayarda anlık olarak tam ekran üstü (overlay) acil durum bildirimi göstermeyi sağlayan bir IoT/Web uygulamasıdır.

Mobil cihazdan gönderilen komut, Firebase Realtime (Firestore) üzerinden saniyeler içinde masaüstü uygulamasını tetikler. Masaüstü uygulaması, bilgisayarda hangi oyun veya program açık olursa olsun en üst katmanda belirir ve titreme animasyonu ile dikkat çeker.

(Buraya daha sonra uygulamanın ekran görüntüsünü ekleyebilirsiniz)

🚀 Özellikler

Mobil Kumanda: Herhangi bir telefon tarayıcısından çalışır (App yüklemeye gerek yok).

Masaüstü İstemcisi: Electron.js ile çalışır. Arka planı şeffaftır, sadece uyarı geldiğinde görünür.

Realtime: Firebase Firestore sayesinde gecikme ~1 saniyenin altındadır.

Görsel Efekt: Uyarı geldiğinde dikkat çekici bir "Shake" (Titreme) animasyonu çalışır.

Özelleştirilebilir Mesaj: Telefondan istediğiniz mesajı yazıp ekrana yansıtabilirsiniz.

🛠️ Kurulum Rehberi

Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.

Gereksinimler

Node.js (Bilgisayarınızda kurulu olmalı)

Firebase Hesabı (Ücretsiz)

Adım 1: Firebase Ayarları

Bu proje veritabanı olarak Firebase kullanır. Kendi projenizi oluşturmalısınız:

Firebase Konsolu'na gidin ve yeni bir proje oluşturun.

Firestore Database'i aktif edin ve "Test Mode" seçerek başlatın.

Şu koleksiyon yolunu oluşturun: artifacts > default-app-id > public > data > alerts > status

Proje ayarlarından Web App oluşturun ve size verilen firebaseConfig bilgilerini (apiKey, projectId vb.) kopyalayın.

Adım 2: Projeyi İndirme

Terminali açın ve projeyi klonlayın:

git clone [https://github.com/KULLANICI_ADIN/acil-durum-bildirim-sistemi.git](https://github.com/KULLANICI_ADIN/acil-durum-bildirim-sistemi.git)
cd acil-durum-bildirim-sistemi


Adım 3: Masaüstü Uygulaması Kurulumu

Masaustu klasörüne gidin:

cd Masaustu


Gerekli paketleri yükleyin:

npm install


index.html dosyasını açın ve Adım 1'de aldığınız Firebase bilgilerini ilgili yere yapıştırın:

const firebaseConfig = {
    apiKey: "BURAYA_KENDİ_KEYİNİZİ_YAZIN",
    // ... diğer bilgiler
};


Uygulamayı başlatın:

npm start


Adım 4: Mobil Kumanda Kurulumu

Mobil/index.html dosyasını bir metin editörü ile açın.

Yine aynı Firebase bilgilerini bu dosyadaki ilgili alana yapıştırın.

Bu dosyayı bir sunucuya yükleyin (Örn: Netlify Drop kullanarak ücretsiz yükleyebilirsiniz) veya bilgisayarınızda bir yerel sunucu ile açın.

Oluşan linki telefonunuzda açın.

📦 Uygulamayı Paketleme (.exe Yapma)

Masaüstü uygulamasını arkadaşlarınızla paylaşmak veya başlangıçta otomatik çalışacak bir .exe dosyası haline getirmek için:

# Masaustu klasörü içindeyken:
npm install electron-packager -g
electron-packager . AcilDurumApp --platform=win32 --arch=x64


Bu işlem sonunda klasörünüzde içinde .exe olan yeni bir klasör oluşacaktır.

🤝 Katkıda Bulunma

Projeyi geliştirmek isterseniz Pull Request gönderebilirsiniz.

Projeyi Fork'layın.

Yeni bir Branch oluşturun (git checkout -b ozellik/YeniOzellik).

Değişikliklerinizi Commit'leyin.

Branch'inizi Push'layın.

Bir Pull Request oluşturun.
