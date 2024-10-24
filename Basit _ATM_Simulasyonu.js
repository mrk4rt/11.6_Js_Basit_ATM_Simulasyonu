// Kullanıcının başlangıç bakiyesini alıyoruz
let bakiye = parseFloat(prompt("Lütfen Bakiye Giriniz."));

// Kullanıcının seçim yapması için bir seçenek menüsü oluşturuyoruz
let secim;

// Kullanıcı çıkış yapana kadar işlemler devam eder. Basit if yapıları ile devam ediyoruz
secim = prompt(
  "Bir işlem seçin 1- Para Çekme, 2-Para Yatırma, 3- Bakiye Sorgulam, 4- Çıkış"
);

if (secim == "1") {
  // Kullanıcı para çekme işlemini seçti
  let paraCek = parseFloat(prompt("Lütfen çekmek istediğiniz miktarı girin."));

  if (paraCek > bakiye) {
    // Eğer çekmek istediği miktar bakiyeden büyükse hata veririz
    console.log("Yetersiz Bakiye!");
  } else {
    // Aksi takdirde bakiyeden çekilecek miktarı çıkarırız
    bakiye = bakiye - paraCek;
    console.log(`Çekilen para miktarı = ${paraCek}`);
    console.log(`Kalan Bakiye = ${bakiye}`);
  }
} else if (secim == "2") {
  // Kullanıcı para yatırma işlemini seçti.
  let paraYatir = parseFloat(
    prompt("Lütfen yatırmak istediğiniz miktarı giriniz.")
  );

  // Bakiyeye yatırılan miktarı ekliyoruz
  bakiye = bakiye + paraYatir;
  console.log(`Yatırılan para miktarı = ${paraYatir}`);
  console.log(`Toplam Bakiye = ${bakiye}`);
} else if (secim == "3") {
  // Kullanıcı bakiye sorgulama işlemini seçti
  console.logg(`Hesap Bakiyeniz = ${bakiye}`);
} else if (secim == "4") {
  // Kullanıcı çıkış yapmak istedi
  console.logg("Çıkış yaptınız.İyi günler!");
} else {
  // Geçersiz bir seçenek girildiğinde hata mesajı veriyoruz
  console.log("Geçersiz seçim! Lütfen 1-4 arasında bir değer girin.");
}
