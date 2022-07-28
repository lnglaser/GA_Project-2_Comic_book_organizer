import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

const AddIssue = (e) => {
  // const initialState ={
  //     series: "",
  //     issueNumber: "",
  //     release_date: ""
  // }
  const [form, setForm] = useState("");
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const { seriesName } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post(
      `http://localhost:3001/newissue/${seriesName}`,
      form
    );
    console.log(response);
  };

  return (
    <div className="AddIssueForm">
      <p>Add a new issue to a series</p>
      <form>
        <input
          type="text"
          name="series"
          onChange={handleChange}
          value={seriesName}
          placeholder="Input series name"
          disabled
        ></input>
        <input
          type="text"
          name="issueNumber"
          onChange={handleChange}
          placeholder="Input issue number"
        ></input>
        <input
          type="text"
          name="release_date"
          onChange={handleChange}
          placeholder="Input release date"
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Add Issue
        </button>
      </form>
    </div>
  );
};
export default AddIssue;
