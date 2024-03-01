"use client";

import { ChangeEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FormData } from "../types/blog";

const inputClass =
  "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

function FormNewPost() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // try {
  //   const response = await axios.post('api/posts', FormData)

  //     if(response.status) === 200 {
  //       Router.push()
  //     }
  // }

  const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(formData)
  }

  return (
    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className={`${inputClass} text-black`}
          placeholder=" enter the title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          name="content"
          className={`${inputClass} text-black`}
          placeholder="enter the content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400"
      >
        {" "}
        Submit
      </button>
    </form>
  );
}

export default FormNewPost;
