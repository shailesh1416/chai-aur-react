import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card channel = "Chai aur Code" btnText="More Details"/>
      <Card channel = "Chai aur Cyber" btnText="View More"/>
      <Card channel = "Chai aur CLoud"/>

    </>
  )
}

export default App
