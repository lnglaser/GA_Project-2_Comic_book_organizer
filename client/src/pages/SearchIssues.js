// First additional feature to be implemented

import IssueCard from "../components/IssueCard";

const SearchIssues = (props) => {
  console.log(props);

  return (
    <div className="SearchIssues">
      <p>Search for individual issues</p>
      <form>
        <input type="text" name="search" placeholder="Search issues"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchIssues;
