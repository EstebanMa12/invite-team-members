import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter.jsx'
import './styles/styles.css'
import { Provider } from "react-redux";
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
