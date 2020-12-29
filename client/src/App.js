import Home from './containers/Home/Home'
import Product from './containers/Product/Product'

import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div style={{backgroundImage:'url("https://web-assets.cred.club/_next/assets/images/home-page/hero-bg.png")'}}>
      <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/product" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
