# 🛵 Radar Order Fiktif - Jawa Tengah

**Cek dulu sebelum jalan, hemat bensin.**

Aplikasi web untuk driver ojol & kurir di Jawa Tengah (35 kota/kabupaten) untuk cek risiko order dan lapor order fiktif, supaya driver lain tidak jadi korban.

### Fitur
- **Cek risiko order**: skor risiko dari nominal, lokasi, akun customer, chat & telepon.
- **Lapor order fiktif (real-time)**: laporan langsung terlihat semua driver lewat Firestore, per wilayah.
- **Titik di peta (Leaflet)**: dari GPS, dari pencarian alamat (OpenStreetMap), atau ditandai manual.
- **Batas 3 laporan per hari per perangkat**, hanya admin yang bisa menghapus laporan.
- **Panti terdekat** untuk sedekah makanan dari order fiktif (`panti.html`, data Kota & Kab. Semarang).

### Struktur file
| File | Fungsi |
|---|---|
| `index.html` | Pilih wilayah, login / daftar driver, atau lihat tanpa login |
| `peta.html` | Aplikasi utama (laporan, cek risiko, peta) |
| `panti.html` | Daftar panti |
| `admin.html` | ACC / tolak pengajuan driver (login email admin) |
| `jateng.js` | Data 35 wilayah (pusat peta, kecamatan) |
| `adminlogin.js` | Dialog login admin (dipakai `peta.html` dan `panti.html`) |
| `firestore.rules` | Aturan keamanan Firestore |
| `semarang.html`, `wilayah.html` | Halaman lama, sekarang hanya mengalihkan |

### Setup Firebase (sekali saja)
1. **Authentication > Sign-in method**: aktifkan **Anonymous** dan **Email/Password**.
2. Buat akun admin di **Authentication > Users**, salin UID-nya, lalu samakan dengan `ADMIN_UID` di `peta.html`, `panti.html`, `admin.html` dan `firestore.rules`.
3. **Firestore Database > Rules**: tempel isi `firestore.rules`, tes di Rules Playground, lalu Publish.
4. (Disarankan) Google Cloud Console > Credentials: batasi API key ke domain situs ini (HTTP referrer).

### Privasi
Laporan tidak menyimpan nama atau foto korban, hanya area, nominal, dan pola penipuan. Pendaftaran driver menyimpan nama dan no. WA di koleksi yang hanya bisa dibaca admin.

### Tech stack
HTML, CSS, JavaScript, Leaflet, Firebase (Firestore + Authentication).

> Dibuat oleh driver, untuk driver. Semoga gak ada lagi yang zonk.
