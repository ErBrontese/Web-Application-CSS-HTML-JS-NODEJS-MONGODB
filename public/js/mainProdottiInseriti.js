













var mod = document.createElement("div");
mod.id = "mod";
$(mod).insertAfter(document.querySelector("#ancora"));

var ancoraImg = document.createElement("div");
ancoraImg.id = "ancoraImg";
mod.appendChild(ancoraImg);

var bottoneClose = document.createElement("div");
bottoneClose.id = "bottoneClose";
bottoneClose.className = "bi bi-x";
bottoneClose.textContent = 'x';
mod.appendChild(bottoneClose);

var textDescrizione = document.createElement("div");
textDescrizione.id = "textDescrizione";
mod.appendChild(textDescrizione);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ModDescrizione

var bottoneInvio = document.createElement("div");
bottoneInvio.id = "bottoneInvio";
bottoneInvio.textContent = 'Modifica ';
mod.appendChild(bottoneInvio);

//ModTitolo
var bottoneInvioTitolo = document.createElement("div");
bottoneInvioTitolo.id = "bottoneInvioTitolo";
bottoneInvioTitolo.textContent = 'Modifica ';
mod.appendChild(bottoneInvioTitolo);

//ModQuantità
var bottoneInvioQuantità = document.createElement("div");
bottoneInvioQuantità.id = "bottoneInvioQuantità";
bottoneInvioQuantità.textContent = 'Modifica ';
mod.appendChild(bottoneInvioQuantità);

//ModPrezzo
var bottoneInvioPrezzo = document.createElement("div");
bottoneInvioPrezzo.id = "bottoneInvioPrezzo";
bottoneInvioPrezzo.textContent = 'Modifica ';
mod.appendChild(bottoneInvioPrezzo);

//ModNome-Venditore
var bottoneInvioNomeVenditore = document.createElement("div");
bottoneInvioNomeVenditore.id = "bottoneInvioNomeVenditore";
bottoneInvioNomeVenditore.textContent = 'Modifica ';
mod.appendChild(bottoneInvioNomeVenditore);

//ModEmail
var bottoneInvioEmail = document.createElement("div");
bottoneInvioEmail.id = "bottoneInvioEmail";
bottoneInvioEmail.textContent = 'Modifica ';
mod.appendChild(bottoneInvioEmail);

//ModTelefono
var bottoneInvioTelefono = document.createElement("div");
bottoneInvioTelefono.id = "bottoneInvioTelefono";
bottoneInvioTelefono.textContent = 'Modifica ';
mod.appendChild(bottoneInvioTelefono);


//Modificia-Immagine

var bottoneInvioImmagine = document.createElement("div");
bottoneInvioImmagine.id = "bottoneInvioImg";
bottoneInvioImmagine.textContent = 'Modifica ';
mod.appendChild(bottoneInvioImmagine);







var input = document.createElement('textarea');
input.id = 'textarea';
mod.appendChild(input);









document.getElementById('modificaDescrizione').onclick = () => {



    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvio').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci la nuova descrizione';
    var input = document.querySelector('textarea');
    input.name = 'desc';
    input.id = "desc";
    input.rows = 2;
    input.placeholder = "Descrizione";
    input.required = true;


    document.getElementById('bottoneInvio').onclick = () => {

        var newDescrizione = document.querySelector('#desc').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newDescrizione);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaDescrizione',
            type: 'POST',
            data: {
                descrizione: newDescrizione,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });

        window.location.reload();

    };



    document.getElementById('bottoneClose').onclick = () => {
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvio').style.display = 'none';
    };


};




document.getElementById('modificaNome').onclick = () => {

    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvioTitolo').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci il nuovo titolo';
    var input = document.querySelector('textarea');
    input.name = 'titolo';
    input.id = "titolo";
    input.rows = 2;
    input.placeholder = "Titolo";
    input.required = true;



    document.getElementById('bottoneInvioTitolo').onclick = () => {

        var newTitolo = document.querySelector('#titolo').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newTitolo);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaTitolo',
            type: 'POST',
            data: {
                titolo: newTitolo,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });
        window.location.reload();

    };



    document.getElementById('bottoneClose').onclick = () => {
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvioTitolo').style.display = 'none';
    };

};






document.getElementById('modificaQuantità').onclick = () => {

    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvioQuantità').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci la nuova quantità';
    var input = document.querySelector('textarea');
    input.name = 'quantità';
    input.id = "quantità";
    input.rows = 2;
    input.placeholder = "Quantità";
    input.required = true;



    document.getElementById('bottoneInvioQuantità').onclick = () => {

        var newQuantità = document.querySelector('#quantità').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newQuantità);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaQuantita',
            type: 'POST',
            data: {
                quantità: newQuantità,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });
        window.location.reload();

    };

    document.getElementById('bottoneClose').onclick = () => {
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvioQuantità').style.display = 'none';
    };
};






