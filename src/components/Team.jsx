import {data} from '../restApi.js';


const Team = () => {
  return (
    <section className='team' id ='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>Our Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Nemo, tempora accusantium beatae nulla deserunt facilis officiis obcaecati dicta atque aperiam!</p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map(element =>(
                        <div className="card" key={element.id}>
                        <img src={element.image} alt={element.name}/>
                        <h3>{element.name}</h3>
                        <p>{element.designation}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team;