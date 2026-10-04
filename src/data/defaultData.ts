import { LocationConfig, GameSettings, Question } from '../types/game';

export const DEFAULT_LOCATIONS: LocationConfig[] = [
  {
    id: 'pos_1',
    code: 'POS 1',
    name: 'KANTIN',
    qrCode: 'MATH-LOC-1-001',
    hint: '🍜 Tempat aroma makanan dan minuman lezat tersaji saat waktu istirahat tiba. Siswa datang ke sini untuk membeli kudapan dan mengisi energi. Temukan aku!',
    isFinal: false,
    isActive: true,
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'pos_2',
    code: 'POS 2',
    name: 'UKS',
    qrCode: 'MATH-LOC-2-001',
    hint: '🩹 Tempat pertolongan pertama di sekolah jika ada siswa yang kurang sehat, terluka saat bermain, atau butuh beristirahat sejenak. Di manakah aku?',
    isFinal: false,
    isActive: true,
    iconName: 'HeartPulse',
  },
  {
    id: 'pos_3',
    code: 'POS 3',
    name: 'DAPUR',
    qrCode: 'MATH-LOC-3-001',
    hint: '🍳 Tempat kompor menyala, panci dan wajan berjejer untuk menyiapkan hidangan. Aroma masakannya semerbak tercium dari kejauhan. Temukan aku!',
    isFinal: false,
    isActive: true,
    iconName: 'ChefHat',
  },
  {
    id: 'pos_4',
    code: 'POS 4',
    name: 'TOILET',
    qrCode: 'MATH-LOC-4-001',
    hint: '🚰 Tempat air mengalir jernih untuk membersihkan diri dan mencuci tangan setelah beraktivitas. Selalu jaga kebersihannya ya!',
    isFinal: false,
    isActive: true,
    iconName: 'Droplets',
  },
  {
    id: 'pos_5',
    code: 'POS 5',
    name: 'WALI KELAS 6',
    qrCode: 'MATH-LOC-FINAL-001',
    hint: '👩‍🏫👨‍🏫 Pos Final Petualangan! Temui sosok pembimbing setia kelas 6 di mejanya yang penuh berkas dan buku. Peti harta karun tersimpan aman bersamanya!',
    isFinal: true,
    isActive: true,
    iconName: 'GraduationCap',
  },
];

export const DEFAULT_SETTINGS: GameSettings = {
  durationMinutes: 45,
  maxAttempts: 3,
  pointsFirstAttempt: 100,
  pointsSecondAttempt: 75,
  pointsThirdAttempt: 50,
  pointsPosBonus: 100,
  pointsGameBonus: 500,
  hintMode: 'adventure',
  treasureCode: 'RASIO-HEBAT-SDN3',
  teacherMessage: 'Selamat! Kamu telah menguasai seluruh konsep rasio matematika kelas 6 bersama Wali Kelas 6. Buka peti harta karunmu sekarang!',
  leaderboardEnabled: true,
};

