import "./App.css";

function App() {
  return (
    <div className="page-container">
      <Nav />
      <div className="content-wrap">
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/experience" component={Experience} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