document.getElementById('modificaPrezzo').onclick = () => {

    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvioPrezzo').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci il nuovo prezzo';
    var input = document.querySelector('textarea');
    input.name = 'prezzo';
    input.id = "prezzo";
    input.rows = 2;
    input.placeholder = "Prezzo";
    input.required = true;



    document.getElementById('bottoneInvioPrezzo').onclick = () => {

        var newPrezzo = document.querySelector('#prezzo').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newPrezzo);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaPrezzo',
            type: 'POST',
            data: {
                prezzo: newPrezzo,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });
        window.location.reload();

    };

    document.getElementById('bottoneClose').onclick = () => {
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvioPrezzo').style.display = 'none';
    };
};





document.getElementById('modificaNomeVenditore').onclick = () => {

    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvioNomeVenditore').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci il nuovo nome';
    var input = document.querySelector('textarea');
    input.name = 'Nome Venditore';
    input.id = "nomeVenditore";
    input.rows = 2;
    input.placeholder = "Nome";
    input.required = true;


    document.getElementById('bottoneInvioNomeVenditore').onclick = () => {

        var newNomeVenditore = document.querySelector('#nomeVenditore').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newNomeVenditore);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaNomeVenditore',
            type: 'POST',
            data: {
                nomeVendittore: newNomeVenditore,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });
        window.location.reload();

    };


    document.getElementById('bottoneClose').onclick = () => {
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvioVenditore').style.visibility = 'none';
    };
};








document.getElementById('modificaEmail').onclick = () => {

    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvioEmail').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci la nuova email';
    var input = document.querySelector('textarea');
    input.name = 'email Venditore';
    input.id = "emailVenditore";
    input.rows = 2;
    input.placeholder = "Email";
    input.required = true;



    document.getElementById('bottoneInvioEmail').onclick = () => {

        var newEmailVenditore = document.querySelector('#emailVenditore').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newEmailVenditore);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaEmailVenditore',
            type: 'POST',
            data: {
                emailVenditore: newEmailVenditore,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });
        window.location.reload();
        document.getElementById('bottoneClose').onclick = () => {
            document.querySelector('#mod').style.visibility = 'hidden';
            document.querySelector('#bottoneClose').style.display = 'none';
            document.querySelector('#bottoneInvioEmail').style.display = 'none';
        };

    };



};







document.getElementById('modificaNumero').onclick = () => {

    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvioTelefono').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci il nuovo numero';
    var input = document.querySelector('textarea');
    input.name = 'telefonoVenditore';
    input.id = "TelefonoVenditore";
    input.rows = 2;
    input.placeholder = "Telefono";
    input.required = true;



    document.getElementById('bottoneInvioTelefono').onclick = () => {

        var newTelefonoVenditore = document.querySelector('#TelefonoVenditore').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newTelefonoVenditore);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaTelefonoVenditore',
            type: 'POST',
            data: {
                telefonoVenditore: newTelefonoVenditore,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });
        window.location.reload();

    };


    document.getElementById('bottoneClose').onclick = () => {
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvioTelefono').style.display = 'none';
    };


};



/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

*/













