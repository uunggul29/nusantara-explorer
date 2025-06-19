const map = L.map('map').setView([-2.5489, 118.0149], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const southWest = L.latLng(-11, 95);
const northEast = L.latLng(6, 141);
const bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);

map.setMinZoom(map.getBoundsZoom(bounds));

const capitals = [
  // Sumatera
  { name: "Banda Aceh, Aceh", coords: [5.5546, 95.3174], gameUrl: "./province/aceh.html" },
  { name: "Medan, Sumatera Utara", coords: [3.5952, 98.6722], gameUrl: "./province/sumatera-utara.html" },
  { name: "Padang, Sumatera Barat", coords: [-0.9471, 100.4172], gameUrl: "./province/sumatera-barat.html" },
  { name: "Pekanbaru, Riau", coords: [0.5071, 101.4478], gameUrl: "./province/riau.html" },
  { name: "Tanjung Pinang, Kepulauan Riau", coords: [0.9167, 104.4711], gameUrl: "./province/kepulauan-riau.html" },
  { name: "Jambi, Jambi", coords: [-1.6102, 103.6126], gameUrl: "./province/jambi.html" },
  { name: "Palembang, Sumatera Selatan", coords: [-2.9909, 104.7565], gameUrl: "./province/sumatera-selatan.html" },
  { name: "Bengkulu, Bengkulu", coords: [-3.8004, 102.2655], gameUrl: "./province/bengkulu.html" },
  { name: "Bandar Lampung, Lampung", coords: [-5.4295, 105.2580], gameUrl: "./province/lampung.html" },
  { name: "Pangkal Pinang, Bangka Belitung", coords: [-2.1293, 106.1168], gameUrl: "./province/bangka-belitung.html" },
  
  // Jawa
  { name: "Jakarta, DKI Jakarta", coords: [-6.2088, 106.8456], gameUrl: "./province/dki-jakarta.html" },
  { name: "Bandung, Jawa Barat", coords: [-6.9175, 107.6191], gameUrl: "./province/jawa-barat.html" },
  { name: "Semarang, Jawa Tengah", coords: [-6.9667, 110.4167], gameUrl: "./province/jawa-tengah.html" },
  { name: "Yogyakarta, DIY", coords: [-7.7956, 110.3695], gameUrl: "./province/diy.html" },
  { name: "Surabaya, Jawa Timur", coords: [-7.2504, 112.7688], gameUrl: "./province/jawa-timur.html" },
  { name: "Serang, Banten", coords: [-6.1103, 106.1638], gameUrl: "./province/banten.html" },

  // Kepulauan Mataram
  { name: "Denpasar, Bali", coords: [-8.6500, 115.2167], gameUrl: "./province/bali.html" },
  { name: "Mataram, Nusa Tenggara Barat", coords: [-8.5833, 116.1167], gameUrl: "./province/nusa-tenggara-barat.html" },
  { name: "Kupang, Nusa Tenggara Timur", coords: [-10.1788, 123.5820], gameUrl: "./province/nusa-tenggara-timur.html" },

  // Kalimantan
  { name: "Pontianak, Kalimantan Barat", coords: [-0.0333, 109.3333], gameUrl: "./province/kalimantan-barat.html" },
  { name: "Palangka Raya, Kalimantan Tengah", coords: [-2.2096, 113.9166], gameUrl: "./province/kalimantan-tengah.html" },
  { name: "Banjarmasin, Kalimantan Selatan", coords: [-3.3333, 114.5833], gameUrl: "./province/kalimantan-selatan.html" },
  { name: "Samarinda, Kalimantan Timur", coords: [0.5022, 117.1536], gameUrl: "./province/kalimantan-timur.html" },
  { name: "Tanjung Selor, Kalimantan Utara", coords: [2.8395, 117.3672], gameUrl: "./province/kalimantan-utara.html" },

  // Sulawesi
  { name: "Manado, Sulawesi Utara", coords: [1.4748, 124.8421], gameUrl: "./province/sulawesi-utara.html" },
  { name: "Palu, Sulawesi Tengah", coords: [-0.8987, 119.8707], gameUrl: "./province/sulawesi-tengah.html" },
  { name: "Makassar, Sulawesi Selatan", coords: [-5.1331, 119.4139], gameUrl: "./province/sulawesi-selatan.html" },
  { name: "Kendari, Sulawesi Tenggara", coords: [-3.9722, 122.5182], gameUrl: "./province/sulawesi-tenggara.html" },
  { name: "Gorontalo, Gorontalo", coords: [0.6998, 122.4467], gameUrl: "./province/gorontalo.html" },
  { name: "Mamuju, Sulawesi Barat", coords: [-2.6742, 118.8887], gameUrl: "./province/sulawesi-barat.html" },

  // Kepulauan Maluku
  { name: "Ambon, Maluku", coords: [-3.7078, 128.2136], gameUrl: "./province/maluku.html" },
  { name: "Sofifi, Maluku Utara", coords: [0.7333, 127.5500], gameUrl: "./province/maluku-utara.html" },

  // Papua
  { name: "Jayapura, Papua", coords: [-2.5333, 140.7167], gameUrl: "./province/papua.html" },
  { name: "Manokwari, Papua Barat", coords: [-0.8615, 134.0630], gameUrl: "./province/papua-barat.html" },
  { name: "Sorong, Papua Barat Daya", coords: [-0.8750, 131.2500], gameUrl: "./province/papua-barat-daya.html" },
  { name: "Merauke, Papua Selatan", coords: [-8.4961, 140.4010], gameUrl: "./province/papua-selatan.html" },
  { name: "Wamena, Papua Pegunungan", coords: [-4.1007, 138.9337], gameUrl: "./province/papua-pegunungan.html" },
  { name: "Nabire, Papua Tengah", coords: [-3.3667, 135.5167], gameUrl: "./province/papua-tengah.html" }
];



capitals.forEach(capital => {
  const marker = L.marker(capital.coords).addTo(map);
  marker.bindPopup(`
    <div style="text-align: center;">
      <b>${capital.name}</b>
      <br><br>
      <a type="button" href="${capital.gameUrl}">
        <img src="./img/enter.png" width="75%" height="auto">
      </a>
    </div>
  `);
});

L.control.scale().addTo(map);

const backIcon = L.icon({
  iconUrl: 'img/back.png',
  iconSize: [120, 60],
});

const backMarker = L.marker([6.970049, 142.294922], {icon: backIcon}).addTo(map)
  .on('click', function() {
      window.location.href = 'index.html';
  })

  const customIcon2 = L.icon({
    iconUrl: 'img/logo-text.png',
    iconSize: [250, 120],
});

  const imageMarker2 = L.marker([-9.622414, 96.745605], {icon: customIcon2}).addTo(map) //Gunakan map yang sudah dideklarasikan sebelumnya
      .bindPopup(`<img src="${imagePath2}" alt="Gambar" width="300">`);