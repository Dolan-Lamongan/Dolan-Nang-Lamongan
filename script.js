// --- Data Wisata Lamongan (26 Destinasi setelah pemisahan Kolam) ---
const dataWisata = {
    // PREMIUM
    'WBL': {nama: 'Wisata Bahari Lamongan (WBL)', deskripsi: 'Theme park keluarga (17 Ha) dengan 52+ wahana seru, memadukan pantai dan wahana. Termasuk akses ke Pantai Tanjung Kodok. Harga Tiket: Hari Kerja (Senin–Kamis): Rp 85.000/orang. Akhir Pekan (Jumat–Minggu, Libur Nasional): Rp 110.000/orang.', foto: ['WBL.jpg'], },
    'PantaiTanjungKodok': {nama: 'Pantai Tanjung Kodok', deskripsi: 'Obyek pantai dengan batu karang berbentuk katak. Berada di dalam Kawasan WBL. Harga Tiket: Sama seperti WBL (Rp 85.000 - Rp 110.000).', foto: ['PantaiTanjungKodok.jpg'], },
    'TerusanWBLMZG': {nama: 'Tiket Terusan WBL + Maharani Zoo & Goa', deskripsi: 'Paket untuk kunjungan lengkap (WBL + Wahana MZG, Satwa, dan Goa). Harga Tiket Terusan: Hari Kerja: Rp 115.000. Akhir Pekan & Libur: Rp 145.000.', foto: ['TerusanWBL.jpg'], },
    'TamanInspirasiProgram': {nama: 'Taman Inspirasi Lamongan Program Studi Wisata', deskripsi: 'Program edukasi interaktif tematik (Pertanian, Kereta Api, Pesawat Terbang, dll). Harga Tiket Program Khusus: Bervariasi, mulai Rp 40.000 hingga Rp 315.000/anak.', foto: ['TamanInspirasi.jpg'], },
    
    // SEDANG
    'MZGSatuan': {nama: 'Goa Maharani and Zoo (MZG) Satuan', deskripsi: 'Kebun Binatang eksotis + eksplorasi Goa Maharani yang memukau. Harga Tiket Satuan: Weekday: Rp 40.000. Weekend & Hari Libur: Rp 50.000.', foto: ['GoaMaharani.jpg'], },
    'Wego': {nama: 'Wego Wisata Edukasi Gondang Outbond', deskripsi: 'Wisata edukasi & rekreasi (36 Ha) dilengkapi mini zoo, waterpark, dan flying fox. Harga Tiket: Senin - Kamis: Rp 15.000. Akhir Pekan & Tanggal Merah: Rp 20.000.', foto: ['Wego.jpg'], },
    'KolamLSC': {nama: 'Kolam Renang Lamongan Sport Center LSC', deskripsi: 'Fasilitas kolam renang lengkap di pusat kota. Harga Tiket: Hari Biasa (Selasa-Kamis): Rp 15.000. Akhir Pekan (Jumat-Minggu): Rp 20.000.', foto: ['LSC.jpg'], },
    'KolamKeraton': {nama: 'Kolam Renang Keraton Waterpark Babat', deskripsi: 'Waterpark keluarga di Babat dengan kolam dewasa, anak, dan seluncuran. Harga Tiket: Dewasa: Rp 15.000. Anak: Rp 10.000. (Malam hari Rp 5.000).', foto: ['KeratonWaterpark.jpg'], },
    'TamanInspirasiTerusan': {nama: 'Taman Inspirasi Paket Terusan Ringan', deskripsi: 'Paket terusan wahana interaktif (panen hidroponik, mancing, pasir/kompor, pakan hewan). Harga Tiket Paket Terusan: Rp 30.000.', foto: ['TamanInspirasi.jpg'], },
    
    // MURAH (Religi, Pantai, Alam, Kota/Kolam Murah)
    'MakamSunanDrajat': {nama: 'Makam Sunan Drajat', deskripsi: 'Destinasi ziarah Wali Songo yang ramai. Harga Tiket: Gratis (Donasi Sukarela). Parkir motor sekitar Rp 3.000 - Rp 5.000.', foto: ['MakamSunanDrajat.jpg'], },
    'MuseumSunanDrajat': {nama: 'Museum Sunan Drajat', deskripsi: 'Museum yang menyimpan peninggalan Sunan Drajat (Gamelan Singo Mengko, Batik Drajat, dll). Harga Tiket: Gratis. Parkir motor Rp 3.000, Mobil Rp 5.000.', foto: ['MuseumSunanDrajat.jpg'], },
    'MasjidNamira': {nama: 'Masjid Namira Lamongan', deskripsi: 'Masjid ikonik dengan arsitektur Timur Tengah dan kiswah asli Ka’bah. Harga Tiket: Gratis.', foto: ['MasjidNamira.jpg'], },
    'MasjidAgung': {nama: 'Masjid Agung Lamongan', deskripsi: 'Masjid bersejarah sejak 1908 dengan arsitektur khas Jawa. Harga Tiket: Gratis. Parkir Motor Rp 2.000, Mobil Rp 5.000.', foto: ['MasjidAgung.jpg'], },
    'AlunAlun': {nama: 'Alun-alun Lamongan', deskripsi: 'Area publik dengan monumen pesawat TNI AU. Harga Tiket: Gratis. Parkir Motor Rp 2.000, Mobil Rp 5.000.', foto: ['AlunAlunLamongan.jpg'], },
    'TelagaBandung': {nama: 'Telaga Bandung', deskripsi: 'Area hijau dengan dua telaga, cocok untuk santai sore. Harga Tiket: Gratis. Parkir Motor Rp 2.000, Mobil Rp 5.000.', foto: ['TelagaBandung.jpg'], },
    'PantaiKutang': {nama: 'Pantai Kutang', deskripsi: 'Pantai dengan pasir putih dan spot foto jembatan kayu. Harga Tiket Masuk: Rp 5.000/orang. Parkir Motor Rp 3.000, Mobil Rp 6.000.', foto: ['PantaiKutang.jpg'], },
    'PantaiKlayar': {nama: 'Pantai Putri Klayar', deskripsi: 'Hidden gem yang masih alami, rimbunan bakau, dan pasir putih lembut. Harga Tiket Masuk: Gratis. Biaya Parkir sekitar Rp 5.000.', foto: ['PantaiKlayar.jpg'], },
    'PantaiLorena': {nama: 'Pantai Lorena', deskripsi: 'Pantai populer dekat Paciran, cocok untuk sunset dan kuliner. Harga Tiket Masuk: Gratis. Biaya Parkir sekitar Rp 5.000.', foto: ['PantaiLorena.jpg'], },
    'PantaiKemantren': {nama: 'Pantai Kemantren', deskripsi: 'Ciri khas saung-saung bambu dan gubuk apung. Harga Tiket Masuk: Gratis. Biaya Spot Foto Rp 3.000/orang. Parkir Rp 5.000.', foto: ['PantaiKemantren.jpg'], },
    'GunungMas27': {nama: 'Istana Gunung Mas 27', deskripsi: 'Bekas tambang kapur yang disulap menjadi spot foto unik. Harga Tiket Masuk: Dewasa: Rp 10.000. Anak: Rp 5.000. (Wahana lain berbayar terpisah).', foto: ['GunungMas.jpg'], },
    'AirPanasBrumbung': {nama: 'Pemandian Air Panas Brumbung', deskripsi: 'Sendang air panas bersejarah sejak zaman Walisongo. Harga Tiket Masuk: Rp 5.000/orang.', foto: ['AirPanasBrumbung.jpg'], },
    'WadukGondang': {nama: 'Waduk Gondang', deskripsi: 'Wisata air populer, fasilitas lengkap (sepeda air, mini zoo). Harga Tiket Masuk: Rp 5.000/orang.', foto: ['WadukGondang.jpg'], },
    
    // DIPISAHKAN DARI MULTI-FOTO
    'KolamSili': {
        nama: 'Kolam Renang Sili (Murah)',
        deskripsi: 'Kolam renang komunal murah di area kota. Harga Tiket Masuk: Rp 10.000 (Hari Biasa) - Rp 12.000 (Akhir Pekan).',
        foto: ['Sili.jpg'],
    },
    'KolamOroOroOmbo': {
        nama: 'Kolam Renang Oro-Oro Ombo (Murah)',
        deskripsi: 'Kolam renang komunal murah di Lamongan Selatan. Harga Tiket Masuk: Rp 13.000.',
        foto: ['OroOroOmbo.jpg'],
    },
    'KolamHiling': {
        nama: 'Hiling Waterpark (Murah)',
        deskripsi: 'Waterpark kecil dan murah untuk keluarga. Harga Tiket Masuk: Rp 10.000 (Hari Biasa) - Rp 12.000 (Akhir Pekan).',
        foto: ['HilingWaterpark.jpg'],
    },
    'KolamAcasha': {nama: 'Achasa Kolam Renang Lamongan', deskripsi: 'Kolam renang konsep edukasi alam, terapi ikan, dan playground. Harga Tiket Masuk: Dasar: Rp 5.000. Wahana Tambahan: Rp 5.000 - Rp 10.000.', foto: ['Acasha.jpg'], },
};


