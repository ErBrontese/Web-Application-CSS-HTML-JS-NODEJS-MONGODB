

if (JSON.parse(localStorage.getItem('root')) == null && JSON.parse(localStorage.getItem('login')) == null) {
	window.location.href = '/';
	alert('Deve prima essere loggato');



}




//Function per convertire l'immagine in BASE64

//La dimensione dell'immagine 
const MAX_WIDTH = 320;
const MAX_HEIGHT = 180;

//Il tipo dell'immagine 
const MIME_TYPE = "image/jpeg";
//Qualita dell'immagine
const QUALITY = 0.7;
//Andiamo a selezionare l'immagine tramite un input


function calculateSize(img, maxWidth, maxHeight) {
	let width = img.width;
	let height = img.height;

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




const input = document.getElementById("img-input");
console.log("ciao");

input.onchange = function (ev) {
	const file = ev.target.files[0]; // get the file
	const blobURL = URL.createObjectURL(file);
	const img = new Image();
	img.src = blobURL;
	img.onerror = function () {
		URL.revokeObjectURL(this.src);
		// Handle the failure properly
		console.log("Cannot load image");
	};

	img.onload = function () {
		URL.revokeObjectURL(this.src);
		const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);

		//Andiamo a creare un immagine tramite l'API di javascript canvas 
		const canvas = document.createElement("canvas");
		canvas.id = "fileUpload";
		//Definiamo la dimensione dell'immagine che è stata creata 
		canvas.width = newWidth;
		canvas.height = newHeight;
		const ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0, newWidth, newHeight);
		console.log("ccic");
		document.getElementById("corniceImmagine").append(canvas);
		//Andiamo a convertire l'immagine da canvas a BASE64
		var dataURL = canvas.toDataURL();
		console.log(dataURL);


		$("#infocarico").css({
			"background-color": "green"

		});
		$("#img").val(dataURL);


		let myItem = localStorage.getItem("login");
		let email = myItem.replace(/['"]+/g, '');
		console.log(email);
		$("#idEmail").val(email);

		num = Math.round(Math.random() * 100000);
		$("#name").val(num);
		console.log(num);


		document.getElementById('prova').onclick = () => {
			console.log("cdjjd");
			$.ajax({
				url: "/api/upload",
				method: "POST",
				data: {

					nomeVendittore: document.querySelector('#nomeVendittore').value,
					emailVenditore: document.querySelector('#emailVenditore').value,
					telefonoVenditore: document.querySelector('#telefonoVenditore').value,
					idEmail: document.querySelector('#idEmail').value,
					categoria: document.querySelector('#categoria').value,
					nameProdotto: document.querySelector('#nameProdotto').value,
					name: document.querySelector('#name').value,
					desc: document.querySelector('#desc').value,
					quantitàProdotto: document.querySelector('#quantitàProdotto').value,
					prezzoProdotto: document.querySelector('#prezzoProdotto').value,
					img: document.querySelector('#img').value


				},
				success: function (data) {
					window.location.href = '/';
				}


			})
		};





	};
};






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