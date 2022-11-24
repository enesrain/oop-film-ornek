const form = document.getElementById("film-form");
const tittleElement = document.getElementById("tittle");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");


//UI nesnesin başlatma 
const ui = new UI();


//Tüm eventleri yükleme
eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);

}

function addFilm(e){

    const tittle = tittleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(tittle == "" || director == "" || url == ""){
        //hata mesajı
    }
    else {
        const newFilm = new Films(tittle,director,url);
    }



    e.preventDefault();
}
