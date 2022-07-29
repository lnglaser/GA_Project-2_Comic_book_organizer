import { useState, useEffect } from "react";

import axios from "axios";

import IssueCard from "../components/IssueCard";

const DisplayIssues = () => {
  const [issues, setIssues] = useState([]);

  const showAllIssues = async () => {
    const response = await axios.get("http://localhost:3001/issuelist");
    setIssues(response.data.singleIssue);
  };
  useEffect(() => {
    showAllIssues();
  }, []);
  return (
    <>
      <h2>Complete collection</h2>
      <div className="IssueList container-grid">
        {issues.map((issue) => (
          <IssueCard issue={issue} showAllIssues={showAllIssues} />
        ))}
      </div>
    </>
  );
};
export default DisplayIssues;
