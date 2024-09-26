import React from 'react';

// Import images from the assets folder
import amar from "../assets/boardMember/dr-umar-pal-1.jpg";
import anurag from "../assets/boardMember/Anurag.jpeg";
import awanish from "../assets/boardMember/awanish_ccifs.jpeg";
import esha from "../assets/boardMember/Esha-Maria.jpeg";
import dheeraj from "../assets/boardMember/Dheeraj.jpeg";
import garima from "../assets/boardMember/Dr.Garima.webp";
import tanurup from "../assets/boardMember/Dr.Tanurup_DAS_CCIFS.jpeg";
import vijay from "../assets/boardMember/vijay.jpg";
import ravindar from "../assets/boardMember/ravindar.jpg";

const Person = () => {
  const persons = [
    {
      name: "Mr. Ravinder Pal Verma",
      title: "Forensic/Assistant Chemical Examiner (Ballistics), FSL Delhi",
      img: ravindar,
    },
    {
      name: "Dr. Abhimanyu Harshey",
      title: "Assistant Professor, NFSU, Gandhi Nagar",
      img: awanish,
    },
    {
      name: "Dr. Tanurup Das",
      title: "Assistant Professor, NUJS-West Bengal",
      img: tanurup,
    },
    {
      name: "Dr. Amar Pal",
      title: "Assistant Director, FSL, Delhi",
      img: amar,
    },
    {
      name: "Mr. Anurag",
      title: "Asst. Professor, Dept. of Forensic Science, GIFS, Aurangabad",
      img: anurag,
    },
    {
      name: "Mr. Awanish Upadhyay",
      title: "Scientist, NDTL",
      img: awanish,
    },
    {
      name: "Ms. Esha Maria",
      title: "General Forensic Expert, Delhi Police",
      img: esha,
    },
    {
      name: "Mr. Dheeraj Bhardwaj",
      title: "Senior Scientific Assistant, FSL",
      img: dheeraj,
    },
    {
      name: "Dr. Garima Pal",
      title: "Assistant Professor, NLU, Mumbai",
      img: garima,
    },
    {
      name: "Dr. Vijay Dhankar",
      title: "HOD of Forensic Medicine, Dr. BSA Hospital, Project Head",
      img: vijay,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl text-blue-600 font-bold mb-6 text-center">
        <strong>Resource Persons</strong>
      </h2>
      <hr className="border-b border-gray-300 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {persons.map((person, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={person.img} alt={person.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Person;
