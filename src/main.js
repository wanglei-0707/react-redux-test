import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import counter from './store/reducers'

const store = createStore(counter)

function render() {
  ReactDOM.render(
    <Counter
      value={store.getStore()}
      incCounter={() => store.dispatch('INCREMENT')}
      decCounter={() => store.dispatch('DECREMENT')}
    />,
    document.getElementById('container')
  )
}

render()

store.subscribe()
