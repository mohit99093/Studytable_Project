import Home from './containers/Home/Home'
import Product from './containers/Product/Product'

import {Route,Switch} from 'react-router-dom'
import Contact from './containers/Contact/Contact'

function App() {
  return (
    <div>
      <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/product" component={Product} />
           <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
