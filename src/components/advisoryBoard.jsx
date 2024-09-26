import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

// Import images
import drUmarPal from '../assets/boardMember/dr-umar-pal-1.jpg';
import anuragSahu from '../assets/boardMember/Anurag-1280x1409.jpeg';
import alokMehta from '../assets/boardMember/aloksir-400x400.jpeg';
import awanishUpadhyay from '../assets/boardMember/awanish_ccifs.jpeg';
import dheerajBhardwaj from '../assets/boardMember/Dheeraj-480x543.jpeg';
import divyanshuSharma from '../assets/boardMember/Divyanshu-Sharma-980x1307.jpeg';
import eshaMaria from '../assets/boardMember/Esha-Maria-e1709896326632.jpeg';
import drGarimaPal from '../assets/boardMember/Dr.Garima.webp';
import manishMalhotra from '../assets/boardMember/ManishMalhotra.jpeg';
import drManpreetKaur from '../assets/boardMember/Dr_manpreet_kaur.jpeg';
import sarveshtthamKumar from '../assets/boardMember/mr-sarveshttham-kumar.jpg';
import shaukatAli from '../assets/boardMember/shaukat-ali.jpeg';
import drTinaGarg from '../assets/boardMember/dr-tina-garg.jpeg';
import ulhasGondhali from '../assets/boardMember/Ulhas-Gondhali.jpg';
import drVeenita from '../assets/boardMember/veenita.jpeg';

const teamMembers = [
    {
        picture: drUmarPal,
        fullName: "Dr Amar Pal Singh",
        bio: "Assistant Director, Delhi",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: anuragSahu,
        fullName: "Mr.Anurag Sahu",
        bio: "Assistant Professor, Department of forensic science, GIFS, Aurangabad",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: alokMehta,
        fullName: "Mr. Alok Mehta",
        bio: "Senior Scientific Officer, RFSL, Delhi",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: awanishUpadhyay,
        fullName: "Mr. Awanish Upadhyay",
        bio: "Scientist C, National Dope Testing Laboratory",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: dheerajBhardwaj,
        fullName: "Mr. Dheeraj Bhardwaj",
        bio: "Senior Scientific Assistant (Biology) FSL, Delhi Police",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: divyanshuSharma,
        fullName: "Mr. Divyanshu Sharma",
        bio: "FOUNDER, LEGAL PEDAGOGY, EDUSAGE EDTECH",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: eshaMaria,
        fullName: "Ms. Esha Maria",
        bio: "Senior Forensic Assistant, Delhi Police",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: drGarimaPal,
        fullName: "Dr. Garima Pal",
        bio: "Assistant Professor, National Law University, Mumbai",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: manishMalhotra,
        fullName: "Dr. Manish Malhotra",
        bio: "Scientist B, Physics Department, CFSL Bhopal",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: drManpreetKaur,
        fullName: "Dr Manpreet Kaur",
        bio: "Assistant Professor & Handwriting Expert, Lovely Professional University",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: sarveshtthamKumar,
        fullName: "Mr. Sarveshttham Kumar",
        bio: "Assistant Director, Toxicology, FSL (Bihar)",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: shaukatAli,
        fullName: "Mr. Shaukat Ali",
        bio: "Executive Secretary, Business & Employment Bureau",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: drTinaGarg,
        fullName: "Dr. Tina Garg",
        bio: "Principal at Royal College of Law",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: ulhasGondhali,
        fullName: "Mr. Ulhas Gondhali",
        bio: "Doctoral Student at CUNY, New York",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: drVeenita,
        fullName: "Dr. Veenita",
        bio: "Associate Professor, Senior specialist Obs & Gyn",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
];

const TeamMemberItem = ({ member }) => (
    <>
        <img
            src={member.picture}
            alt={member.fullName}
            className="w-[230px] h-[220.41px] object-fit rounded-full mx-auto"
        />
        <div className="px-4 py-6 xl:px-6">
            <h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
            <h6 className="font-medium">{member.designation}</h6>
            <p className="opacity-50 mb-0">{member.bio}</p>
            <div className="mt-6">
                {member.socialLinks.map((link, i) => (
                    <a
                        href={link.href}
                        className="inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                        key={i}
                    >
                        <FontAwesomeIcon icon={link.icon} />
                    </a>
                ))}
            </div>
        </div>
    </>
);

TeamMemberItem.propTypes = {
    member: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        socialLinks: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.object.isRequired,
                href: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

const AdvisoryBoard = () => {
    return (
        <section className="ezy__team2 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4 mx-auto">
                {/* Title and subtitle */}
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="sm:max-w-md text-center">
                        <h2 className="text-2xl leading-none font-bold md:text-[35px] mb-4 text-pretty">
                            Advisory Board Member
                        </h2>
                    </div>
                </div>
                
                {/* Team members grid */}
                <div className="grid grid-cols-4 gap-6 text-center">
                    {teamMembers.map((member, i) => (
                        <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
                            <TeamMemberItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvisoryBoard;
