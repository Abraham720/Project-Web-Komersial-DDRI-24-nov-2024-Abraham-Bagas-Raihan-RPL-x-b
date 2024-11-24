yakin.addEventListener("click", ()=>{

    let harga = 24000000
    const yakin = document.getElementById("yakin")
    const no_telp = document.getElementById('no_telp')
    const beli_berapa = document.getElementById("beli_berapa")
    const nama = document.getElementById("nama_pembeli")
    const alamat = document.getElementById("alamat")
    const belinya = parseInt(beli_berapa.value)
    if (nama.value.length < 1 || alamat.value.length < 1 || no_telp.value.length <1){
        alert('Dimohon agar pengguna tidak mengosongkan form pengisian')
    }
    else if (nama.value.length < 2){
        alert('Yakin namanya cuman 1 huruf?')
    }   
    else if (alamat.value.length < 2){
        alert('Kurir bingung, alamat hanya 1 huruf')
    } 
    else if (no_telp.value.length < 5){
        alert('Nomor telepon tidak valid')
    }
    else if (isNaN(belinya) || belinya <= 0){
        alert('Dimohon agar jumlah pembelian tidak dibawah 1');
    }
    else{

        const hasil_yakin = document.getElementById("hasil_yakin")
        
        hasil_yakin.innerHTML = "Harga total:  Rp." + harga * beli_berapa.value + "<br> <br>Dengan ini pembeli atas nama " +nama.value+ "<br> telah yakin untuk membeli Iphone 15 pro max sebanyak " + beli_berapa.value +" buah <br> dengan harga Rp."+ harga * beli_berapa.value +"<br>dengan tujuan pengiriman " + alamat.value + "."
    }
})