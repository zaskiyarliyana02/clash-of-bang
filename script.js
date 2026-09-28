// Fungsi untuk memindahkan halaman secara dinamis (Tab System)
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    //  Update status 'active' pada menu navigasi atas (Navbar)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.innerText.toLowerCase() === pageId.toLowerCase()) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

//MENYIMPAN DATA SAAT REGISTER
function handleRegister() {
    const usernameInput = document.getElementById('reg-username').value;
    const passwordInput = document.getElementById('reg-password').value;

    // Simpan username dan password ke dalam localStorage browser
    localStorage.setItem('savedUsername', usernameInput);
    localStorage.setItem('savedPassword', passwordInput);

    alert('Registrasi Berhasil! Silakan login dengan akun Anda.');
    
    // Alihkan user ke halaman login setelah mendaftar
    switchPage('login');
}

//VALIDASI DATA SAAT LOGIN
function handleLogin() {
    const usernameInput = document.getElementById('login-username').value;
    const passwordInput = document.getElementById('login-password').value;

    // Ambil data akun yang sebelumnya sudah tersimpan di localStorage
    const savedUsername = localStorage.getItem('savedUsername');
    const savedPassword = localStorage.getItem('savedPassword');

    // Cek apakah user sudah pernah register atau belum
    if (!savedUsername || !savedPassword) {
        alert('Akun belum terdaftar! Silakan register terlebih dahulu.');
        switchPage('register');
        return;
    }

    // PROSES VALIDASI: Cocokkan input dengan data yang tersimpan
    if (usernameInput === savedUsername && passwordInput === savedPassword) {
        // JIKA COCOK (LOGIN SUKSES)
        alert('Login Berhasil!'); 


        const navJoinBtn = document.getElementById('nav-join-btn');
        const heroJoinBtn = document.getElementById('hero-join-btn');

        if (navJoinBtn) navJoinBtn.style.setProperty('display', 'none', 'important');
        if (heroJoinBtn) heroJoinBtn.style.setProperty('display', 'none', 'important');

 
        switchPage('home');
    } else {

        alert('Username atau Password salah! Periksa kembali data Anda.');
    }
}

function bukaDetailUpdate(judulUpdate) {
    const dataUpdate = {
        'SEASON 12: SHADOW RISING': {
            deskripsi: `
                <p>Musim ke-12 telah resmi dimulai! "Shadow Rising" membawa atmosfer kegelapan total ke dalam arena pertempuran Clash of BaNG. Pada musim ini, para pemain akan ditantang dengan berbagai misi harian dan mingguan baru yang jauh lebih kompetitif.</p>
                <br>
                <p><strong>Apa yang baru di Season 12?</strong></p>
                <ul>    
                    <li><strong>Shadow Pass:</strong> Buka 50 tingkat hadiah eksklusif termasuk skin kastil bertema Gothic Castle.</li>
                    <li><strong>Mekanik Gerhana:</strong> Selama pertempuran di map tertentu, kegelapan akan memperkuat serangan troops tipe Magic sebesar 15%.</li>
                    <li><strong>Resource Boost:</strong> Dapatkan bonus elixir hitam melimpah melalui ajang tantangan musiman khusus.</li>
                </ul>
                <br>
                <p>Persiapkan strategimu, perkuat pertahanan clan-mu, dan jangan biarkan pasukan kegelapan menguasai takhtamu. Update game kamu sekarang dan mulailah mendominasi papan peringkat!</p>
            `
        },
        'DARK CLAN GAMES': {
            deskripsi: `
                <p>Panggil seluruh anggota clan-mu! Acara rutin Dark Clan Games kembali hadir dengan variasi tantangan yang jauh lebih mencekam dan hadiah yang berkali-kali lipat lebih besar.</p>
                <br>
                <p>Bekerjasamalah untuk menyelesaikan tugas-tugas khusus seperti menghancurkan tumpukan defense lawan menggunakan Melee troops, mengumpulkan bintang dalam waktu singkat, hingga mengalahkan boss event bersama-sama.</p>
                <br>
                <p>Setiap poin yang dikumpulkan oleh anggota akan diakumulasikan untuk membuka tier hadiah clan. Di tier tertinggi, seluruh anggota yang berpartisipasi berhak mengklaim Kit upgrade instan untuk ramuan sihir kuno!</p>
            `
        },
        'NECRO WARDEN IS HERE!': {
            deskripsi: `
                <p>Pasukan kegelapan kedatangan pemimpin baru yang sangat ditakuti: <strong>Necro Warden</strong>. Unit hero spiritual ini memiliki kemampuan unik untuk membalikkan keadaan di medan laga menggunakan sihir hitamnya.</p>
                <br>
                <p><strong>Kemampuan Utama Necro Warden:</strong></p>
                <ul>
                    <li><strong>Soul Summon (Pasif):</strong> Setiap ada unit kawan atau lawan berukuran kecil yang gugur di dekatnya, Necro Warden otomatis membangkitkan mereka kembali sebagai tentara tengkorak bayangan (Shadow Skeleton).</li>
                    <li><strong>Annihilation Aura (Aktif):</strong> Melepaskan gelombang energi ungu yang memberikan efek debuff pengurangan armor bagi pertahanan musuh di area sekitar selama 8 detik.</li>
                </ul>
                <br>
                <p>Sangat cocok dikombinasikan dengan tank berdarah tebal seperti Lava Golem untuk memberikan perlindungan penuh selagi Necro Warden mengumpulkan pasukan mayat hidup di garis belakang pertahanan lawan.</p>
            `
        }
    };

    const elemenJudul = document.getElementById('detail-update-title');
    const elemenKonten = document.getElementById('detail-update-content');

    if (dataUpdate[judulUpdate]) {
        elemenJudul.innerText = judulUpdate;
        elemenKonten.innerHTML = dataUpdate[judulUpdate].deskripsi;
        
        switchPage('page-detail-update');
    } else {
        alert('Artikel update tidak ditemukan.');
    }
}


