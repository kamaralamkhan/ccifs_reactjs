import React from "react";

const CourseDetails = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-10 py-12">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Certificate Course in Crime Scene Investigation
          </h1>
          <p className="text-xl font-semibold text-gray-600 text-center mb-8">
            CCICSI
          </p>

          {/* Course Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            This comprehensive program is meticulously crafted to equip
            participants with the essential skills needed to unravel the
            mysteries concealed within crime scenes. Whether you are a student
            passionate about forensic science, a law enforcement professional
            seeking specialized knowledge, or an individual fascinated by the
            intricacies of crime scene analysis, this course is your gateway to
            a captivating discipline of investigation and justice.
          </p>

          {/* Course Objectives */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Course Objectives:
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-8">
            <li>
              Learn the art and science of documenting crime scenes, including
              photography, sketching, and note-taking for thorough and accurate
              record-keeping.
            </li>
            <li>
              Explore the principles of collecting and preserving physical
              evidence at crime scenes, emphasizing the importance of
              maintaining the integrity of evidence.
            </li>
            <li>
              Understand how evidence is handled, packaged, and forwarded and
              the importance of the chain of custody.
            </li>
            <li>
              Understand the techniques and methodologies employed in crime
              scene reconstruction to piece together events and establish
              timelines.
            </li>
            <li>
              Acquire insights into the legal provisions related to crime scene
              investigation, ensuring participants understand their roles within
              the legal framework.
            </li>
          </ol>

          {/* Weeks and Topics */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Weeks and Topics:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>
              Week 1: Introduction to Crime Scene Investigation, criminal law
              provisions and depiction of different crime scenes (Quiz 1)
            </li>
            <li>
              Week 2: Physical Evidences, Biological Evidences, Chemical
              Evidences (Quiz 2)
            </li>
            <li>
              Week 3: Handling, Packaging &amp; Forwarding of Exhibits (Quiz 3)
            </li>
            <li>Week 4: Crime Investigation Techniques (Quiz 4)</li>
            <li>Week 5: Concepts of Forensic Ballistics (Quiz 5)</li>
          </ul>

          {/* Suggested Readings */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Suggested Readings:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>
              Forensic Science: An Introduction by Richard Saferstein
            </li>
            <li>
              Forensic Science: An Introduction to Scientific and Investigative
              Techniques by Stuart H. James and Jon J. Nordby
            </li>
          </ul>

          {/* Grading Policy */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Grading Policy:
          </h2>
          <p className="text-gray-700 mb-4">
            Course grades are based on the following criteria:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Quiz (10 points each): 50</li>
            <li>Final Quiz: 50</li>
          </ul>
          <p className="text-gray-700 mb-8">
            Participants need to achieve at least 80% on weekly assessments and
            actively participate in the capstone project to successfully
            complete the course.
          </p>

          {/* Apply Button */}
          <div className="text-center">
            <a
              href="https://ccifs.in/application-form/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