document.getElementById('modificaImmagine').onclick = () => {

    document.querySelector('#mod').style.visibility = 'visible';
    document.querySelector('#mod').style.background = 'linear-gradient(0deg, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0.849))';
    document.querySelector('#bottoneClose').style.display = 'inline-block';
    document.querySelector('#bottoneInvioImg').style.display = 'inline-block';
    document.querySelector('#textDescrizione').innerHTML = 'Inserisci la nuova immagine';

    document.querySelector('#textarea').style.display = 'none';


    var immagine = document.createElement('input');
    immagine.type = 'file';
    immagine.id = 'inputImmagineProdotti';

    mod.appendChild(immagine);
    document.querySelector('#inputImmagineProdotti').style.display = 'inline-block';





    //Function per convertire l'immagine in BASE64

    //La dimensione dell'immagine 
    const MAX_WIDTH = 320;
    const MAX_HEIGHT = 180;

    //Il tipo dell'immagine 
    const MIME_TYPE = "image/jpeg";
    //Qualita dell'immagine
    const QUALITY = 1.0;
    //Andiamo a selezionare l'immagine tramite un input


    function calculateSize(Img, maxWidth, maxHeight) {
        let width = Img.width;
        let height = Img.height;

        // calculate the width and height, constraining the proportions
        if (width > height) {
            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width = Math.round((width * maxHeight) / height);
                height = maxHeight;
            }
        }
        return [width, height];

    }
    immagine.value = '';
    const inputFile = document.getElementById("inputImmagineProdotti");
    console.log("ciao");


    inputFile.onchange = function (ev) {
        console.log("Rimuovi");

        const file = ev.target.files[0]; // get the file

        if (file.size < 316382) {
            console.log("L'immagine è buona");

            const toBase64 = file => new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });


            const uploadedFile = document.querySelector('#inputImmagineProdotti').files[0];
            toBase64(uploadedFile)
                .then(res => {
                    let valore = res;
                    console.log(valore);
                    var img = document.createElement("img");
                    img.src = valore;
                    img.id='vetrina'
                    document.getElementById("ancoraImg").append(img);

                    var imgBase64 = document.createElement('input');
                    imgBase64.type = 'text';
                    imgBase64.id = 'immagineBase64';

                    document.querySelector('#inputImmagineProdotti').style.display = 'none';

                    document.getElementById("ancoraImg").append(imgBase64);
                    $("#immagineBase64").val(valore);
                })
                .catch(err => {
                    console.log(err);
                })




        } else {





            const blobURL = URL.createObjectURL(file);
            const Img = new Image();
            Img.src = blobURL;
            Img.onerror = function () {
                URL.revokeObjectURL(this.src);
                // Handle the failure properly
                console.log("Cannot load image");
            };

            Img.onload = function () {

                URL.revokeObjectURL(this.src);
                const [newWidth, newHeight] = calculateSize(Img, MAX_WIDTH, MAX_HEIGHT);

                //Andiamo a creare un immagine tramite l'API di javascript canvas 

                const canvas = document.createElement("canvas");
                canvas.id = "fileUpload";
                //Definiamo la dimensione dell'immagine che è stata creata 
                canvas.width = newWidth;
                canvas.height = newHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(Img, 0, 0, newWidth, newHeight);
                console.log("ccic");
                mod.appendChild(ancoraImg);
                document.getElementById("ancoraImg").append(canvas);

                document.querySelector('#inputImmagineProdotti').style.display = 'none';


                var imgBase64 = document.createElement('input');
                imgBase64.type = 'text';
                imgBase64.id = 'immagineBase64';

                document.getElementById("ancoraImg").append(imgBase64);
                //Andiamo a convertire l'immagine da canvas a BASE64
                var dataURL = canvas.toDataURL();

                $("#immagineBase64").val(dataURL);

                // $("#img").val(dataURL);
            };
        } //if check dim image
        let myItem = localStorage.getItem("login");
        let email = myItem.replace(/['"]+/g, '');
        console.log(email);
        $("#idEmail").val(email);

        num = Math.round(Math.random() * 100000);
        $("#name").val(num);
        console.log(num);







        console.log(file.size)
    };


    document.getElementById('bottoneClose').onclick = () => {
        canvas.parentNode.removeChild(canvas);
        immagine.value = '';
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#inputImmagineProdotti').style.display = 'none';
        document.querySelector('#textarea').style.display = 'inline-block';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvioImg').style.display = 'none';

    };




    document.getElementById('bottoneInvioImg').onclick = () => {
        var newImmagineProdotto = document.querySelector('#immagineBase64').value;
        var idProdotto = document.querySelector('.idProdotto').textContent;
        console.log(newImmagineProdotto);
        console.log(idProdotto);

        $.ajax({
            url: '/modificaImmagineProdotto',
            type: 'POST',
            data: {
                immagineProdotto: newImmagineProdotto,
                id: idProdotto
            },
            success: (data) => {
                console.log("ok")
            }
        });

        window.location.reload();

    };


    document.getElementById('bottoneClose').onclick = () => {
        
        document.querySelector('#mod').style.visibility = 'hidden';
        document.querySelector('#inputImmagineProdotti').style.display = 'none';
        document.querySelector('#textarea').style.display = 'inline-block';
        document.querySelector('#bottoneClose').style.display = 'none';
        document.querySelector('#bottoneInvioImg').style.display = 'none';
        window.location.reload();


    };


};

document.getElementById('eliminaAnnuncio').onclick = () => {

    var idProdotto = document.querySelector('.idProdotto').textContent;
    console.log("Elimina");
    console.log(idProdotto);

    $.ajax({
        url: '/eliminaAnnuncio',
        type: 'POST',
        data: {
          
            id: idProdotto
        },
        success: (data) => {
            console.log("ok")
        }
    });
    

};












var name = window.location.href.split('/')[window.location.href.split('/').length - 1]
console.log(name)
$.ajax({
    method: 'GET',
    url: '/api/informazioneProdottoInserito/' + name,
    success: function (data) {



        document.querySelector('.nomeVendittore').textContent = data[0].nomeVendittore

        document.querySelector('.emailVenditore').textContent = data[0].emailVenditore

        document.querySelector('.idProdotto').textContent = data[0].name

        document.querySelector('.telefonoVenditore').textContent = data[0].telefonoVenditore

        document.querySelector('.nameProdotto').textContent = data[0].nameProdotto

        document.querySelector('.desc').textContent = data[0].desc

        document.querySelector('.quantitàProdotto').textContent = data[0].quantitàProdotto

        document.querySelector('.prezzoProdotto').textContent = data[0].prezzoProdotto

        document.querySelector('.img > img').src = data[0].img







    }
});


