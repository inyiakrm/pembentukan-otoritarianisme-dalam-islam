// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan semua link navigasi
    const navLinks = document.querySelectorAll('.sidebar-left a');
    
    // Mendapatkan semua bagian konten
    const contentSections = document.querySelectorAll('.content-section');
    
    // Fungsi untuk mengganti konten yang ditampilkan dan scroll ke sub-bagian
    function showContentAndScrollToSection(sectionId) {
        // Identifikasi parent section ID berdasarkan sub-section ID
        let parentSectionId = sectionId;
        
        // Jika ini adalah sub-bagian dari B. Konsep-Konsep Kunci
        if (sectionId === 'otoritarianisme' || 
            sectionId === 'lima-kontingensi' || 
            sectionId === 'teks-terbuka' || 
            sectionId === 'mukhaṭṭiah-muṣawwibah' || 
            sectionId === 'determinasi-makna' || 
            sectionId === 'asumsi-dasar' || 
            sectionId === 'hubungan-konsep') {
            parentSectionId = 'konsep-kunci';
        }
        // Jika ini adalah sub-bagian dari A. Pola Pengorganisasian Utama
        else if (sectionId === 'struktur-argumentatif' || 
                 sectionId === 'struktur-tematik' || 
                 sectionId === 'struktur-diskursif' || 
                 sectionId === 'aspek-dialektis') {
            parentSectionId = 'pola-pengorganisasian';
        }
        
        // Jika ini adalah sub-bagian dari C. Kerangka Pemikiran
else if (sectionId === 'pendekatan-yuridis' || 
    sectionId === 'teori-hubungan' || 
    sectionId === 'pendekatan-multidisiplin' || 
    sectionId === 'posisi-teoretis') {
parentSectionId = 'kerangka-pemikiran';
}
        // Sembunyikan semua bagian konten
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Tampilkan parent section
        const parentSection = document.getElementById(parentSectionId);
        if (parentSection) {
            parentSection.style.display = 'block';
            updateKeyPoints(parentSectionId);
            
            // Jika sectionId berbeda dari parentSectionId, ini berarti kita perlu scroll ke sub-bagian
            if (sectionId !== parentSectionId) {
                setTimeout(() => {
                    const targetElement = document.getElementById(sectionId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                // Jika ini adalah section utama, scroll ke awal section
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }
    
    // Fungsi untuk memperbarui tautan aktif
    function updateActiveLink(clickedLink) {
        // Hapus kelas 'active' dari semua tautan
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Tambahkan kelas 'active' ke tautan yang diklik
        clickedLink.classList.add('active');
        
        // Jika ini adalah sub-menu, aktifkan juga parent menuny
        const parentLi = clickedLink.closest('ul').closest('li');
        if (parentLi) {
            const parentLink = parentLi.querySelector('a');
            if (parentLink) {
                parentLink.classList.add('active');
            }
        }
    }
    
    // Fungsi untuk memperbarui poin-poin penting
    function updateKeyPoints(sectionId) {
        const keyPointsContainer = document.getElementById('key-points');
        let keyPointsHTML = '<ul>';
        
        switch(sectionId) {
            case 'pola-pengorganisasian':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Teks menggunakan pola argumentatif-konseptual</li>
                    <li><i class="fas fa-check-circle"></i> Pola argumentasi bersifat deduktif-induktif</li>
                    <li><i class="fas fa-check-circle"></i> Teks dibagi menjadi 5 bagian utama</li>
                    <li><i class="fas fa-check-circle"></i> Menggunakan struktur diskursif kompleks</li>
                    <li><i class="fas fa-check-circle"></i> Menampilkan pola dialektis yang kuat</li>
                `;
                break;
            case 'konsep-kunci':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Otoritarianisme: merampas Kehendak Ilahi</li>
                    <li><i class="fas fa-check-circle"></i> Lima kontingensi: kejujuran, pengendalian diri, ketekunan, komprehensif, kelayakan</li>
                    <li><i class="fas fa-check-circle"></i> Teks terbuka: teks sebagai "karya dalam pergerakan"</li>
                    <li><i class="fas fa-check-circle"></i> Mukhaṭṭi'ah vs Muṣawwibah: dua pendekatan tentang kebenaran interpretasi</li>
                    <li><i class="fas fa-check-circle"></i> Empat asumsi dasar: berbasis nilai, metodologis, berbasis alasan, berbasis iman</li>
                `;
                break;
            case 'otoritarianisme':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Marginalisasi realitas ontologis Ilahi</li>
                    <li><i class="fas fa-check-circle"></i> Agen menjadi self-referential</li>
                    <li><i class="fas fa-check-circle"></i> Pembaca menggantikan teks</li>
                    <li><i class="fas fa-check-circle"></i> Melibatkan klaim penipuan</li>
                    <li><i class="fas fa-check-circle"></i> Kurangnya pengendalian diri yang ekstrem</li>
                `;
                break;
            case 'lima-kontingensi':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Kejujuran (honesty)</li>
                    <li><i class="fas fa-check-circle"></i> Pengendalian diri (self-restraint)</li>
                    <li><i class="fas fa-check-circle"></i> Ketekunan (diligence)</li>
                    <li><i class="fas fa-check-circle"></i> Komprehensif (comprehensiveness)</li>
                    <li><i class="fas fa-check-circle"></i> Kelayakan/masuk akal (reasonableness)</li>
                `;
                break;
            case 'kerangka-pemikiran':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Pendekatan yuridis-hermeneutis</li>
                    <li><i class="fas fa-check-circle"></i> Teori hubungan agen-prinsipal</li>
                    <li><i class="fas fa-check-circle"></i> Pendekatan etika diskursus</li>
                    <li><i class="fas fa-check-circle"></i> Teori teks terbuka (Umberto Eco)</li>
                    <li><i class="fas fa-check-circle"></i> Pendekatan integratif-multidisiplin</li>
                `;
                break;
            case 'alur-penyampaian':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Struktur makro teks (5 bagian utama)</li>
                    <li><i class="fas fa-check-circle"></i> Pola pengembangan argumen</li>
                    <li><i class="fas fa-check-circle"></i> Strategi retoris</li>
                    <li><i class="fas fa-check-circle"></i> Alur argumentasi spiral</li>
                    <li><i class="fas fa-check-circle"></i> Kombinasi analisis dan rekonstruksi</li>
                `;
                break;
                case 'pendekatan-yuridis':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Menggabungkan fiqh dan hermeneutika</li>
                    <li><i class="fas fa-check-circle"></i> Menganalisis hubungan teks-pembaca-Tuhan</li>
                    <li><i class="fas fa-check-circle"></i> Mengeksplorasi dampak interpretasi pada makna</li>
                    <li><i class="fas fa-check-circle"></i> Menganalisis relasi kekuasaan dalam proses penafsiran</li>
                    <li><i class="fas fa-check-circle"></i> Pengaburan batas agen-Prinsipal dalam otoritarianisme</li>
                `;
                break;
                case 'teori-hubungan':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Tuhan sebagai "Prinsipal"</li>
                    <li><i class="fas fa-check-circle"></i> Ahli hukum sebagai "agen"</li>
                    <li><i class="fas fa-check-circle"></i> Umat sebagai "agen umum"</li>
                    <li><i class="fas fa-check-circle"></i> Dinamika pemberian dan pelaksanaan instruksi</li>
                    <li><i class="fas fa-check-circle"></i> Otoritarianisme sebagai penyimpangan hubungan agen-prinsipal</li>
                `;
                break;
                case 'pendekatan-multidisiplin':
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Integrasi berbagai disiplin ilmu</li>
                    <li><i class="fas fa-check-circle"></i> Pemaduan hukum Islam klasik dan teori modern</li>
                    <li><i class="fas fa-check-circle"></i> Penggunaan teori sastra dan sosiologi pengetahuan</li>
                    <li><i class="fas fa-check-circle"></i> Analisis multidimensi terhadap otoritarianisme</li>
                    <li><i class="fas fa-check-circle"></i> Kontekstualisasi teologi dan filsafat</li>
                `;
                break;
                case 'posisi-teoretis':
                    keyPointsHTML += `
                        <li><i class="fas fa-check-circle"></i> Pluralisme interpretatif</li>
                        <li><i class="fas fa-check-circle"></i> Kritik terhadap klaim otoritas absolut</li>
                        <li><i class="fas fa-check-circle"></i> Dukungan terhadap pendekatan muṣawwibah</li>
                        <li><i class="fas fa-check-circle"></i> Teks keagamaan sebagai "karya dalam pergerakan"</li>
                        <li><i class="fas fa-check-circle"></i> Etika diskursus sebagai moralitas tertinggi</li>
                    `;
                    break;
            default:
                keyPointsHTML += `
                    <li><i class="fas fa-check-circle"></i> Pilih bagian dari navigasi untuk melihat poin penting</li>
                `;
        }
        
        keyPointsHTML += '</ul>';
        keyPointsContainer.innerHTML = keyPointsHTML;
    }
    
    // Menambahkan event listener untuk setiap link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mendapatkan ID bagian dari href link
            const sectionId = this.getAttribute('href').substring(1);
            
            // Menampilkan bagian konten yang dipilih dan scroll ke sub-bagian jika perlu
            showContentAndScrollToSection(sectionId);
            
            // Memperbarui tautan aktif
            updateActiveLink(this);
        });
    });
    
    // Menampilkan bagian pertama saat halaman dimuat
    showContentAndScrollToSection('pola-pengorganisasian');
});