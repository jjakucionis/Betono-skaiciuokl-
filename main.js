// skaiciuokles js'as
  
    //variable which checks that menu is correctly
    var u = 0;
    //variable for switching additional input fields
    var i = 1;
    //variable for switching additional input fields
    var i2= 1;
    //variable for switching additional input fields
    var i3= 1;

    var z = 0; // papildomos objekto skilties kintamasis


    var addId = 2; // papildomom sekcijom numeruoja id, kad nesidubliuotu

    //Code that controls changing of the content between pages
$(document).ready(function(){ 

  
  if ($("body#bdy").hasClass("betono-skaiciuokle")) {
    document.getElementById("diam").value="0";
    document.getElementById("auk").value="0";
    document.getElementById("kolKiekis").value="1";
    document.getElementById("atsKoef").value="20";
  }

  $("#Stac").click(function(){ // staciakampio tabo onclickas
    $("div.cilMatCont").hide();
    $("div.kubMatCont").show();
    $("div.triMatCont").hide();
    $("#image").show();
    $("#image2").hide();
    $("#image3").hide();
    u=1;
    $('div.atsKoefInfo').hide();
    DeleteAll(); 
    resetBendra();
  
    document.getElementById("SkaicioutiBtn").innerHTML="0.0m<sup>3</sup>";

    document.getElementById("diam").value="0";
    document.getElementById("kolKiekis").value="1";
    document.getElementById("ilg").value="0";
    document.getElementById("plot").value="0";
    document.getElementById("auk2").value="0";
    document.getElementById("auk").value="0";
    document.getElementById("krast1").value="0";
    document.getElementById("krast2").value="0";
    document.getElementById("krast3").value="0";
    document.getElementById("auk3").value="0";
    document.getElementById("atsKoef").value="5";
});
  
  
    
  $("#Cil").click(function(){ // cilindro tabo onclickas 
    $("div.cilMatCont").show();
    $("div.kubMatCont").hide();
    $("div.triMatCont").hide();
    $("#image").hide();
    $("#image2").show();
    $("#image3").hide();
    u=0;
    $('div.atsKoefInfo').show();
    DeleteAll();
    resetBendra();              
  
    document.getElementById("SkaicioutiBtn").innerHTML="0.0m<sup>3</sup>";

    document.getElementById("diam").value="0";
    document.getElementById("kolKiekis").value="1";
    document.getElementById("ilg").value="0";
    document.getElementById("plot").value="0";
    document.getElementById("auk2").value="0";
    document.getElementById("auk").value="0";
    document.getElementById("krast1").value="0";
    document.getElementById("krast2").value="0";
    document.getElementById("krast3").value="0";
    document.getElementById("auk3").value="0";
    document.getElementById("atsKoef").value="20";
  });
  
  $("#Tri").click(function(){  // trikampio tab'o onClick'as
    $("div.cilMatCont").hide();
    $("div.kubMatCont").hide(); 
    $("div.triMatCont").show();
    $("#image").hide();
    $("#image2").hide();
    $("#image3").show();
    u=2;
    $('div.atsKoefInfo').hide();
    resetBendra();
    
    DeleteAll();             
  
    document.getElementById("SkaicioutiBtn").innerHTML="0.0m<sup>3</sup>";
    document.getElementById("diam").value="0";
    document.getElementById("kolKiekis").value="1";
    document.getElementById("ilg").value="0";
    document.getElementById("plot").value="0";
    document.getElementById("auk2").value="0";
    document.getElementById("auk").value="0";
    document.getElementById("krast1").value="0";
    document.getElementById("krast2").value="0";
    document.getElementById("krast3").value="0";
    document.getElementById("auk3").value="0";
    document.getElementById("atsKoef").value="5";
  });
  
});


