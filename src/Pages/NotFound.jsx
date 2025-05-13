import React from 'react'
import {Link} from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="notFound" />
        <h1>Sahi se likh Ganwaar</h1>
        <p>kamaal hai kuch bhi type krta firega</p>
        <Link to ={'/'}>Back to Home <span>
          <HiOutlineArrowNarrowRight/>
          </span>
          </Link>
      </div>
    </section>
  )
}

export default NotFound;