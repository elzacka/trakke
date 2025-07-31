import React from 'react'
import { Header } from './components/Header/Header'
import './App.css'

function App() {
  const handleSearch = () => {
    const term = prompt('Søk etter sted:')
    console.log('Søker etter:', term)
  }

  const handleSettings = () => {
    alert('Innstillinger kommer snart!')
  }

  return (
    <div className="app">
      <Header 
        onSearchClick={handleSearch}
        onSettingsClick={handleSettings}
      />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>🎉 React versjon av Tråkke!</h2>
        <p>Header komponenten fungerer. Neste: Sidebar og kart.</p>
      </div>
    </div>
  )
}

export default App