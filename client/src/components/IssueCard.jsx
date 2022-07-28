import { Link } from "react-router-dom"

const IssueCard = (props) => {
    console.log(props)

    let series = props.issue.series
    let issueNumber = props.issue.issueNumber
    let writer = props.issue.writer
    let artist = props.issue.artist
    let date = props.issue.release_date
    let issueId = props.issue._id

    
    return(
        <div className="singleIssue">
            <h3>{series} #{issueNumber}</h3>
            <p>Writer: {writer}</p>
            <p>Artist: {artist}</p>
            <p>Release date: {date}</p>
            <small>Collection ID: {issueId}</small>
            <form>
            <Link to={`/updateissue/${issueId}`}><button type="submit">Edit</button></Link>
            <button>Delete</button>
            </form>
        </div>
    )
}

export default IssueCard