
let data, chart, atributos;//global
google.charts.load('current', {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {

  data = new google.visualization.DataTable();

  let registros = [["erwing", 22],["daniel", 20],["jose" , 30]];

  atributos = {
  	"title":"edades",
    "width" : 700,
      "height" :500   
  };

  data.addColumn('string', 'nombre');
  data.addColumn('number', 'edad');


      cambio('A');
  AGGFilas(registros);

    }

     function AGGFilas(records){

  data.addRows(records);
  dibujar();

}

function dibujar(){

	  chart.draw(data, atributos);
	  setTimeout(reiniciar, 1000);

}

function cambio(tipo){

	tipo == 'A' ? chart = new google.visualization.AreaChart(document.getElementById('chart_div')) : chart = new google.visualization.PieChart(document.getElementById('chart_div')); 	

	dibujar();

}

function verificarURL(){

 	url = document.getElementById('url');
 	/.+\.[a-zA-Z]{2,}/.test(url.value) ? cargaArchivo(url.value) : url.style.backgroundColor = "#fcc";
 	
}


function cargaArchivo(url){

  fetch(url)
  .then(resProcess => resProcess.json())
  .then(CARGACompletada);

}

function CARGACompletada(response){

     	for(let i = 0; i < response.length; i++){

    let record = [[response[i].nombre, response[i].edad]];

     		AGGFilas(record);

     	}

}