function AboutPage(pageId) {
    // 1. Sembunyikan semua halaman dengan menghapus class 'active'
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Tampilan halaman yang dituju
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    //  Atur status menu navigasi aktif di header
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Jika teks link sama dengan id halaman, beri class active
        if (link.getAttribute('onclick').includes(`'${pageId}'`)) {
            link.classList.add('active');
        }
    });

    // Otomatis scroll ke atas setiap kali pindah halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
    
    window.addEventListener('scroll', function () {
        const aboutBanner = document.querySelector('.about-header-art');
        // Hanya eksekusi jika banner ada dan halaman about sedang aktif
        if (aboutBanner && document.getElementById('page-about').classList.contains('active')) {
            let scrollValue = window.scrollY;
            // Menggeser posisi background sedikit demi sedikit mengikuti scroll
            aboutBanner.style.backgroundPositionY = (scrollValue * 0.2) + 'px';
        }
    });

    const aboutBox = document.querySelector('.about-box');
    if (aboutBox) {
        aboutBox.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(147, 51, 234, 0.2)'; // Glow warna ungu tema Clash of BaNG
            this.style.transition = 'all 0.3s ease';
        });

        aboutBox.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    }
});

// FILTER HALAMAN GALLERY
function inisialisasiFilterGallery() {
    const filterButtons = document.querySelectorAll("#page-gallery .filter-btn");
    const galleryItems = document.querySelectorAll("#page-gallery .gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (filterValue === "all" || filterValue === itemCategory) {
                    item.style.display = "flex"; 
                } else {
                    item.style.display = "none";  
                }
            });
        });
    });
}

