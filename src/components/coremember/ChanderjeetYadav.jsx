import React from "react";
import chanderjeetImage from "../../assets/coreteam/Chanerjeet_yadav.jpeg"; // Adjust the path as needed

const ChanderjeetYadav = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white p-8 md:px-20 lg:px-32 space-y-6 md:space-y-0 md:space-x-12 rounded-lg shadow-lg">
      {/* Left container with image and designation */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img
          src={chanderjeetImage}
          alt="Chanderjeet Yadav"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover mx-auto md:mx-0"
        />
        <h3 className="mt-4 text-xl font-bold">Chanderjeet Yadav</h3>
        <p className="mt-2 text-sm text-gray-400">Head Criminal Litigation</p>
      </div>

      {/* Right container with bio details */}
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">From The Desk of The Head Criminal Litigation</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4 text-justify">
          <p>
            Chanderjeet Yadav is a Visiting Faculty at Lloyd Institute of Forensic Science, Greater Noida (Affiliated to National Forensic Science University, Gandhi Nagar). He has done a post-graduate certificate course in Criminal Law and Forensic Science from National Academy of Legal Studies and Research, Hyderabad & Completed his LL. B from Lloyd Law College Greater Noida. Before that, he pursued his Bachelor of Arts from Deen Dayal Upadhyaya College, Delhi University.
          </p>
          <p>
            He has been working as a Head Criminal Litigation in the Office of Dr. Tabish Sarosh & Associates since 2020 and dealing with a wide range of criminal trials, including offenses under the Indian Penal Code, Protection of Children from Sexual Offences, the Schedule Caste and the Schedule Tribes (Prevention of Atrocities) Act, and other special acts in Delhi District courts & High courts. Over the years, he has represented accused persons as well as victims.
          </p>
          <p>
            He has provided legal knowledge and organized forensic workshops for the Delhi police officials of Raj Park Police Station to equip investigating officers with the latest updates in law and forensic to improve the quality of investigations.
          </p>
          <p>
            He has conducted various legal awareness programs on “Protection of Children from Sexual Offences Act, 2012” and “Juvenile Justice Act, 2015” in various NGOs, including Pryas, Nutan, and Janhit, Delhi.
          </p>
          <p>
            He has adjudged the 2nd National Moot Court Competition, 2021 at Maharaja Agrasen Institute of Management Studies and conducted various workshops on the importance of forensic science in investigation, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Workshop on “Crime Scene Investigation and Forensic Science” held at Dr. Akhilesh Das Gupta Institute of Technology & Management, Shastri Park, New Delhi on 11th October 2023.</li>
            <li>Conducted a workshop on “Navigating the Legal Landscape of Forensic Science and Participatory Learning” at Christ University, Ghaziabad on 27th September 2023.</li>
            <li>Organized workshop on Crime Scene & Forensic Investigation at CPJ College Campus on 25th April 2023.</li>
            <li>Delivered lectures on Crime Scene Investigation at various colleges including Royal College Ghaziabad, IIMT Greater Noida.</li>
            <li>Organized National Seminar on “Importance of Forensic Science for Fair Investigation” at Shri Venkateshwara University on 26th November 2022.</li>
            <li>Organized Workshop on “Crime Scene Investigation and Forensic Science” at Jamia Hamdard on 1st November 2022.</li>
            <li>Conducted a workshop on “Sexual Harassment of Women in the Workplace (Prevention, Prohibition and Redressal) Act, 2013 for women police officials in Prashant Vihar Police Station, Delhi.</li>
          </ul>
          <p>
            Chanderjeet Yadav’s extensive experience and dedication to legal education and advocacy make him a respected figure in the legal community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChanderjeetYadav;
