import axios from "axios";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router";

const EditIssue = () => {
  const { id } = useParams();
  console.log(id);
  //   const { title } = useParams();
  //   console.log(title);
  const initialState = {
    _id: id,
    series: "",
    issueNumber: "",
    number_of_issues: "",
    publisher: "",
  };

  const [form, setForm] = useState(initialState);
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.put(
      `http://localhost:3001/updateissue/${id}`,
      form
    );
    console.log(response);
  };
  return (
    <div className="EditIssueForm">
      <p>Edit book details</p>
      <form>
        <input
          type="_id"
          name="title"
          onChange={handleChange}
          placeholder={id}
          disabled
        ></input>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Input new series name"
        ></input>
        <input
          type="text"
          name="launch_year"
          onChange={handleChange}
          placeholder="Input new series start year"
        ></input>
        <input
          type="text"
          name="number_of_issues"
          onChange={handleChange}
          placeholder="Input new number of issues"
        ></input>
        <input
          type="text"
          name="publisher"
          onChange={handleChange}
          placeholder="Input new publisher name"
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Add Series
        </button>
      </form>
    </div>
  );
};
export default EditIssue;
