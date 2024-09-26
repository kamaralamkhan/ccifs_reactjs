import React from "react";

const Fingerprint = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Certificate Course in Fingerprint Examination & Analysis
        </h1>

        <p className="text-xl font-semibold text-center text-blue-600 mt-2">
          CCIFEA
        </p>

        {/* Course Outline */}
        <div className="mt-8 space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-800">Course Outline</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Understand the Basics of Fingerprinting; Explore the anatomy of friction ridge skin; Learn about the formation and classification of ridge patterns.</li>
            <li>Collection and Preservation Techniques; Study methods for collecting latent prints from crime scenes; Explore proper preservation and handling techniques to maintain print integrity.</li>
            <li>Fingerprint Development; Gain hands-on experience in various fingerprint development techniques, including dusting, chemical enhancement, and lifting.</li>
            <li>Practical Applications; Engage in practical exercises and case studies to apply learned concepts; Develop hands-on skills in fingerprint comparison and analysis.</li>
            <li>Minutiae and Pattern Analysis; Understand the significance of minutiae points in fingerprint analysis; Learn how to analyze ridge patterns and other features to distinguish between prints.</li>
            <li>Legal Implications; Explore the admissibility of fingerprint evidence in court; Understand the role of a fingerprint analyst as an expert witness.</li>
          </ul>
        </div>

        {/* Curriculum */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Curriculum</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>Week 1: Introduction To Fingerprints & Development of Fingerprints (Quiz 1)</li>
            <li>Week 2: Fingerprint Classification & Types of Fingerprints (Quiz 2)</li>
            <li>Week 3: Identifying Various Fingerprint Patterns & Lifting Fingerprints From Various Objects (Quiz 3)</li>
            <li>Week 4: Recording And Comparison of Fingerprints (Quiz 4)</li>
            <li>Week 5: Legal Perspective of Fingerprint (Quiz 5, Final Exam)</li>
          </ul>
        </div>

        {/* Fees & Structure */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Fees & Structure</h2>
          <div className="mt-4 text-gray-700">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Duration</th>
                  <th className="border border-gray-300 px-4 py-2">Mode</th>
                  <th className="border border-gray-300 px-4 py-2">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1 Month</td>
                  <td className="border border-gray-300 px-4 py-2">Online</td>
                  <td className="border border-gray-300 px-4 py-2">2000 INR</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"></td>
                  <td className="border border-gray-300 px-4 py-2">Offline</td>
                  <td className="border border-gray-300 px-4 py-2">5000 INR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Coordinator */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Course Coordinator</h2>
          <p className="text-gray-700 mt-2">
            Name:  <span className="font-bold">LaxmiPriya Dash</span><br />

            <br />
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

export default Fingerprint;
