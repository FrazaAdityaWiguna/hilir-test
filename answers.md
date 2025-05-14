# Pertanyaan dan Jawaban

## 1. Apa pendekatan kamu untuk mendesain struktur komponen?

Pendekatan saya dalam mendesain struktur komponen adalah sebagai berikut:

1. **Menghindari DRY (Don’t Repeat Yourself)**  
   Mengutamakan prinsip DRY dengan membuat komponen yang dapat digunakan kembali agar tidak terjadi duplikasi kode.

2. **Reusable dan Mudah Digunakan oleh Tim**  
   Komponen dirancang agar mudah digunakan kembali oleh tim di berbagai tempat dalam aplikasi.

3. **Pemeliharaan di Masa Depan**  
   Jika ada perubahan di masa depan, hanya perlu melakukan perubahan pada komponen dasar (base component) yang sudah dibuat, sehingga mempermudah pemeliharaan.

4. **Mudah untuk di Maintenance, Readable, dan Scalable**  
   Struktur komponen dirancang agar mudah dipelihara, memiliki kode yang terbaca dengan jelas (readable), dan dapat berkembang sesuai dengan kebutuhan aplikasi.

---

## 2. Bagaimana kamu menangani performance jika data sangat besar (misalnya 10.000 baris)?

Untuk menangani data yang sangat besar, beberapa pendekatan yang bisa diterapkan adalah:

1. **Gunakan Pagination atau Infinite Scroll**  
   Menggunakan teknik pagination atau infinite scroll untuk memuat data secara bertahap, sehingga tidak membebani aplikasi dengan merender seluruh dataset sekaligus.

2. **Gunakan Virtualization**  
   Virtualization adalah konsep di mana hanya elemen yang terlihat di **viewport** yang dirender. Dengan ini, kita dapat mengurangi jumlah elemen yang harus di-render pada satu waktu.

3. **Penggunaan Redux untuk Data yang Tidak Sering Berubah**  
   Jika data relatif statis atau tidak berubah sering, penggunaan **Redux** bisa membantu menyimpan data di state global dan menghindari pengambilan data berulang-ulang. Pastikan logika sesuai dengan kebutuhan aplikasi.

   **Contoh Implementasi**:  
   Pada **TableAds**, saya menggunakan `enableRowVirtualization` dan **pagination**, serta **Server-Side Rendering (SSR)**. Jika di-inspect, URL API-nya tidak akan terlihat karena data dimuat dengan cara ini.

---

## 3. Bagaimana kamu tracking dan melaporkan error pada user & dev (contoh implementasi)?

Untuk menangani dan melaporkan error, berikut adalah langkah-langkah yang saya lakukan:

1. **Console Logging (Untuk Developer)**  
   Error ditangani dengan menampilkan ke dalam `console.error()` untuk keperluan debugging dan pengembangan.

   **Contoh Implementasi dengan console.error()**:

   - Gunakan `console.error(error)` untuk mendapatkan full error-nya dari system.

2. **Toast Notifications (Untuk Pengguna)**  
   Pesan error ditampilkan kepada pengguna menggunakan `toast.error()`, memberikan notifikasi yang ramah kepada pengguna mengenai masalah yang terjadi.

   **Contoh Implementasi dengan toast.error()**:

   - Gunakan `toast.error("Failed to fetch ads")` untuk menberitahu kepada user pastikan message-nya yang to the poin & jelas.

3. **Penggunaan Layanan Monitoring (Untuk Error pada API)**  
   Untuk melacak dan memonitor error pada API, saya menggunakan layanan seperti **Sentry** atau layanan serupa. Layanan ini memungkinkan kita untuk memonitor error secara real-time dan memberikan laporan detail kepada tim pengembang.

   **Contoh Implementasi dengan Sentry**:

   - Mengintegrasikan Sentry ke dalam aplikasi untuk menangkap dan melaporkan error secara otomatis.
