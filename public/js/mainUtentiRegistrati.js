
        var tabella = document.createElement('table');
        tabella.className = 'tabella';
        $(tabella).insertAfter(document.querySelector("#ancora"));


        var rigaDescrizione = document.createElement('tr');
        tabella.appendChild(rigaDescrizione);

        var cellaDescrizione1 = document.createElement('td');
        cellaDescrizione1.className = 'cella';
        cellaDescrizione1.textContent = "Email Utente";
        rigaDescrizione.appendChild(cellaDescrizione1)

        var cellaDescrizione2 = document.createElement('td');
        cellaDescrizione2.className = 'cella';
        cellaDescrizione2.textContent = "Passowrd Utente";
        rigaDescrizione.appendChild(cellaDescrizione2)

        var cellaDescrizione3 = document.createElement('td');
        cellaDescrizione3.className = 'cella';
        cellaDescrizione3.textContent = "Data di registrazione Utente";
        rigaDescrizione.appendChild(cellaDescrizione3);
        //////////////////////////////////////////////////////////////////////






        $.ajax({
            url: "/api/riepilogo/utenti",
            method: "GET"

        }).done(function (data) {
            for (let i = 0; i < data.length; i++) {
                var rigaUtenti = document.createElement('tr');
                tabella.appendChild(rigaUtenti);

                var cellaUtenti1 = document.createElement('td');
                cellaUtenti1.className = 'cella';
                cellaUtenti1.textContent = data[i].emailRegistrazione;
                rigaUtenti.appendChild(cellaUtenti1)

                var cellaUtenti2 = document.createElement('td');
                cellaUtenti2.className = 'cella';
                cellaUtenti2.textContent = data[i].passwordRegistrazione;
                rigaUtenti.appendChild(cellaUtenti2)

                var cellaUtenti3 = document.createElement('td');
                cellaUtenti3.className = 'cella';
                cellaUtenti3.textContent = data[i].data;
                rigaUtenti.appendChild(cellaUtenti3);

            }
        });


