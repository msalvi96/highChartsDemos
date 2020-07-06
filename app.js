//initialize high vharts library

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('container', {
        chart: {
            // type: 'column'
            // type: 'bar'
            // type: 'scatter'
            // type: 'area'
            type: 'areaspline',
            ZoomType: 'xy'
        },
        credits: {
            text: "Custom Credits",
            href: "https://google.com",
            position: {
                align: 'left',
                x: 10
            },
            style: {
                fontSize: "15px",
                color: "red"
            }
        },
        yAxis: {
            title: {
                text: 'Fruits Eaten'
            },
        },
        colors: [
            '#1c110a',
            '#e4d6a7',
            '#e9b44c',
            '#9b2915',
            '#50a2a7'
        ],
        tooltip: {
            formatter() {
                let s = `<strong>X is: </strong>${this.x}`;
                this.points.forEach((point) => {
                    s += `<br>Y is: ${point.y} - ${point.series.name}`;
                });
                return s;
            },
            shared: true,
            // formatter() {
            //     return `<strong>X value</strong> - ${this.x}, <strong>Y Value</strong> - ${this.y}`
            // },
            animation: true,
            backGroundColor: '#333333',
            borderColor: '#f01f11',
            borderRadius: 20,
            followPointer: true,
            style: {
                color: '#ffffff'
            }
        },
        title: {
            text: 'First Chart'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        series: [
            {
                name: "John",
                data: [1, 2, 3, 100, 2, 3, 1, 2, 3],
            },
            {
                name: "Jane",
                data: [1, 20, 25, 60, 13, 12, 40, 14],
            },
            {
                name: "Joel",
                data: [1, 20, 100, 1, 3, 2, 1, 2],
            },
            {
                name: "Jack",
                data: [10, 20, 100, 8, 7, 4, 2, 4],
            },
            {
                name: "Mario",
                data: [8, 12, 100, 6, 7, 4, 200, 4],
            },
            {
                name: "Luigi",
                data: [1, 20, 25, 26, 60, 12, 30, 14],
            },
        ]
    })
})