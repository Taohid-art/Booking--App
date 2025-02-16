import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css filedate
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import { format, set } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faGear, faPerson, faPlane, faTaxi,   } from '@fortawesome/free-solid-svg-icons'

const Header = ({type}) => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const navigate = useNavigate()

      const [destination, setDestination] = useState('')
      const [show, setShow] = useState(false)
      const [shower, setShower] = useState(false)
      const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
      })

        const optionhandler = (type, operation) => () => { 
            setOption((prev) => {
                if(operation === "i"){
                    return {...prev, [type]: prev[type] + 1}
                } else {
                    return {...prev, [type]: prev[type] - 1}
                }
            })
        }
// search searchHandler 
const searchHandler = () => { 
 
  navigate('/hotels',{state: {destination, date, option}})
}

    return (
    <div>
        <header>
            <div className="headercontainer">
              <div className="service">
         
                <a href="/" className='active'>     <FontAwesomeIcon icon={faBed} /> Stay</a>
                <a href="">  <FontAwesomeIcon icon={faCar} /> Car</a>
                <a href=""> <FontAwesomeIcon icon={faPlane} />Flight</a>
                <a href=""><FontAwesomeIcon icon={faGear} />Attraction</a>
                <a href=""><FontAwesomeIcon icon={faTaxi} />Airport Taxi</a>
              </div>
              {type !== 'list' && type !=="list2" &&
              <div className="headertext">
                <h1>Find you next days</h1>
                <h3>Search low price on hotels,homes and much more...</h3>
              </div> }
              {type !== 'list' &&    <div className="search">
                    <div className="searchitem">
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                     placeholder="Where are you going?" />
                    </div>
                    <div className="searchitem">
                    <FontAwesomeIcon icon={faCalendar}  onClick={() => setShow(!show)} />
                    <span  onClick={() => setShow(!show)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                 {show &&  <DateRange className='date'
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
/> }
                    </div>
                    <div className="searchitem">
                    <FontAwesomeIcon icon={faPerson}   onClick= {()=>setShower(!shower)}/>
                    <span onClick= {()=>setShower(!shower)}>{option.adult} Adult . {option.children} Children . { option.room} Room</span>
                  { shower &&  <div className="options">
                        <div className="optionitem">
                            <div> Adult</div>
                           <div className="optionwrapper">
                           <button className="optioncounter"
                           disabled={option.adult === 1}
                           onClick={optionhandler("adult", "d")}>-</button>
                            <span className='optioncount'> { option.adult}</span>
                            <button className="optioncounter" onClick={optionhandler("adult", "i")}>+</button>
                           </div>
                        </div>

                        <div className="optionitem">
                        <div> Children</div>
                           <div className="optionwrapper">
                           <button className="optioncounter"  disabled={option.children === 0} 
                           onClick={optionhandler("children", "d")}>-</button>
                            <span className='optioncount'> { option.children}</span>
                            <button className="optioncounter" onClick={optionhandler("children", "i")}>+</button>
                           </div>
                        </div>

                        <div className="optionitem">
                        <div> Room</div>
                           <div className="optionwrapper">
                           <button className="optioncounter" 
                            disabled={option.room === 1}
                           onClick={optionhandler("room", "d")}>-</button>
                            <span className='optioncount'>{ option.room}</span>
                            <button className="optioncounter" onClick={optionhandler("room", "i")}>+</button>
                           </div>
                        </div>
                    </div> }
                    </div>
                   
                    <button onClick={searchHandler}>Search</button>
                    
                </div>}

            </div>
        </header>
    </div>
  )
}

export default Header