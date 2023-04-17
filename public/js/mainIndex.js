

$('#logout').click(function () {

    localStorage.removeItem('login');
    window.location.href = '/';
})

$('#logout').click(function () {

    localStorage.removeItem('root');
    window.location.href = '/';
})



if (JSON.parse(localStorage.getItem('login')) != null) {
    document.querySelector('#inserimentoProdotto').style.display = 'inline-block';
    document.querySelector('#logout').style.display = 'inline-block';
    document.querySelector('#accesso').style.display = 'none'
    document.querySelector('#prodottiInseriti').style.display = 'inline-block';

}


if (JSON.parse(localStorage.getItem('root')) != null) {
    document.querySelector('#logout').style.display = 'inline-block';
    document.querySelector('#gestione').style.display = 'inline-block';
    document.querySelector('#accesso').style.display = 'none';
    document.querySelector('#prodottiInseriti').style.display = 'inline-block';

}


$.ajax({

    url: "/api/incrementoHome",
    method: "GET",

    success: function (data) {

        document.querySelector("#visits").textContent = (data.contatore + 1);

    }
})

