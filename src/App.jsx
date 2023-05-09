import './App.css'
import Card from './components/Card'
import Showhide from './components/Showhide'
import vehicles from './data/vehicles'

function App() {

  const vehiclesList = vehicles.map(vehicle => {
    return <Card title={vehicle.name} description={vehicle.description} />
  })

  return (
    <div className="App">
      <h1>HELLO REACT</h1>
      <div className="container">
        {vehiclesList}
      </div>
      <Showhide/>


    </div>
  )
}

export default App
