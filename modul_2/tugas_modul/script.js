document.getElementById('subJudul').innerText = "Form Pembayaran SPP";


function hasilPembayaran() {
   const namaMhs = document.getElementById('nama').value;
   const mhsBayar = Number(document.getElementById('bayar').value);
   const bykBulan = Number(document.getElementById('banyakBulan').value);
   const totalPembayaran = bykBulan * 100000;
   let hasil;

   if (mhsBayar >= totalPembayaran) {
      hasil = `
      Nama        : ${namaMhs}
      Bayar       : ${mhsBayar}
      Banyak Bulan: ${bykBulan}

      Lunas +${mhsBayar - totalPembayaran}
      `;
   } else {
      hasil = `
      Nama        : ${namaMhs}
      Bayar       : ${mhsBayar}
      Banyak Bulan: ${bykBulan}

      Kurang ${totalPembayaran - mhsBayar}
      `;
   }
   alert(hasil);
}