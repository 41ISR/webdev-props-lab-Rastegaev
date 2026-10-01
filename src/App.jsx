import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Courses } from './components/Courses'
import { Reviews } from './components/Reviews'

function App() {

  return (
    <>
      <Header />
      <section className="hero">
        <div className="container hero__inner">
          <h1 className="hero__title">
            Учись программировать
            <br />с нуля до Junior
          </h1>
          <p className="hero__subtitle">
            Онлайн-курсы с менторами, практикой на реальных проектах и помощью в
            трудоустройстве
          </p>
          <button className="btn btn--primary">Выбрать курс</button>
        </div>
      </section>
      <Courses/>
      <Reviews/>
    </>
  )
}

export default App
