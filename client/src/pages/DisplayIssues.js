import { useState, useEffect } from "react";

import axios from "axios";

import IssueCard from "../components/IssueCard";

const DisplayIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const showAllIssues = async () => {
      const response = await axios.get("http://localhost:3001/issuelist");
      setIssues(response.data.singleIssue);
    };
    showAllIssues();
  }, []);
  return (
    <div className="IssueList">
      <h2>Complete collection</h2>
      {issues.map((issue) => (
        <IssueCard issue={issue} />
      ))}
    </div>
  );
};
export default DisplayIssues;
