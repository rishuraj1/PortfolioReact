import React from "react";

const Project = ({ link, image, name }) => {
  return (
    <div className="text-center p-10 shadow-lg flex flex-col items-center">
      <img src={image} width={300} height={300} />
      <h3 className="font-semibold text-lg p-4">{name}</h3>
      <p className="p-4 text-md">
        It is an AI discord chatbot which interacts with the user sarcastically.
        It is developed using the Open AI's GPT3 model.
      </p>
      <a
        className="bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md p-4"
        href={link}
        target="_blank"
      >
        Link
      </a>
    </div>
  );
};

export default Project;
