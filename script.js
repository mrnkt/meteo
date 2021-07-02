// function clickpourmeteo() {
//   var url = "https://api.openweathermap.org/data/2.5/weather?q=paris&appid=44cceb207739b0a0c77ee4bc3caeafd8"
// }

  // fetch va permettre de s'assurer que la fonction va recuperer les donnees avant de les afficher

// window.fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=44cceb207739b0a0c77ee4bc3caeafd8")
//   .then(response => response.json())
//   // .then(response => console.log(JSON.stringify(response.name)))

//   .then(response => alert(JSON.stringify(response.name)))

// INJECTE HTML INJECTE HTML INJECTE HTML INJECTE HTML INJECTE HTML
// INJECTE HTML INJECTE HTML INJECTE HTML INJECTE HTML INJECTE HTML
// INJECTE HTML INJECTE HTML INJECTE HTML INJECTE HTML INJECTE HTML

// window.fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=44cceb207739b0a0c77ee4bc3caeafd8")
//   .then(totores => totores.json())
//   // .then(response => console.log(JSON.stringify(response.name)))

//   .then(totores2 => {
//     var infosmeteo = JSON.stringify(totores2.name)
//     // document.getElementById("desc").innerHTML = infosmeteo;
//     document.querySelector("#desc").innerHTML = infosmeteo;
//   });

// VERSION JOHN VERSION JOHN VERSION JOHN VERSION JOHN VERSION JOHN
// VERSION JOHN VERSION JOHN VERSION JOHN VERSION JOHN VERSION JOHN
// VERSION JOHN VERSION JOHN VERSION JOHN VERSION JOHN VERSION JOHN

  // let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&appid=44cceb207739b0a0c77ee4bc3caeafd8");

  // if (response.ok) { // if HTTP-status is 200-299
  //   // get the response body (the method explained below)
  //   let json = await response.json();
  // console.log(json);
  // } else {
  //   alert("HTTP-Error: " + response.status);
  // }

// JUJU & MRNKT VERSION JUJU & MRNKT VERSION JUJU & MRNKT VERSION JUJU & MRNKT VERSION
// JUJU & MRNKT VERSION JUJU & MRNKT VERSION JUJU & MRNKT VERSION JUJU & MRNKT VERSION
// JUJU & MRNKT VERSION JUJU & MRNKT VERSION JUJU & MRNKT VERSION JUJU & MRNKT VERSION

  const tapez = document.querySelector('#input_text');
  const ville = document.querySelector('#ville');
  const temperature = document.querySelector('#temp');
  const ciel = document.querySelector('#desc');
  const button= document.querySelector('#submit');
  const background = document.querySelector("body");

  button.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+tapez.value+'&units=metric&appid=44cceb207739b0a0c77ee4bc3caeafd8')
    // ++ incremente
    .then(response => response.json())
    .then(data => {
      const tempValue = (Math.round(data['main']['temp']));
      const nameValue = data['name'];
      const descValue = data['weather'][0]['description'];

      let toto = tempValue;
      if (toto < 10) {
        background.classList.add("backgroundfroid");
        background.classList.remove("backgroundchaud");
      } else if (toto > 20) {
        background.classList.add("backgroundchaud");
        background.classList.remove("backgroundfroid");
      } else {
        alert("tempéré");
      }

      ville.innerHTML = nameValue;
      temperature.innerHTML = "Temp - "+tempValue;
      ciel.innerHTML = "How's the sky? "+descValue;

    })

    .catch(err => alert("Ville non reconnue!"));

  })

// AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL
// AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL
// AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL AVEC ABDIEL

  var monGraph;

  button.addEventListener('click', function() {

    if(monGraph) monGraph.destroy();

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+tapez.value+'&units=metric&appid=44cceb207739b0a0c77ee4bc3caeafd8')
    .then(response => response.json())
    .then(data => {

      const temptableau = [];
      const datetableau = [];

      for (i = 0; i < data['list'].length; i ++) {
        temptableau.push(data['list'][i]['main']['temp']);
        datetableau.push(data['list'][i].dt_txt);
      }

      monGraph = new Chart("myChart", {
        type: "line",
        data: {
          labels: datetableau,
          datasets: [{
            label: 'Prévisions sur 5 jours',
            data: temptableau,
            fill: true,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            // borderDash: [5],
          }]
        },
        options: {
          plugins: {  // 'legend' now within object 'plugins {}'
            legend: {
              labels: {
                color: "white",  // not 'fontColor:' anymore
                // fontSize: 18  // not 'fontSize:' anymore
                // font: {
                //   size: 18 // 'size' now within object 'font {}'
                // }
              }
            }
          },
          scales: {
            y: {  // not 'yAxes: [{' anymore (not an array anymore)
              ticks: {
                color: "white", // not 'fontColor:' anymore
                // fontSize: 18,
                font: {
                  size: 15, // 'size' now within object 'font {}'
                },
                stepSize: 1,
                beginAtZero: true
              }
            },
            x: {  // not 'xAxes: [{' anymore (not an array anymore)
              ticks: {
                color: "white",  // not 'fontColor:' anymore
                //fontSize: 14,
                font: {
                  size: 13 // 'size' now within object 'font {}'
                },
                stepSize: 1,
                beginAtZero: true
              }
            }
          }
        }
      });

    })

    .catch(err => alert("Ville non reconnue!"));

  })

// 5 CONST MANUELLES 5 CONST MANUELLES 5 CONST MANUELLES 5 CONST MANUELLES
// 5 CONST MANUELLES 5 CONST MANUELLES 5 CONST MANUELLES 5 CONST MANUELLES
// 5 CONST MANUELLES 5 CONST MANUELLES 5 CONST MANUELLES 5 CONST MANUELLES

  // var monGraph;

  // button.addEventListener('click', function() {

  //   if(monGraph) monGraph.destroy();

  //   fetch('https://api.openweathermap.org/data/2.5/forecast?q='+tapez.value+'&units=metric&appid=44cceb207739b0a0c77ee4bc3caeafd8')
  //   .then(response => response.json())
  //   .then(data => {

  //     const tempValue = (Math.round(data['list'][0]['main']['temp']));
  //     const tempValue2 = (Math.round(data['list'][1]['main']['temp']));
  //     const tempValue3 = (Math.round(data['list'][2]['main']['temp']));
  //     const tempValue4 = (Math.round(data['list'][3]['main']['temp']));
  //     const tempValue5 = (Math.round(data['list'][4]['main']['temp']));

  //     var xyValues = [
  //       {x:1, y:tempValue},
  //       {x:2, y:tempValue2},
  //       {x:3, y:tempValue3},
  //       {x:4, y:tempValue4},
  //       {x:5, y:tempValue5}
  //     ];

  //     new Chart("myChart", {
  //       type: "scatter",
  //       data: {
  //         datasets: [{
  //           pointRadius: 4,
  //           pointBackgroundColor: "rgb(0,0,255)",
  //           data: xyValues
  //         }]
  //       },
  //       options: {
  //         legend: {display: false},
  //         scales: {
  //           xAxes: [{ticks: {min: 1, max:6}}],
  //           yAxes: [{ticks: {min: -20, max:60}}],
  //         }
  //       }
  //     });
  //   })

  //   .catch(err => alert("Ville non reconnue!"));

  // })