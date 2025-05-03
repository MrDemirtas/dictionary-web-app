# Dictionary Web App 📚

Bu proje, kullanıcıların İngilizce kelimelerin anlamlarını, telaffuzlarını ve kullanım örneklerini arayabileceği modern bir web uygulamasıdır.

## 🌟 Özellikler

- Kelime arama ve detaylı sonuç görüntüleme
- Kelimelerin sesli telaffuzunu dinleme
- Eş ve zıt anlamlı kelimelere hızlı erişim
- Koyu/açık tema desteği
- Farklı yazı tipi seçenekleri (Sans Serif, Serif, Mono)
- Responsive tasarım

## 🛠️ Kullanılan Teknolojiler

- **React** (v18.3.1) - Kullanıcı arayüzü geliştirme
- **Vite** (v6.0.5) - Hızlı geliştirme ortamı ve derleme aracı
- **ESLint** (v9.17.0) - Kod kalitesi ve standartları
- **Free Dictionary API** - Kelime veritabanı ve tanımlar

## 📁 Proje Yapısı

```
dictionary-web-app/
├── public/              # Statik dosyalar (SVG ikonlar)
├── src/                 # Kaynak kodlar
│   ├── components/      # React bileşenleri
│   │   ├── Dictionary.jsx
│   │   ├── Header.jsx
│   │   └── NotFound.jsx
│   ├── App.css         # Ana stil dosyası
│   ├── darkMode.css    # Koyu tema stilleri
│   ├── reset.css       # CSS sıfırlama
│   ├── App.jsx         # Ana uygulama bileşeni
│   └── main.jsx        # Uygulama giriş noktası
├── index.html          # HTML şablon dosyası
└── vite.config.js      # Vite yapılandırması
```

## 🚀 Kurulum ve Çalıştırma

1. Projeyi klonlayın:

```bash
git clone https://github.com/MrDemirtas/dictionary-web-app.git
cd dictionary-web-app
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

4. Tarayıcınızda açın:

```
http://localhost:5173
```

## 📦 Derleme

Projeyi production için derlemek:

```bash
npm run build
```

Derlenen projeyi önizlemek:

```bash
npm run preview
```

## 🔍 Kod Kalitesi

ESLint ile kod kontrolü:

```bash
npm run lint
```

## 🌐 API Kullanımı

Uygulama, [Free Dictionary API](https://dictionaryapi.dev/) servisini kullanarak kelime tanımlarını ve ilgili bilgileri çeker. API ücretsizdir ve herhangi bir kimlik doğrulama gerektirmez.

## 🎨 Tema ve Özelleştirme

- Koyu/açık tema tercihi otomatik olarak kaydedilir
- Yazı tipi tercihleri kullanıcı deneyimini kişiselleştirir
- Responsive tasarım tüm ekran boyutlarına uyum sağlar
