// --- Data ---
        const universities = ['Universitas Indonesia', 'Universitas Gadjah Mada', 'Universitas Airlangga', 'Institut Teknologi Bandung', 'Universitas Padjadjaran', 'Universitas Brawijaya', 'Universitas Diponegoro', 'IPB University', 'Universitas Sebelas Maret', 'Institut Teknologi Sepuluh Nopember', 'Universitas Hasanuddin', 'Universitas Negeri Malang', 'Universitas Andalas', 'Universitas Negeri Yogyakarta', 'Universitas Negeri Padang', 'Universitas Syiah Kuala', 'Universitas Sumatera Utara', 'Universitas Negeri Semarang', 'Universitas Lampung', 'Universitas Sriwijaya', 'Universitas Riau', 'Universitas Jenderal Soedirman', 'Universitas Udayana', 'Universitas Mataram', 'Universitas Mulawarman', 'Universitas Negeri Surabaya', 'Universitas Negeri Makassar', 'Universitas Jambi', 'Universitas Tanjungpura', 'Universitas Pattimura', 'Universitas Papua', 'Lain-lain'];
        const majors = ['Statistika', 'Ekonomi Pembangunan', 'Fisika', 'Akuntansi', 'Kimia', 'Biologi', 'Manajemen', 'Matematika', 'Farmasi', 'Kedokteran', 'Kedokteran Gigi', 'Kesehatan Masyarakat', 'Ilmu Gizi', 'Keperawatan', 'Psikologi', 'Ilmu Komunikasi', 'Hubungan Internasional', 'Sosiologi', 'Antropologi', 'Ilmu Politik', 'Administrasi Publik', 'Hukum', 'Sastra Indonesia', 'Sastra Inggris', 'Sastra Jepang', 'Pendidikan Bahasa Inggris', 'Pendidikan Matematika', 'Pendidikan Biologi', 'Pendidikan Fisika', 'Pendidikan Kimia', 'Lain-lain'];
        const courseSubjects = ['Kalkulus', 'Statistik', 'Ilmu Ekonomi', 'Akuntansi', 'Fisika', 'Kimia Dasar', 'Biologi Dasar', 'Matematika Lanjut', 'Ekonometrika', 'Pengantar Hukum', 'Pemrograman Dasar', 'Algoritma dan Struktur Data', 'Mikrobiologi', 'Biokimia', 'Farmakologi', 'Anatomi', 'Fisiologi', 'Psikometri', 'Metodologi Penelitian', 'Teori Akuntansi', 'Auditing', 'Manajemen Keuangan', 'Manajemen Operasi', 'Teori Sosiologi', 'Filsafat Ilmu', 'Teori Politik', 'Hubungan Internasional', 'Linguistik Umum', 'Statistika Inferensial', 'Metode Numerik', 'Lain-lain'];
        const consulinkServices = ['Konsultasi Pengerjaan Tugas Akademik', 'Konsultasi Mata Kuliah & Dosen', 'Konsultasi Ujian', 'Konsultasi Kehidupan Kampus'];
        const paperlinkServices = ['Bimbingan Penulisan', 'Bimbingan Metodologi & Analisis Data', 'Review & Proofreading', 'Bimbingan Publikasi'];
        const competitionBranches = ['Business Plan Competition', 'Startup Competition', 'Olimpiade Mahasiswa', 'Data Science Competition', 'Programming Competition', 'Debat Mahasiswa'];
        
        let favoriteMentors = [];

        const mentorData = {
            'Ahmad Maulana': { rating: 4.9, type: ['consulink', 'complink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Konsultasi Kehidupan Kampus', 'Business Plan Competition'], pengalaman: ['- 2 tahun sebagai Konsultan Bisnis Junior'], prestasi: ['- Juara 1 Business Plan Competition Nasional 2023'], keahlian: ['Analisis SWOT', 'Model Bisnis Kanvas'] },
            'Bella Safira': { rating: 4.8, type: ['consulink', 'complink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Konsultasi Kehidupan Kampus', 'Business Plan Competition'], pengalaman: ['- Project Manager di Startup Edukasi'], prestasi: ['- Pemenang Grant Mahasiswa Wirausaha'], keahlian: ['Riset Pasar', 'Public Speaking'] },
            'Candra Wijaya': { rating: 4.7, type: ['courselink', 'paperlink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Statistik', 'Bimbingan Penulisan'], pengalaman: ['- Asisten Riset Dosen'], prestasi: ['- Publikasi di Jurnal Mahasiswa'], keahlian: ['SPSS', 'Penulisan Ilmiah'] },
            'Dian Permata': { rating: 4.9, type: ['courselink', 'paperlink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Ilmu Ekonomi', 'Review & Proofreading'], pengalaman: ['- Tutor Ekonomi Makro'], prestasi: ['- IPK Cum Laude'], keahlian: ['Teori Ekonomi', 'Editing Naskah'] },
            'Eka Saputra': { rating: 4.6, type: ['consulink', 'complink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Konsultasi Ujian', 'Startup Competition'], pengalaman: ['- Co-founder Komunitas Startup Kampus'], prestasi: ['- Finalis kompetisi startup tingkat nasional'], keahlian: ['Pitching', 'Validasi Ide'] },
            'Fina Lestari': { rating: 5.0, type: ['consulink', 'complink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Konsultasi Kehidupan Kampus', 'Business Plan Competition'], pengalaman: ['- Mentor di program orientasi mahasiswa baru'], prestasi: ['- Mahasiswa Berprestasi Tingkat Fakultas'], keahlian: ['Manajemen Waktu', 'Komunikasi Interpersonal'] },
            'Gilang Ramadhan': { rating: 4.8, type: ['courselink', 'paperlink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Akuntansi', 'Bimbingan Metodologi & Analisis Data'], pengalaman: ['- Magang di Divisi Keuangan Perusahaan Multinasional'], prestasi: ['- Sertifikasi Akuntansi Dasar'], keahlian: ['Analisis Laporan Keuangan', 'Riset Kuantitatif'] },
            'Hana Yuliana': { rating: 4.7, type: ['courselink', 'paperlink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Manajemen', 'Bimbingan Publikasi'], pengalaman: ['- Staff Ahli di BEM'], prestasi: ['- Best Paper di Seminar Mahasiswa'], keahlian: ['Manajemen Proyek', 'Sitasi & Referensi'] },
            'Indra Gunawan': { rating: 4.9, type: ['consulink', 'complink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Konsultasi Pengerjaan Tugas Akademik', 'Debat Mahasiswa'], pengalaman: ['- Ketua UKM Debat'], prestasi: ['- Best Speaker di Lomba Debat Regional'], keahlian: ['Argumentasi', 'Riset Cepat'] },
            'Jasmine Putri': { rating: 4.8, type: ['consulink', 'complink'], univ: 'Universitas Indonesia', jurusan: 'Manajemen', spec: 'Pengembangan Karir & Business Plan', services: ['Konsultasi Mata Kuliah & Dosen', 'Olimpiade Mahasiswa'], pengalaman: ['- Asisten Dosen Pengantar Bisnis'], prestasi: ['- Peserta ONMIPA-PT Bidang Ekonomi'], keahlian: ['Problem Solving', 'Teori Manajemen'] },
        };

        const hotServicesData = [
            { type: 'consulink', service: 'Konsultasi Pengerjaan Tugas Akademik', title: 'Konsultasi Tugas Akademik', color: 'emerald'},
            { type: 'consulink', service: 'Konsultasi Ujian', title: 'Konsultasi Persiapan Ujian', color: 'emerald'},
            { type: 'paperlink', service: 'Bimbingan Metodologi & Analisis Data', title: 'Bimbingan Metodologi & Data', color: 'violet'},
            { type: 'courselink', service: 'Kalkulus', title: 'Mentoring Kalkulus', color: 'amber'},
            { type: 'courselink', service: 'Statistik', title: 'Mentoring Statistik', color: 'amber'},
            { type: 'paperlink', service: 'Review & Proofreading', title: 'Jasa Review & Proofreading', color: 'violet'},
            { type: 'paperlink', service: 'Bimbingan Publikasi', title: 'Bimbingan Publikasi Jurnal', color: 'violet'},
            { type: 'complink', service: 'Business Plan Competition', title: 'Mentoring Business Plan', color: 'rose'},
            { type: 'complink', service: 'Programming Competition', title: 'Mentoring Programming Comp.', color: 'rose'},
        ];

        // --- DOM Elements ---
        const authContainer = document.getElementById('authContainer');
        const appWrapper = document.getElementById('app-wrapper');
        const authPages = document.querySelectorAll('.auth-page');
        const pages = document.querySelectorAll('.main-content .page');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        const featureForm = document.getElementById('featureForm');
        const featureTitle = document.getElementById('featureTitle');
        const searchMentorBtn = document.getElementById('searchMentorBtn');
        const featureFormContainer = document.getElementById('featureFormContainer');
        const mentorResults = document.getElementById('mentorResults');
        const mentorList = document.getElementById('mentorList');
        const profileModal = document.getElementById('profileModal');
        const modalContent = profileModal.querySelector('.modal-content');
        const modalProfileTitle = document.getElementById('modalProfileTitle');
        const modalProfileBody = document.getElementById('modalProfileBody');

        // --- Functions ---
        function showAuthPage(pageId) { 
            authPages.forEach(p => p.classList.remove('active')); 
            document.getElementById(pageId).classList.add('active'); 
        }
        function login() { 
            authContainer.style.display = 'none';
            appWrapper.classList.remove('hidden'); 
            showPage('berandaPage', document.querySelector('.sidebar-link')); 
        }
        function logout() { 
            appWrapper.classList.add('hidden'); 
            authContainer.style.display = 'block';
            showAuthPage('loginPage'); 
        }
        function showPage(pageId, clickedLink) {
             if (pageId === 'sourcelinkPage') {
                resetSourcelinkPage();
            } else if (pageId === 'favoritPage') {
                updateFavoritesPage();
            }
            pages.forEach(page => page.classList.remove('active')); 
            document.getElementById(pageId).classList.add('active'); 
            if (pageId === 'featurePage') { 
                document.getElementById('app-wrapper').classList.add('feature-view'); 
            } else { 
                document.getElementById('app-wrapper').classList.remove('feature-view'); 
            } 
            sidebarLinks.forEach(link => link.classList.remove('active')); 
            if (pageId === 'featurePage' || pageId === 'promoDetailPage' || pageId === 'csChatPage' || pageId === 'paymentPage') { 
                return; 
            } 
            if (clickedLink) { 
                clickedLink.classList.add('active'); 
            } else { 
                const linkToActivate = Array.from(sidebarLinks).find(link => link.getAttribute('onclick')?.includes(`'${pageId}'`)); 
                if (linkToActivate) { linkToActivate.classList.add('active'); } 
            } 
        }
        function generateOptions(optionsArray, selectedValue = '') { return optionsArray.map(option => `<option value="${option}" ${option === selectedValue ? 'selected' : ''}>${option}</option>`).join(''); }
        function setupFeaturePage(featureType, preselect = {}) {
            featureForm.innerHTML = ''; 
            resetFeaturePage();
            let formContent = '';
            switch (featureType) {
                case 'consulink': featureTitle.textContent = 'Consulink'; formContent = `<div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Universitas</label><select name="univ" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(universities)}</select></div><div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Jurusan</label><select name="jurusan" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(majors)}</select></div><div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Layanan Konsultasi</label><select name="service" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(consulinkServices, preselect.service)}</select></div>`; break;
                case 'paperlink': featureTitle.textContent = 'Paperlink'; formContent = `<div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Universitas</label><select name="univ" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(universities)}</select></div><div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Jurusan</label><select name="jurusan" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(majors)}</select></div><div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Layanan Riset & Publikasi</label><select name="service" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(paperlinkServices, preselect.service)}</select></div>`; break;
                case 'courselink': featureTitle.textContent = 'Courselink'; formContent = `<div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Universitas</label><select name="univ" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(universities)}</select></div><div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Jurusan</label><select name="jurusan" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(majors)}</select></div><div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Mata Kuliah</label><select name="service" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(courseSubjects, preselect.service)}</select></div>`; break;
                case 'complink': featureTitle.textContent = 'Complink'; formContent = `<div><label class="block text-sm font-medium text-slate-600 dark:text-slate-300">Cabang Lomba Akademik</label><select name="service" class="form-select mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 dark:text-white border border-slate-300 dark:border-slate-600 rounded-md shadow-sm">${generateOptions(competitionBranches, preselect.service)}</select></div>`; break;
            }
            featureForm.innerHTML = formContent;
            featureForm.dataset.featureType = featureType;
            showPage('featurePage');
        }
        function openHotService(featureType, serviceName) { setupFeaturePage(featureType, { service: serviceName }); }
        
        function filterAndDisplayMentors() {
            mentorList.innerHTML = '';
            const matchingMentors = Object.entries(mentorData).sort(([,a], [,b]) => b.rating - a.rating);
            if (matchingMentors.length > 0) {
                matchingMentors.forEach(([name, data]) => {
                    let badgeHtml = '';
                    if (data.rating >= 4.9) {
                        badgeHtml = `<div class="absolute top-2 right-2 bg-amber-400 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"><i data-lucide="award" class="w-3 h-3"></i> Top Mentor</div>`;
                    } else if (data.rating >= 4.8) {
                         badgeHtml = `<div class="absolute top-2 right-2 bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"><i data-lucide="thumbs-up" class="w-3 h-3"></i> Favorit Mahasiswa</div>`;
                    }
                    const isFavorited = favoriteMentors.includes(name) ? 'favorited' : '';
                    mentorList.innerHTML += `
                        <div class="relative border bg-white dark:bg-slate-800 dark:border-slate-700 rounded-lg p-4 flex items-start space-x-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            ${badgeHtml}
                            <img src="https://placehold.co/64x64/bae6fd/1e3a8a?text=${name.charAt(0)}" class="w-16 h-16 rounded-full flex-shrink-0">
                            <div class="flex-grow">
                                <div class="flex items-center gap-2">
                                    <h4 class="font-bold text-lg text-blue-800 dark:text-white">${name}</h4>
                                     <button onclick="toggleFavorite('${name}', this)" class="favorite-btn ${isFavorited}" title="Tambah ke favorit">
                                        <i data-lucide="heart" class="w-5 h-5 text-slate-400 hover:text-red-500"></i>
                                    </button>
                                </div>
                                <div class="flex items-center gap-1 text-amber-500 mt-1">
                                    <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                                    <span class="font-bold text-sm text-slate-600 dark:text-slate-300">${data.rating.toFixed(1)}</span>
                                </div>
                                <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">${data.univ} - ${data.jurusan}</p>
                                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">${data.spec}</p>
                            </div>
                            <div class="flex flex-col gap-2 flex-shrink-0 w-40 self-center">
                                <button onclick="openProfileModal('${name}')" class="bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-sm font-semibold py-2 px-4 rounded-md hover:bg-sky-200 dark:hover:bg-sky-800/50 w-full text-center transition-colors">Lihat Profil</button>
                                <button onclick="showPaymentPage({type: 'Mentor', name: '${name}', price: '6000'})" class="bg-sky-500 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-sky-600 w-full text-center transition-colors">Click untuk memilih</button>
                            </div>
                        </div>`;
                });
            } else {
                mentorList.innerHTML = `<div class="text-center py-10 bg-slate-50 dark:bg-slate-800 rounded-lg"><i data-lucide="search-x" class="w-12 h-12 mx-auto text-slate-400"></i><h3 class="mt-4 font-semibold dark:text-white">Mentor tidak ditemukan</h3><p class="text-sm text-slate-500 dark:text-slate-400">Coba ubah kriteria pencarianmu.</p></div>`;
            }
            lucide.createIcons();
        }
        
        function toggleFavorite(mentorName, element) {
            const index = favoriteMentors.indexOf(mentorName);
            if (index > -1) {
                favoriteMentors.splice(index, 1);
                element.classList.remove('favorited');
                showNotification(`${mentorName} dihapus dari favorit.`, 'info');
            } else {
                favoriteMentors.push(mentorName);
                element.classList.add('favorited');
                showNotification(`${mentorName} sedang aktif dan membuka slot baru!`, 'success');
            }
            updateFavoritesPage();
        }
        
        function updateFavoritesPage() {
            const container = document.getElementById('favoriteMentorList');
            container.innerHTML = '';
            if (favoriteMentors.length === 0) {
                 container.innerHTML = `<div class="bg-white dark:bg-slate-800 p-12 rounded-xl border dark:border-slate-700 text-center"><i data-lucide="folder-heart" class="w-16 h-16 mx-auto text-slate-300 dark:text-slate-600 mb-4"></i><h3 class="text-xl font-semibold dark:text-white">Belum Ada Favorit</h3><p class="text-slate-500 dark:text-slate-400 mt-1">Tandai mentor yang kamu sukai untuk akses lebih cepat!</p></div>`;
            } else {
                favoriteMentors.forEach(mentorName => {
                    const data = mentorData[mentorName];
                    if (data) {
                         container.innerHTML += `
                        <div class="border bg-white dark:bg-slate-800 dark:border-slate-700 rounded-lg p-4 flex items-center space-x-4 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                            <img src="https://placehold.co/64x64/bae6fd/1e3a8a?text=${mentorName.charAt(0)}" class="w-16 h-16 rounded-full flex-shrink-0">
                            <div class="flex-grow">
                                <h4 class="font-bold text-lg text-blue-800 dark:text-white">${mentorName}</h4>
                                <p class="text-sm text-slate-600 dark:text-slate-300">${data.univ} - ${data.jurusan}</p>
                                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">${data.spec}</p>
                            </div>
                            <div class="flex flex-col gap-2 flex-shrink-0 w-40">
                                <button onclick="openProfileModal('${mentorName}')" class="bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-sm font-semibold py-2 px-4 rounded-md hover:bg-sky-200 dark:hover:bg-sky-800/50 w-full text-center">Lihat Profil</button>
                                <button onclick="showPaymentPage({type: 'Mentor', name: '${mentorName}', price: '6000'})" class="bg-sky-500 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-sky-600 w-full text-center">Click untuk memilih</button>
                            </div>
                        </div>`;
                    }
                });
            }
            lucide.createIcons();
        }

        function resetFeaturePage() { featureFormContainer.classList.remove('hidden'); mentorResults.classList.add('hidden'); mentorList.innerHTML = ''; }
        function showNotification(message, type = 'info') { const container = document.getElementById('notification-container'); const notif = document.createElement('div'); const colors = { info: 'bg-blue-500', success: 'bg-green-500', error: 'bg-red-500' }; notif.className = `custom-notification text-white text-sm font-semibold px-4 py-2 rounded-md shadow-lg opacity-0 transform translate-x-10 ${colors[type]}`; notif.textContent = message; container.appendChild(notif); setTimeout(() => { notif.classList.remove('opacity-0', 'translate-x-10'); }, 10); setTimeout(() => { notif.classList.add('opacity-0', 'translate-x-10'); notif.addEventListener('transitionend', () => notif.remove()); }, 3000); }
        function openShareModal() { const modal = document.getElementById('shareModal'); modal.classList.remove('hidden'); setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('.modal-content').classList.remove('scale-95', 'opacity-0'); }, 10); }
        function closeShareModal() { const modal = document.getElementById('shareModal'); modal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0'); modal.classList.add('opacity-0'); setTimeout(() => modal.classList.add('hidden'), 300); }
        function copyShareLink() { navigator.clipboard.writeText('https://edulink.app/promo/ajakteman').then(() => { showNotification('Link disalin!', 'success'); }); }
        
        function openProfileModal(mentorName) {
            const data = mentorData[mentorName];
            if (!data) return;

            modalProfileTitle.textContent = `Profil ${mentorName}`;
            modalProfileBody.innerHTML = `
                <div class="flex flex-col md:flex-row items-start gap-6">
                    <img src="https://placehold.co/128x128/bae6fd/1e3a8a?text=${mentorName.charAt(0)}" class="w-32 h-32 rounded-full mx-auto md:mx-0 flex-shrink-0">
                    <div>
                        <div class="flex items-center gap-4">
                            <h3 class="text-2xl font-bold dark:text-white">${mentorName}</h3>
                            <button onclick="toggleFavorite('${mentorName}', this); this.classList.toggle('favorited')" class="favorite-btn ${favoriteMentors.includes(mentorName) ? 'favorited' : ''}" title="Tambah ke favorit">
                                <i data-lucide="heart" class="w-6 h-6 text-slate-400 hover:text-red-500"></i>
                            </button>
                        </div>
                        <div class="flex items-center gap-1 text-amber-500 mt-2">
                            <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                            <span class="font-bold text-md text-slate-700 dark:text-slate-300">${data.rating.toFixed(1)}</span>
                        </div>
                        <p class="text-md text-slate-600 dark:text-slate-400 mt-2">${data.univ} - ${data.jurusan}</p>
                        <p class="text-md text-sky-600 dark:text-sky-400 font-semibold mt-1">${data.spec}</p>
                    </div>
                </div>
                <div class="mt-6 space-y-4">
                    <div><h4 class="font-bold text-blue-800 dark:text-white border-b dark:border-slate-600 pb-1 mb-2">Pengalaman</h4><ul class="list-disc list-inside text-slate-600 dark:text-slate-400">${data.pengalaman.map(item => `<li>${item}</li>`).join('') || '<li>Data belum tersedia.</li>'}</ul></div>
                    <div><h4 class="font-bold text-blue-800 dark:text-white border-b dark:border-slate-600 pb-1 mb-2">Prestasi</h4><ul class="list-disc list-inside text-slate-600 dark:text-slate-400">${data.prestasi.map(item => `<li>${item}</li>`).join('') || '<li>Data belum tersedia.</li>'}</ul></div>
                    <div><h4 class="font-bold text-blue-800 dark:text-white border-b dark:border-slate-600 pb-1 mb-2">Keahlian</h4><div class="flex flex-wrap gap-2 mt-2">${data.keahlian.map(item => `<span class="bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-full">${item}</span>`).join('') || '<p class="text-slate-600 dark:text-slate-400">Data belum tersedia.</p>'}</div></div>
                </div>`;
            profileModal.classList.remove('hidden');
            setTimeout(() => { 
                profileModal.classList.remove('opacity-0'); 
                modalContent.classList.remove('scale-95', 'opacity-0'); 
                lucide.createIcons();
            }, 10);
        }

        function closeProfileModal() {
            modalContent.classList.add('scale-95', 'opacity-0');
            profileModal.classList.add('opacity-0');
            setTimeout(() => { profileModal.classList.add('hidden'); }, 300);
        }
        
        function showPaymentPage(item) {
            const paymentContainer = document.getElementById('paymentPage');
            paymentContainer.innerHTML = `
                <header class="flex items-center mb-6"><button onclick="history.back()" class="text-slate-500 dark:text-slate-400 hover:text-sky-500 mr-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"><i data-lucide="arrow-left" class="w-6 h-6"></i></button><h1 class="text-3xl font-bold text-gray-800 dark:text-white">Konfirmasi Pembayaran</h1></header>
                <div class="max-w-4xl mx-auto">
                    <div id="payment-content" class="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-8">
                        <div class="border dark:border-slate-600 rounded-lg p-4 mb-6"><h3 class="font-bold dark:text-white">Detail Pesanan</h3><div class="flex justify-between items-center mt-2 dark:text-slate-300"><span id="transItemName">${item.name}</span><span id="transItemPrice" class="font-bold text-lg dark:text-white">Rp ${Number(item.price).toLocaleString('id-ID')}</span></div></div>
                        <div><h3 class="font-bold mb-4 dark:text-white">Pilih Metode Pembayaran</h3><div class="space-y-3">
                            <label class="flex items-center p-4 border dark:border-slate-600 rounded-lg has-[:checked]:bg-sky-50 dark:has-[:checked]:bg-sky-900/50 has-[:checked]:border-sky-500 dark:has-[:checked]:border-sky-500"><input type="radio" name="payment" class="w-5 h-5 text-sky-600 focus:ring-sky-500 mr-4" checked><span class="font-semibold dark:text-white">E-Wallet (GoPay, OVO, Dana)</span></label>
                            <label class="flex items-center p-4 border dark:border-slate-600 rounded-lg has-[:checked]:bg-sky-50 dark:has-[:checked]:bg-sky-900/50 has-[:checked]:border-sky-500 dark:has-[:checked]:border-sky-500"><input type="radio" name="payment" class="w-5 h-5 text-sky-600 focus:ring-sky-500 mr-4"><span class="font-semibold dark:text-white">Virtual Account (BCA, Mandiri, BRI)</span></label>
                            <label class="flex items-center p-4 border dark:border-slate-600 rounded-lg has-[:checked]:bg-sky-50 dark:has-[:checked]:bg-sky-900/50 has-[:checked]:border-sky-500 dark:has-[:checked]:border-sky-500"><input type="radio" name="payment" class="w-5 h-5 text-sky-600 focus:ring-sky-500 mr-4"><span class="font-semibold dark:text-white">Transfer Bank</span></label>
                            <label class="flex items-center p-4 border dark:border-slate-600 rounded-lg has-[:checked]:bg-sky-50 dark:has-[:checked]:bg-sky-900/50 has-[:checked]:border-sky-500 dark:has-[:checked]:border-sky-500"><input type="radio" name="payment" class="w-5 h-5 text-sky-600 focus:ring-sky-500 mr-4"><span class="font-semibold dark:text-white">Gerai Retail (Alfamart, Indomaret)</span></label>
                            <label class="flex items-center p-4 border dark:border-slate-600 rounded-lg has-[:checked]:bg-sky-50 dark:has-[:checked]:bg-sky-900/50 has-[:checked]:border-sky-500 dark:has-[:checked]:border-sky-500"><input type="radio" name="payment" class="w-5 h-5 text-sky-600 focus:ring-sky-500 mr-4"><span class="font-semibold dark:text-white">Kartu Kredit/Debit</span></label>
                        </div></div>
                        <div class="flex gap-4 mt-8"><button onclick="history.back()" class="w-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600">Batal</button><button onclick="processPayment()" class="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg hover:bg-sky-600">Bayar Sekarang</button></div>
                    </div>
                    <div id="payment-processing" class="hidden text-center bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-8">
                        <div class="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <h2 class="text-xl font-bold dark:text-white">Transaksi sedang diproses...</h2>
                        <p class="text-slate-500 dark:text-slate-400 mt-2">Mohon tunggu sebentar, jangan tutup halaman ini.</p>
                    </div>
                     <div id="payment-reload" class="hidden text-center bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 p-8">
                        <i data-lucide="alert-circle" class="w-12 h-12 mx-auto text-amber-500 mb-4"></i><h2 class="text-xl font-bold dark:text-white">Menunggu Konfirmasi</h2><p class="text-slate-500 dark:text-slate-400 mt-2">Jika pembayaran sudah dilakukan, silakan muat ulang status.</p><button onclick="confirmPayment()" class="mt-6 bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg">Muat Ulang</button>
                    </div>
                </div>`;
            lucide.createIcons();
            showPage('paymentPage');
        }
        function processPayment() { document.getElementById('payment-content').classList.add('hidden'); document.getElementById('payment-processing').classList.remove('hidden'); setTimeout(() => { document.getElementById('payment-processing').classList.add('hidden'); document.getElementById('payment-reload').classList.remove('hidden'); }, 3000); }
        function confirmPayment() { showNotification('Pembayaran berhasil!', 'success'); showPage('berandaPage'); }
        function showMentorRegisterForm(category) {
            document.getElementById('mentorRegisterSelection').classList.add('hidden');
            document.getElementById('mentorRegisterFormContainer').classList.remove('hidden');
            document.getElementById('mentorRegisterFormTitle').textContent = `Formulir Pendaftaran Mentor ${category}`;
        }
        function showMentorRegisterSelection() {
            document.getElementById('mentorRegisterSelection').classList.remove('hidden');
            document.getElementById('mentorRegisterFormContainer').classList.add('hidden');
            document.getElementById('mentorRegisterSuccess').classList.add('hidden');
        }
        function submitMentorForm() { 
            document.getElementById('mentorRegisterFormContainer').classList.add('hidden'); 
            document.getElementById('mentorRegisterSuccess').classList.remove('hidden'); 
        }
        function handleCsChat() {
            const input = document.getElementById('csChatInput');
            const chatLog = document.getElementById('csChatLog');
            if (input.value.trim() === '') return;
            chatLog.innerHTML += `<div class="flex justify-end"><div class="bg-blue-800 text-white p-3 rounded-lg max-w-md">${input.value}</div></div>`;
            input.value = '';
            chatLog.scrollTop = chatLog.scrollHeight;
            setTimeout(() => {
                chatLog.innerHTML += `<div class="flex justify-start"><div class="bg-slate-100 dark:bg-slate-700 dark:text-slate-200 p-3 rounded-lg max-w-md">Halo Dewan Juri Terhormat,<br><br>Terima kasih telah menghubungi EDULINK.<br>Pesan/keluhanmu sudah kami terima dengan baik dan saat ini sedang dalam proses peninjauan oleh tim kami. Mohon bersabar, kami akan segera memberikan balasan maksimal dalam 1x24 jam melalui chat ini atau email yang terdaftar.<br><br>Untuk mempercepat tindak lanjut, pastikan kamu sudah menyertakan informasi yang relevan.<br><br>Jika masalahmu sifatnya darurat, kamu bisa menghubungi kami melalui:<br>📧 support@edulink.com<br>📱 WhatsApp: +62-831-8025-3832</div></div>`;
                chatLog.scrollTop = chatLog.scrollHeight;
            }, 1500);
        }
        function populateHotServices() {
            const container = document.getElementById('hot-services-container');
            let content = `<div class="flex items-center gap-3 mb-5"><i data-lucide="flame" class="w-7 h-7 text-orange-500"></i><h2 class="text-2xl font-bold text-blue-800 dark:text-white">Sedang Ramai Digunakan</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`;
            hotServicesData.forEach(item => {
                const userCount = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
                content += `<div onclick="openHotService('${item.type}', '${item.service}')" class="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg cursor-pointer hover:bg-slate-200/70 dark:hover:bg-slate-700">
                                <div class="flex justify-between items-start">
                                    <div><h4 class="font-semibold dark:text-white">${item.title}</h4><p class="text-sm text-${item.color}-600 dark:text-${item.color}-400 font-medium capitalize">${item.type}</p></div>
                                    <i data-lucide="arrow-right" class="w-5 h-5 text-slate-400 dark:text-slate-500 flex-shrink-0"></i>
                                </div>
                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">${userCount} orang sedang menggunakan</p>
                            </div>`;
            });
            content += `</div>`;
            container.innerHTML = content;
        }

        function populateTestimonials() {
            const container = document.getElementById('testimonials-container');
            let content = `<div class="flex items-center gap-3 mb-5"><i data-lucide="quote" class="w-7 h-7 text-green-500"></i><h2 class="text-2xl font-bold text-blue-800 dark:text-white">Kisah Sukses</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
            const testimonials = [
                { name: 'Rina S.', achievement: 'Lolos Publikasi Jurnal Scopus Q2', quote: 'Mentor Paperlink sangat membantu dalam menyusun naskah dan memilih jurnal. Prosesnya jadi jauh lebih cepat dan terarah!', photo: 'https://placehold.co/80x80/c7d2fe/4338ca?text=RS' },
                { name: 'Adi P.', achievement: 'Juara 1 Business Plan Competition', quote: 'Dapat bimbingan dari mentor Complink yang berpengalaman membuat business plan saya jadi lebih matang dan menarik di mata juri.', photo: 'https://placehold.co/80x80/bbf7d0/166534?text=AP' }
            ];
            testimonials.forEach(item => {
                content += `<div class="bg-white dark:bg-slate-800 p-6 rounded-xl border dark:border-slate-700 flex gap-5 items-start">
                                <div class="w-20 h-20 rounded-full bg-slate-200 flex-shrink-0" style="background-image:url(${item.photo}); background-size:cover;"></div>
                                <div>
                                    <p class="text-slate-600 dark:text-slate-300 italic">"${item.quote}"</p>
                                    <p class="font-bold text-slate-800 dark:text-white mt-3">${item.name}</p>
                                    <p class="text-sm text-green-600 dark:text-green-400 font-semibold">${item.achievement}</p>
                                </div>
                           </div>`;
            });
            content += `</div>`;
            container.innerHTML = content;
        }


        function showSourcelinkStep2() {
            document.getElementById('sourcelinkStep1').classList.add('hidden');
            document.getElementById('sourcelinkStep2').classList.remove('hidden');
        }
        function submitSourcelink() {
            document.getElementById('sourcelinkStep2').classList.add('hidden');
            document.getElementById('sourcelinkSuccess').classList.remove('hidden');
        }
        function resetSourcelinkPage() {
            document.getElementById('sourcelinkStep1').classList.remove('hidden');
            document.getElementById('sourcelinkStep2').classList.add('hidden');
            document.getElementById('sourcelinkSuccess').classList.add('hidden');
            if(document.getElementById('sourcelinkCriteriaForm')) {
                 document.getElementById('sourcelinkCriteriaForm').reset();
            }
            if(document.getElementById('sourcelinkLinkForm')) {
                document.getElementById('sourcelinkLinkForm').reset();
            }
        }
        
        // Dark/Light Mode Toggle
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
            document.documentElement.classList.add('dark');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
            document.documentElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', function() {
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });


        document.addEventListener('DOMContentLoaded', () => { 
            populateHotServices();
            populateTestimonials();
            lucide.createIcons();
            searchMentorBtn.addEventListener('click', () => { if (!featureForm.checkValidity()) { featureForm.reportValidity(); return; } featureFormContainer.classList.add('hidden'); mentorResults.classList.remove('hidden'); filterAndDisplayMentors(); });
            document.getElementById('csSendBtn').addEventListener('click', handleCsChat);
            document.getElementById('csChatInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') handleCsChat(); });

            // Make the script executable by attaching functions to window
            window.showAuthPage = showAuthPage;
            window.login = login;
            window.logout = logout;
            window.showPage = showPage;
            window.setupFeaturePage = setupFeaturePage;
            window.openHotService = openHotService;
            window.filterAndDisplayMentors = filterAndDisplayMentors;
            window.resetFeaturePage = resetFeaturePage;
            window.showNotification = showNotification;
            window.openShareModal = openShareModal;
            window.closeShareModal = closeShareModal;
            window.copyShareLink = copyShareLink;
            window.openProfileModal = openProfileModal;
            window.closeProfileModal = closeProfileModal;
            window.showPaymentPage = showPaymentPage;
            window.processPayment = processPayment;
            window.confirmPayment = confirmPayment;
            window.submitMentorForm = submitMentorForm;
            window.handleCsChat = handleCsChat;
            window.showMentorRegisterForm = showMentorRegisterForm;
            window.showMentorRegisterSelection = showMentorRegisterSelection;
            window.showSourcelinkStep2 = showSourcelinkStep2;
            window.submitSourcelink = submitSourcelink;
            window.resetSourcelinkPage = resetSourcelinkPage;
            window.toggleFavorite = toggleFavorite;
        });