export const DEFAULT_QUESTIONS: Question[] = [
  // ==========================================
  // --- POS 1: KANTIN (5 SOAL KONSEP RASIO) ---
  // ==========================================
  {
    id: 'q_pos_1_1',
    locationId: 'pos_1',
    question:
      'Di etalase kantin sekolah terdapat 6 buku dongeng bersampul biru dan 8 buku sains bersampul kuning. Berapakah rasio (perbandingan) paling sederhana antara buku dongeng terhadap buku sains?',
    shapeType: 'rasio_benda',
    type: 'pilihan_ganda',
    difficulty: 'mudah',
    options: ['3 : 4', '4 : 3', '2 : 3', '3 : 5'],
    correctAnswer: '3 : 4',
    explanation:
      'Rasio buku dongeng terhadap buku sains = 6 : 8. Sederhanakan dengan membagi FPB yaitu 2: (6 ÷ 2) : (8 ÷ 2) = 3 : 4.',
    unit: 'rasio',
    diagram: {
      shape: 'rasio_buku_6_8',
      dimensions: {},
      label: 'Kantin: Buku Dongeng & Buku Sains',
    },
  },
  {
    id: 'q_pos_1_2',
    locationId: 'pos_1',
    question:
      'Di toples kantin terdapat 12 butir kelereng merah dan 18 butir kelereng hijau untuk permainan anak-anak. Berapakah bentuk rasio paling sederhana dari kelereng merah terhadap kelereng hijau?',
    shapeType: 'rasio_benda',
    type: 'pilihan_ganda',
    difficulty: 'mudah',
    options: ['2 : 3', '3 : 2', '2 : 5', '4 : 6'],
    correctAnswer: '2 : 3',
    explanation:
      'Rasio kelereng merah terhadap kelereng hijau = 12 : 18. Kedua angka dibagi FPB yaitu 6: (12 ÷ 6) : (18 ÷ 6) = 2 : 3.',
    unit: 'rasio',
    diagram: {
      shape: 'rasio_kelereng_12_18',
      dimensions: {},
      label: 'Kantin: Kelereng Merah & Hijau',
    },
  },
  {
    id: 'q_pos_1_3',
    locationId: 'pos_1',
    question:
      'Di tempat penyimpanan kantin terdapat 5 bola basket dan 15 bola voli (total 20 bola). Berapakah rasio banyak bola basket terhadap TOTAL seluruh bola dalam bentuk paling sederhana?',
    shapeType: 'rasio_pita',
    type: 'pilihan_ganda',
    difficulty: 'mudah',
    options: ['1 : 4', '1 : 3', '3 : 4', '1 : 5'],
    correctAnswer: '1 : 4',
    explanation:
      'Total seluruh bola = 5 + 15 = 20 bola. Rasio bola basket terhadap total seluruh bola = 5 : 20. Sederhanakan dengan membagi 5: (5 ÷ 5) : (20 ÷ 5) = 1 : 4.',
    unit: 'rasio',
    diagram: {
      shape: 'rasio_bola_basket_total',
      dimensions: {},
      label: 'Kantin: Kuantitas Bola Olahraga',
    },
  },
  {
    id: 'q_pos_1_4',
    locationId: 'pos_1',
    question:
      'Keranjang buah segar di kantin berisi apel merah dan apel hijau dengan rasio 3 : 5. Jika terdapat 15 buah apel hijau, berapakah banyak buah apel merah di dalam keranjang tersebut?',
    shapeType: 'rasio_pita',
    type: 'isian_angka',
    difficulty: 'sedang',
    correctAnswer: '9',
    explanation:
      'Rasio apel merah : apel hijau = 3 : 5. Karena 5 bagian apel hijau = 15 buah, maka 1 bagian = 15 ÷ 5 = 3 buah. Jadi apel merah = 3 bagian × 3 buah = 9 buah.',
    unit: 'buah',
    diagram: {
      shape: 'rasio_apel_merah_hijau',
      dimensions: {},
      label: 'Kantin: Keranjang Buah Apel',
    },
  },
  {
    id: 'q_pos_1_5',
    locationId: 'pos_1',
    question:
      'Rasio banyak pensil terhadap pulpen suvenir di kantin sekolah adalah 4 : 7. Jika tersedia 28 pulpen, berapa banyakkah pensil yang tersedia di kantin?',
    shapeType: 'rasio_pita',
    type: 'isian_angka',
    difficulty: 'sedang',
    correctAnswer: '16',
    explanation:
      'Rasio pensil : pulpen = 4 : 7. Nilai 1 bagian pulpen = 28 ÷ 7 = 4. Maka banyak pensil = 4 bagian × 4 = 16 pensil.',
    unit: 'buah',
    diagram: {
      shape: 'rasio_pensil_pulpen',
      dimensions: {},
      label: 'Kantin: Suvenir Pensil & Pulpen',
    },
  },

  // ==========================================
  // --- POS 2: UKS (5 SOAL RASIO SATUAN & KECEPATAN) ---
  // ==========================================
  {
    id: 'q_pos_2_1',
    locationId: 'pos_2',
    question:
      'Koperasi UKS sekolah menjual 1 paket berisi 4 buah buku panduan kesehatan seharga Rp20.000. Berapakah rasio satuan harga untuk 1 buah buku panduan?',
    shapeType: 'rasio_satuan',
    type: 'pilihan_ganda',
    difficulty: 'mudah',
    options: ['Rp4.000', 'Rp5.000', 'Rp6.000', 'Rp7.500'],
    correctAnswer: 'Rp5.000',
    explanation:
      'Rasio satuan harga = Total Harga ÷ Jumlah Buku = Rp20.000 ÷ 4 = Rp5.000 per buku.',
    unit: 'rupiah',
    diagram: {
      shape: 'rasio_satuan_buku',
      dimensions: {},
      label: 'UKS: Paket Buku Panduan Kesehatan',
    },
  },
  {
    id: 'q_pos_2_2',
    locationId: 'pos_2',
    question:
      'Mobil layanan kesehatan UKS SDN 3 Loloan Timur menempuh jarak sejauh 180 km dalam waktu 3 jam. Berapakah rasio satuan kecepatan mobil tersebut dalam kilometer per jam (km/jam)?',
    shapeType: 'rasio_satuan',
    type: 'isian_angka',
    difficulty: 'mudah',
    correctAnswer: '60',
    explanation:
      'Kecepatan (rasio jarak per waktu) = Jarak ÷ Waktu = 180 km ÷ 3 jam = 60 km/jam.',
    unit: 'km/jam',
    diagram: {
      shape: 'rasio_kecepatan_bus',
      dimensions: {},
      label: 'UKS: Jarak & Waktu Tempuh Mobil Layanan',
    },
  },
  {
    id: 'q_pos_2_3',
    locationId: 'pos_2',
    question:
      'Sepeda motor dinas petugas UKS membutuhkan 2 liter bensin untuk menempuh jarak 90 km. Jika tangki diisi sebanyak 5 liter bensin, berapakah kilometer (km) jarak yang dapat ditempuh sepeda motor tersebut?',
    shapeType: 'rasio_satuan',
    type: 'isian_angka',
    difficulty: 'sedang',
    correctAnswer: '225',
    explanation:
      'Konsumsi per 1 liter (rasio satuan) = 90 km ÷ 2 liter = 45 km/liter. Untuk 5 liter bensin = 5 × 45 km = 225 km.',
    unit: 'km',
    diagram: {
      shape: 'rasio_bensin_jarak',
      dimensions: {},
      label: 'UKS: Konsumsi Bensin Sepeda Motor',
    },
  },
  {
    id: 'q_pos_2_4',
    locationId: 'pos_2',
    question:
      'Apotek Mitra UKS A menjual 3 buah termometer saku seharga Rp12.000, sedangkan Apotek B menjual 5 buah sejenis seharga Rp17.500. Apotek manakah yang menjual dengan rasio harga satuan lebih murah dan berapa harganya?',
    shapeType: 'rasio_satuan',
    type: 'pilihan_ganda',
    difficulty: 'sedang',
    options: [
      'Toko B (Rp3.500/buah)',
      'Toko A (Rp4.000/buah)',
      'Toko B (Rp3.000/buah)',
      'Keduanya sama murah',
    ],
    correctAnswer: 'Toko B (Rp3.500/buah)',
    explanation:
      'Harga satuan Toko A = Rp12.000 ÷ 3 = Rp4.000/buah. Harga satuan Toko B = Rp17.500 ÷ 5 = Rp3.500/buah. Jadi Toko B lebih murah (Rp3.500 per buah).',
    unit: 'toko',
    diagram: {
      shape: 'rasio_toko_penghapus',
      dimensions: {},
      label: 'UKS: Perbandingan Harga Termometer di Apotek',
    },
  },
  {
    id: 'q_pos_2_5',
    locationId: 'pos_2',
    question:
      'Dalam tes kebugaran di depan ruang UKS, seorang siswa dapat berlari 4 keliling lapangan sekolah dalam waktu 12 menit. Berapakah menit waktu yang dibutuhkan untuk menempuh 7 keliling lapangan dengan laju kecepatan yang sama?',
    shapeType: 'rasio_satuan',
    type: 'isian_angka',
    difficulty: 'sedang',
    correctAnswer: '21',
    explanation:
      'Rasio waktu per 1 keliling = 12 menit ÷ 4 keliling = 3 menit/keliling. Untuk 7 keliling = 7 × 3 menit = 21 menit.',
    unit: 'menit',
    diagram: {
      shape: 'rasio_lari_lapangan',
      dimensions: {},
      label: 'UKS: Catatan Tes Lari Siswa',
    },
  },

  // ==========================================
  // --- POS 3: DAPUR (5 SOAL MODEL BATANG, RESEP & CAMPURAN) ---
  // ==========================================
  {
    id: 'q_pos_3_1',
    locationId: 'pos_3',
    question:
      'Di dapur sekolah, rasio panjang pita pembungkus kue Ani terhadap pita Budi adalah 2 : 3 (lihat gambar ilustrasi di bawah). Jika panjang pita Ani adalah 10 cm, berapakah panjang pita Budi?',
    shapeType: 'rasio_pita',
    type: 'pilihan_ganda',
    difficulty: 'mudah',
    options: ['12 cm', '15 cm', '18 cm', '20 cm'],
    correctAnswer: '15 cm',
    explanation:
      'Pita Ani = 2 bagian = 10 cm, artinya 1 bagian = 10 ÷ 2 = 5 cm. Pita Budi = 3 bagian = 3 × 5 cm = 15 cm.',
    unit: 'cm',
    diagram: {
      shape: 'rasio_pita_ani_budi',
      dimensions: {},
      label: 'Dapur: Pita Pembungkus Kue',
    },
  },
  {
    id: 'q_pos_3_2',
    locationId: 'pos_3',
    question:
      'Saat memasak minuman di dapur, Ibu mencampur sirup dan air dengan rasio 1 : 4. Jika Ibu menuangkan 6 cangkir sirup, berapakah cangkir air yang harus ditambahkan agar rasanya pas?',
    shapeType: 'rasio_campuran',
    type: 'isian_angka',
    difficulty: 'mudah',
    correctAnswer: '24',
    explanation:
      'Rasio sirup : air = 1 : 4. Jika sirup = 6 cangkir (pengali 6), maka air = 6 × 4 = 24 cangkir air.',
    unit: 'cangkir',
    diagram: {
      shape: 'rasio_sirup_air',
      dimensions: {},
      label: 'Dapur: Takaran Sirup & Air',
    },
  },
  {
    id: 'q_pos_3_3',
    locationId: 'pos_3',
    question:
      'Petugas dapur mengecat dinding ruang makan dengan campuran cat warna kuning dan biru berbanding 3 : 2 untuk membuat warna hijau. Jika tersedia 12 kaleng cat kuning, berapakah kaleng cat biru yang diperlukan?',
    shapeType: 'rasio_campuran',
    type: 'pilihan_ganda',
    difficulty: 'sedang',
    options: ['6 kaleng', '8 kaleng', '10 kaleng', '14 kaleng'],
    correctAnswer: '8 kaleng',
    explanation:
      'Rasio kuning : biru = 3 : 2. Cat kuning = 12 kaleng (3 × 4). Maka cat biru = 2 × 4 = 8 kaleng.',
    unit: 'kaleng',
    diagram: {
      shape: 'rasio_cat_kuning_biru',
      dimensions: {},
      label: 'Dapur: Resep Campuran Cat',
    },
  },
  {
    id: 'q_pos_3_4',
    locationId: 'pos_3',
    question:
      'Perhatikan tabel rasio bibit pohon mangga dan jambu untuk kebun gizi dapur sekolah! Berapakah nilai X yang tepat untuk melengkapi tabel tersebut?',
    shapeType: 'tabel_rasio',
    type: 'pilihan_ganda',
    difficulty: 'sedang',
    options: ['21', '24', '28', '35'],
    correctAnswer: '28',
    explanation:
      'Rasio mangga : jambu = 3 : 7. Pada kolom ketiga, mangga = 12 (karena 3 × 4). Maka nilai X pada jambu adalah 7 × 4 = 28.',
    unit: 'bibit',
    diagram: {
      shape: 'tabel_rasio_bibit',
      dimensions: {},
      label: 'Dapur: Tabel Rasio Bibit Kebun Gizi',
    },
  },
  {
    id: 'q_pos_3_5',
    locationId: 'pos_3',
    question:
      'Resep dapur membuat 5 porsi kue bolu membutuhkan 250 gram tepung terigu. Jika juru masak ingin membuat 8 porsi kue bolu yang sama, berapa gram tepung terigu yang diperlukan?',
    shapeType: 'rasio_satuan',
    type: 'isian_angka',
    difficulty: 'sedang',
    correctAnswer: '400',
    explanation:
      'Kebutuhan tepung per 1 porsi = 250 gram ÷ 5 porsi = 50 gram/porsi. Untuk 8 porsi = 8 × 50 gram = 400 gram.',
    unit: 'gram',
    diagram: {
      shape: 'rasio_tepung_bolu',
      dimensions: {},
      label: 'Dapur: Takaran Bahan Kue Bolu',
    },
  },

  // ==========================================
  // --- POS 4: TOILET (5 SOAL RASIO JUMLAH & SELISIH) ---
  // ==========================================
  {
    id: 'q_pos_4_1',
    locationId: 'pos_4',
    question:
      'Di lorong toilet sekolah, rasio umur Kakak dan Adik yang sedang mengantre adalah 5 : 3. Jika jumlah umur keduanya adalah 24 tahun, berapakah umur Kakak saat ini?',
    shapeType: 'rasio_jumlah',
    type: 'pilihan_ganda',
    difficulty: 'sedang',
    options: ['12 tahun', '15 tahun', '18 tahun', '20 tahun'],
    correctAnswer: '15 tahun',
    explanation:
      'Jumlah bagian rasio = 5 + 3 = 8 bagian. Nilai 1 bagian = 24 tahun ÷ 8 = 3 tahun. Umur Kakak (5 bagian) = 5 × 3 = 15 tahun.',
    unit: 'tahun',
    diagram: {
      shape: 'rasio_umur_kakak_adik',
      dimensions: {},
      label: 'Toilet: Perbandingan Umur Kakak & Adik',
    },
  },
  {
    id: 'q_pos_4_2',
    locationId: 'pos_4',
    question:
      'Perbandingan sisa uang saku Rian dan Dika setelah membeli sabun cuci tangan toilet adalah 7 : 4. Selisih uang saku mereka berdua adalah Rp15.000. Berapakah uang saku Rian?',
    shapeType: 'rasio_selisih',
    type: 'isian_angka',
    difficulty: 'sedang',
    correctAnswer: '35000',
    explanation:
      'Selisih bagian rasio = 7 - 4 = 3 bagian. Nilai 1 bagian = Rp15.000 ÷ 3 = Rp5.000. Uang saku Rian (7 bagian) = 7 × Rp5.000 = Rp35.000.',
    unit: 'rupiah',
    diagram: {
      shape: 'rasio_uang_rian_dika',
      dimensions: {},
      label: 'Toilet: Sisa Uang Saku Rian & Dika',
    },
  },
  {
    id: 'q_pos_4_3',
    locationId: 'pos_4',
    question:
      'Dekat wastafel toilet, rasio siswa laki-laki terhadap siswa perempuan kelas 6 adalah 3 : 5. Jika total seluruh siswa kelas 6 SD Negeri 3 Loloan Timur adalah 40 anak, berapa banyakkah siswa perempuan?',
    shapeType: 'rasio_jumlah',
    type: 'pilihan_ganda',
    difficulty: 'sedang',
    options: ['15 anak', '20 anak', '25 anak', '30 anak'],
    correctAnswer: '25 anak',
    explanation:
      'Total bagian rasio = 3 + 5 = 8 bagian. Nilai 1 bagian = 40 anak ÷ 8 = 5 anak. Siswa perempuan (5 bagian) = 5 × 5 = 25 anak.',
    unit: 'anak',
    diagram: {
      shape: 'rasio_gender_kelas_6',
      dimensions: {},
      label: 'Toilet: Data Demografi Siswa Kelas 6',
    },
  },
  {
    id: 'q_pos_4_4',
    locationId: 'pos_4',
    question:
      'Rasio celengan tabungan Siti dan Dewi untuk kegiatan peduli kebersihan adalah 3 : 4. Jika jumlah tabungan keduanya adalah Rp350.000, berapakah selisih tabungan antara Siti dan Dewi?',
    shapeType: 'rasio_jumlah',
    type: 'pilihan_ganda',
    difficulty: 'sulit',
    options: ['Rp40.000', 'Rp50.000', 'Rp60.000', 'Rp70.000'],
    correctAnswer: 'Rp50.000',
    explanation:
      'Jumlah bagian = 3 + 4 = 7 bagian. Nilai 1 bagian = Rp350.000 ÷ 7 = Rp50.000. Selisih bagian = 4 - 3 = 1 bagian. Maka selisihnya = 1 × Rp50.000 = Rp50.000.',
    unit: 'rupiah',
    diagram: {
      shape: 'rasio_tabungan_siti_dewi',
      dimensions: {},
      label: 'Toilet: Celengan Tabungan Siti & Dewi',
    },
  },
  {
    id: 'q_pos_4_5',
    locationId: 'pos_4',
    question:
      'Perbandingan banyak kelereng Farhan dan Gilang yang tersimpan di saku celana adalah 5 : 8. Selisih kelereng mereka adalah 18 butir. Berapakah banyak kelereng yang dimiliki oleh Gilang?',
    shapeType: 'rasio_selisih',
    type: 'isian_angka',
    difficulty: 'sulit',
    correctAnswer: '48',
    explanation:
      'Selisih bagian rasio = 8 - 5 = 3 bagian. Nilai 1 bagian = 18 butir ÷ 3 = 6 butir. Kelereng Gilang (8 bagian) = 8 × 6 = 48 butir.',
    unit: 'butir',
    diagram: {
      shape: 'rasio_kelereng_farhan_gilang',
      dimensions: {},
      label: 'Toilet: Saku Kelereng Farhan & Gilang',
    },
  },

  // ==========================================
  // --- POS 5: WALI KELAS 6 (POS FINAL HARTA KARUN - 5 SOAL TANTANGAN) ---
  // ==========================================
  {
    id: 'q_pos_5_1',
    locationId: 'pos_5',
    question:
      'Di meja Wali Kelas 6 tersimpan peta petualangan harta karun dengan skala 1 : 50.000. Jika jarak dari pos sekolah ke pulau harta karun pada peta adalah 6 cm, berapakah jarak sebenarnya dalam kilometer (km)?',
    shapeType: 'rasio_skala',
    type: 'pilihan_ganda',
    difficulty: 'sulit',
    options: ['3 km', '5 km', '6 km', '30 km'],
    correctAnswer: '3 km',
    explanation:
      'Jarak sebenarnya = Jarak pada peta × Skala = 6 cm × 50.000 = 300.000 cm. Ubah cm ke km: 300.000 ÷ 100.000 = 3 km.',
    unit: 'km',
    diagram: {
      shape: 'rasio_skala_peta',
      dimensions: {},
      label: 'Wali Kelas 6: Peta Pulau Harta Karun',
    },
  },
  {
    id: 'q_pos_5_2',
    locationId: 'pos_5',
    question:
      'Di samping meja Wali Kelas 6 terdapat peti harta karun berisi koin emas, perak, dan perunggu dengan rasio 2 : 3 : 5. Jika total seluruh koin di dalam peti adalah 150 keping, berapa banyakkah keping koin perunggu?',
    shapeType: 'rasio_tiga',
    type: 'isian_angka',
    difficulty: 'sulit',
    correctAnswer: '75',
    explanation:
      'Total bagian rasio = 2 + 3 + 5 = 10 bagian. Nilai 1 bagian = 150 keping ÷ 10 = 15 keping. Koin perunggu (5 bagian) = 5 × 15 = 75 keping.',
    unit: 'keping',
    diagram: {
      shape: 'rasio_koin_harta_karun',
      dimensions: {},
      label: 'Wali Kelas 6: Peti Koin Emas, Perak, Perunggu',
    },
  },
  {
    id: 'q_pos_5_3',
    locationId: 'pos_5',
    question:
      'Tiga petualang menghadap Wali Kelas 6 untuk membagi permata: Rasio permata Ali : Budi = 2 : 3, sedangkan rasio permata Budi : Candra = 4 : 5. Berapakah perbandingan gabungan permata Ali : Budi : Candra dalam bentuk paling sederhana?',
    shapeType: 'rasio_tiga',
    type: 'pilihan_ganda',
    difficulty: 'sulit',
    options: ['8 : 12 : 15', '6 : 9 : 12', '4 : 6 : 10', '8 : 10 : 15'],
    correctAnswer: '8 : 12 : 15',
    explanation:
      'Samakan bagian Budi dengan KPK dari 3 dan 4 yaitu 12. Ali : Budi = (2 × 4) : (3 × 4) = 8 : 12. Budi : Candra = (4 × 3) : (5 × 3) = 12 : 15. Maka rasio gabungan Ali : Budi : Candra = 8 : 12 : 15.',
    unit: 'rasio',
    diagram: {
      shape: 'rasio_tiga_petualang',
      dimensions: {},
      label: 'Wali Kelas 6: Perbandingan Permata 3 Petualang',
    },
  },
  {
    id: 'q_pos_5_4',
    locationId: 'pos_5',
    question:
      'Di atas meja Wali Kelas 6 terdapat wadah yang mulanya berisi permata merah dan biru dengan rasio 5 : 3. Ditambahkan 6 butir permata merah ke dalam wadah sehingga rasionya kini menjadi 2 : 1. Berapakah jumlah seluruh permata di wadah sebelum penambahan?',
    shapeType: 'rasio_tantangan',
    type: 'pilihan_ganda',
    difficulty: 'sulit',
    options: ['40 butir', '48 butir', '54 butir', '64 butir'],
    correctAnswer: '48 butir',
    explanation:
      'Misal merah = 5k dan biru = 3k. Setelah ditambah 6 merah: (5k + 6) / 3k = 2 / 1 => 5k + 6 = 6k => k = 6. Permata mula-mula: Merah = 5 × 6 = 30, Biru = 3 × 6 = 18. Total seluruh permata mula-mula = 30 + 18 = 48 butir!',
    unit: 'butir',
    diagram: {
      shape: 'rasio_transisi_permata',
      dimensions: {},
      label: 'Wali Kelas 6: Wadah Permata Mula-mula',
    },
  },
  {
    id: 'q_pos_5_5',
    locationId: 'pos_5',
    question:
      'Wali Kelas 6 memperlihatkan denah arsitektur sekolah, di mana lapangan upacara digambar berukuran panjang 8 cm dan lebar 5 cm dengan skala 1 : 200. Berapakah luas sebenarnya lapangan upacara tersebut dalam meter persegi (m²)?',
    shapeType: 'rasio_skala',
    type: 'isian_angka',
    difficulty: 'sulit',
    correctAnswer: '160',
    explanation:
      'Panjang sebenarnya = 8 cm × 200 = 1.600 cm = 16 m. Lebar sebenarnya = 5 cm × 200 = 1.000 cm = 10 m. Luas sebenarnya = 16 m × 10 m = 160 m²!',
    unit: 'm²',
    diagram: {
      shape: 'rasio_lapangan_skala',
      dimensions: {},
      label: 'Wali Kelas 6: Denah Arsitektur Lapangan Upacara',
    },
  },
];

