/* Graficas Slider */
jQuery(document).ready(function($){
    $("#graficas-slider-wrapper").slick({
        arrows: false,
        dots: true
    });
    $("#proyectos-slider-wrapper").slick({
        arrows: false,
        dots: true
    });
    $("#politicas-slider-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

/* Graficas */
window.onload = function(){

    console.log("Chartjs:code");
    
    var myBarChart = new Chart(document.getElementById("intensidad-1"), {
        type: 'horizontalBar',
        data: {
          labels: ["2019", "2018", "2017", "2016"],
          datasets: [
            {
              label: "Population",
              backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
              borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
              borderWidth: 1,
              data: [0.37, 0.42, 0.37, 0.42],
            }
          ]
        },
        options: {
          deferred: {
            yOffset: 300,
            delay: 250
          },
          animation: {
            duration: 3000,
          },
          tooltips: false,
          layout: {
            padding: {
              left: 0,
              right: 50,
              top: 0,
              bottom: 0
            }
          },
          legend: { display: false },
          title: {
            display: false,
            text: 'title'
          },
          scales: {
            xAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false,
                            min: 0,
                            max: 0.5,
                            stepSize: 0.10,
                            fixedStepSize: 1,
                        }
                    }],
            yAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: true,
                            fontColor: '#002554'
                        },
                        barPercentage: 0.5,
                        categoryPercentage: 1.0
                    }]
            },
          plugins: {
              datalabels: {
                anchor: 'end',
                color: '#002554',
                align: 'end',
                display: function(context) {
                  //console.log("Algo: "+context);
                  //return context.dataset.data[context.dataIndex] > 15;
                },
                font: {
                  weight: 'bold'
                },
                formatter: function(value) {
                            return value;
                        }
              }
            }
        }
    });
    
    var myBarChart = new Chart(document.getElementById("intensidad-2"), {
      type: 'horizontalBar',
      data: {
        labels: ["2019", "2018", "2017", "2016"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [0.27, 0.31, 0.37, 0.28],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 50,
            top: 0,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: false,
                          min: 0,
                          max: 0.5,
                          stepSize: 0.10,
                          fixedStepSize: 1,
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: true,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          return value;
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("intensidad-3"), {
      type: 'bar',
      data: {
        labels: ["2019", "2018", "2017", "2016"],
        datasets: [
          {
            label: "",
            backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [16.50, 15.58, 17.39, 15.65]
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          min: 0,
                          max: 18,
                          stepSize: .1,
                          fixedStepSize: .1,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          return value;
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("colaboradores"), {
      type: 'horizontalBar',
      data: {
        labels: ["2019", "2018", "2017", "2016"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [3213, 2901, 2851, 2241],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 0,
            right: 50,
            top: 0,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: false,
                          min: 0,
                          max: 4000,
                          stepSize: 100,
                          fixedStepSize: 1,
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: true,
                          fontColor: '#002554'
                      },
                      barPercentage: 1,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("mujeres"), {
      type: 'horizontalBar',
      data: {
        labels: ["2019", "2018", "2017", "2016"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [22.4, 23.5, 22.2, 25.8],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 0,
            right: 50,
            top: 0,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: false,
                          min: 0,
                          max: 30,
                          stepSize: 1,
                          fixedStepSize: 1,
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: true,
                          fontColor: '#002554'
                      },
                      barPercentage: 1,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          return value + "%";
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("rotacion"), {
      type: 'bar',
      data: {
        labels: ["2019", "2018", "2017", "2016"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [9.9, 17.5, 23.0, 21.0],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          min: 0,
                          max: 25,
                          stepSize: 1,
                          fixedStepSize: 1,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          return value + '%';
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("purificada"), {
      type: 'bar',
      data: {
        labels: ["2017", "2018", "2019"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [47921710, 77500307, 130901747],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          min: 0,
                          max: 140000000,
                          stepSize: 1000000,
                          fixedStepSize: 1,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          value = value.toString();
                          value = value.split(/(?=(?:...)*$)/);
                          value = value.join(',');
                          return value;
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("tratada"), { 
      type: 'bar',
      data: {
        labels: ["2017", "2018", "2019"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [9296640000, 15368901120, 22254825600],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          min: 0,
                          max: 140000000,
                          stepSize: 1000000,
                          fixedStepSize: 1,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          value = value.toString();
                          value = value.split(/(?=(?:...)*$)/);
                          value = value.join(',');
                          return value;
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("consumo"), { 
      type: 'bar',
      data: {
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [518.71, 540.92, 494.02, 456.45],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          min: 0,
                          max: 500,
                          stepSize: 100,
                          fixedStepSize: 1,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          return value;
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("tasa"), { 
      type: 'bar',
      data: {
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderColor: ['#00afd7', '#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [6, 3, 3, 2],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          min: 0,
                          max: 10,
                          stepSize: 1,
                          fixedStepSize: 1,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                          return value;
                      }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("beneficiados"), { 
      type: 'bar',
      data: {
        labels: ["2017", "2018", "2019"],
        datasets: [
          {
            label: "Population",
            backgroundColor: ['#009cde', '#407ec9', '#236192'],
            borderColor: ['#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [652959, 1109778, 1147962],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          min: 0,
                          max: 10,
                          stepSize: 1500000,
                          fixedStepSize: 1000,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                value = value.toString();
                value = value.split(/(?=(?:...)*$)/);
                value = value.join(',');
                return value;
              }
            }
          }
      }
    });
    
    var myBarChart = new Chart(document.getElementById("graph-2020-08-14"), { 
      type: 'bar',
      data: {
        labels: ["2017", "2018", "2019"],
        datasets: [
          {
            label: "",
            backgroundColor: ['#009cde', '#407ec9', '#236192'],
            borderColor: ['#009cde', '#407ec9', '#236192'],
            borderWidth: 1,
            data: [.18, .19, .23],
          }
        ]
      },
      options: {
        deferred: {
          yOffset: 300,
          delay: 250
        },
        animation: {
          duration: 3000,
        },
        tooltips: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
          }
        },
        legend: { display: false },
        title: {
          display: false,
          text: 'title'
        },
        scales: {
          xAxes: [{
                      gridLines: {
                          display: false
                      },
                      ticks: {
                          display: true,
                          fontColor: '#002554'
                      }
                  }],
          yAxes: [{
                      gridLines: {
                          display: false,
                          drawBorder: false
                      },
                      ticks: {
                          display: false,
                          min: 0,
                          max: .5,
                          stepSize: .1,
                          fixedStepSize: .1,
                          fontColor: '#002554'
                      },
                      barPercentage: 0.5,
                      categoryPercentage: 1.0
                  }]
          },
        plugins: {
            datalabels: {
              anchor: 'end',
              color: '#002554',
              align: 'end',
              display: function(context) {
                //console.log("Algo: "+context);
                //return context.dataset.data[context.dataIndex] > 15;
              },
              font: {
                weight: 'bold'
              },
              formatter: function(value) {
                return value;
              }
            }
          }
      }
    });
}