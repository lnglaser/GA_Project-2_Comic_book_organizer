import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

const AddIssue = () => {
  const { seriesName } = useParams();
  const initialState = {
    series: seriesName,
    issueNumber: "",
    release_date: "",
    writer: "",
    artist: "",
    coverArt: "",
  };
  const [form, setForm] = useState(initialState);
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
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
          //   value={seriesName}
          placeholder={seriesName}
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
        <input
          type="text"
          name="writer"
          onChange={handleChange}
          placeholder="Input writer name"
        ></input>
        <input
          type="text"
          name="artist"
          onChange={handleChange}
          placeholder="Input artist name"
        ></input>
        <input
          type="text"
          name="coverArt"
          onChange={handleChange}
          placeholder="Paste image URL"
        ></input>
        <button type="submit" onClick={handleSubmit} class="MenuButton Confirm">
          Add Issue
        </button>
      </form>
    </div>
  );
};
export default AddIssue;
