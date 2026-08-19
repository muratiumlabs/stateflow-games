# 🎮 StateFlow Games - Resmi Web Sitesi & Google Play Portal

StateFlow Games mobil oyun stüdyosu için geliştirilmiş; oyun vitrini, Google Play Store uyumlu **Gizlilik Politikası (Privacy Policy)**, **Kullanım Koşulları (Terms of Service)** ve **Veri Silme Yönergesi (Data Deletion)** sayfalarını barındıran modern, yüksek performanslı ve %100 ücretsiz 7/24 yayına alınabilir web sitesi projesi.

---

## 🌟 Özellikler

- **7/24 Kesintisiz & %100 Ücretsiz Hosting**: GitHub Pages veya Vercel üzerinde hiçbir sunucu ücreti ödemeden ömür boyu yayınlama.
- **Google Play Store %100 Politika Uyumu**:
  - `privacy-policy.html`: Google AdMob, Firebase, Unity Ads, GDPR, COPPA uyumlu tam gizlilik politikası.
  - `data-deletion.html`: Google Play Console'un zorunlu kıldığı kullanıcı verisi silme talep yönergesi.
  - `terms-of-service.html`: Mobil oyuncu kullanım şartları ve fikri mülkiyet sözleşmesi.
- **Modern Oyun Stüdyosu Teması**: Neon siber akış (flow) efektleri, karanlık mod (Dark UI), cam efekti (glassmorphism) ve şık animasyonlar.
- **Dinamik Oyun Vitrini**:
  - `js/games-data.js` üzerinden tek tıkla yeni oyun ekleme/çıkarma.
  - Kategori filtreleme (Aksiyon, Bulmaca, Macera vb.).
  - Oyun detay modalı (özellikler, ekran görüntüleri, doğrudan Google Play indirme butonu).
- **Tam Mobil & Tablet Uyumluluğu**: Tüm cihaz boyutlarında kusursuz görünüm.

---

## 🚀 7/24 ÜCRETSİZ YAYINA ALMA (HOSTING) REHBERİ

Bu siteyi **GitHub Pages** ile 2 dakikada tamamen ücretsiz ve 7/24 kesintisiz olarak yayına alabilirsiniz:

### 1. Yöntem: GitHub Pages ile Yayınlama (Önerilen)

1. [GitHub.com](https://github.com)'a gidin ve giriş yapın (hesabınız yoksa ücretsiz oluşturun).
2. Sağ üstteki **`+`** simgesine tıklayıp **`New repository`** seçin.
3. Repository name alanına örneğin `stateflow-games` yazın.
4. Reponun **`Public`** (Herkese açık) olduğundan emin olun ve **`Create repository`** butonuna basın.
5. Bu klasördeki tüm dosyaları (tüm `html`, `css/`, `js/`, `assets/` klasörlerini) GitHub reponuza yükleyin:
   - **Tarayıcıdan yüklemek için:** Repo sayfasında **`uploading an existing file`** linkine tıklayın ve tüm dosyaları sürükleyip bırakın, ardından yeşil **`Commit changes`** butonuna basın.
   - **Git komut satırı ile:**
     ```bash
     git init
     git add .
     git commit -m "Initial commit - StateFlow Games site"
     git branch -M main
     git remote add origin https://github.com/KULLANICI_ADINIZ/stateflow-games.git
     git push -u origin main
     ```
6. Reponuzun üst menüsünden **`Settings` (Ayarlar)** sekmesine tıklayın.
7. Sol menüden **`Pages`** seçeneğine gelin.
8. **Branch** kısmından `main` (veya `master`) seçip `/ (root)` klasörünü belirleyin ve **`Save`** butonuna tıklayın.
9. **Tebrikler! 🎉** 1-2 dakika içinde siteniz şu adreste 7/24 aktif olacaktır:
   👉 `https://kullaniciadiniz.github.io/stateflow-games/`

---

### 2. Yöntem: Vercel ile 1 Tıkla Yayınlama (Alternatif)

1. [Vercel.com](https://vercel.com)'a ücretsiz üye olun.
2. **`Add New...` > `Project`** seçin ve GitHub reponuzu bağlayın (veya Vercel CLI / Drag & drop ile yükleyin).
3. **`Deploy`** butonuna basın.
4. Siteniz anında `https://stateflow-games.vercel.app` şeklinde 7/24 aktif hale gelecektir!

---

## 📱 Google Play Console'a Linkleri Ekleme

Sitenizi yayına aldıktan sonra elde ettiğiniz linkleri Play Console'a şu şekilde ekleyebilirsiniz:

1. **Gizlilik Politikası (Privacy Policy):**
   - **URL:** `https://kullaniciadiniz.github.io/stateflow-games/privacy-policy.html`
   - **Nereye girilir:** Google Play Console > *Sol Menü* > **Uygulama İçeriği (App Content)** > **Gizlilik Politikası (Privacy Policy)** > *URL alanına yapıştırıp kaydedin.*

2. **Veri Silme Yönergesi (Data Deletion):**
   - **URL:** `https://kullaniciadiniz.github.io/stateflow-games/data-deletion.html`
   - **Nereye girilir:** Google Play Console > **Veri Güvenliği (Data Safety)** > **Hesap Silme / Veri Silme URL'si**.

---

## 🕹️ Yeni Oyun Nasıl Eklenir?

Yeni bir oyun geliştirdiğinizde veya güncellediğinizde sadece [`js/games-data.js`](js/games-data.js) dosyasını açıp listeye yeni bir obje eklemeniz yeterlidir:

```javascript
{
  id: "yeni-oyununuz",
  title: "Oyununuzun Adı",
  category: "Aksiyon", // Aksiyon, Bulmaca, Macera vb.
  status: "live", // 'live' (Yayında) veya 'soon' (Yakında)
  rating: 4.9,
  reviewsCount: "250",
  downloads: "10K+",
  icon: "assets/images/oyun-ikon.png",
  banner: "assets/images/oyun-banner.jpg",
  shortDesc: "Oyunun kısa tanıtım cümlesi.",
  fullDesc: "Oyunun detaylı açıklaması.",
  features: [
    "Özellik 1",
    "Özellik 2",
    "Özellik 3"
  ],
  tags: ["3D", "Mobil", "Eğlence"],
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.stateflowgames.oyunadi"
}
```

---

## 📂 Dosya Yapısı

```
StateFlow Games/
├── index.html              # Ana vitrin sayfası (Hero, Oyunlar, İletişim, Hakkımızda)
├── privacy-policy.html     # Google Play Store Gizlilik Politikası sayfası
├── terms-of-service.html   # Kullanım Koşulları sayfası
├── data-deletion.html      # Google Play Veri Silme Yönergesi sayfası
├── css/
│   └── style.css           # Modern Cyberpunk / Dark UI oyun stüdyosu teması
├── js/
│   ├── games-data.js       # Kolay oyun ekleme/düzenleme veri dosyası
│   └── main.js             # Filtreleme, modal, mobil menü ve dinamik render
├── assets/
│   ├── logo.svg            # StateFlow Games vektörel logo
│   └── google-play-badge.svg # Google Play rozeti
└── README.md               # Detaylı kılavuz ve dokümantasyon
```
