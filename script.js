// navigation helpers
function openCategory(slug){
  if(slug === 'akun') location.href = 'akun.html';
  if(slug === 'secret') location.href = 'secret.html';
  if(slug === 'koin') location.href = 'koin.html';
}

function goHome(){
  location.href = 'index.html';
}

function goBack(){
  history.back();
}

function toggleMenu(){
  alert('Menu belum aktif pada versi ini.');
}

// ketika klik tombol "Beli" di card
function buyFromCard(btn){
  // btn adalah button element — naiki ke parent .product untuk data
  const card = btn.closest('.product');
  if(!card) return;
  const nama = card.getAttribute('data-name') || card.querySelector('h3').innerText;
  const harga = card.getAttribute('data-price') || card.querySelector('.price')?.innerText?.replace(/\D/g,'') || '0';
  // buka checkout dengan param
  const url = `checkout.html?produk=${encodeURIComponent(nama)}&harga=${encodeURIComponent(harga)}`;
  location.href = url;
}

// format number Raja (ribuan)
function formatNumber(n){
  if(!n) return '0';
  n = String(n);
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}