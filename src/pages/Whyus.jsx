
import image from '/public/img2.png'
import '../Why.css'
export default function Why(){
    return(
        <>
        <section id="why" className="des">
            <h2>Why Campus Crunch?</h2>
            <div class="des-item">
                <div class="item">
                <p>Campus Crunch is the go-to meal delivery service for students at MMUST. 
                    We understand the unique needs of students and strive to provide delicious, 
                    affordable, and convenient meals that fit their busy schedules. With a wide
                     variety of menu options, including vegetarian and vegan choices, we cater 
                     to diverse tastes and dietary preferences. Our commitment to quality ingredients 
                     and timely delivery ensures that students can enjoy a satisfying meal without the 
                     hassle of cooking or waiting in long lines. Choose Campus Crunch for a tasty and
                      stress-free dining experience on campus.</p>
                       </div>
                       <div class="item">
                        <img src={image} alt="crunch logo" className="des-img"></img>
                       </div>
            </div>
        </section>
        </>
    )
}