import React from "react"
import Navbar from "./Navbar"
import Contact from "../components/Contact/Contact"
import Footer from "./Footer"
// import "./layout.css"
const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Contact />
      <Footer />
    </main>
  )
}

export default Layout
