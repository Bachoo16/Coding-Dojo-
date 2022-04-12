function nuestrainformacioncontacto() {
    var auntContactInfo = ["paula", "Smith", "Calle Principal 1234", "st. Louis", "MO", 1234]
    console.log(auntContactInfo)
  }
  //       variable/Datos
  //auntContactInfo/["paula", "Smith", "Calle Principal 1234", "st. Louis", "MO", 12345]//
  //["Paula", "Smith", "Calle Principal 1234", "st. Louis", "MO", 12345]//

  function muestralistadecompras() {
      var produce = ["manzanas", "Naranjas"];
      var frozen = ["brocoli", "helado"];
      frozen.push("croqueta de papa");
      console.log(frozen);
  }
  //     Variable/Datos
  //      produce/["manzanas", "naranjas"]
  //        frozen/["brocoli", "helado"] -> ["brocoli", "helado", "croqueta de papa"]// 

  //["brocoli", "helado", "croqueta de papa"]

  var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
  movieLibrary.push("Zoro");
  movieLibrary[1] = "Beetlejuice";
  console.log(movieLibrary); 
  //    variable/Datos
  //movieLibrary/["Bambi", "E.T.", "Toy Story",] -> ["Bambi", "E.T.", "Toy Story", "Zoro"] -> ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]//
  //["Bambi", "Beetlejuice", "Toy Story", "Zoro"]