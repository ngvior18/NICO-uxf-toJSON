// let uxf = `<diagram program="umletino" version="15.1"><zoom_level>10</zoom_level>
// <element>
//         <id>UMLClass</id>

//         <coordinates>
//                 <x>360</x>
//                 <y>550</y>
//                 <w>210</w>
//                 <h>170</h>
//         </coordinates>

//         <panel_attributes>
//                 Alumno
//                 --
//                 _- id: int_
//                 - nombre: String
//                 - edad: int
//                 --
//                 + Alumno()
//                 + getNombre(): String
//                 + getEdad() : int
//         </panel_attributes>

//         <additional_attributes></additional_attributes>
// </element>

// <element>
//         <id>UMLClass</id>

//         <coordinates>
//                 <x>330</x>
//                 <y>290</y>
//                 <w>280</w>
//                 <h>170</h>
//         </coordinates>

//         <panel_attributes>
//                 Universidad
//                 --
//                 - vacantes: int
//                 - nombre: String
//                 --
//                 + Universidad(int)
//                 + getNombre(): String
//                 + agregarAlumno(Alumno): void
//                 + getPromedioEdades(): double
//                 + getAlumnosPorEdad(int): ArrayList&lt;Alumno&gt;
//                 + getAlumnoPorId(int): Alumno
//         </panel_attributes>

//         <additional_attributes></additional_attributes>
// </element>

// <element>
//         <id>Relation</id>

//         <coordinates>
//                 <x>450</x>
//                 <y>450</y>
//                 <w>80</w>
//                 <h>120</h>
//         </coordinates>

//         <panel_attributes>
//                 lt=&lt;-
//                 - alumnos
//                 m1=*
//         </panel_attributes>

//         <additional_attributes>
//                 10;100;10;10
//         </additional_attributes>

// </element>

// </diagram>`;

let uxf = `<diagram program="umletino" version="15.1"><zoom_level>10</zoom_level><element><id>UMLClass</id><coordinates><x>360</x><y>550</y><w>210</w><h>170</h></coordinates><panel_attributes>Alumno
--
_- id: int_
- nombre: String
- edad: int
--
+ Alumno()
+ getNombre(): String
+ getEdad() : int
</panel_attributes><additional_attributes></additional_attributes></element><element><id>UMLClass</id><coordinates><x>330</x><y>290</y><w>280</w><h>170</h></coordinates><panel_attributes>Universidad
--
- vacantes: int
- nombre: String
--
+ Universidad(int)
+ getNombre(): String
+ agregarAlumno(Alumno): void
+ getPromedioEdades(): double
+ getAlumnosPorEdad(int): ArrayList&lt;Alumno&gt;
+ getAlumnoPorId(int): Alumno
</panel_attributes><additional_attributes></additional_attributes></element><element><id>Relation</id><coordinates><x>450</x><y>450</y><w>80</w><h>120</h></coordinates><panel_attributes>lt=&lt;-
- alumnos
m1=*</panel_attributes><additional_attributes>10;100;10;10</additional_attributes></element></diagram>`;

// let json = xmlToJSON.parseString(uxf);

// console.log("alverto", json);
// ******************************************
const inputUxf = document.getElementById("inputUxf");
// const form = document.getElementById("uxfToJavaForm");
// const btnDescarga = document.getElementById("btnDescarga");
// const msjInicialBtnDescargar = document.getElementById(
//   "msjInicialBtnDescargar"
// );

function processClass(clase) {
  try {
    //class vacia
    let clazz = {};

    //procesar nombre
    let name = `${clase.tipo} ${clase.nombre}`;
    if (clase.superclase) {
      name += ` extends ${clase.superclase.nombre}`;
    }
    //Convertir el Set de interfaces a un array
    let interfacesArray = Array.from(clase.interfaces);
    if (interfacesArray.length > 0) {
      name += ` implements ${interfacesArray.map((i) => i.nombre).join(", ")}`;
    }
    console.log(`name: ${name}`);

    


  } catch (e) {
    console.error(e);
  }

  

}

let xmlAsJson = undefined;
let diagram = undefined;

async function processUploadFile(evt) {
  evt.preventDefault();
  const reader = new FileReader();

  reader.onload = () => {
    try {
      const xmlString = reader.result;
      xmlAsJson = xmlToJSON.parseString(xmlString);
      console.log("Json de xml:", xmlAsJson);

      diagram = xmlToClassDiagram(xmlAsJson);

      // funcion render con EJS
      // generarInterfazClases(diagram)

      console.log("diagramJSON: ", diagram);

      diagram.clases.forEach((c, i) => {
        console.log(`clase ${i + 1}`);
        processClass(c);
      });

      // activarBtnDescarga(true);
    } catch (e) {
      // mostrarError(e);
      console.error(e);
      // activarBtnDescarga(false);
    }
  };
  reader.readAsText(getFile());
}

function getFile() {
  return this.inputUxf.files[0];
}

//Not used
const processDownloadProject = async () => {
  evt.preventDefault();
  try {
    diagram = xmlToClassDiagram(xmlAsJson);

    console.log("diagramJSON: ", JSON.stringify(diagram));

    // javaProject = classDiagramToJavaProject(diagram);
    // const zip = javaProject.getZip();
    // await descargar(zip);
    // mostrarCartelColaborar(true);
  } catch (e) {
    // mostrarCartelColaborar(false);
    // mostrarError(e);
    console.error(e);
  }
};

function xmlToClassDiagram(xmlAsJson) {
  const zoomLevel = xmlAsJson?.diagram[0]?.zoom_level[0]?._text;
  const elements = xmlAsJson?.diagram[0]?.element;
  const filename = getFileName();
  // const tipoColeccion = getRadioButtonCheckeado("tipoColeccion")?.value;
  const tipoColeccion = "ArrayList";
  return Diagrama.parse(filename, parseInt(zoomLevel), elements, tipoColeccion);
}

function getFileName() {
  // "Archivo.uxf" --> "Archivo"
  return getFile().name.split(".")[0];
}

// function activarBtnDescarga(flag) {
//   btnDescarga.disabled = !flag;
//   msjInicialBtnDescargar.style.display = flag ? "none" : "block";
// }

inputUxf.addEventListener("change", processUploadFile);

// form.addEventListener("submit", processDownloadProject);
