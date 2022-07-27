const AddSeries = () => {
  return (
    <div className="AddIssueForm">
      <p>Add a new issue to a series</p>
      <form>
        <input type="text" name="title" placeholder="Input series name"></input>
        <input
          type="text"
          name="publisher"
          placeholder="Input publisher name"
        ></input>
        <input
          type="text"
          name="Year"
          placeholder="Input series start year"
        ></input>
        <button type="submit">Add Series</button>
      </form>
    </div>
  );
};
export default AddSeries;