function changeValue() {
  
  // main variables
  var total = 0; // bendra suma turio
  var ats = true; // kintamasis trikampio krastiniu tikrinimui
  
  var x = document.getElementById("diam").value,
      y = document.getElementById("auk").value,
      d = document.getElementById("kolKiekis").value,
      x2 = document.getElementById("ilg").value,
      y2 = document.getElementById("plot").value,
      z2 = document.getElementById("auk2").value,
      triK1 = document.getElementById("krast1").value,
      triK2 = document.getElementById("krast2").value,
      triK3 = document.getElementById("krast3").value,
      triAuk = document.getElementById("auk3").value,
      matas = document.getElementById("ven").value,
      kofas = document.getElementById("atsKoef").value;
  
  
  switch(u) {
      
      case 0: // cilinder
      
      		  var cilTotal = 0;
              var paskaiciuotas = cilVolume(x,y,d,matas);
              document.getElementById("SkaicioutiBtn").innerHTML=paskaiciuotas +"<span class='turioPrielipa'>m<sup>3</sup></span>";
              cilTotal += (Number(paskaiciuotas) + (Number(paskaiciuotas) / 100 * Number(kofas)));
           
      
          if (z === 1) { // calculator for extra cilinder  
            
            for(var j = 2; j < addId; j++) {
               var x = $("#skaiciuoklesTable").find('\"#diam' + j + '\"').val(),
                  y = $("#skaiciuoklesTable").find('\"#aukAdd' + j + '\"').val(),
                  d = $("#skaiciuoklesTable").find('\"#kolKiekis' + j + '\"').val(),
                  matas = $("#skaiciuoklesTable").find('\"#ven' + j + '\"').val();
                  var paskaiciuotas = cilVolume(x,y,d,matas);
                  $("#skaiciuoklesTable").find('\"#SkaicioutiBtnAdd' + j + '\"').html(paskaiciuotas +"<span class='turioPrielipa'>m<sup>3</sup></span>"); 
                  cilTotal += (Number(paskaiciuotas) + (Number(paskaiciuotas) / 100 * Number(kofas)));
            }           
    	  }
      
      total += Number(cilTotal.toFixed(1));
      
      break;
      
      
      
      case 1: // cuboid 
      
      
          var cubTotal = 0;
          var paskaiciuotas = cubVolume(x2, y2, z2, matas);
          document.getElementById("SkaicioutiBtn").innerHTML=paskaiciuotas +"<span class='turioPrielipa'>m<sup>3</sup></span>";
          cubTotal += (Number(paskaiciuotas) + (Number(paskaiciuotas) / 100 * Number(kofas)));
         
  
          if (z === 1) { // calculator for extra cuboids  
            
            for(var j = 2; j < addId; j++) {
               var x = $("#skaiciuoklesTable").find('\"#ilg' + j + '\"').val(),
                  y = $("#skaiciuoklesTable").find('\"#plot' + j + '\"').val(),
                  d = $("#skaiciuoklesTable").find('\"#auk2Add' + j + '\"').val(),
                  matas = $("#skaiciuoklesTable").find('\"#ven' + j + '\"').val();
                  var paskaiciuotas = cubVolume(x,y,d,matas);
                  $("#skaiciuoklesTable").find('\"#SkaicioutiBtnAdd' + j + '\"').html(paskaiciuotas +"<span class='turioPrielipa'>m<sup>3</sup></span>"); 
                  cubTotal += (Number(paskaiciuotas) + (Number(paskaiciuotas) / 100 * Number(kofas)));
            }           
    	  }
      
      total += Number(cubTotal.toFixed(1));
      
      break;
      
      
      
      case 2: // prism
      
      
      var triTotal = 0;
      trikampioTikr(Number(triK1),Number(triK2),Number(triK3)); // kvieciam fukcija patikrinti krastinems
      
        
      if (ats === true) {
  		var paskaiciuotas = triVolume(triK1, triK2, triK3, triAuk, matas);
        document.getElementById("SkaicioutiBtn").innerHTML=paskaiciuotas +"<span class='turioPrielipa'>m<sup>3</sup></span>";
        triTotal += (Number(paskaiciuotas) + (Number(paskaiciuotas) / 100 * Number(kofas)));
		
      } else {
        alert("Tikslinkite trikampio kraštinių duomenis. Trumpiausių kraštinių suma turi būti didesnė už ilgiausią kraštinę - (a + b) > c");
      }
      
        if (z === 1) { // calculator for extra prism 
          
          
          for(var j = 2; j < addId; j++) {
               var x = $("#skaiciuoklesTable").find('\"#krast1' + j + '\"').val(),
                  y = $("#skaiciuoklesTable").find('\"#krast2' + j + '\"').val(),
                  d = $("#skaiciuoklesTable").find('\"#krast3' + j + '\"').val(),
                  e = $("#skaiciuoklesTable").find('\"#auk3Add' + j + '\"').val(),
                  matas = $("#skaiciuoklesTable").find('\"#ven' + j + '\"').val();
                  trikampioTikr(Number(x),Number(y),Number(d));
                  if (ats === true) {
                    var paskaiciuotas = triVolume(x,y,d,e,matas);
                    $("#skaiciuoklesTable").find('\"#SkaicioutiBtnAdd' + j + '\"').html(paskaiciuotas +"<span class='turioPrielipa'>m<sup>3</sup></span>"); 
                    triTotal += (Number(paskaiciuotas) + (Number(paskaiciuotas) / 100 * Number(kofas)));
                  } else {
                    alert("Tikslinkite trikampio kraštinių duomenis. Trumpiausių kraštinių suma turi būti didesnė už ilgiausią kraštinę - (a + b) > c");
                  }
            }             
        }
      
       total += Number(triTotal.toFixed(1));
  } 
  
  document.getElementById("SkaicioutiBendra").innerHTML= total.toFixed(1) +"<span class='turioPrielipa'>m<sup>3</sup></span>";  
  
  function trikampioTikr(kA,kB,kC) { // tikrina ar realus suvesti krastiniu matmenys (a+b)>c
    var array = [kA, kB, kC]; // pasidarom areju
    array.sort(function(a, b){return a-b});    // rikiuojam nuo trumpiausio
    if ((array[0] + array[1]) > array[2]) { // ziurim ar trumpiausiu krastiniu suma didesne uz ilgiausios
    	ats = true;
    } else {
    	ats = false;
    }    
  };
  
  
} // funkcijos change value pabaiga


