import { useState, useEffect } from "react";

import axios from "axios";

import IssueCard from "../components/IssueCard";

const DeleteIssue = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const deleteSingleIssue = async () => {
      const response = await axios.delete(`http://localhost:3001/removeissue/`);
      setIssues(response.data.singleIssue);
    };
    deleteSingleIssue();
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
export default DeleteIssue;
