// validate form
function validateForm() {
    // init data form
    let name = document.forms['message-form']['fullname'].value;
    let tgl_lahir = document.forms['message-form']['tgl_lahir'].value;
    let jk = document.forms['message-form']['jk'].value;
    let pesan = document.forms['message-form']['pesan'].value;

    // pengecekan untuk data yang kosong
    if (name == '') {
        alert('Nama tidak boleh kosong!');
    } else if (tgl_lahir == '') {
        alert('Tanggal lahir tidak boleh kosong!');
    }else if (jk == '') {
        alert('Jenis kelamin tidak boleh kosong!');
    }else if (pesan == '') {
        alert('Pesan tidak boleh kosong!');
    }

    // jika data tidak kosong maka input akan dikirimkan
    if (name != '' && tgl_lahir != '' && jk != '' && pesan != '') {
        setName(name);
        setSender(name,tgl_lahir,jk,pesan);
    }

    return false;
}

// mengganti nama pada welcome page
function setName(name) {
    document.getElementById("name").innerHTML = name;
}

// mengirimkan data hasil dari form
function setSender(username,tgl_lahir,jk,pesan) {
    document.getElementById("send-username").innerHTML = username;
    document.getElementById("send-tgl").innerHTML = tgl_lahir;
    document.getElementById("send-jk").innerHTML = jk;
    document.getElementById("send-pesan").innerHTML = pesan;
}
// end validate form

// banner slide show
var slideIndex = 1;
showDivs(slideIndex);

// untuk banner next
function plusDivs(n) {
    showDivs((slideIndex += n));
}

// menampilkan banner
function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("banner-img");
    if (n > imgList.length) {
        slideIndex = 1;
    }else if (n < 1){
        slideIndex = imgList.length;
    }

    for (let i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex-1].style.display = "block";
}

// banner auto slide
setInterval(() => {
    plusDivs(1);
}, 2000);
// end banner slide show