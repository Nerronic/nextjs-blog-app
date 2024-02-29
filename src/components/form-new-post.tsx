"use client"

import ReactTextareaAutosize from "react-textarea-autosize";

const inputClass =
  "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

function FormNewPost() {


    
  return (
    <form className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          className={inputClass}
          placeholder=" enter the title"
          name="title"
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          name="content"
          className={inputClass}
          placeholder="enter the content"
        />
      </div>
      <button type="submit" className="" > Submit</button>
    </form>
  );
}

export default FormNewPost;
