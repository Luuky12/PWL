const uploadContainer = document.getElementById('upload-container');
const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');
const uploadText = document.getElementById('upload-text');

// Highlight area when file is dragged over
uploadContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadContainer.classList.add('dragover');
});

// Remove highlight when file is dragged out
uploadContainer.addEventListener('dragleave', () => {
    uploadContainer.classList.remove('dragover');
});

// Handle file drop
uploadContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadContainer.classList.remove('dragover');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFileUpload(files[0]);
        uploadText.style.display = 'none';
    }
});

// Handle click to open file dialog
uploadContainer.addEventListener('click', () => {
    fileInput.click();
});

// Handle file selection from file input
fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFileUpload(e.target.files[0]);
        uploadText.style.display = 'none';
    }
});

// Function to handle file upload and preview
function handleFileUpload(file) {
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Silakan upload file gambar.');
    }
}
// Fungsi untuk menambahkan atau menghapus kelas berdasarkan ukuran layar
function toggleResponsiveClass() {
    const element = document.getElementById('wrap');
    if (window.innerWidth < 780) {
        element.classList.add('flex-wrap'); // Tambahkan kelas jika layar kurang dari 768px
    } else {
        element.classList.remove('flex-wrap'); // Hapus kelas jika layar lebih besar atau sama dengan 768px
    }
}

// Panggil fungsi saat halaman pertama kali dimuat
toggleResponsiveClass();

// Panggil fungsi setiap kali ukuran layar berubah
window.addEventListener('resize', toggleResponsiveClass);

// Fungsi untuk menambah nilai
function increaseValue() {
    const input = document.getElementById('numberInput');
    const total = document.getElementsByClassName('total')[0];
    const total2 = document.getElementsByClassName('total')[1];

    const harga = 12000;
    let curentTotal = parseInt(total.value);
    let currentValue = parseInt(input.value);
    input.value = currentValue + 1;
    total.value = curentTotal + harga;
    total2.value = curentTotal - harga;

}

// Fungsi untuk mengurangi nilai
function decreaseValue() {
    const input = document.getElementById('numberInput');
    const total = document.getElementsByClassName('total')[0];
    const total2 = document.getElementsByClassName('total')[1];
    const harga = 12000;
    let curentTotal = parseInt(total.value);
    let currentValue = parseInt(input.value);
    if (currentValue > 0) { // Pastikan nilai tidak kurang dari 0
        input.value = currentValue - 1;
        total.value = curentTotal - harga;
        total2.value = curentTotal - harga;


    }
}
