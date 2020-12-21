import React from 'react'
import Navbar from '../../components/Product/Navbar/Nav'
import Front from '../../components/Product/Front/Front'

export default function Product() {
    return (
        <React.Fragment>
           <Navbar/>
           <section>
              <Front/>
           </section>
        </React.Fragment>
    )
}
