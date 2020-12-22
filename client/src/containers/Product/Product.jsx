import React from 'react'
import Navbar from '../../components/Product/Navbar/Nav'
import Front from '../../components/Product/Front/Front'
import Sec1 from '../../components/Product/Section1/Sec1'
import Grid from '../../components/Product/Grid_Section/Grid'

export default function Product() {
    return (
        <React.Fragment>
           <Navbar/>
           <section>
              <Front/>
              <Sec1 title="Life at Studytable" image="https://www.indiaquotient.in/images/mantraimg.jpg" />
              <Grid/>
              <Sec1 title="Some hacks to our termsheet" image="https://www.indiaquotient.in/images/mantraimg2.jpg" />
           </section>
        </React.Fragment>
    )
}