// staciakampio turio formule + apvalinimas
function cilVolume(x,y,kiekis,mat) {
  if (mat === "Metras") {
     var cilTuris = ((Number(x)/2)*(Number(x)/2)*3.14* Number(y)) * Number(kiekis);
  } else {
     var cilTuris = (((Number(x)/2)*(Number(x)/2)*3.14* Number(y)) * Number(kiekis)) / 1000000 ;
  }
  var cilTurisApvalintas = cilTuris.toFixed(1);
  return cilTurisApvalintas;
}

// staciakampio turio formule + apvalinimas
function cubVolume(x,y,e,mat) {
  if (mat === "Metras") {
    var kuboTuris = Number(x) * Number(y) * Number(e)
  } else {
    var kuboTuris = (Number(x) * Number(y) * Number(e)) / 1000000
  }
  var kuboTurisApvalintas = kuboTuris.toFixed(1);
  return kuboTurisApvalintas;
}

// trikampio turio formule + apvalinimas
function triVolume(x,y,e,f,mat) {
  var perimetras = (Number(x) + Number(y) + Number(e)) / 2; // skaiciuoja perimetra papildomo
  var plotas =  Math.sqrt(perimetras*((perimetras-x)*(perimetras-y)*(perimetras-e))); // skaiciuoja plota papildomo
  if (mat === "Metras") {
    var turis = plotas * Number(f);
  } else {
    var turis = (plotas * Number(f)) / 1000000;
  }
  var triTurisApvalintas = turis.toFixed(1); // apvalina iki dvieju skaiciu po kablelio
  return triTurisApvalintas;
}

//Delete all data
function DeleteAll() {
	document.getElementById("SkaicioutiBtn").innerHTML="0.0m<sup>3</sup>";
	document.getElementById("diam").value="0";
	document.getElementById("ilg").value="0";
	document.getElementById("plot").value="0";
	document.getElementById("auk2").value="0";
	document.getElementById("auk").value="0";
    document.getElementById("krast1").value="0",
    document.getElementById("krast2").value="0",
    document.getElementById("krast3").value="0",
    document.getElementById("auk3").value="0";
    document.getElementById("kolKiekis").value="1";
	//delete additional input fields
	$('div.extraCont').remove();
	$('div.extraTotal').remove();
	i=1;
	i2=1;
    i3=1;
    z = 0;
    addId = 2;
}

function resetBendra() {
	document.getElementById("SkaicioutiBendra").innerHTML="0.0m<sup>3</sup>";
    total = 0;
    addId = 2;
}

