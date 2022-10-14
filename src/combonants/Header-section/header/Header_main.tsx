import React from 'react'
import First_section from './Section_1'
import Secand_Section from './Section_2'
import Section_3 from './Section_3'

function Header_main() {
  return (
    <div className='header-container1'>
        <First_section/>
        <Secand_Section/>
        <Section_3/>
    </div>
  )
}

export default Header_main
