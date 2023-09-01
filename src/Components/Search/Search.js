import React from 'react'
import "./Search.css"

function Search() {
    
  return (
    <div>
        <div className="search">
            <div className="search-input">
                <select className="selector" name="class" id="assignedClasses" defaultValue="default">
                    <option value="default" disabled hidden>Select class</option>
                    <option value="Class1">Class1</option>
                    <option value="Class2">Class2</option>
                    <option value="Class3">Class3</option>
                    <option value="Class4">Class4</option>
                </select>

                <input className='selector date-selector' type="date" />
            </div>
            <div className="search-btn">
                <button>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Search