// Creation of the additional input fields for each form
$(document).ready(function(){
    $("#addMore").click(function(){        
        z = 1;
//Check if the correct menu is open
		switch (u){

          case 0: // cilindro prideti papildomas, max 4
              if(i<=4){
       			i=i+1;
                $("#cont").append('<div class="extraCont cilExtraCont matoSelektoriusCont"><label>Vienetas:</label><div class="contWrapper"><select id="ven' + addId + '\"> <option  value="Metras">Metrai</option> <option  value="Centimetras">Centimetrai</option> </select></div></div>');
      			$("#cont").append('<div class="extraCont cilExtraCont inputWrap"><label>Diametras:</label><input class="matmensIvedimas" type="number" id="diam' + addId + '\" name="Diametras" value="0" /> </div>');
       			$("#cont").append('<div class="extraCont cilExtraCont inputWrap"><label>Aukstis:</label><input class="matmensIvedimas" type="number" id="aukAdd' + addId + '\" name="Diametras" value="0"/></div>');
                $("#cont").append('<div class="extraCont cilExtraCont inputWrap"><label>Kolonų/polių kiekis:</label><input class="matmensIvedimas" class="matmensIvedimas" type="number" id="kolKiekis' + addId + '\" name="Kolonos" value="1"/></div><div class="cilExtraTotal extraTotal">Betono tūris: <span class="SkaicioutiBtnCss" id="SkaicioutiBtnAdd' + addId + '\">0.0m<sup>3</sup></span></div>');
                addId += 1;
        	}
          break;
          case 1: // staciakampio prideti papildomas, max 4
      		  if(i2<=4){
            	i2=i2+1;
       			$("#cont").append('<div class="extraCont stacExtraCont matoSelektoriusCont"><label>Vienetas:</label><div class="contWrapper"><select id="ven' + addId + '\"> <option  value="Metras">Metrai</option> <option  value="Centimetras">Centimetrai</option> </select></div></div>');
      			$("#cont").append('<div class="extraCont stacExtraCont inputWrap"><label>Ilgis:</label><input class="matmensIvedimas" type="number" id="ilg' + addId + '\" name="Ilgis" value="0"> </div>');
      			$("#cont").append('<div class="extraCont stacExtraCont inputWrap"><label>Plotis:</label><input class="matmensIvedimas" type="number" id="plot' + addId + '\" name="Plotis" value="0"></div>');
       			$("#cont").append('<div class="extraCont stacExtraCont inputWrap"><label>Aukštis:</label><input class="matmensIvedimas" type="number" id="auk2Add' + addId + '\" name="Aukštis" value="0"/></div><div class="stacExtraTotal extraTotal">Betono tūris: <span class="SkaicioutiBtnCss" id="SkaicioutiBtnAdd' + addId + '\">0.0m<sup>3</sup></span></div>');
                addId += 1;
            }
          break;
          case 2: // trikampio prideti papildomas, max 4
             if(i3<=4){
            	i3=i3+1;
       			$("#cont").append('<div class="extraCont triExtraCont matoSelektoriusCont"><label>Vienetas:</label><div class="contWrapper"><select id="ven' + addId + '\"> <option  value="Metras">Metrai</option> <option  value="Centimetras">Centimetrai</option> </select></div></div>');
                $("#cont").append('<div class="extraCont triExtraCont inputWrap"><label>Kraštinė 1:</label><input class="matmensIvedimas" type="number" id="krast1' + addId + '\" name="Ilgis" value="0"> </div>');
                $("#cont").append('<div class="extraCont triExtraCont inputWrap"><label>Kraštinė 2:</label><input class="matmensIvedimas" type="number" id="krast2' + addId + '\" name="Ilgis" value="0"> </div>');
                $("#cont").append('<div class="extraCont triExtraCont inputWrap"><label>Kraštinė 3:</label><input class="matmensIvedimas" type="number" id="krast3' + addId + '\" name="Ilgis" value="0"> </div>');
       			$("#cont").append('<div class="extraCont triExtraCont inputWrap"><label>Aukštis:</label><input class="matmensIvedimas" type="number" id="auk3Add' + addId + '\" name="Aukštis" value="0"/></div><div class="triExtraTotal extraTotal">Betono tūris: <span class="SkaicioutiBtnCss" id="SkaicioutiBtnAdd' + addId + '\">0.0m<sup>3</sup></span></div>');
               addId += 1;
            }
          break;
        }
    }); 
});



// skaiciuokles tab'ų active spalvai

$("#skaiciuoklesTable > div > nav > ul > li > a").click(function(){
    $("#skaiciuoklesTable > div > nav > ul > li > a").removeClass("tabActive");
    $(this).addClass("tabActive");
  });


