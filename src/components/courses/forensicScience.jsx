import React from "react";

const ForensicScience = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Certificate Course in Forensic Science
        </h1>

        <p className="text-xl font-semibold text-center text-blue-600 mt-2">
          CCIFS
        </p>

        <p className="mt-6 text-gray-700 text-lg text-center">
          Are you fascinated by solving mysteries, exploring crime scenes, and revealing hidden truths? Look no further – our Certificate Course in Forensic Science is tailor-made for aspiring students, lawyers, and professionals like you! This course serves as a comprehensive exploration of various forensic disciplines, offering participants hands-on experiences that transcend textbook knowledge. Whether you are a student aspiring to get awed by the mysteries of crime scenes or a professional seeking to enhance your expertise, join us in this enlightening venture where science meets investigation, and every piece of evidence holds the key to solving complex cases.
        </p>

        {/* Course Objectives */}
        <div className="mt-8 space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-800">Course Objectives</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Acquire a profound understanding of forensic science, covering areas such as crime scene investigation and management, forensic anthropology, questioned documents, fingerprints, toxicology, and forensic medicine.</li>
            <li>Learn state-of-the-art forensic techniques, including evidence collection, preservation, and analysis, with a focus on real-world applications.</li>
            <li>Explore the legal implications of forensic science, understanding how findings contribute to legal proceedings, court presentations, and investigations.</li>
            <li>Develop a versatile skill set that opens doors to diverse career paths in law enforcement, criminal justice, private investigation, and forensic laboratories.</li>
            <li>Receive a prestigious Certificate of Completion, validating the mastery of forensic science skills and knowledge.</li>
          </ul>
        </div>

        {/* Weeks and Topics */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Weeks and Topics</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>Week 1: Introduction To Forensic Science (Quiz 1)</li>
            <li>Week 2: Document Examination (Quiz 2)</li>
            <li>Week 3: Fingerprint Examination (Quiz 3)</li>
            <li>Week 4: Crime Scene Investigation (Quiz 4)</li>
            <li>Week 5: Forensic Psychology (Quiz 5)</li>
            <li>Week 6: Introduction to Forensic Medicine (Quiz 6)</li>
            <li>Week 7: Forensic Anthropology (Quiz 7)</li>
            <li>Week 8: Forensic Examination of Edible Items (Final Exam)</li>
          </ul>
        </div>

        {/* Suggested Readings */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Suggested Readings</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Forensic Science: An Introduction to Scientific and Investigative Techniques by Stuart H. James.</li>
            <li>Criminalistics: An Introduction to Forensic Science by Richard Saferstein.</li>
            <li>Forensic Science: Fundamentals & Investigations by Anthony J. Bertino.</li>
          </ul>
        </div>

        {/* Grading Policy */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Grading Policy</h2>
          <p className="text-gray-700 mt-4">
            Course grades are based on the following criteria:
          </p>
          <ul className="mt-2 space-y-1 text-gray-700">
            <li>Quizzes (10 points each): 50</li>
            <li>Final Exam: 50</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Course participants need to achieve at least 70% on the quizzes and maintain a minimum attendance of 75% to successfully complete the course.
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

export default ForensicScience;
