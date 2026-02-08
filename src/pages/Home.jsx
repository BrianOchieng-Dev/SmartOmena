import Nav from '../components/Nav'
import '../Home.css'
import img1 from '/img1.png'
import img3 from '/img3.png'
import Why from '../pages/Whyus'
import Categorycard from '../components/Categorycard'
export default function Home(){
    return(
        <>
        <section className='hero'>
            <header>
                <Nav/>
            </header>
            <div className='hero-tag'>
                <h4>MMUST STUDENT MEAL</h4>
                <h1>Campus Crunch</h1>
                <p>Quick. Crispy. Affordable.</p>
            </div>
        </section>
        <section>
            <Why/>
        </section>
        <section id="category">
            <h2>Price made simple</h2>
            <div className="card">
                <Categorycard 
                    image={img3}
                    description="Student Pack"
                    price="Ksh.80"
                    order="Order Now"
                />
                <Categorycard 
                    image={img1}
                    description="Premium Pack"
                    price="Ksh.120"
                    order="Order Now"
                />
                
            </div>
            <div className='footer'>
                <h2 style={{color: 'red'}}>For more inquiry reach out:</h2>
                <h3>0112478220 / 0754845415 </h3><a href="https://wa.me/254754845415?text= Inquiry%20about%20Campus%20Crunch" target="_blank" className='contact-btn'>Text us on WhatsApp</a>
            </div>
            </section>
        </>
    )
}