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
let i = 0;
const elementsArray = [...uxf.matchAll(/<element>([\s\S]*?)<\/element>/g)].map(
  (match) => {
    const s = match[1].trim();
    return {
      index: i++,
      element: s,
      //       .split("\n").filter((x) => x !== ""),
    };
  }
);

console.log(elementsArray);

// console.log("element:", elementsArray[2].element);

//hacer funcion en map para parsear el contenido de cada elemento
