import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faBehance } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import images
import tabish from '../assets/coreteam/Tabish_sarosh.jpeg';
import kirti from '../assets/coreteam/ms-kirti-gupta.jpg';
import akansha from '../assets/coreteam/Akansha.jpg';
import laxmi from '../assets/coreteam/LaxmiDashPriya.jpeg';
import anushka from '../assets/coreteam/anushka.jpeg';
import chanderjeet from '../assets/coreteam/Chanerjeet_yadav.jpeg';
import nasmeen from '../assets/coreteam/Nasmeen_TSA.jpeg';
import harshit from '../assets/coreteam/Harshit_Handa.jpeg';

// Sample team members data
const teamMembers = [
    {
        picture: tabish,
        fullName: "Tabish Sarosh",
        designation: "Founder / CEO",
        bio: "Legal Consultant, Delhi Police",
        detailPage: "/team/tabish-sarosh",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: kirti,
        fullName: "Ms. Kirti Gupta",
        designation: "Manager - Legal & Forensic",
        bio: "Experienced manager specializing in legal and forensic services.",
        detailPage: "/team/ms-kirti-gupta",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: akansha,
        fullName: "Akansha Yadav",
        designation: "Forensic Associate",
        bio: "Skilled forensic associate focused on criminal investigations.",
        detailPage: "/team/akansha-yadav",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: laxmi,
        fullName: "LaxmiPriya Dash",
        designation: "Forensic Associate (Serology)",
        bio: "Expert in forensic serology and analysis.",
        detailPage: "/team/laxmipriya-dash",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: anushka,
        fullName: "Anushka Mishra",
        designation: "Forensic Associate (Chemistry and Toxicology)",
        bio: "Specializing in forensic chemistry and toxicology analysis.",
        detailPage: "/team/AnushkaMishra",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: chanderjeet,
        fullName: "Chanderjeet Yadav",
        designation: "Criminal Lawyer",
        bio: "Experienced criminal lawyer with a focus on forensic cases.",
        detailPage: "/team/ChanderjeetYadav",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: nasmeen,
        fullName: "Nasmeen",
        designation: "Assistant Manager-Legal (TSA/CCIFS)",
        bio: "Assistant manager supporting legal operations at CCIFS.",
        detailPage: "/team/nasmeen",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: harshit,
        fullName: "Harshit Handa",
        designation: "Advocate (Cyber Law)",
        bio: "Advocate specializing in cyber law and digital forensics.",
        detailPage: "/team/HarshitHanda",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
];

// Team member item component
const TeamMemberItem = ({ member }) => (
    <div className="flex flex-col justify-between h-full transition-transform duration-300 transform hover:scale-105 bg-white dark:bg-[#1f2937] rounded-lg shadow-lg p-4 hover:shadow-xl">
        <img
            src={member.picture}
            alt={`Profile of ${member.fullName}`}
            className="w-[230px] h-[220.41px] object-fit rounded-full mx-auto transition-transform duration-300 transform hover:scale-110"
            width="230"
        />
        <div className="px-4 py-6 flex flex-col flex-grow">
            <Link to={member.detailPage}>
                <h4 className="text-2xl font-medium mb-2 hover:text-blue-600 transition duration-300">{member.fullName}</h4>
            </Link>
            <h6 className="font-medium">{member.designation}</h6>
            <p className="opacity-50 mb-0 flex-grow">{member.bio}</p>
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
    </div>
);

// PropTypes validation
TeamMemberItem.propTypes = {
    member: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        socialLinks: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.object.isRequired,
                href: PropTypes.string.isRequired,
            })
        ).isRequired,
        detailPage: PropTypes.string.isRequired,
    }).isRequired,
};

// Main Team Section Component
const TeamMember2 = () => {
    return (
        <section className="ezy__team2 py-14 md:py-24 bg-[#0b1727] dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="sm:max-w-md text-center">
                        <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
                            Our Core Team
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Meet the dedicated professionals at the Center for Criminal Investigation & Forensic Science.
                        </p>
                    </div>
                </div>
                
                <div className="grid grid-cols-4 gap-6 text-center">
                    {teamMembers.map((member, i) => (
                        <div className="col-span-4 md:col-span-2 lg:col-span-1 h-full" key={i}>
                            <TeamMemberItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMember2;
