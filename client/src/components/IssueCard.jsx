const IssueCard = (props) => {
    console.log(props)

    let series = props.issue.series
    let issueNumber = props.issue.issueNumber
    let writer = props.issue.writer
    let artist = props.issue.artist
    let date = props.issue.release_date

    return(
        <div className="singleIssue">
            <h3>{series} #{issueNumber}</h3>
            <p>Writer: {writer}</p>
            <p>Artist: {artist}</p>
            <p>Release date: {date}</p>
        </div>
    )
}

export default IssueCard