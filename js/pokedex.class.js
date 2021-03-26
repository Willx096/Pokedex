var pokedex ={}
pokedex.data = null;
pokedex.loadData = function(){

  $.ajax({

    url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
    method: 'get',
    dataType: 'json',
    })
    .done(function(pk){
      console.log("success");
      pokedex.data = pk;
      document.getElementById('container').innerHTML = crearPokedex(pokedex.data.pokemon);
    })

    .fail(function(pk){
    console.log("error");

    })
    .always(function(pk){
    console.log("complete");
    });

}
pokedex.init = function(){
  pokedex.loadData();
}



//var mydata = JSON.parse(pokemon);
//console.log(mydata);


crearPokedex = function (lp){
  var h = '';
  
  
  for(var i = 0; i < lp.length; i++){ 
      h += '<div class="caja col-12 col-s-4 col-l-3 '+ recorrerP(lp[i].type)+'">';
      
      h+= '<div class="datos" >';
      h += '<div class="img"><img src="1.png"  width=120px" height="120px" ></div>';
        h+= '<table class="dt">';
        h+= '<tr >';
          h+= '<th colspan="2" class="name">'
          + lp[i].name.english + '</th>';
        h+= '</tr>';
        h+= '<tr>';
          h+= '<td > HP </td> <td>' + lp[i].base.HP + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          h+= '<td > Attack </td> <td>' + lp[i].base.Attack + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          h+= '<td> Defense </td> <td>'+ lp[i].base.Defense + '</td>';
        h+= '</tr>'; 
        h+= '<tr>';
          h+= '<td> Sp.Attack </td> <td>'+ lp[i].base['Sp. Attack'] + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          h+= '<td> Sp. Defense </td> <td>'+ lp[i].base['Sp. Defense'] + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          h+= '<td> Speed </td> <td>'+ lp[i].base.Speed + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          h+= '<th colspan="2" class="type"> '+ lp[i].type + '</th>';
        h+= '</tr>';
        
        h+= '</table>';
        

      h+= '</div>';


      h+= '</div>';

  
  }
  


  return h;
}


recorrerP = function (objetop){
      var tipo = '';

      for (var p =0; p < objetop.length; p++){
        tipo+= objetop[p] + ' ';
      }
      return tipo; 
}

