
$.ajax({
    url: "/api/prodotti/Noci",
    method: "GET"

}).done(function (data) {
    for (let i = 0; i < data.length; i++) {
        var div = document.createElement('div');
        div.className = "card";

        var img = document.createElement('img');
        img.className = 'img';
        img.className = 'dimImage';
        img.src = data[i].img


        div.appendChild(img);

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        div.appendChild(cardBody);

        var h5 = document.createElement('h5');
        cardBody.appendChild(h5);

        var p1 = document.createElement('p');
        p1.className = 'card-text';
        p1.textContent = data[i].nameProdotto;
        cardBody.appendChild(p1);

        var p2 = document.createElement('p');
        p2.className = 'name';
        p2.className = 'abbreviations'
        p2.textContent = data[i].prezzoProdotto + "€" ;
        cardBody.appendChild(p2);

        var a = document.createElement('a');
        a.className = 'btn btn-primary';
        a.textContent = 'Maggiori informazioni';

        

        a.onclick = () => {
            var name = data[i].name
            console.log(name);
            
            $.ajax({
                method: 'GET',
                url: '/prodotti/' + name,
                success: function (data) {
                    window.location.href = '/prodotti/' + name;
                }
            });
        }
        cardBody.appendChild(a);

        $(div).insertAfter(document.querySelector(".poster"))
    }
});


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
    document.querySelector('#accesso').style.display = 'none';

}


if (JSON.parse(localStorage.getItem('root')) != null) {
    document.querySelector('#inserimentoProdotto').style.display = 'inline-block';
    document.querySelector('#logout').style.display = 'inline-block';
    console.log("ciao");
    document.querySelector('#accesso').style.display = 'none';

}





$.ajax({

    url: "/api/incrementoNoci",
    method: "GET",

    success: function (data) {

        document.querySelector("#prova").textContent = (data.noci + 1);

    }
})




