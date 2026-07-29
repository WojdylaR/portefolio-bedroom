import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import BedroomApp from './bedroom/BedroomApp.tsx'
import { Analytics } from "@vercel/analytics/react"
import { Leva } from 'leva'
import HeadphoneConfiguratorApp from './headphoneConfigurator/HeadphoneConfiguratorApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Analytics />
    <Leva  hidden/>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<BedroomApp />} />
          <Route path="/headphone-configurator" element={<HeadphoneConfiguratorApp />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
