
import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './components/context/AppContext';

const Root = () => {
  return (
    <div>
        <AppContextProvider>
        <App/>
        </AppContextProvider>
        
    </div>
  )
}

export default Root

ReactDOM.render(<Root />, document.getElementById('mingrand'));