// --- Data Pertanyaan Kuis (Diperbarui untuk mencakup 26 data wisata) ---
const questions = {
    'Q1': {
        text: 'Pengen dolan nganggo budget sing kepiye?',
        options: [
            { label: 'Premium Sultan, Gak dadi masalah duwit akeh metu', next: 'Q2_Premium', icon: 'fa-gem' },
            { label: 'Mendang-mending, Maksimal Rp 50.000 saben wong', next: 'Q2_Sedang', icon: 'fa-money-bill-wave' },
            { label: 'Murah Meriah, Maksimal Rp 25.000 saben wong', next: 'Q2_Murah', icon: 'fa-piggy-bank' }
        ]
    },
    'Q2_Premium': {
        text: 'Oke, Premium Sultan. Wisatae arep fokus ning endi?',
        options: [
            { label: 'Wahana lan Pantai Komplit (WBL, MZG), Terusan sak dino', result: 'TerusanWBLMZG', icon: 'fa-ferry' },
            { label: 'Wisata Banyu lan Wahana (WBL), Fokus ning pantai lan wahana', result: 'WBL', icon: 'fa-ship' },
            { label: 'Edukasi lan Program Khusus, Kanggo bocah-bocah lan kulawarga', result: 'TamanInspirasiProgram', icon: 'fa-lightbulb' }
        ]
    },
    'Q2_Sedang': {
        text: 'Oke, Mendang-mending. Pilih kegiatan sing paling disenengi?',
        options: [
            { label: 'Eksplorasi Alam lan Satwa, Goa Maharani & Kebun Binatang', result: 'MZGSatuan', icon: 'fa-paw' },
            { label: 'Rekreasi Banyu lan Outdoor, Outbond, Waterpark, lan Mini Zoo (Wego)', result: 'Wego', icon: 'fa-water' },
            { label: 'Waterpark Babat, Kolam Renang Keluarga (Keraton)', result: 'KolamKeraton', icon: 'fa-swimming-pool' }, 
            { label: 'Murni Pantai lan Sunset, Santai ning Pantai Tanjung Kodok', result: 'PantaiTanjungKodok', icon: 'fa-sun' },
            { label: 'Waterpark lan Kolam, Lamongan Sport Center (LSC)', result: 'KolamLSC', icon: 'fa-swimmer' }
        ]
    },
    'Q2_Murah': {
        text: 'Oke, Murah Meriah. Apa fokus utamane dolanmu saiki?',
        options: [
            { label: 'Religi & Sejarah, Ziarah lan Masjid sing Bersejarah', next: 'Q3_Murah_Religi', icon: 'fa-pray' },
            { label: 'Pantai & Pesisir, Seneng-seneng ning Segoro Jawa', next: 'Q3_Murah_Pantai', icon: 'fa-umbrella-beach' },
            { label: 'Outdoor Alam & Banyu, Telaga/Waduk, Air Panas, lan Gunung', next: 'Q3_Murah_Alam', icon: 'fa-mountain' }, 
            { label: 'Kolam Murah & Kota, Taman, Alun-alun, utawa Waterpark Ringan', next: 'Q3_Murah_Kota', icon: 'fa-city' } 
        ]
    },
    // --- CABANG RELIGI ---
    'Q3_Murah_Religi': {
        text: 'Pilih Panggonan Religi & Sejarah?',
        options: [
            { label: 'Ziarah Wali Songo, Pasareyan Sunan Drajat', result: 'MakamSunanDrajat', icon: 'fa-mosque' },
            { label: 'Museum Wali Songo, Peninggalan Sunan Drajat', result: 'MuseumSunanDrajat', icon: 'fa-book-open' }, 
            { label: 'Arsitektur Modern lan Kiswah Kabah, Masjid Namira', result: 'MasjidNamira', icon: 'fa-star-of-david' },
            { label: 'Masjid Pusat Kutha, Sejarah Walisongo (Masjid Agung)', result: 'MasjidAgung', icon: 'fa-archway' } 
        ]
    },
    // --- CABANG PANTAI ---
    'Q3_Murah_Pantai': {
        text: 'Pilih Pantai sing endi?',
        options: [
            { label: 'Pantai Populer karo Jembatan', result: 'PantaiKutang', icon: 'fa-camera' },
            { label: 'Pantai sing Isih Asri/Hidden Gem', result: 'PantaiKlayar', icon: 'fa-tree' },
            { label: 'Pantai Populer karo Sunset', result: 'PantaiLorena', icon: 'fa-sun' },
            { label: 'Pantai karo Saung Apung', result: 'PantaiKemantren', icon: 'fa-house-water' } 
        ]
    },
    // --- CABANG ALAM ---
    'Q3_Murah_Alam': {
        text: 'Pilih Wisata Outdoor lan Alam?',
        options: [
            { label: 'Tilas Tambang Kapur kanggo Foto', result: 'GunungMas27', icon: 'fa-hill-avalanche' },
            { label: 'Pemandian Banyu Panas', result: 'AirPanasBrumbung', icon: 'fa-hot-tub-person' },
            { label: 'Wisata Banyu lan Mini Zoo', result: 'WadukGondang', icon: 'fa-ship' },
            { label: 'Ruang Ijo karo Telaga', result: 'TelagaBandung', icon: 'fa-mountain-sun' } 
        ]
    },
    // --- CABANG KOTA & KOLAM MURAH (Diperluas) ---
    'Q3_Murah_Kota': {
        text: 'Pilih Wisata Kota, Taman, utawa Kolam Paling Murah?',
        options: [
            { label: 'Kolam Paling Murah (Hiling Waterpark), Waterpark keluarga cilik', result: 'KolamHiling', icon: 'fa-droplet' }, // DIPISAHKAN
            { label: 'Kolam renang murah di kota', result: 'KolamSili', icon: 'fa-person-swimming' }, // DIPISAHKAN
            { label: 'Kolam renang murah Lamongan Selatan', result: 'KolamOroOroOmbo', icon: 'fa-bath' }, // DIPISAHKAN
            { label: 'Kolam Renang Konsep Alam/Edukasi', result: 'KolamAcasha', icon: 'fa-seedling' },
            { label: 'Pusat Taman Bermain lan Santai', result: 'AlunAlun', icon: 'fa-tree-city' },
            { label: 'Wahana Ringan Murah (Hidroponik, Pakan Kewan)', result: 'TamanInspirasiTerusan', icon: 'fa-carrot' } 
        ]
    },
};

