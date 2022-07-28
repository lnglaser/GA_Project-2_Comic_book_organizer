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
    release_date: "",
    writer: "",
    artist: "",
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
          name="id"
          onChange={handleChange}
          placeholder={id}
          disabled
        ></input>
        <input
          type="text"
          name="series"
          onChange={handleChange}
          placeholder="Input new series name"
        ></input>
        <input
          type="text"
          name="issueNumber"
          onChange={handleChange}
          placeholder="Input new issue number"
        ></input>
        <input
          type="text"
          name="release_date"
          onChange={handleChange}
          placeholder="Input new release date"
        ></input>
        <input
          type="text"
          name="writer"
          onChange={handleChange}
          placeholder="Input new writer"
        ></input>
        <input
          type="text"
          name="artist"
          onChange={handleChange}
          placeholder="Input new artist"
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Update Issue
        </button>
      </form>
    </div>
  );
};
export default EditIssue;