// FILTER HALAMAN TROOPS
function inisialisasiFilterTroops() {
    const troopButtons = document.querySelectorAll("#page-troops .filter-btn");
    const troopItems = document.querySelectorAll("#page-troops .gallery-item");

    troopButtons.forEach(button => {
        button.addEventListener("click", function () {
            troopButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            troopItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (filterValue === "all" || filterValue === itemCategory) {
                    item.style.display = "flex"; 
                } else {
                    item.style.display = "none";  
                }
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    inisialisasiFilterGallery();
    inisialisasiFilterTroops();
});

// FUNGSI UTAMA BUKA DETAIL PROFIL
function bukaDetailGallery(namaItem, dariHalaman) {
    //  Database lengkap profil
    const databaseKarakter = {
        'DARK KNIGHT': {
            tag: 'TROOPS - MELEE',
            deskripsi: 'Mengenakan zirah baja hitam legam yang ditempa di dalam palung Abyss, Dark Knight berdiri kokoh di garda terdepan. Kesatria ini telah mengorbankan jiwanya demi mendapatkan kekuatan absolut untuk memecah belah garis pertahanan musuh tanpa rasa takut.',
            stats: { atk: '85%', def: '90%', spd: '40%' },
            skills: `
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Abyss Cleave (Active)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Mengayunkan pedang raksasanya dalam radius 180°, memberikan damage area besar ke semua musuh di depannya.</span>
                </div>
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #22c55e;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Unyielding Armor (Passive)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Mengurangi seluruh kerusakan fisik yang diterima dari tower pertahanan lawan sebesar 25%.</span>
                </div>
            `
        },
        'SHADOW ARCHER': {
            tag: 'TROOPS - RANGED',
            deskripsi: 'Melangkah tanpa suara di bawah keheningan malam, Shadow Archer memburu mangsanya dari balik bayang-bayang. Busur mistisnya terbuat dari kayu pohon terkutuk yang mampu meluncurkan anak panah penembus pelindung sihir.',
            stats: { atk: '75%', def: '35%', spd: '85%' },
            skills: `
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Ghost Cloak (Passive)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Menjadi tidak terlihat dan tidak bisa ditarget oleh musuh selama 6 detik pertama saat memasuki medan laga.</span>
                </div>
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Phantom Arrow (Active)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Menmenembakkan anak panah bayangan berkekuatan tinggi yang menembus garis lurus hingga mengenai 3 target sekaligus.</span>
                </div>
            `
        },
        'LAVA GOLEM': {
            tag: 'TROOPS - TANK',
            deskripsi: 'Makhluk raksasa kuno yang terbangun akibat letusan gunung berapi inti dunia. Tubuhnya murni tersusun dari batuan obsidian keras dan magma mendidih. Ia ditarik secara magis untuk menghancurkan bangunan pertahanan lawan terlebih dahulu.',
            stats: { atk: '50%', def: '100%', spd: '25%' },
            skills: `
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #eab308;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Searing Aura (Passive)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Hawa panas tubuhnya membakar tanah di sekitarnya secara konstan, memberikan damage per detik ke musuh terdekat.</span>
                </div>
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Volcanic Split (On-Death)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Saat HP menyentuh angka 0, tubuhnya memicu ledakan besar dan membelah menjadi 3 Lava Pups kecil yang agresif.</span>
                </div>
            `
        },
        'WITCH': {
            tag: 'TROOPS - MAGIC',
            deskripsi: 'Seorang penyihir wanita kegelapan yang mampu memanipulasi arwah. Alih-alih bertarung sendirian, ia memanfaatkan energi kutukan dari jarak jauh untuk memanggil pasukan kerangka guna mengacaukan konsentrasi tower pertahanan lawan.',
            stats: { atk: '70%', def: '40%', spd: '60%' },
            skills: `
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #a855f7;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Raise Dead (Passive)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Secara berkala membangkitkan 4 prajurit tengkorak kecil (Skeletons) ke medan perang untuk menjadi tameng hidup.</span>
                </div>
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Shadow Bolt (Active)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Menembakkan proyektil energi gelap murni yang meledak dan memberikan splash damage kecil ke target.</span>
                </div>
            `
        },
        'INFERNO DRAGON': {
            tag: 'TROOPS - FLYING',
            deskripsi: 'Naga purba bersayap kokoh yang membawa tangki bahan bakar magma cair di punggungnya. Serangan semburan apinya memiliki mekanik unik yang mematikan, menjadikannya momok paling menakutkan bagi unit berdarah tebal.',
            stats: { atk: '90%', def: '70%', spd: '65%' },
            skills: `
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Focused Beam (Passive Continuous)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Semburan api yang mengenai target yang sama secara terus-menerus akan mengalami peningkatan damage gila-gilaan setiap detiknya.</span>
                </div>
            `
        },
        'DARK WIZARD': {
            tag: 'TROOPS - MAGIC',
            deskripsi: 'Ahli sihir hitam destruktif yang memfokuskan seluruh kekuatannya pada elemen kehancuran murni. Serangannya lambat namun memiliki daya hancur area yang sangat masif, mampu meratakan sekumpulan pasukan pertahanan kecil dalam sekejap.',
            stats: { atk: '95%', def: '45%', spd: '50%' },
            skills: `
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #eab308;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Dark Flare (Active)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Melontarkan bola api hitam raksasa yang menghasilkan damage ledakan area (AoE) sangat besar begitu membentur target.</span>
                </div>
            `
        },
        'CHAOS MAGE': {
            tag: 'HEROES - MAGE',
            deskripsi: 'Penyihir legendaris agung penguasa energi kekacauan (Chaos). Mampu mendistorsi ruang dan memanipulasi takdir pertempuran, kehadirannya di area laga adalah jaminan mutlak kehancuran bagi siapapun yang berani menentangnya.',
            stats: { atk: '95%', def: '50%', spd: '70%' },
            skills: `
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #a855f7;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Chaos Singularity (Ultimate)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Menciptakan lubang hitam mini di tengah area musuh, menarik mereka ke pusat lingkaran lalu meledak hebat.</span>
                </div>
                <div style="background: rgba(147, 51, 234, 0.1); padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <strong style="color: #fff; display: block; margin-bottom: 5px;">Blink Shift (Active)</strong>
                    <span style="color: #b3b4b6; font-size: 14px;">Berteleportasi secara instan sejauh beberapa meter ke depan untuk menghindari kejaran atau kepungan unit lawan.</span>
                </div>
            `
        },
        'ANCIENT ALTAR': {
            tag: 'ARTWORK - ENVIRONMENT',
            deskripsi: 'Monumen sakral kuno yang terletak di jantung wilayah terlarang Clash of BaNG. Altar ini memancarkan pendaran energi ungu kosmis konstan, dipercaya sebagai gerbang purba tempat para leluhur memanggil entitas penjaga dunia.',
            stats: { atk: '0%', def: '0%', spd: '0%' },
            skills: '<p style="color: #64748b; font-style: italic;">Ini adalah item konsep visual / Artwork lingkungan game. Tidak memiliki kemampuan bertarung di dalam arena.</p>'
        },
        'DARK WORLD': {
            tag: 'ARTWORK - LANDSCAPE',
            deskripsi: 'Sebuah mahakarya seni digital yang menggambarkan lanskap dimensi kegelapan total, tempat bermukimnya faksi kastil kegelapan. Atmosfer mencekam di dalam ilustrasi ini menjadi pondasi dasar arah visual dunia Clash of BaNG.',
            stats: { atk: '0%', def: '0%', spd: '0%' },
            skills: '<p style="color: #64748b; font-style: italic;">Ini adalah item konsep visual / Artwork lingkungan game. Tidak memiliki kemampuan bertarung di dalam arena.</p>'
        }
    };

    // Cari semua elemen penampung di HTML
    const tagElemen = document.getElementById('gallery-detail-tag');
    const judulElemen = document.getElementById('gallery-detail-title');
    const kontenElemen = document.getElementById('gallery-detail-content');
    const skillsElemen = document.getElementById('gallery-detail-skills');
    
    const atkBar = document.getElementById('stat-atk-bar');
    const defBar = document.getElementById('stat-def-bar');
    const spdBar = document.getElementById('stat-spd-bar');
    
    const atkVal = document.getElementById('stat-atk-val');
    const defVal = document.getElementById('stat-def-val');
    const spdVal = document.getElementById('stat-spd-val');

    // Ambil elemen tombol back yang di HTML sudah dihapus onclick-nya
    const tombolBack = document.getElementById('btn-back-gallery');

    // Masukkan data jika nama item terdaftar di database
    if (databaseKarakter[namaItem]) {
        const item = databaseKarakter[namaItem];
        
        tagElemen.innerText = item.tag;
        judulElemen.innerText = namaItem;
        kontenElemen.innerHTML = item.deskripsi;
        skillsElemen.innerHTML = item.skills;

        // Reset animasi bar ke 0% dulu
        atkBar.style.width = '0%';
        defBar.style.width = '0%';
        spdBar.style.width = '0%';

        // Pasang angka persentase teks
        atkVal.innerText = item.stats.atk;
        defVal.innerText = item.stats.def;
        spdVal.innerText = item.stats.spd;

        if (dariHalaman === 'troops') {
            tombolBack.innerText = "← BACK TO TROOPS";
            tombolBack.onclick = function (event) {
                event.preventDefault();
                switchPage('troops');
            };
        } else {
            tombolBack.innerText = "← BACK TO GALLERY";
            tombolBack.onclick = function (event) {
                event.preventDefault();
                switchPage('gallery');
            };
        }

        switchPage('detail-gallery');

        setTimeout(() => {
            atkBar.style.width = item.stats.atk;
            defBar.style.width = item.stats.def;
            spdBar.style.width = item.stats.spd;
        }, 100);

    } else {
        alert('Detail profil untuk ' + namaItem + ' belum tersedia.');
    }
}