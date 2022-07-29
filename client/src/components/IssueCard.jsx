import axios from "axios"
import { Link } from "react-router-dom"

const IssueCard = (props) => {
    console.log(props)

    let series = props.issue.series
    let issueNumber = props.issue.issueNumber
    let writer = props.issue.writer
    let artist = props.issue.artist
    let date = props.issue.release_date
    let issueId = props.issue._id
    let coverArt = props.issue.cover_art

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3001/removeissue/${issueId}`)
        props.showAllIssues();
    }
    
    
    return(
        <div className="singleIssue">
            <div className="coverArt"><img src={coverArt}/></div>
            <h3>{series} #{issueNumber}</h3>
            <p>Writer: {writer}</p>
            <p>Artist: {artist}</p>
            <p>Release date: {date}</p>
            {/* <small>Collection ID: {issueId}</small> */}
            
            <Link to={`/updateissue/${issueId}`}><button type="submit">Edit</button></Link>
            <button type="submit" onClick={handleDelete}>Delete</button>
            
        </div>
    )
}

export default IssueCard