import axios from "axios";
import React from "react";
import { useState } from "react";

const AddSeries = () => {
  const [form, setForm] = useState("");
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post("http://localhost:3001/newseries", form);
    console.log(response);
  };
  return (
    <div className="AddSeriesForm">
      <p>Add a new series</p>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Input series name"
        ></input>
        <input
          type="text"
          name="publisher"
          onChange={handleChange}
          placeholder="Input publisher name"
        ></input>
        <input
          type="text"
          name="Year"
          onChange={handleChange}
          placeholder="Input series start year"
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Add Series
        </button>
      </form>
    </div>
  );
};
export default AddSeries;
