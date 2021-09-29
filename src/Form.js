import React, { useState } from "react";
import "./form.css";
import buildString from "./buildString";
import makeTiny from "./makeTiny";

const Form = ({ setTinyResult }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const result = buildString(
      formData.to,
      formData.cc,
      formData.bcc,
      formData.subject,
      formData.body
    );
    const r = await makeTiny(result);
    setTinyResult(r.data.data.tiny_url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="a">
          <label htmlFor="to">To: </label>
          <input
            name="to"
            value={formData.to}
            placeholder="..."
            onChange={handleChange}
          />
        </div>
        <div id="b">
          <label htmlFor="cc">CC: </label>
          <input
            name="cc"
            value={formData.cc}
            placeholder="..."
            onChange={handleChange}
          />
        </div>
        <div id="c">
          <label htmlFor="bcc">BCC: </label>
          <input
            name="bcc"
            value={formData.bcc}
            placeholder="..."
            onChange={handleChange}
          />
        </div>
        <div id="d">
          <label htmlFor="subject">Subject: </label>
          <input
            name="subject"
            value={formData.subject}
            placeholder="..."
            onChange={handleChange}
          />
        </div>
        <div id="e">
          {/* <label htmlFor="body">Body: </label> */}
          <textarea
            name="body"
            value={formData.body}
            placeholder="..."
            onChange={handleChange}
            rows="10"
            cols="50"
          />
        </div>
        <button>Generate Link</button>
      </form>
    </div>
  );
};

export default Form;
