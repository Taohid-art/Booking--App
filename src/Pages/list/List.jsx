import React, { useState } from 'react';
import Header from '../../components/header/Header'
import Nav from '../../components/nav/Nav'
import Searchresult from '../../components/searchResult/Searchresult'
import { useLocation } from 'react-router-dom';
import './List.css'
import { format } from 'date-fns';
const List = () => { 
 
  const location = useLocation() 
  console.log(location.state.destination);
  
  return (
    <div>
    <Nav />
    <Header type='list'/>
    <div className="listcontainer">
      <div className="listwrapper">
        <div className="listsearch">
          <h1>Search</h1>
          <h3>Destination</h3>
          <input type="text" placeholder={location.state.destination}/>
          <h3>check In and Out</h3>
          <input type="button"  value={`${format(location.state.date[0].startDate, "MM/dd/yyyy")} to ${format(location.state.date[0].endDate, "MM/dd/yyyy")}`} />
          <h3>Option</h3>
          <div className="optionitem">
            <h4>Min price</h4>
            <input type="number" name="" id="" />
          </div>

          <div className="optionitem">
            <h4>Max price</h4>
            <input type="number" name="" id="" />
          </div>
          <div className="optionitem">
            <h4>Adult</h4>
            <input type="number" placeholder={location.state.option.adult} min={1} name="" id="" />
          </div>
          <div className="optionitem">
            <h4>Children</h4>
            <input type="number"  placeholder={location.state.option.children}  min={0} name="" id="" />
          </div>
          <div className="optionitem">
            <h4>Rooms</h4>
            <input type="number"  placeholder={location.state.option.room} min={1}  name="" id="" />
          </div>
          <button>Search</button>
          
        </div>


        <div className="searchresult">
          <Searchresult />
          <Searchresult /> <Searchresult /> <Searchresult /> <Searchresult /> <Searchresult /> <Searchresult /> <Searchresult /> <Searchresult /> <Searchresult />
        </div>
      </div>
    </div>
    </div>
  )
}

export default List