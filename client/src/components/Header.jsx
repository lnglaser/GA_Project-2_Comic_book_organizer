import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <div>
                <Link to = '/' id='HomeButton'>Attic</Link>
                <Link to = '/serieslist'>View Series</Link>
                <Link to = '/issuelist'>View Issues</Link>
                <Link to = '/newseries'>Add a new series</Link>

                {/* Leaving links in nav component for future implementation of search function(s) - refer to comments in SearchIssues.js and SearchSeries.js */}
                {/* <Link to = '/searchseries'>Search series titles</Link> */}
                {/* <Link to = '/searchissues'>Search single issues</Link> */}
                </div>
            </nav>
        </header>
    )
}

export default Header