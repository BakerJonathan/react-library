import { HashRouter, Route, Routes} from "react-router-dom"
import routes from "./config/routes"
import Navbar from "./components/Navbar"

import {Provider} from 'react-redux'
import store from './redux/store'
import { Auth0Provider } from '@auth0/auth0-react';



function App() {

  return (
    <div className="min-h-screen bg-yellow-100">
      <Auth0Provider domain="dev-pn53janpvc18qv4p.us.auth0.com" clientId="yiwK7udlLM3vPHG3nD42jTcwodhMxmf2" authorizationParams={{redirect_uri:window.location.origin}}>
        <HashRouter>
          <Navbar />
          <Provider store={store}>
            <Routes> 
              {routes.map((route:any, index:any)=>(
                <Route key={index} path={route.path} element={<route.component/>}/>
              ))}
            </Routes>
          </Provider>
        </HashRouter>
      </Auth0Provider>

    </div>
  )
}

export default App
