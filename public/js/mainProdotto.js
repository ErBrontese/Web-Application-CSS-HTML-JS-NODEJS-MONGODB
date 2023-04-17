

var name = window.location.href.split('/')[window.location.href.split('/').length - 1]
console.log(name)
$.ajax({
    method: 'GET',
    url: '/api/informazione/' + name,
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


document.getElementById('carello').onclick = () => {


    var idProdotto = document.querySelector('.idProdotto').textContent;
    console.log(idProdotto)
    alert("Prodotto aggiunto al carello ");
    let indice=0;
    localStorage.setItem(indice, JSON.stringify(idProdotto));
    console.log(indice);
    indice=indice+1;
};



