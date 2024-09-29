import React from "react";

const DocumentExamination = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Certificate Course in Document Examination
        </h1>

        <p className="mt-6 text-gray-700 text-lg text-center">
          Acquire comprehensive knowledge and practical skills in the examination of questioned documents, including handwriting analysis, signature verification, and detection of alterations.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          {/* Course Objectives */}
          <h2 className="text-2xl font-bold text-gray-800">Course Objectives</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Learn the state-of-the-art forensic techniques for document analysis, including ink examination, decipherment of indented writing, secret writing, examination of counterfeit currencies.</li>
            <li>Gain insights into the legal aspects of questioned document examination, understanding how findings can be presented in legal proceedings and contribute to investigations.</li>
            <li>Acquire a valuable skill set that enhances career prospects in various fields, including law enforcement, legal practice, and forensic science.</li>
            <li>Develop a strong understanding of ethical considerations in questioned document examination, emphasizing the importance of integrity, objectivity, and professionalism in the field.</li>
            <li>Receive a recognized Certificate of Completion, validating the successful mastery of questioned document examination skills and knowledge.</li>
          </ul>
        </div>

        {/* Curriculum */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Curriculum</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>Week 1: Introduction and nature of questioned documents (Quiz 1)</li>
            <li>Week 2: Principles of handwriting examination, master pattern and natural variations (Quiz 2)</li>
            <li>Week 3: Questioned document examination: class and individual characteristics (Quiz 3)</li>
            <li>Week 4: Alteration in documents: erasures, obliteration and their examination (Quiz 4)</li>
            <li>Week 5: Forgery and disguise and Forensic signature verification for forgery identification Examination of currency notes (Quiz 5)</li>
            <li>Final Exam</li>
          </ul>
        </div>

        {/* Fees Structure */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Fees & Structure</h2>
          <table className="mt-4 w-full text-left text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Duration</th>
                <th className="py-2 px-4">Mode</th>
                <th className="py-2 px-4">Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-t py-2 px-4">1 Month</td>
                <td className="border-t py-2 px-4">Online</td>
                <td className="border-t py-2 px-4">2000 INR</td>
              </tr>
              <tr>
                <td className="border-t py-2 px-4">Offline</td>
                <td className="border-t py-2 px-4">N/A</td>
                <td className="border-t py-2 px-4">5000 INR</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Course Coordinator */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Course Coordinator</h2>
          <p className="mt-4 text-gray-700">
            Name: [Insert Name]
          </p>
          <p className="mt-2 text-gray-700">
            Email: <a href="mailto:ccifs.forensic@gmail.com" className="text-blue-600 underline">ccifs.forensic@gmail.com</a>
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-10">
          <a
            href="https://ccifs.in/application-form/"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentExamination;
