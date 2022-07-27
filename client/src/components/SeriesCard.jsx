const SeriesCard = (props) => {
    console.log (props)

    let title = props.series.title
    let publisher = props.series.publisher
    let year = props.series.launch_year

    return (
        <div className="series-card">
            <h3>{title}</h3>
            <p>{publisher}</p>
            <p>{year}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default SeriesCard