
	if (JSON.parse(localStorage.getItem('root')) == null && JSON.parse(localStorage.getItem('login')) == null) {
        window.location.href = '/autenticazione.html';
        alert('Deve prima essere loggato');
    }




        $('#bottone').click(function () {
            $.ajax({

                url: "/api/acquisti",
                method: "GET",

                success: function (data) {

                    document.querySelector("#prova").textContent = (data.acquisti + 1);

                }
            })
            alert('Pagamento effettuato, è stata inviata un email con la ricevuta di pagamento');
            window.location.href = '/';
        })

