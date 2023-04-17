document.getElementById('bottone').onclick = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    $("#data").val(date);

    
    $.ajax({

        url: "/api/registrazione",
        method: "POST",
        data: {
            categoria: document.querySelector('#categoria').value,
            data: document.querySelector('#data').value,
            emailRegistrazione: document.querySelector('#emailRegistrazione').value,
            passwordRegistrazione: document.querySelector('#passwordRegistrazione').value

        },
        success: function (data) {

            window.location.href = '/';
            alert("La registrazione è andata a buon fine");
        }


    })
};