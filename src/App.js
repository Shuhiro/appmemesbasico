import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');


  /*funcion que cambia el valor de linea1 cuando es llamado*/
  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function (evento) {
    alert("Exportar");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }



  return (
    <div className="App">
      {/*Select picker de MEME */}
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br />

      {/*Input text 1° linea*/}
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' /><br />

      {/*Input text 2° linea
      onChange llama una funcion de js*/}
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2' /><br />
      {/*Boton exportar*/}
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="" />
      </div>
    </div>
  );
}

export default App;
