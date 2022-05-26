import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// pages
import Home from './pages/Home.tsx'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="App bg-image">
      <BrowserRouter>
        <nav style={{width:"97%", maxWidth:"100%", border:"none",justifyContent:"end",gap:"84px", paddingTop:"36px"}}>
          <Link style={{textDecorationLine:"none"}} to="/">Pricing</Link>
          <Link style={{textDecorationLine:"none"}} to="/about">About</Link>
          <Link style={{textDecorationLine:"none"}} to="/home">Home</Link>
          <Link style={{textDecorationLine:"none", border:"1px solid", padding:"5px 20px 5px 20px",borderRadius:"5px"}} to="/products">Sign in</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App