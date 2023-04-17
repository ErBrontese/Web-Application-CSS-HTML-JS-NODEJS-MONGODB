
$('#bottone').click(function () {
    var email = document.querySelector('#emailRegistrazione').value;
    var password = document.querySelector('#passwordRegistrazione').value;
    console.log(email);

    $.ajax({
        method: 'POST',
        url: '/api/accesso',
        data: {
            email: email,
            password: password
        },
        success: function (data) {

            if (data == 'ok') {

                //Qui posso andare a fare un ajax in qui invio questa variabile 
                console.log("oo"+data.email)
                localStorage.setItem('login', JSON.stringify(email));
                window.location.href = '/';
            } else

                if (data == 'Password errata') {
                    document.querySelector('#msgErrorePassword').style.display = 'inline-block';
                    setTimeout(function () {
                        document.querySelector('#msgErrorePassword').style.display = 'none';
                        location.reload(true);
                    }, 500);
                } else

                    if (data == 'Utente non registrato') {
                        document.querySelector('#msgErroreAccount').style.display = 'inline-block';
                        setTimeout(function () {
                            document.querySelector('#msgErroreAccount').style.display = 'none';
                            location.reload(true);
                        }, 500);
                    } else if (data == 'Bentornato signore') {
                        localStorage.setItem('root', JSON.stringify(email))
                        window.location.href = '/gestione.html';
                    }


        }
    });


})
