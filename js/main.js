//var mydata = JSON.parse(pokemon);
//console.log(mydata);

pokedex.init();
crearPokedex = function (lp){
  var h = '';
  
  
  for(var i = 0; i < lp.length; i++){ 
      h += '<div class="caja col-12 col-s-4 col-l-3 '+ recorrerP(lp[i].type)+'">';
      
      h+= '<div class="datos" >';
      h += '<div class="img"><img src="img/1.png"  width=120px" height="120px" ></div>';
        h+= '<table class="dt">';
        h+= '<tr >';
          h+= '<th colspan="2" class="name">'
          + lp[i].name.english + '</th>';
        h+= '</tr>';
        h+= '<tr>';
         // h+= '<td > HP </td> <td>' + lp[i].base.HP + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          //h+= '<td > Attack </td> <td>' + lp[i].base.Attack + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          //h+= '<td> Defense </td> <td>'+ lp[i].base.Defense + '</td>';
        h+= '</tr>'; 
        h+= '<tr>';
          //h+= '<td> Sp.Attack </td> <td>'+ lp[i].base['Sp. Attack'] + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          //h+= '<td> Sp. Defense </td> <td>'+ lp[i].base['Sp. Defense'] + '</td>';
        h+= '</tr>';
        h+= '<tr>';
          //h+= '<td> Speed </td> <td>'+ lp[i].base.Speed + '</td>';
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

//document.getElementById('container').innerHTML = crearPokedex(mydata);

//jQuery


$('#grass_filter').change(function(event){
  if(this.checked){
    $('.Grass').fadeIn('slow');
    
  }
  else{
    $('.Grass').fadeOut('slow');
  }
});

$('#poison_filter').change(function(event){
  if(this.checked){
    $('.Poison').fadeIn('slow');
    
  }
  else{
    $('.Poison').fadeOut('slow');
  }
});

$('#fire_filter').change(function(event){
  if(this.checked){
    $('.Fire').fadeIn('slow');
    
  }
  else{
    $('.Fire').fadeOut('slow');
  }
});

$('#flying_filter').change(function(event){
  if(this.checked){
    $('.Flying').fadeIn('slow');
    
  }
  else{
    $('.Flying').fadeOut('slow');
  }
});

$('#water_filter').change(function(event){
  if(this.checked){
    $('.Water').fadeIn('slow');
    
  }
  else{
    $('.Water').fadeOut('slow');
  }
});

$('#bug_filter').change(function(event){
  if(this.checked){
    $('.Bug').fadeIn('slow');
    
  }
  else{
    $('.Bug').fadeOut('slow');
  }
});

$('#normal_filter').change(function(event){
  if(this.checked){
    $('.Normal').fadeIn('slow');
    
  }
  else{
    $('.Normal').fadeOut('slow');
  }
});

$('#electric_filter').change(function(event){
  if(this.checked){
    $('.Electric').fadeIn('slow');
    
  }
  else{
    $('.Electric').fadeOut('slow');
  }
});

$('#ground_filter').change(function(event){
  if(this.checked){
    $('.Ground').fadeIn('slow');
    
  }
  else{
    $('.Ground').fadeOut('slow');
  }
});
$('#fairy_filter').change(function(event){
  if(this.checked){
    $('.Fairy').fadeIn('slow');
    
  }
  else{
    $('.Fairy').fadeOut('slow');
  }
});
$('#fighting_filter').change(function(event){
  if(this.checked){
    $('.Fighting').fadeIn('slow');
    
  }
  else{
    $('.Fighting').fadeOut('slow');
  }
});
$('#psychic_filter').change(function(event){
  if(this.checked){
    $('.Psychic').fadeIn('slow');
    
  }
  else{
    $('.Psychic').fadeOut('slow');
  }
});
$('#rock_filter').change(function(event){
  if(this.checked){
    $('.Rock').fadeIn('slow');
    
  }
  else{
    $('.Rock').fadeOut('slow');
  }
});
$('#psychic_filter').change(function(event){
  if(this.checked){
    $('.Psychic').fadeIn('slow');
    
  }
  else{
    $('.Psychic').fadeOut('slow');
  }
});

$('#steel_filter').change(function(event){
  if(this.checked){
    $('.Steel').fadeIn('slow');
    
  }
  else{
    $('.Steel').fadeOut('slow');
  }
});

$('#ice_filter').change(function(event){
  if(this.checked){
    $('.Ice').fadeIn('slow');
    
  }
  else{
    $('.Ice').fadeOut('slow');
  }
});
$('#ghost_filter').change(function(event){
  if(this.checked){
    $('.Ghost').fadeIn('slow');
    
  }
  else{
    $('.Ghost').fadeOut('slow');
  }
});
$('#dark_filter').change(function(event){
  if(this.checked){
    $('.Dark').fadeIn('slow');
    
  }
  else{
    $('.Dark').fadeOut('slow');
  }
});

$('#dragon_filter').change(function(event){
  if(this.checked){
    $('.Dragon').fadeIn('slow');
    
  }
  else{
    $('.Dragon').fadeOut('slow');
  }
});

$('#all_filter').change(function(event){
  if(this.checked){
    $('.all').prop('checked',true).trigger('change');
    
  }
  else{
    $('.all').prop('checked',false).trigger('change');
  }
});