// --- DOM References ---
const homePage = document.getElementById('home-page');
const quizArea = document.getElementById('quiz-area');
const resultDiv = document.getElementById('result');
const rekomendasiListDiv = document.getElementById('rekomendasi-list');
const mainBackground = document.querySelector('.main-background');
const music = document.getElementById('background-music');
const video = document.getElementById('cityVideo');

// Variabel kuis
let currentQuestionId = 'Q1'; 

// --- FUNGSI MULTI-FOTO (Dipertahankan untuk item lain, tetapi logika diubah) ---
function generateFotoHTML(fotos) {
    if (typeof fotos === 'string') {
        return `<img src="${fotos}" alt="Foto Wisata" class="rekomendasi-image">`;
    }
    
    // Logika ini hanya akan dijalankan jika Array masih ada (misalnya di masa depan)
    if (Array.isArray(fotos) && fotos.length > 1) {
        return `
            <div class="multiple-images-container">
                ${fotos.map((f, index) => 
                    `<img src="${f}" alt="Foto ${index + 1}" class="rekomendasi-image-small">`
                ).join('')}
            </div>
        `;
    } 
    
    // Jika Array 1 foto (format baru), tampilkan tag IMG biasa
    if (Array.isArray(fotos) && fotos.length === 1) {
        return `<img src="${fotos[0]}" alt="Foto Wisata" class="rekomendasi-image">`;
    }
    
    // Fallback
    return '<div class="rekomendasi-image" style="background-color: #eee;">Foto Tidak Tersedia</div>';
}

