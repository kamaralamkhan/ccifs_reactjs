import React from "react";

const ForensicBiology = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Certification Course in Forensic Biology & Serology
        </h1>

        <p className="mt-6 text-gray-700 text-lg text-center">
          This certification program in Forensic Biology and Serology offers a comprehensive exploration of the principles and practices involved in the analysis of biological evidence in forensic investigations. Over the course of either 1 month or 3 months, participants will develop a deep understanding of how to collect, preserve, and analyze biological samples such as blood, semen, and saliva.
        </p>

        <p className="mt-4 text-gray-700 text-lg text-center">
          The program is designed to equip students with both theoretical knowledge and practical skills, culminating in hands-on laboratory experience and real-world case studies. Whether you choose the intensive 1-month track or the more detailed 3-month course, you will gain the expertise needed to contribute effectively to forensic investigations and legal proceedings.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          {/* Curriculum */}
          <h2 className="text-2xl font-bold text-gray-800">Curriculum</h2>
          <div className="mt-4">
            <h3 className="font-semibold">Course Code: FBS-01M / FBS-001M</h3>
            <ul className="mt-2 space-y-2">
              <li>Week 1: Introduction to Forensic Biology and Serology</li>
              <li>Week 2: Serological Techniques and Analysis</li>
              <li>Week 3: DNA Profiling</li>
              <li>Week 4: Reporting, Courtroom Testimony, and Case Studies</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Course Code: FBS-03M / FBS-003M</h3>
            <ul className="mt-2 space-y-2">
              <li>Weeks 1-2: Introduction to Forensic Biology and Serology</li>
              <li>Weeks 3-4: Biological Evidence Collection and Preservation</li>
              <li>Weeks 5-6: Forensic Serology Techniques</li>
              <li>Weeks 7-8: DNA Analysis in Forensic Biology</li>
              <li>Weeks 9-10: Blood-pattern Analysis and Forensic Casework & Interpretation</li>
              <li>Week 11: Reporting and Courtroom Testimony</li>
              <li>Week 12: Case Studies and Practical Assessments</li>
            </ul>
          </div>
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
            Name: LaxmiPriya Dash
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

export default ForensicBiology;
