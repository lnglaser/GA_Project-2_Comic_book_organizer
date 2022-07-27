const IssueCard = (props) => {
    console.log(props)

    let series = props.series
    let issueNumber = props.issueNumber
    let writer = props.writer
    let artist = props.artist

    return(
        <div className="singleIssue" onClick={props.onClick}>
            <h3>Title: {series} {issueNumber}</h3>
            <p>Writer: {writer}</p>
            <p>Artist: {artist}</p>
        </div>
    )
}

export default IssueCard