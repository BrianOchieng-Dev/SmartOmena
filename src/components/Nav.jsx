
import logo from '/public/image.png'
import '../Nav.css'
export default function Nav(){
    return(
        <>
        <div className="nav">
            <nav className="navlink">
                <img src={logo} alt="" class="logo"></img>
                <div className='navlist'>
                <a href='#category'>View Category</a>
                <a href="#why">Why campus crunch?</a></div>
            </nav>
        </div>
        </>
    )
}