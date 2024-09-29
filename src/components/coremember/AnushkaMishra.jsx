import React from "react";
import anushkaImage from "../../assets/coreteam/anushka.jpeg"; // Adjust the path as needed

const AnushkaMishra = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-8 md:px-20 lg:px-32 space-y-6 md:space-y-0 md:space-x-12 rounded-lg shadow-lg">
      {/* Left container for image and designation */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img
          src={anushkaImage}
          alt="Anushka Mishra"
          className="w-40 h-40 rounded-full border-4 border-green-500 object-cover mx-auto md:mx-0"
        />
        <h3 className="mt-4 text-xl font-bold">Anushka Mishra</h3>
        <p className="mt-2 text-sm text-gray-400">Forensic Associate</p>
        <p className="mt-1 text-sm text-gray-400">(Forensic Chemistry and Toxicology)</p>
      </div>

      {/* Right container for bio details */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">Expertise in Forensic Chemistry and Toxicology</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4 text-justify">
          <p>
            Anushka Mishra is a dedicated Forensic Science Specialist currently affiliated with the
            Centre for Criminal Investigations and Forensic Science in Rohini, New Delhi. With a
            Master’s degree in Forensic Chemistry and Toxicology from Jharkhand Raksha Shakti
            University, Anushka has developed a strong foundation in forensic science, particularly
            in the areas of chemical and toxicological analysis.
          </p>
          <p>
            She has received extensive training at the Directorate of Forensic Science Laboratory,
            Ranchi, where she honed her skills in advanced forensic techniques such as FTIR, TLC,
            and GC-MS. Her expertise includes the extraction and analysis of drugs, toxins, and
            chemicals from biological matrices. Anushka has also completed specialized training in
            DNA fingerprinting at BioAxis DNA Research Centre Pvt. Ltd., Hyderabad, further
            broadening her forensic skill set.
          </p>
          <p>
            Anushka’s professional journey includes a two-month training program at the State
            Forensic Science Laboratory, Bhubaneswar, where she gained valuable hands-on experience
            in forensic investigations. She is actively engaged in the forensic community and has
            participated in the Eastern Forensic Medicine Innovation Conference at Manipal Tata
            Medical College, reflecting her commitment to staying current with the latest
            advancements in forensic science.
          </p>
          <p>
            With her robust academic background and practical expertise, Anushka Mishra is dedicated
            to contributing to the field of forensic science and supporting the criminal justice
            system through her specialized knowledge and skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnushkaMishra;
