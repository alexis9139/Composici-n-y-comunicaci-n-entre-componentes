import React from 'react'
import "antd/dist/antd.css";


import { Button } from 'antd';

class Hijo extends React.Component {
  state = {
    mensaje: ''
  }
  manejadorHijo = (e, mensaje = 'Hola desde el hijo') => {
    this.setState({
      mensaje
    })
  }
  render() {
    return (
      <div>
        <Button onClick={this.manejadorHijo} type="primary" danger>Hijo</Button>
        <p>{this.state.mensaje}</p>
      </div>
    )
  }
}


class App extends React.Component {
  hijo = React.createRef()

  manejadorPadre = () => {
    this.hijo.current.manejadorHijo(null, "Hola desde el padre")
  }
  render() {
    return (
      <div>
        <Hijo ref={this.hijo}></Hijo>
        <Button onClick={this.manejadorPadre} type="primary">Padre</Button>
      </div>
    )
  }
}
export default App