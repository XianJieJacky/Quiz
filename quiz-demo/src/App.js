import './App.css'
import Router from './Router'
import DenseAppBar from './components/DenseAppBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DenseAppBar title={'Challenge yourself, take on the quiz!'} />
        <Router />
      </header>
    </div>
  )
}

export default App
