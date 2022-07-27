import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import IssueCard from "../components/IssueCard"


const DisplayIssues = () =>{
    return(
        <div className="IssueList">
                <p>List of Single Issues</p>
        </div>
    )
}
 export default DisplayIssues