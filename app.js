const express = require('express')
const app = express()
var crypto = require('crypto')
const { engine } = require('express-handlebars')

var bodyParser = require('body-parser');
var { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://matteo:radice201000005206@cluster0.dc82e20.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var db = client.db('Cluster0');



var collectionProdotti = db.collection('prodotti');
var collectionUtenti = db.collection('utentiRegistrati');
var collectionVisualizzazione = db.collection('visualizzazione');
var collectionvisualizzazionePistacchi = db.collection('visualizzazionePistacchi');
var collectionvisualizzazioneMandorle = db.collection('visualizzazioneMandorle');
var collectionvisualizzazioneNoci = db.collection('visualizzazioneNoci');
var collectionvisualizzazioneNocciole = db.collection('visualizzazioneNocciole');
var collectionvisualizzazioneOlio = db.collection('visualizzazioneOlio');
var collectionAcquisti = db.collection('acquisti');



var fs = require('fs');
var path = require('path');
const { data } = require('jquery');
require('dotenv/config');




app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');




// Static Files
app.use(express.static('public'));


app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))





app.use(bodyParser.json({ limit: '150mb' }));
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));






app.post('/api/upload', (req, res) => {
	console.log('ffff');
	var obj = {

		nomeVendittore: req.body.nomeVendittore,
		emailVenditore: req.body.emailVenditore,
		telefonoVenditore: req.body.telefonoVenditore,
		idEmail: req.body.idEmail,
		categoria: req.body.categoria,
		nameProdotto: req.body.nameProdotto,
		name: req.body.name,
		desc: req.body.desc,
		quantitàProdotto: req.body.quantitàProdotto,
		prezzoProdotto: req.body.prezzoProdotto,
		img: req.body.img
	}
	collectionProdotti.insertOne(obj);
	res.send('ok');
})




app.post('/api/registrazione', (req, res) => {
	console.log('ffff');
	var obj = {
		categoria: req.body.categoria,
		data: req.body.data,
		emailRegistrazione: req.body.emailRegistrazione,
		passwordRegistrazione: crypto.createHash('sha1').update(req.body.passwordRegistrazione).digest('hex')
	}

	console.log(obj);

	collectionUtenti.insertOne(obj);
	res.send('ok');
})





app.get('/api/prodotti/:categoria', (req, res) => {

	var array = [];
	collectionProdotti.find({
		categoria: req.params.categoria
	}).forEach(prodotto => {
		array.push(prodotto);
	}).then(() => {
		res.status(200).send(array);
	})
})





app.get('/api/riepilogo/:categoria', (req, res) => {

	var array = [];
	collectionUtenti.find({
		categoria: req.params.categoria
	}).forEach(prodotto => {
		array.push(prodotto);
	}).then(() => {
		res.status(200).send(array);
	})
})












app.get('/api/incrementoHome', (req, res) => {
	var array = [];


	collectionVisualizzazione.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {


		collectionVisualizzazione.updateOne({}, { $inc: { contatore: 1 } })
		res.status(200).send(array[0]);

	})

})



app.get('/api/incrementoPistacchio', (req, res) => {
	var array = [];
	collectionvisualizzazionePistacchi.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {


		collectionvisualizzazionePistacchi.updateOne({}, { $inc: { pistacchio: 1 } })
		res.status(200).send(array[0]);

	})

})

app.get('/api/incrementoMandorle', (req, res) => {
	var array = [];
	collectionvisualizzazioneMandorle.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		collectionvisualizzazioneMandorle.updateOne({}, { $inc: { mandorle: 1 } })
		res.status(200).send(array[0]);

	})

})

app.get('/api/incrementoNoci', (req, res) => {
	var array = [];
	collectionvisualizzazioneNoci.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		collectionvisualizzazioneNoci.updateOne({}, { $inc: { noci: 1 } })
		res.status(200).send(array[0]);

	})

})


app.get('/api/incrementoNocciole', (req, res) => {
	var array = [];
	collectionvisualizzazioneNocciole.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		collectionvisualizzazioneNocciole.updateOne({}, { $inc: { nocciole: 1 } })
		res.status(200).send(array[0]);

	})

})


app.get('/api/incrementoOlio', (req, res) => {
	var array = [];
	collectionvisualizzazioneOlio.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		collectionvisualizzazioneOlio.updateOne({}, { $inc: { olio: 1 } })
		res.status(200).send(array[0]);

	})

})




app.get('/api/acquisti', (req, res) => {
	var array = [];
	collectionAcquisti.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		collectionAcquisti.updateOne({}, { $inc: { acquisti: 1 } })
		res.status(200).send(array[0]);

	})

})














app.get('/api/visualizzazione', (req, res) => {
	var array = [];
	collectionVisualizzazione.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		res.status(200).send(array[0]);

	})

})


app.get('/api/visualizzazionePistacchio', (req, res) => {
	var array = [];
	collectionvisualizzazionePistacchi.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		res.status(200).send(array[0]);

	})

})



app.get('/api/visualizzazioneMandorle', (req, res) => {
	var array = [];
	collectionvisualizzazioneMandorle.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		res.status(200).send(array[0]);

	})

})


