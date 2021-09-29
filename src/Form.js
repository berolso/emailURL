import React, { useState } from "react";
import "./form.css";
import buildString from "./buildString";
import makeTiny from "./makeTiny";

const Form = ({ setTinyResult }) => {
  const [formData, setFormData] = useState({
    to: "jon@test.com",
    cc: "cc@ccuser.com",
    bcc: "bcc@bccuser.com",
    subject: "this is the subject line",
    body: "this is the body of the text",
  });

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
        <div>
          <label htmlFor="to">To: </label>
          <input name="to" value={formData.to} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cc">CC: </label>
          <input name="cc" value={formData.cc} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="bcc">BCC: </label>
          <input name="bcc" value={formData.bcc} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="subject">Subject: </label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <textarea
            name="body"
            value={formData.body}
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
// end

export default Form;
