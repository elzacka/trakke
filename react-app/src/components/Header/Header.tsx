import React from 'react'
import { Search, Settings, Mountain } from 'lucide-react'
import './Header.css'

interface HeaderProps {
  onSearchClick: () => void
  onSettingsClick: () => void
}

export function Header({ onSearchClick, onSettingsClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="title-wrapper">
        <h1 className="title">
          <Mountain className="title-icon" />
          Tråkke
        </h1>
        <p className="tagline">Oppdag Bykle og Valle med turskoa på</p>
      </div>
      
      <div className="header-controls">
        <button 
          className="header-btn" 
          onClick={onSearchClick}
          title="Søk"
        >
          <Search size={20} />
        </button>
        
        <button 
          className="header-btn" 
          onClick={onSettingsClick}
          title="Innstillinger"
        >
          <Settings size={20} />
        </button>
      </div>
    </header>
  )
}