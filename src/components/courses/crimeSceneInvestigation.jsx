import React from "react";

const CrimeSceneInvestigation = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Crime Scene Investigation Certification Program
        </h1>

        <p className="mt-6 text-gray-700 text-lg text-center">
          The Crime Scene Investigation Certification program is designed to equip participants with the essential skills and knowledge required for effective crime scene management and forensic analysis. Whether you choose the 1-month or 3-month course, this program offers a comprehensive blend of theoretical instruction and practical training in key aspects of crime scene investigation.
        </p>

        <p className="mt-4 text-gray-700 text-lg text-center">
          Participants will learn how to manage crime scenes, document evidence, and perform basic to advanced forensic analyses. The courses cover a wide range of topics, including evidence collection, bloodstain pattern analysis, DNA profiling, and crime scene reconstruction. The program also emphasizes the legal and ethical responsibilities of crime scene investigators, preparing students for courtroom testimony and expert witness roles.
        </p>

        <p className="mt-4 text-gray-700 text-lg text-center">
          The 1-month course is an intensive introduction, perfect for those seeking to quickly gain foundational skills, while the 3-month course offers a more in-depth exploration of advanced techniques, including specialized crime scene investigations and detailed forensic reporting.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">
          {/* Course Objectives */}
          <h2 className="text-2xl font-bold text-gray-800">Course Objectives</h2>
          <ul className="mt-2 space-y-2 list-disc list-inside">
            <li>Foundational Knowledge: Develop a comprehensive understanding of crime scene investigation principles, including the legal and ethical responsibilities of a crime scene investigator.</li>
            <li>Crime Scene Management: Gain proficiency in securing, documenting, and managing crime scenes, ensuring proper coordination with law enforcement and adherence to safety protocols.</li>
            <li>Evidence Documentation and Collection: Master techniques for accurately documenting crime scenes, including note-taking, photography, videography, and sketching, along with proper methods for collecting and preserving various types of physical evidence.</li>
            <li>Forensic Analysis Techniques: Learn and apply basic to advanced forensic analysis techniques, including bloodstain pattern analysis, DNA profiling, and the examination of trace evidence such as fibers, gunshot residue, and fingerprints.</li>
            <li>Crime Scene Reconstruction: Understand the principles of crime scene reconstruction, including the analysis of evidence patterns and sequences to develop a coherent narrative of the events.</li>
            <li>Specialized Crime Scene Investigations: Acquire specialized skills for investigating complex crime scenes, such as homicides, sexual assaults, arson, and explosions, focusing on the unique evidence and challenges these cases present.</li>
            <li>Forensic Reporting: Develop the ability to structure and write comprehensive forensic reports, detailing the findings and interpretations of crime scene investigations.</li>
            <li>Practical Application: Engage in hands-on training through laboratory sessions, mock crime scenes, and case study analysis to apply theoretical knowledge in real-world scenarios.</li>
            <li>Final Assessment and Certification: Successfully complete practical assessments and written exams to earn certification, demonstrating your readiness to contribute effectively to forensic investigations.</li>
          </ul>
        </div>

        {/* Curriculum */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Curriculum</h2>
          <div className="mt-4">
            <h3 className="font-semibold">Course Code: CSI-01M / CSI-001M</h3>
            <ul className="mt-2 space-y-2">
              <li>Week 1: Introduction to Crime Scene Investigation</li>
              <li>Week 2: Crime Scene Management and Evidence Collection</li>
              <li>Week 3: Forensic Analysis Techniques</li>
              <li>Week 4: Crime Scene Reconstruction and Reporting</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Course Code: CSI-03M / CSI-003M</h3>
            <ul className="mt-2 space-y-2">
              <li>Weeks 1-2: Introduction to Crime Scene Investigation</li>
              <li>Weeks 3-4: Crime Scene Management and Documentation</li>
              <li>Weeks 5-6: Evidence Identification and Collection</li>
              <li>Weeks 7-8: Forensic Analysis Techniques</li>
              <li>Weeks 9-10: Specialized Crime Scene Investigations</li>
              <li>Weeks 11: Crime Scene Reconstruction and Analysis</li>
              <li>Weeks 12: Forensic Reporting, Case Studies and Practical Assessments</li>
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
            Name: Dr. Saumya Tewari
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

export default CrimeSceneInvestigation;
