import axios from "axios"

import { useNavigate, Link } from "react-router-dom"

const SeriesCard = (props) => {
    console.log (props)

    let title = props.series.title
    let publisher = props.series.publisher
    let year = props.series.launch_year
    let number_of_issues = props.series.number_of_issues
    let seriesId = props.series._id

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3001/removeseries/${seriesId}`)
        props.showAllSeries();
    }

//     const addIssueButton = useNavigate();
//     const redirectToAdd = () => {
//     addIssueButton("/newissue");
//   };


    
//   let formFill = title
    return (
        <div className="series-card">
            <h3>{title}</h3>
            <p>{publisher}</p>
            <p>{year}</p>
            {/* <small>Collection ID: {seriesId}</small> */}
            <div classname="button-row">
            
                <Link to={`/updateseries/${seriesId}`}><button type="submit">Edit</button></Link>
                <Link to={`/newissue/${title}`}><button type="submit">Add issue</button></Link>
                <button type="submit" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default SeriesCard