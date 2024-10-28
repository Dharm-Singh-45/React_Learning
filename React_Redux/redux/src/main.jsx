
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './services/reducers/index.js'

const store = createStore(rootReducer)
// console.log('store data at main file',store)


createRoot(document.getElementById('root')).render(
    <Provider store={store}>

        <App />
    </Provider>


)
