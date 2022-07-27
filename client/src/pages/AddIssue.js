const AddIssue = () => {
  return (
    <div className="AddIssueForm">
      <p>Add a new issue to a series</p>
      <form>
        <input type="text" name="title" placeholder="Input series name"></input>
        <input
          type="text"
          name="issue_number"
          placeholder="Input issue number"
        ></input>
        <input type="text" name="date" placeholder="Input release date"></input>
        <button type="submit">Add Issue</button>
      </form>
    </div>
  );
};
export default AddIssue;
