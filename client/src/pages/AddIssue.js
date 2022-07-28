import axios from "axios";
import React from "react";
import { useState } from "react";

const AddIssue = (e) => {
  const [form, setForm] = useState("");
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post("http://localhost:3001/newissue", form);
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
          placeholder="Input series name"
          //   disabled
        ></input>
        <input
          type="text"
          name="issueNumber"
          placeholder="Input issue number"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="release_date"
          placeholder="Input release date"
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Add Issue
        </button>
      </form>
    </div>
  );
};
export default AddIssue;
