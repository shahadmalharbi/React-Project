import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [flight, setFlight] = React.useState({
        source: '',
        destination: '',
        departure: '',
    })
    const [isCreated, setIsCreated] = React.useState(false)
    const [errors, setErrors] = React.useState([]);
    const history = useHistory()
    const [flights, setFlights] = React.useState([])

    const handleChange = (e) => {
        setIsCreated(false)
        setFlight({ ...flight, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search-results/${flight.source}/${flight.destination}/${flight.departure}`)
        console.log(flight)
        
    }
    console.log(flights)
    return (
        <div>
            <form className="form d-flex justify-content-evenly align-items-end" onSubmit={handleSubmit}>

                <div className=" mt-4">
                    <label className="form-label">from:</label>
                    <input className="form-control" value={flight.source} name="source" onChange={handleChange} />
                </div>
                <div className=" mt-4">
                    <label className="form-label">to:</label>
                    <input className="form-control" value={flight.destination} name="destination" onChange={handleChange} />
                </div>
                <div className=" mt-4">
                    <label className="form-label">Date:</label>
                    <input type="date" className="form-control" value={flight.departure} name="departure" onChange={handleChange} />
                </div>
                <div className=" mt-5">
                    <input className="btn btn-light " style={{ backgroundColor: 'skyblue' }} value="Search" type="submit" />
                </div>
            </form>
        </div >
    )
}
export default Search