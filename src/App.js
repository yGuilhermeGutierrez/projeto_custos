import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


import Home from './components/pages/Home'
import Contatos from './components/pages/Contatos'
import Sobre from './components/pages/Sobre'
import NovoProjeto from './components/pages/NovoProjeto'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projetos from './components/pages/Projetos';


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Container customClass="min-height">

        <Route exact path= "/">

          <Home />

        </Route>
        <Route exact path= "/projetos">

          <Projetos />

        </Route>
        <Route exact path= "/sobre">

          <Sobre />

        </Route>
        <Route exact path= "/contatos">

          <Contatos />

        </Route>

        <Route exact path= "/novoprojeto">

          <NovoProjeto />

        </Route>

        </Container>
      </Switch>

      <Footer />

    </Router>
  )
}

export default App;
