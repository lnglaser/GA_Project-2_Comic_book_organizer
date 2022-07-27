import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <div>
                <Link to = '/'>Home</Link>
                <Link to = '/serieslist'>View Series</Link>
                <Link to = '/issuelist'>View Issues</Link>
                <Link to = '/searchseries'>Search series titles</Link>
                <Link to = '/searchissues'>Search single issues</Link>
                <Link to = '/newseries'>Add a new series</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header