

$.ajax({

    url: "/api/visualizzazione ",
    method: "GET",

    success: function (data) {
        document.querySelector("#visits").textContent = (data.contatore);
    }
})


$.ajax({

    url: "/api/visualizzazioneacquisti ",
    method: "GET",

    success: function (data) {
        document.querySelector("#acquisti").textContent = (data.acquisti);
    }
})


$.ajax({

    url: "/api/visualizzazionePistacchio ",
    method: "GET",

    success: function (data) {


        var visualizzazionePistacchio = document.createElement('div').value = (data.pistacchio);
        $.ajax({

            url: "/api/visualizzazioneMandorle ",
            method: "GET",

            success: function (data) {
                var visualizzazioneMandorle = document.createElement('div').value = (data.mandorle);
                $.ajax({

                    url: "/api/visualizzazioneNoci ",
                    method: "GET",

                    success: function (data) {
                        var visualizzazioneNoci = document.createElement('div').value = (data.noci);
                        $.ajax({

                            url: "/api/visualizzazioneNocciole ",
                            method: "GET",

                            success: function (data) {
                                var visualizzazioneNocciole = document.createElement('div').value = (data.nocciole);
                                $.ajax({

                                    url: "/api/visualizzazioneOlio ",
                                    method: "GET",

                                    success: function (data) {
                                        var visualizzazioneOlio = document.createElement('div').value = (data.olio);


                                        let myChart = document.getElementById("myChart").getContext("2d");



                                        // Global Options

                                        Chart.defaults.global.defaultFontFamily = "Lato";

                                        Chart.defaults.global.defaultFontSize = 18;

                                        Chart.defaults.global.defaultFontColor = "#777";



                                        let massPopChart = new Chart(myChart, {

                                            //tipi di grafico

                                            type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea

                                            data: {

                                                labels: ["Pistacchio", "Mandorle", "Noci", "Nocciole", "Olio"],

                                                datasets: [{

                                                    label: "Visualizzazioni",

                                                    data: [



                                                        visualizzazionePistacchio,

                                                        visualizzazioneMandorle,

                                                        visualizzazioneNoci,

                                                        visualizzazioneNocciole,

                                                        visualizzazioneOlio

                                                    ],

                                                    //backgroundColor:"green",

                                                    backgroundColor: [


                                                        "rgba(54, 162, 235, 0.6)",

                                                        "rgba(255, 206, 86, 0.6)",

                                                        "rgba(75, 192, 192, 0.6)",

                                                        "rgba(153, 102, 255, 0.6)",

                                                        "rgba(255, 159, 64, 0.6)",

                                                        "rgba(255, 99, 132, 0.6)"

                                                    ],

                                                    borderWidth: 1,

                                                    borderColor: "#777",

                                                    hoverBorderWidth: 3,

                                                    hoverBorderColor: "#000"

                                                }]

                                            },

                                            options: {

                                                title: {

                                                    display: true,

                                                    text: "Prodotti più popolari",

                                                    fontSize: 25

                                                },

                                                legend: {

                                                    display: true,

                                                    position: "right",

                                                    labels: {

                                                        fontColor: "#000"

                                                    }

                                                },

                                                layout: {

                                                    padding: {

                                                        left: 50,

                                                        right: 0,

                                                        bottom: 0,

                                                        top: 0

                                                    }

                                                },

                                                tooltips: {

                                                    enabled: true

                                                }

                                            }

                                        });




                                    }
                                })

                            }
                        })


                    }
                })
            }
        })

    }
})
