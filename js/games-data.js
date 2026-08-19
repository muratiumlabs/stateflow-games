/**
 * StateFlow Games - Gerçek Oyun & Uygulama Kataloğu Verisi
 */

const STATEFLOW_GAMES = [
  {
    id: "matematik-kantini",
    title: "Matematik Kantini",
    category: "Eğitici & Matematik",
    status: "live", // Google Play'de Yayında
    rating: 5.0,
    reviewsCount: "Google Play",
    downloads: "Yayında",
    icon: "assets/matematik-kantini-icon.png",
    banner: "assets/matematik-kantini-ss1.jpg",
    shortDesc: "Kantin şefi olun, eğlenceli siparişleri hazırlayın ve 4 işlem zihinsel matematikte rekorlar kırın!",
    fullDesc: "Matematik Kantini; ilkokul, ortaokul öğrencileri ve matematiği seven her yaştan çocuk için geliştirilmiş, 4 işlem zihinsel matematik ve kantin işletme simülasyon oyunudur! Sıkıcı testleri bir kenara bırakın; kantin siparişlerini hazırlarken toplama, çıkarma, çarpma ve bölme işlemlerini eğlenerek çözün.",
    features: [
      "🎯 4 Farklı Matematik İşlemi (+, -, ×, ÷) ve 3 Zorluk Seviyesi (Kolay, Orta, Zor)",
      "🐱 15+ Trend Sevimli Karakter Koleksiyonu (TunTun Sahur, Balerin Kapibara, Sigma Miyav vb.)",
      "🎡 Günün Ödül Çarkı, Sürpriz Hediyeler ve Günlük Giriş Bonusları",
      "🏆 50 Seviye, 12 Özel Başarı Rozeti ve Kantin Çaylağından Sonsuzluk Şampiyonluğuna İlerleme",
      "🔊 Sesli Soru Okuma & Çift Dil (Türkçe / İngilizce) Desteği",
      "📶 İnternetsiz (Offline) Oynanabilir %100 Güvenli Aile Dostu İçerik"
    ],
    tags: ["Matematik", "Eğitici", "4 İşlem", "Kantin Şefi", "Çocuk"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.muratiumlabs.matematikkantini",
    screenshots: [
      "assets/matematik-kantini-ss1.jpg",
      "assets/matematik-kantini-ss2.jpg",
      "assets/matematik-kantini-ss3.jpg",
      "assets/matematik-kantini-ss4.jpg"
    ]
  },
  {
    id: "neuroplex-brain-arcade",
    title: "NeuroPlex: Brain Arcade",
    category: "Zeka & Hafıza",
    status: "soon", // Betada / Yakında
    rating: 5.0,
    reviewsCount: "Kapalı Beta",
    downloads: "Yakında",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&h=200&q=80",
    banner: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&h=450&q=80",
    shortDesc: "Hafıza, dikkat, odaklanma ve mekânsal algıyı test eden çoklu mini beyin egzersizleri.",
    fullDesc: "NeuroPlex Brain Arcade, zihinsel sınırları zorlayan, odaklanma süresini ve problem çözme kabiliyetini artıran dinamik zeka oyunları paketidir. Günlük birkaç dakikalık arcade zihin antrenmanlarıyla bilişsel becerilerinizi zinde tutun.",
    features: [
      "Hafıza, Dikkat ve Odaklanma Mini Oyunları",
      "Zamana Karşı Refleks ve Mantık Testleri",
      "Kişisel Bilişsel Gelişim Takibi",
      "Minimalist ve Göz Yormayan Arayüz Tasarımı"
    ],
    tags: ["Zeka", "Hafıza", "Beyin Egzersizi", "Arcade", "Odaklanma"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.muratiumlabs.matematikkantini",
    screenshots: [
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "drag-code",
    title: "Drag Code (SürükleKod)",
    category: "Kodlama & Mantık",
    status: "soon", // Betada / Yakında
    rating: 5.0,
    reviewsCount: "Kapalı Beta",
    downloads: "Yakında",
    icon: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&h=200&q=80",
    banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=450&q=80",
    shortDesc: "Sürükle-bırak bloklarıyla algoritma kurmayı ve temel kodlama mantığını öğreten interaktif uygulama.",
    fullDesc: "Drag Code (SürükleKod), kodlama dünyasına adım atmak isteyen öğrenciler ve meraklılar için tasarlanmış blok tabanlı bir algoritma bulmacasıdır. Komut bloklarını doğru sırayla birleştirerek algoritmik düşünme becerinizi adım adım geliştirin.",
    features: [
      "Görsel Blok Tabanlı Sürükle-Bırak Kodlama Mantığı",
      "Algoritmik Düşünme ve Mantıksal Problem Çözme",
      "Döngüler, Koşullar ve Fonksiyon Mantığı Öğretimi",
      "Eğlenceli ve Aşamalı Bölüm Tasarımları"
    ],
    tags: ["Kodlama", "Algoritma", "Eğitici", "Blok Kod", "Öğrenme"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.muratiumlabs.matematikkantini",
    screenshots: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// Stüdyo & İletişim Bilgileri
const STUDIO_CONFIG = {
  studioName: "StateFlow Games",
  tagline: "Eğitici, Zeka Geliştirici ve Mantık Odaklı Mobil Deneyimler",
  developerEmail: "stateflowgames@gmail.com",
  playStoreDeveloperUrl: "https://play.google.com/store/apps/details?id=com.muratiumlabs.matematikkantini"
};
