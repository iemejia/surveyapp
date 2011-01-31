//OPTIONAL VALUES
// DONE default: "coco" // puts a default value in the answer for a question
// DONE report : "true" // 
// TODO required: "true"
// TODO validation: 
// TODO navigation :

/*
var surveys = {"surveys": [ 
    {id: "0", type: "base", description: "Base survey",
     questions: [
	 {id: "0", question: "House code", type: "1", secrecy: "private", report: "true" },
	 {id: "1", question: "What's your name ?", type: "1", secrecy: "private", report: "true" },
	 {id: "2", question: "Favorite singer ?", type: "2", options: ["uno","dos","tres"]},
	 {id: "3", question: "Favorite food ?", type: "1", next: "2"},
	 {id: "4", question: "Name your purpose ?", type: "3", options: ["uno","dos","tres"]},
     ], },
    {id: "1", description: "Base survey",
     questions: [
	 {id: "0", question: "House code", type: "1", report: "true" },
	 {id: "1", question: "Date", type: "4", report: "true" },
	 {id: "2", question: "Diarrea Presence", type: "3", options: ["0","1","2","3","4"]},
	 {id: "3", question: "Blood presence", type: "2", options: ["no","yes"] },
	 {id: "4", question: "Water type", type: "2", options: ["Sumur","Hujan","Kolam","Sungai","Pam","Isi Ulang"] },
	 {id: "5", question: "Boiled Water", type: "2", options: ["no", "yes"]},
     ], },
],
};
*/

