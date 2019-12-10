import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Example extends Component {
  render (
    <section>
      <p>Hello World!</p>
    </section>
  )
}

const Example = () => (
  <section>
    <p>Hello World!</p>
  </section>
)

ReactDOM.render(
  <Example />,
  document.getElementById('app')
)
