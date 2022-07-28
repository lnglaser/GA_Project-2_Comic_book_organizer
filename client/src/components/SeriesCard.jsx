import { useNavigate, Link } from "react-router-dom"

const SeriesCard = (props) => {
    console.log (props)

    let title = props.series.title
    let publisher = props.series.publisher
    let year = props.series.launch_year
    let seriesId = props.series._id

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
            <form>
                <Link to={`/updateseries/${seriesId}`}><button type="submit">Edit</button></Link>
                <Link to={`/newissue/${title}`}><button type="submit">Add issue</button></Link>
            </form>
            <button>Delete</button>
            </div>
        </div>
    )
}

export default SeriesCard