var surveys = {"surveys": [ 
    {id: "0", type: "base", description: "Base survey",
     questions: [
	 {id: "0", question: "Kode Rumah Tangga", type: "1", secrecy: "private", report: "true" }, //, "validation": "true"
	 {id: "1", question: "Alamat Rumah", type: "1", secrecy: "private", report: "true" }, //, "validation": "true"
	 {id: "2", question: "No HP", type: "1", secrecy: "private" }, //, "validation": "true"
	 {id: "3", question: "Nama anak dibawah lima tahun yang dimonitor", type: "1", secrecy: "private" }, //, "validation": "true"
	 {id: "4", question: "NAMA ANGGOTA KELUARGA YANG DIINTERVIEW", type: "2", options: ["IBU","AYAH", "KAKAK", "BIBI/PAMAN", "KAKEK/NENEK"], secrecy: "private" }, //, "validation": "true"
	 {id: "5", question: "NAMA KELURAHAN", type: "1", secrecy: "private" }, //, "validation": "true"
	 {id: "6", question: "Kode sub-lokasi Kelurahan", type: "1", secrecy: "private" }, //, "validation": "true"
	 {id: "7", question: "Koordinat rumah dari GPS S", type: "1"}, //, "validation": "true"
	 {id: "8", question: "Koordinat rumah dari GPS E", type: "1"}, //, "validation": "true"
	 {id: "9", question: "TANGGAL", type: "1"}, //, "validation": "true"
	 {id: "10", question: "WAKTU MULAI", type: "1"}, //, "validation": "true"
	 {id: "11", question: "Nama anak dibawah lima tahun yang dimonitor", type: "1", secrecy: "private" }, //, "validation": "true"
	 {id: "12", question: "Anak dibawah umur lima tahun:  Berapa usia anak?", type: "2", options: ["1 tahun sampai 2 tahun","2 tahun sampai 3 tahun","3 tahun sampai 4 tahun", "4 tahun sampai 5 tahun"]},
	 {id: "13", question: "Berapa banyak anggota keluarga tinggal di sini?", type: "1"},
	 {id: "14", question: "Jenis Kelamin", type: "2", options: ["Laki-laki","Perempuan"]},
	 {id: "15", question: "Tanggal Lahir", type: "1"},
	 {id: "16", question: "Apakah [NAMA ANAK] makan", type: "2", options: ["3 kali atau lebih dalam sehari","2 kali dalam sehari", "1 kali sehari", "5-6 kali dalam seminggu", "3-4 kali dalam seminggu", "2 kali atau kurang dalam seminggu", "TIDAK TAHU"]},
	 {id: "17", question: "Apakah [NAMA ANAK] menyikat giginya*?", type: "2", options: ["Dua kali per hari","Tiga kali per hari", "Satu kali per hari", "Setiap Kali Sesudah makan", "Tidak pernah", "Kadang-kadang", "TIDAK TAHU"]},
	 {id: "18", question: "Sekarang kita ingin melihat perkembangan kesehatan anak dengan menimbang dan mengukur tinggi badan anak. BERAT (KG)", type: "1"},
	 {id: "19", question: "Tinggi (cm)", type: "1"},
	 {id: "20", question: "Lingkar Lengan Atas (cm)", type: "1"},
	 {id: "21", question: "Apakah rumah tangga ini menggunakan listrik? ", type: "2", options: ["ya","tidak"]},
	 {id: "22", question: "Apa status kepemilikan rumah ini?", type: "2", options: ["Milik sendiri","Menempati saja", "Menyewa/kontrak", "Lainnya"]},
	 {id: "23", question: "Sekarang kami ingin tahu jumlah dan harga daging yang BAPAK/IBU beli dalam satu bulan terakhir.  Satu bulan kemarin, BAPAK/IBU pernah membeli daging? ", type: "2", options: ["ya","tidak"]},
	 {id: "24", question: "Terakhir kali BAPAK/IBU membeli daging, berapa berat daging yang BAPAK/IBU beli? (Kg)", type: "1"},
	 {id: "25", question: "Berapa harga per kilo yang BAPAK/IBU bayar untuk daging sebanyak itu? (Ribu Rp/kg)", type: "1"},
	 {id: "26", question: "Seperti apa kualitasnya?", type: "2", options: ["Sangat Baik/Tinggi","Menengah/Rata-rata", "Rendah", "Tidak tahu"]},
	 {id: "27", question: "Dalam minggu kemarin, apa kegiatan utama BAPAK/IBU?", type: "2", options: ["Bekerja dengan bayaran","Mengikuti pendidikan", "Menjaga rumah", "Mencari pekerjaan"]},
	 {id: "28", question: "Apa kegiatan utama kepala keluarga dalam minggu kemarin?", type: "2", options: ["Bekerja/Membantu menambah pendapatan","Mencari pekerjaan", "Mengikuti pendidikan", "Menjaga rumah", "Pensiun", "Sakit/cacat", "Dalam liburan/barusan wisuda"]},
	 {id: "29", question: "Dalam minggu kemarin, apakah kepala keluarga bekerja/membantu mendapatkan penghasilan selama sekurangnya satu jam?", type: "2", options: ["ya","tidak"]},
	 {id: "30", question: "Dalam minggu kemarin, Apakah kepala keluarga memiliki pekerjaan tetap/usaha, tapi tidak bekerja sementara waktu? ", type: "2", options: ["ya","tidak"]},
	 {id: "31", question: "Dalam minggu kemarin, Apakah kepala keluarga bekerja di perusahaan milik keluarga (pertanian atau bukan pertanian)? ", type: "2", options: ["ya","tidak"]},
	 {id: "32", question: "Apakah kepala keluarga pernah bekerja sebelumnya?", type: "2", options: ["ya","tidak"]},
	 {id: "33", question: "Dalam kategori apakah pekerjaan BAPAK/IBU terakhir kemarin?", type: "2", options: ["Kerja keluarga tak berbayar","Bekerja sendiri", "Bekerja tak berbayar dengan keluarga/kerja sementara", "Bekerja sendiri dengan perusahaan permanen", "Pegawai pemerintah", "Pegawai swasta", "Buruh tani", "Pegawai harian bidang non-pertanian"]},
	 {id: "34", question: "Berapa penghasilan kepala keluarga sewaktu bekerja di tempat tadi?  (Juta Rp/bulan)", type: "1"},
	 {id: "35", question: "Berapakah total pengeluaran seluruh anggota keluarga untuk biaya kesehatan selama satu tahun terakhir? (Juta Rp)", type: "1"},
	 {id: "36", question: "Berapakah total pengeluaran seluruh anggota keluarga untuk biaya kesehatan selama satu bulan terakhir? (Ribu Rp)", type: "1"},
	 {id: "37", question: "Sekarang, kami ingin tahu tentang kondisi kesehatan  [NAMA ANAK] dan gejala penyakit apapun satu bulan terakhir? ", type: "2", options: ["Sangat sehat","Cukup sehat", "Sedikit kurang sehat", "Tidak sehat"]},
	 {id: "38", question: "Dibandingkan dengan kesehatan […]1 tahun yang lalu, menurut BAPAK/IBU kesehatan [NAMA ANAK] sekarang menjadi […]?", type: "2", options: ["Jauh lebih baik sekarang","Sedikit lebih baik sekarang", "Kurang lebih sama","Sedikit lebih buruk", "Jauh memburuk "]},
	 {id: "39", question: "Apakah anak BAPAK/IBU pernah mengalami Sakit kepala dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "40", question: "Apakah anak BAPAK/IBU pernah mengalami Ingusan dalam 1 bulan terakhir? ", type: "2", options: ["ya","tidak"]},
	 {id: "41", question: "Apakah anak BAPAK/IBU pernah mengalami Batuk dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "42", question: "Jika mengalami Batuk, seperti apakah batuk anak Bapak/Ibu?", type: "2", options: ["Batuk Kering","Batuk Berdahak", "Batuk berdarah"]},
	 {id: "43", question: "Apakah anak BAPAK/IBU pernah mengalami  Kesulitan bernafas dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "44", question: "Jika mengalami kesulitan dalam bernafas, apakah nafas anak Bapak/Ibu?", type: "2", options: ["Nafas berbunyi","Pendek, dan berulang cepat "]},
	 {id: "45", question: "Apakah anak BAPAK/IBU pernah mengalami Demam dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "46", question: "Apakah anak BAPAK/IBU pernah mengalami Sakit perut dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "47", question: "Apakah anak BAPAK/IBU pernah mengalami Mual/muntah dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "48", question: "Apakah anak BAPAK/IBU pernah mengalami Diare minimal 3x per hari dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "49", question: "Jika mengalami Diare, seperti apakah diare anak Bapak/Ibu?", type: "2", options: ["Bercampur darah","Bercampur lendir", "Cairan pucat"]},
	 {id: "50", question: "Apakah anak BAPAK/IBU pernah mengalami Infeksi mata dalam 1 bulan terakhir?", type: "2", options: ["ya","tidak"]},
	 {id: "51", question: "Apakah anak BAPAK/IBU pernah mengalami Sakit gigi dalam 1 bulan terakhir? ", type: "2", options: ["ya","tidak"]},
	 {id: "52", question: "Apakah anak BAPAK/IBU pernah mengalami sakit tenggorokan dalam 1 bulan terakhir? ", type: "2", options: ["ya","tidak"]},
	 {id: "53", question: "Waktu anak BAPAK/IBU sakit kemarin, apakah dia Masih mau bermain?", type: "2", options: ["ya","tidak"]},
	 {id: "54", question: "Waktu anak BAPAK/IBU sakit kemarin, apakah dia Lebih mudah marah dari biasa?", type: "2", options: ["ya","tidak"]},
	 {id: "55", question: "Waktu anak BAPAK/IBU sakit kemarin, apakah dia Cuma berbaring?", type: "2", options: ["ya","tidak"]},
	 {id: "56", question: "Berapa kilometer jarak antara tempat pelayanan kesehatan dengan tempat tinggal [NAMA ANAK]?", type: "1"},
	 {id: "57", question: "Berapa lama waktu tempuh ke tempat pelayanan kesehatan tersebut? (dalam menit)", type: "1"},
	 {id: "58", question: "Berapa biaya ongkos untuk mencapai tempat pelayanan kesehatan (termasuk bensin, satu kali jalan)?  (Ribu Rp)", type: "1"},
	 {id: "59", question: "Apa sumber air utama untuk semua kebutuhan air rumah Bapak/Ibu? seperti mandi dan cuci?", type: "2", options: ["AQUA/AIR BOTOL, ETC", "AIR ISI ULANG", "AIR KRAN/PAM", "SUMUR/POMPA (LISTRIK, TANGAN)", "AIR SUMUR", "AIR SUMBER MATA AIR", "AIR HUJAN", "AIR SUNGAI", "AIR SIMPANAN","LAINNYA"]},
	 {id: "60", question: "Jika BAPAK/IBU  membeli air untuk cuci dan mandi, berapa harganya/jerican? (rupiah per galon)", type: "1"},
	 {id: "61", question: "Dimana letak sumber air minuman?", type: "2", options: ["Milik sendiri dan berada dalam sekitar rumah Bapak/Ibu","Milik bersama dan ada di luar pekarang rumah Bapak/Ibu"]},
	 {id: "62", question: "Jika berada di luar pekarangan Bapak/Ibu, berapa jaraknya dari rumah Bapak/Ibu? (berapa meter)", type: "1"},
	 {id: "63", question: "Apa sumber utama air minum keluarga in?", type: "2", options: ["AQUA/AIR BOTOL, ETC", "AIR ISI ULANG", "AIR KRAN/PAM", "SUMUR/POMPA (LISTRIK, TANGAN)", "AIR SUMUR", "AIR SUMBER MATA AIR", "AIR HUJAN", "AIR SUNGAI", "AIR SIMPANAN","LAINNYA"]},
	 {id: "64", question: "Jika BAPAK/IBU membeli air mineral atau air isi ulang lainnya, apa alasan yang paling penting BAPAK/IBU melakukannya?", type: "2", options: ["Satu-satunya sumber air yang ada", "Saya peduli tentang kesehatan","Rasanya lebih enak", " Lebih nyaman.", "tidak tahu", "lainnya"]},
	 {id: "65", question: "Jika Bapak/Ibu membeli air isi ulang, apakah air tersebut?", type: "2", options: ["YA, DIANTAR KE RUMAH","YA, BAWA SENDIRI, dari toko atau kiosk", "tidak"]},
	 {id: "66", question: "Jika BAPAK/IBU membeli air isi ulang, berapa harganya/galon? (galon per rupiah)", type: "1"},
	 {id: "67", question: "Sebelum air putih diminum, apakah air tersebut direbus terlebih dahulu? ", type: "2", options: ["ya","tidak"]},
	 {id: "68", question: "Apakah air yang anda gunakan untuk membuat teh/kopi?", type: "2", options: ["AQUA/AIR MINERAL, ETC", "AIR KRAN/PAM", "SUMUR/POMPA (LISTRIK, TANGAN)", "AIR SUMUR", "AIR SUMBER MATA AIR", "AIR HUJAN", "AIR SUNGAI", "AIR SIMPANAN","LAINNYA"]},
	 {id: "69", question: "Di mana sebagian besar anggota keluarga pergi kalau ingin buang air?", type: "2", options: ["Toilet sendiri dengan septic tank","Toilet sendiri tanpa septic tank ", "Toilet bersama", "Toilet umum", "Sungai/saluran irigasi (tanpa toilet)", "Halaman/tanah lapang (tanpa toilet)", "Saluran pembuangan", "Kolam/kolam ikan ", "Kandang hewan ", "Laut/danau", "lainnya"]},
	 {id: "70", question: "Kemanakah anggota rumah tangga ini membuang air limbah?", type: "2", options: ["Saluran irigasi (mengalir)","Saluran irigasi (mampet)", "Lobang permanen ", "Dibuang ke sungai", "Dibuang ke samping rumah/halaman belakang/kebun", "Kolam/kolam ikan/danau", "Lobang (tdak permanen)", "Sawah/ladang lainnya", "Laut, pantai", "Lainnya"]},
	 {id: "71", question: "Bagaimana keluarga ini membuang sampahnya?", type: "2", options: ["Dikumpulkan oleh dinas kebersihan service","Dibuang ke kotak sampah", "Dibakar", "Dibuang ke sungai/saluran pembuangan", "Dibuang ke halaman untuk jadi kompos", "Dibuang ke lobang", "Ke hutan/gunung", "Sawah/ladang lainnya", "Laut, pantai", "Lainnya"]},
	 {id: "72", question: "Apakah BAPAK/IBU menyimpan barang konsumsi di dalam kulkas?", type: "2", options: ["ya","tidak"]},
	 {id: "73", question: "Bisa tolong tunjukkan dimana BAPAK/IBU menyimpan air. Tempatnya berupa?", type: "2", options: ["Tong bermulut terbuka (seperti ember, panci masak, mangkok)", "Cerek atau tempat air yang digunakan berulang dengan mulut", "Botol air sekali pakai dengan mulut tertutup", "Galon/kontener dengan kran", "lainnya"]},
	 {id: "74", question: "Berapa lama waktu terlama BAPAK/IBU menyimpan air minum sebelum diminum?", type: "2", options: ["Kadang-kadang Lebih dari seminggu", "Antara tiga hari sampai seminggu", " Dua atau tiga hari", "Cuma satu hari", "Selalu kurang dari satu hari"]},
	 {id: "75", question: "Berapa banyak air yang dikonsumsi oleh masing-masing anggota keluarga dalam satu hari?  (berapa liter -- semua air atau air biasa)", type: "1"},
	 {id: "76", question: "Berapa banyak air minuman yang dikonsumsi oleh masing-masing anggota keluarga dalam satu hari?  (berapa liter)", type: "1"},
	 {id: "77", question: "Siapa yang bertanggung jawab terhadap air (mengumpulkan, membayar, menyimpan, dll) untuk keluarga BAPAK/IBU (hubungannya dengan anak)?", type: "2", options: ["ibu", "ayah", "nenek/kakek", "saudara", "Lebih dari satu orang dalam keluarga", "lainnya"]},
	 {id: "78", question: "Apakah BAPAK/IBU senang dengan kualitas air yang BAPAK/IBU gunakan untuk minum?", type: "2", options: [" Sangat senang!", "senang", "Kadang-kadang saya punya masalah tentang air", "Saya tidak senang dengan air yang harus saya minum.  ", "Saya tidak memikirkan tentang kualitas air yang saya minum.  ", "lainnya"]},
	 {id: "79", question: "Menurut BAPAK/IBU kualitas air penting untuk kesehatan anak-anak?  ", type: "2", options: ["ya","tidak", "tidak tahu"]},
	 {id: "80", question: "Menurut BAPAK/IBU apakah air yang BAPAK/IBU gunakan ada kaitan dengan masalah kesehatan anak BAPAK/IBU?", type: "2", options: ["ya","tidak", "tidak tahu"]},
	 {id: "81", question: "BAB anknya yang lalu bagaimana??", type: "2", options: ["tipe 1", "tipe 2", "tipe 3", "tipe 4", "tipe 5", "tipe 6", "tipe 7"]},
	 {id: "82", question: "Bahasa apa yang BAPAK/IBU gunakan untuk percakapan sehari-hari di rumah?", type: "2", options: ["Indonesia", "Java", "Sunda", "Cina", "Minang", "Bali", "Batak", "Makassar", "Toraja", "betawI", "Melayu", "Ambon", "Manado", "Aceh", "Banten",  "Cirebon",  "Lainnya"]},
	 {id: "83", question: "Apa suku BAPAK ANAKNYA?", type: "2", options: ["Java", "Sunda", "Cina", "Minang", "Bali", "Batak", "Makassar", "Toraja", "betawI", "Melayu", "Ambon", "Manado", "Aceh", "Banten",  "Cirebon",  "Lainnya"]},
	 {id: "84", question: "Apa suku IBU ANAKNYA?", type: "2", options: ["Java", "Sunda", "Cina", "Minang", "Bali", "Batak", "Makassar", "Toraja", "betawI", "Melayu", "Ambon", "Manado", "Aceh", "Banten",  "Cirebon",  "Lainnya"]},
	 {id: "85", question: "Suku mana yang sangat berpengaruh dalam kehidupan sehari-hari di rumah?", type: "2", options: ["Java", "Sunda", "Cina", "Minang", "Bali", "Batak", "Makassar", "Toraja", "betawI", "Melayu", "Ambon", "Manado", "Aceh", "Banten",  "Cirebon",  "Lainnya"]},
	 {id: "86", question: "Apakah BAPAK/IBU bisa membaca koran berbahasa Indonesia?", type: "2", options: ["ya","tidak"]},
	 {id: "87", question: "Apakah BAPAK/IBU bisa membaca koran dalam bahasa lain?", type: "2", options: ["ya","tidak"]},
	 {id: "88", question: "Apakah BAPAK/IBU bisa menulis surat dalam bahasa Indonesia?", type: "2", options: ["ya","tidak"]},
	 {id: "89", question: "Apakah BAPAK/IBU bisa menulis surat dalam bahasa lain?", type: "2", options: ["ya","tidak"]},
	 {id: "90", question: "Apakah BAPAK/IBU pernah bersekolah?", type: "2", options: ["ya","tidak"]},
	 {id: "91", question: "Apa tingkat pendidikan tertinggi BAPAK/IBU?", type: "2", options: ["SD", "SMP", "SMK", "SMA", "SMU", "Diploma", "Universitas S1", "Universitas S2", "Universitas S3", "Tidak skolah"]},
	 {id: "92", question: "SIAPA SAJA (ORANG LAIN) DISAMPING RESPONDEN YANG HADIR PADA SAAT .  INTERVIEW? ", type: "2", options: ["TIDAK SEORANG PUN", "ANAK UMUR 5 TAHUN ATAU KURANG", "ANAK UMUR LEBIH DARI 5 TAHUN", "Suami/Istri", "ORANG DEWASA, ANGGOTA KELUARGA", "ORANG DEWASA, BUKAN ANGGOTA KELUARGA"]},
	 {id: "93", question: "BAGAIMANA PENILAIAN ANDA TERHADAP KEAKURATAN JAWABAN YANG DIBERI OLEH RESPONDEN?", type: "2", options: ["Bagus sekali!", "bagus", "biasa", "kurang bagus", "jelek"]},
	 {id: "94", question: "BAGAIMANA PENILAIAN ANDA TENTANG KESERIUSAN DAN PERHATIAN RESPONDEN?", type: "2", options: ["Bagus sekali!", "bagus", "biasa", "kurang bagus", "jelek"]},
	 {id: "95", question: "PERTANYAAN YANG MANA YANG DIANGGAP SULIT, MEMALUKAN, DAN MEMBINGUNGKAN OLEH RESPONDEN?", type: "1"},
	 {id: "96", question: "PERTANYAAN YANG MANA YANG DIANGGAP SULIT, MEMALUKAN, DAN MEMBINGUNGKAN OLEH INTERVIEWER?", type: "1"},
	 {id: "97", question: "PERTANYAAN YANG MANA YANG KELIHATANNYA MENARIK BAGI RESPONDEN?", type: "1"},
	 {id: "98", question: "WAKTU SELESAI", type: "1"},
	 {id: "99", question: "Interview seluruhnya/sebagian besar dilakukan dengan menggunakan bahasa apa?", type: "1"},
	 {id: "100", question: "Bahasa lain yang digunakan (jika ada):", type: "1"},
     ], },

    {id: "1", description: "Daily Information",
     questions: [
	 {id: "0", question: "Kode Rumah Tangga", type: "1" },
	 {id: "1", question: "Date", type: "4" },
	 {id: "2", question: "Diare", type: "2", options: ["0","1","2","3","4"]},
	 {id: "3", question: "Blood presence", type: "2", options: ["Dengan dara dan","atau lendir"] },
	 {id: "4", question: "Water type", type: "2", options: ["Sumur","Hujan","Kolam","Sungai","Pam","Isi Ulang"] },
	 {id: "5", question: "Boiled Water", type: "2", options: ["ya", "tidak"]},
     ], },
],
};

for (var i=0; i < surveys.surveys.length ; i++) {
    surveys_dao.save(surveys.surveys[i]);
}
