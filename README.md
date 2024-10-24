# 11.6_Js_Basit_ATM_Simulasyonu
11.6_Js_Basit_ATM_Simulasyonu


### Basit ATM Simülasyonu

---

#### Proje Hakkında
Bu proje, kullanıcının basit bankacılık işlemleri yapmasına olanak tanıyan bir ATM simülasyonunu içermektedir. Kullanıcı, başlangıç bakiyesi ile para çekme, para yatırma ve bakiye sorgulama işlemlerini gerçekleştirebilir.

#### Özellikler
1. **Başlangıç Bakiyesi:** Kullanıcıdan bir başlangıç bakiyesi alır.
2. **Para Çekme:** Kullanıcı, istediği miktarı bakiyesinden çekebilir. Eğer çekmek istediği miktar bakiyeden fazla ise, hata mesajı gösterilir.
3. **Para Yatırma:** Kullanıcı, istediği miktarı bakiyesine ekleyebilir.
4. **Bakiye Sorgulama:** Kullanıcı, mevcut bakiyesini sorgulayabilir.
5. **Çıkış:** Kullanıcı, işlemlerini tamamladıktan sonra çıkış yapabilir.

#### Kullanım
1. Kullanıcı, başlangıç bakiyesi olarak bir miktar girer.
2. Kullanıcıya aşağıdaki işlem seçenekleri sunulur:
   - Para Çekme
   - Para Yatırma
   - Bakiye Sorgulama
   - Çıkış
3. Kullanıcı, seçtiği işleme göre gerekli adımları takip eder.

#### Kod Açıklaması
- **Başlangıç Bakiyesi:** Kullanıcıdan bir başlangıç bakiyesi alınır ve bu değer bir değişkene atanır.
- **Seçim:** Kullanıcıdan hangi işlemi yapmak istediği sorulur.
- **İşlemler:** Kullanıcı seçimine göre; para çekme, para yatırma, bakiye sorgulama işlemleri gerçekleştirilir. Her işlemde uygun kontrol yapılarak işlem sonuçları kullanıcıya gösterilir.
- **Geçersiz Seçim:** Kullanıcı, geçersiz bir seçim yaparsa hata mesajı gösterilir.

#### Geliştirme Notları
Bu basit ATM simülasyonu, JavaScript'in temel özelliklerini kullanarak yapılandırılmıştır. Kullanıcı girdi kontrolleri ve temel işlem mantıkları ile geliştirilmiştir.
