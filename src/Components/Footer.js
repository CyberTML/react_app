
import React from 'react'


export default function Footer() {
    const year = new Date().getFullYear()
    
  return (     
    <footer className='text-center bg-light text-dark p-4 my-1'>      
        <h5>
          <em><strong>&copy; {year} Tanner Lampson</strong></em>
        </h5>                  
    </footer>
    
  )
}
