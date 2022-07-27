import { useNavigate } from "react-router"

const SeriesCard = (props) => {
    console.log (props)

    let title = props.series.title
    let publisher = props.series.publisher
    let year = props.series.launch_year

    const addIssueButton = useNavigate();
    const redirectToAdd = () => {
    addIssueButton("/newissue");
  };
    return (
        <div className="series-card">
            <h3>{title}</h3>
            <p>{publisher}</p>
            <p>{year}</p>
            <button>Edit</button>
            <form><button type="submit" onClick={redirectToAdd}>Add issue</button></form>
            <button>Delete</button>
        </div>
    )
}

export default SeriesCard