app.get('/api/visualizzazioneNoci', (req, res) => {
	var array = [];
	collectionvisualizzazioneNoci.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		res.status(200).send(array[0]);

	})

})


app.get('/api/visualizzazioneNocciole', (req, res) => {
	var array = [];
	collectionvisualizzazioneNocciole.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		res.status(200).send(array[0]);

	})

})


app.get('/api/visualizzazioneOlio', (req, res) => {
	var array = [];
	collectionvisualizzazioneOlio.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		res.status(200).send(array[0]);

	})

})

app.get('/api/visualizzazioneacquisti', (req, res) => {
	var array = [];
	collectionAcquisti.find().forEach(
		obj => {
			array.push(obj);
		}
	).then(() => {
		res.status(200).send(array[0]);

	})

})














app.post('/api/accesso', (req, res) => {
	var array = [];

	var email = req.body.email;
	var password = crypto.createHash('sha1').update(req.body.password).digest('hex');

	collectionUtenti.find({
		'emailRegistrazione': email

	}).forEach(prodotto => {
		array.push(prodotto);
	}).then(() => {
		if (array.length > 0) {
			console.log(array[0].passwordRegistrazione);
			console.log(password);
			if (array[0].passwordRegistrazione == password) {
				var rootPass = crypto.createHash('sha1').update('root').digest('hex');;
				var emailPass = 'root';
				if (array[0].emailRegistrazione == emailPass) {
					if (array[0].passwordRegistrazione == rootPass) {
						console.log('Bentornato signore');
						res.send('Bentornato signore');
					}
				} else {
					res.send('ok');
				}


			} else {
				res.send('Password errata');
				console.log('Password errata ');
			}
		} else {
			res.send('Utente non registrato');
			console.log("Utente non registrato");
		}

	})
})




app.get('/prodotti/:name', (req, res) => {

	console.log("ciao")
	res.render('prodotto', { layout: 'header' })
})





app.get('/api/informazione/:name', (req, res) => {
	var array = [];
	console.log(req.params.name);
	collectionProdotti.find({
		'name': req.params.name
	}).forEach(prodotto => {
		array.push(prodotto);
	}).then(() => {
		res.send(array);
	})
})


/////////////////////Andiamo a fare il render del pagina prodotti inseriti///////////////////////////////////////////////

app.get('/prodottiInseriti/:name', (req, res) => {

	console.log("ciao")
	res.render('prodottiInseriti', { layout: 'headerProdottiInseriti' })
})





app.get('/api/informazioneProdottoInserito/:name', (req, res) => {
	var array = [];
	console.log(req.params.name);
	collectionProdotti.find({
		'name': req.params.name
	}).forEach(prodotto => {
		array.push(prodotto);
	}).then(() => {
		res.send(array);
	})
})



app.post('/api/decodifica', (req, res) => {
	var obj = req.body.obj;
	obj = Buffer.from(obj.data).toString('base64');
	console.log(obj);
})


app.get('/public/pagamento.html', (req, res) => {
	res.sendFile('pagamento.html', { root: __dirname + "/public" })
})

app.get('/gestione.html', (req, res) => {
	res.sendFile('gestione.html', { root: __dirname + "/public" })
})




app.post('/testingAjax', (req, res) => {
	var array = [];
	let emailcheck = req.body.email;
	console.log(emailcheck)
	collectionProdotti.find({
		'idEmail': emailcheck
	}).forEach(prodotto => {
		array.push(prodotto);
	}).then(() => {
		res.status(200).send(array);
	})

});


app.post('/modificaDescrizione', (req, res) => {

	var descrizione = req.body.descrizione;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { desc: descrizione } })
});



app.post('/modificaTitolo', (req, res) => {

	var titolo = req.body.titolo;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { nameProdotto: titolo } })
});




app.post('/modificaQuantita', (req, res) => {
	var quantità = req.body.quantità;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { quantitàProdotto: quantità } })
});

app.post('/modificaPrezzo', (req, res) => {
	var prezzo = req.body.prezzo;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { prezzoProdotto: prezzo } })
});




app.post('/modificaNomeVenditore', (req, res) => {
	var nomevenditore = req.body.nomeVendittore;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { nomeVendittore: nomevenditore } })
});


app.post('/modificaEmailVenditore', (req, res) => {
	var emailvenditore = req.body.emailVenditore;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { emailVenditore: emailvenditore } })
});


app.post('/modificaTelefonoVenditore', (req, res) => {
	var telefonovenditore = req.body.telefonoVenditore;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { telefonoVenditore: telefonovenditore } })
});


app.post('/modificaImmagineProdotto', (req, res) => {
	var immagineProdotto = req.body.immagineProdotto;
	var name = req.body.id;
	collectionProdotti.updateOne({ 'name': name }, { $set: { img: immagineProdotto } })
});

app.post('/eliminaAnnuncio', (req, res) => {
	var name = req.body.id;
	console.log("Elimina");
	collectionProdotti.deleteOne({ 'name': name }, { justOne: 1 } )
});






app.all('*', (req, res) => {
	res.status(404).send('<h1 style="color:red">Pagina non trovata </h1>')
})

const port = 5000;
app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})