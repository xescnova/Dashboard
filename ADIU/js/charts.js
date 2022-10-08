//Chart 1
function chart1() {
    $.post("datos.php", { chart: 1 }, function(x) {
        var datos = jQuery.parseJSON(x);
        Highcharts.chart('container', {
            title: {
                text: 'Gráfico de Dogecoin en Euros'
            },

            subtitle: {
                text: 'Source: https://www.kaggle.com/deepshah16/meme-cryptocurrency-historical-data'
            },

            yAxis: {
                title: {
                    text: '€'
                }
            },

            xAxis: {
                type: 'datetime'
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    pointStart: Date.UTC(2013, 11, 15),
                    pointInterval: 24 * 3600 * 1000 // one day
                }
            },

            series: [{
                    name: 'Precio máximo',
                    data: datos[0]
                }, {
                    name: 'Precio mínimo',
                    data: datos[1]
                }

            ],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    });

}

//Chart 2
function chart2() {
    $.post("datos.php", { chart: 2 }, function(m) {
        var datos = jQuery.parseJSON(m);
        Highcharts.chart('container2', {
            chart: {
                type: 'area'
            },
            accessibility: {
                description: 'Precio de Shiba desde su salida'
            },
            title: {
                text: 'Precio de Shiba desde su salida'
            },
            subtitle: {
                text: 'Sources: https://www.kaggle.com/deepshah16/meme-cryptocurrency-historical-data?select=Meme+Coin"'

            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: '€'
                }
            },

            plotOptions: {
                series: {
                    pointStart: Date.UTC(2020, 7, 1),
                    pointInterval: 24 * 3600 * 1000 // one day
                }
            },
            series: [{
                name: 'Shiba',
                data: datos[0]
            }]
        });
    });
}

function chart3() {
    $.post("datos.php", { chart: 3 }, function(d) {

        var datos = jQuery.parseJSON(d);
        console.log(datos)
        Highcharts.chart('container3', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Capitalización de mercado Enero-Junio 2021'
            },
            subtitle: {
                text: 'Source: https://www.kaggle.com/deepshah16/meme-cryptocurrency-historical-data?select=Meme+Coin'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun'

                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '€'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} €</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Doge',
                data: datos[0]

            }, {
                name: 'Shiba',
                data: datos[1]


            }, ]
        });
    });
}