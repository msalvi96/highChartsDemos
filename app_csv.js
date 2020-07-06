//initialize high vharts library

document.addEventListener('DOMContentLoaded', function() {
    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: "CSV Chart"
        },
        yAxis: {
            title: {
                text: "Fruits Eaten"
            }
        },
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            enabled: false
                        }
                    }
                }
            ]
        }
    };
    //Retrive data from csv file using JQuery
    // $.get('text.csv', csv => {
    //     options.data = {
    //         csv,
    //     };
    //     Highcharts.chart("container", options);
    // })

    //Retrieve data from csv file using Fetch
    // fetch('text.csv').then(res => {
    //     return res.text();
    // }).then(csv => {
    //     options.data = {
    //         csv
    //     };
    //     Highcharts.chart("container", options);
    // });

    options.data = {
        csvURL: 'http://localhost:5500/text.csv',
        enablePolling: true,
        dataRefresh: 2
    }

    Highcharts.chart("container", options);


    // Highcharts.chart('container', {
    //     chart: {
    //         // type: 'column'
    //         // type: 'bar'
    //         // type: 'scatter'
    //         // type: 'area'
    //         type: 'areaspline',
    //         // type: "line",
    //         zoomType: 'xy'
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Fruits Eaten'
    //         },
    //     },
    //     title: {
    //         text: 'CSV Chart'
    //     },
    //     xAxis: {
    //         categories: ['Apples', 'Bananas', 'Oranges']
    //     },
    //     series: [
    //         {
    //             name: "Fruit Consumption",
    //             data: [-4, -8, 0, 4, 5, 6, 2, 9, 10, 12, 15, 10, 9, 7, -4],
    //             zones: [
    //                 {
    //                     value: 0,
    //                     color: '#f7a35c'
    //                 },
    //                 {
    //                     value: 10,
    //                     color: '#7cb5ec'
    //                 },
    //                 {
    //                     color: '#90ed7d'
    //                 },
    //             ]
    //         }
    //         // {
    //         //     name: "Fruit Consumption",
    //         //     // data: [["Jane", 10], ["June", 4], ["Jack", 7]]
    //         //     data: [
    //         //         {
    //         //             name: 'Jack',
    //         //             color: 'red',
    //         //             y: 10,
    //         //             x: 1
    //         //         },
    //         //         {
    //         //             name: 'June',
    //         //             y: 4,
    //         //             x: 2
    //         //         },
    //         //         {
    //         //             name: 'Jane',
    //         //             y: 7,
    //         //             x: 3
    //         //         },
    //         //     ]
    //         // }
    //     ]
    // })
})