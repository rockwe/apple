"use strict";

setTimeout(function() {
    /*var statistics_chart = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(statistics_chart, {
        type: 'line',
        data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
                label: 'Statistics',
                data: [640, 387, 530, 302, 430, 270, 488],
                borderWidth: 5,
                borderColor: '#6777ef',
                backgroundColor: 'transparent',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#6777ef',
                pointRadius: 4
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        stepSize: 150
                    }
                }],
                xAxes: [{
                    gridLines: {
                        color: '#fbfbfb',
                        lineWidth: 2
                    }
                }]
            },
        }
    });*/

    /*$('#visitorMap').vectorMap(
        {
            map: 'world_en',
            backgroundColor: '#ffffff',
            borderColor: '#f2f2f2',
            borderOpacity: .8,
            borderWidth: 1,
            hoverColor: '#000',
            hoverOpacity: .8,
            color: '#ddd',
            normalizeFunction: 'linear',
            selectedRegions: false,
            showTooltip: true,
            pinMode: 'content',
            pins: {
                // cm: '<div class="jqvmap-circle"></div>',
            },
            onLabelShow: function (event, label, code) {
                // event.preventDefault();
                label.text( '8 Users');
                $('#visitorMap').vectorMap('set', 'colors', {cm: '#458796', mo: '#897120'})
            }
        });*/
   /* function escapeXml(string) {
        return string.replace(/[<>]/g, function (c) {
            switch (c) {
                case '<': return '\u003c';
                case '>': return '\u003e';
            }
        });
    }
    var pins = {
        mo: escapeXml('<div class="map-pin red"><span>MO</span></div>'),
        fl: escapeXml('<div class="map-pin blue"><span>FL</span></div>'),
        or: escapeXml('<div class="map-pin purple"><span>OR</span></div>'),
        cm: escapeXml('<div class="map-pin purple"><span>CM</span></div>'),
    };

    setTimeout(function () {
        $('#visitorMap').vectorMap('set', 'pins', pins)
    }, 2000);*/

// weather
/*    getWeather();
    setInterval(getWeather, 600000);

    function getWeather() {
        $.simpleWeather({
            location: 'Bogor, Indonesia',
            unit: 'c',
            success: function(weather) {
                var html = '';
                html += '<div class="weather">';
                html += '<div class="weather-icon text-primary"><span class="wi wi-yahoo-' + weather.code + '"></span></div>';
                html += '<div class="weather-desc">';
                html += '<h4>' + weather.temp + '&deg;' + weather.units.temp + '</h4>';
                html += '<div class="weather-text">' + weather.currently + '</div>';
                html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
                html += '<li> <i class="wi wi-strong-wind"></i> ' + weather.wind.speed+' '+weather.units.speed + '</li></ul>';
                html += '</div>';
                html += '</div>';

                $("#myWeather").html(html);
            },
            error: function(error) {
                $("#myWeather").html('<div class="alert alert-danger">'+error+'</div>');
            }
        });
    }*/
}, 2000);