// --- FUNGSI UNMUTE DAN PLAY ---
function unmuteAndPlay() {
    if (music.muted) {
        music.muted = false;
    }
    music.play().catch(e => {
        // Gagal play jika interaksi tidak cukup
    });
}

// --- FUNGSI NAVIGASI & LOGIKA KUIS ---
function hideAllPages() {
    [homePage, quizArea, resultDiv].forEach(page => {
        page.classList.remove('active-page');
        page.style.display = 'none';
    });
}

function showPage(pageElement) {
    hideAllPages();
    pageElement.style.display = 'block';
    setTimeout(() => {
        pageElement.classList.add('active-page');
    }, 50);
}

function startQuiz() {
    unmuteAndPlay(); 
    showPage(quizArea);
    setTimeout(() => displayQuestion('Q1'), 300); 
}

function goToHome() {
    showPage(homePage);
}

function resetQuiz() {
    showPage(quizArea);
    setTimeout(() => displayQuestion('Q1'), 300);
}

function showQuickResult(key) {
    unmuteAndPlay(); 
    const item = dataWisata[key]; 
    if (!item) {
        alert("Data wisata tidak ditemukan!");
        return;
    }

    showPage(resultDiv);
    rekomendasiListDiv.innerHTML = `
        <h2>✨ Pilihan Cepet (Quick Pick)</h2>
        <div class="rekomendasi-item surprise-effect">
            ${generateFotoHTML(item.foto)} 
            <div class="rekomendasi-text">
                <strong>${item.nama}</strong>
                <p>${item.deskripsi}</p>
            </div>
        </div>
        <p style="font-style: italic; margin-top: 15px; color: var(--color-primary);">Iki pilihan cepet paling cocok kanggo sampeyan!</p>
    `;
}

