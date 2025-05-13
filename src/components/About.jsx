import React from 'react'
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <div>
        <section className='about' id='about'>
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading"></h1>
                        <p>The only thing we're serious about is food.</p>
                    </div>
                    <p className='mid'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi fugiat mollitia ducimus dicta harum,
                        nam magni eum non, architecto praesentium vel sunt magnam. Doloribus voluptatibus, consequatur ducimus a veritatis commodi amet.
                        Incidunt, laboriosam totam aliquid quidem magnam quibusdam explicabo tempore ipsa doloribus modi dignissimos facilis eveniet ab officiis amet!
                    </p>
                    <Link to={'/'}>Explore Menu<span>
                        <HiOutlineArrowNarrowRight/>
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default About