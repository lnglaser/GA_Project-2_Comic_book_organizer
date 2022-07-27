const SeriesCard = (props) => {
    console.log (props)

    let title = props.title
    let publisher = props.publisher
    let year = props.launch_year

    return (
        <div className="series-card">
            <h3>{title}</h3>
            <p>{publisher}</p>
            <p>{year}</p>
        </div>
    )
}