function displayQuestion(qId) {
    currentQuestionId = qId;
    const qData = questions[qId];
    if (!qData) {
        quizArea.innerHTML = `<p style="color: red;">Error: Data pertanyaan tidak ditemukan untuk ID: ${qId}</p>`;
        return;
    }
    quizArea.style.opacity = '0';
    setTimeout(() => {
        quizArea.innerHTML = `
            <div class="question-box">
                <p>${qData.text}</p>
                <div class="options">
                    ${qData.options.map(opt => {
                        const parts = opt.label.split(', ');
                        const mainLabel = parts[0]; 
                        const desc = parts.slice(1).join(', '); 
                        return `
                            <button onclick="handleAnswer('${qId}', '${opt.label.replace(/'/g, "\\'")}')">
                                <div class="option-content">
                                    <i class="icon fas ${opt.icon || 'fa-question-circle'}"></i> 
                                    <div class="text-group">
                                        <span class="main-label">${mainLabel}</span>
                                        <span class="description">${desc || 'Pilih opsi ini.'}</span>
                                    </div>
                                </div>
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        quizArea.style.opacity = '1'; 
    }, 300); 
}

function handleAnswer(qId, selectedLabel) {
    const qData = questions[qId];
    const selectedOption = qData.options.find(opt => opt.label === selectedLabel);
    if (!selectedOption) return;

    if (selectedOption.next) {
        quizArea.style.opacity = '0';
        setTimeout(() => displayQuestion(selectedOption.next), 300);
    } else if (selectedOption.result) {
        showResult(selectedOption.result);
    }
}

function showResult(resultKey) {
    const item = dataWisata[resultKey]; 
    if (!item) {
        alert("Rekomendasi wisata tidak ditemukan!");
        return;
    }
    
    quizArea.style.opacity = '0';
    setTimeout(() => {
        showPage(resultDiv);
        rekomendasiListDiv.innerHTML = `
            <h2>🎉 Rekomendasi Paling Cocok Kanggo Sampeyan!</h2>
            <div class="rekomendasi-item surprise-effect">
                ${generateFotoHTML(item.foto)} 
                <div class="rekomendasi-text">
                    <strong>${item.nama}</strong>
                    <p>${item.deskripsi}</p>
                </div>
            </div>
            <p style="font-style: italic; margin-top: 15px; color: var(--color-primary);">Mugi-mugi liburan sampeyan ing Lamongan nyenengake!</p>
        `;
    }, 300);
}

// --- FUNGSI MODAL (Perbaikan tombol tidak bisa diklik) ---
function showInfoModal() {
    unmuteAndPlay(); 
    const modal = document.getElementById('info-modal');
    
    mainBackground.classList.add('hidden');
    
    modal.style.display = 'flex'; 
    setTimeout(() => {
        modal.classList.add('show'); 
    }, 10);
}

function closeInfoModal() {
    const modal = document.getElementById('info-modal');
    
    modal.classList.remove('show');
    
    // KODE KRITIS: Hapus 'hidden' untuk mengaktifkan kembali klik
    mainBackground.classList.remove('hidden'); 
    
    // Set display: none setelah transisi
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); 
}

// --- INISIALISASI ---
document.addEventListener('DOMContentLoaded', () => {
    hideAllPages(); 
    goToHome();
    
    if (video) {
        video.play().catch(e => console.log("Gagal memutar video secara otomatis."));
    }
});

// Tutup modal ketika klik di luar modal (overlay)
window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        closeInfoModal();
    }
}