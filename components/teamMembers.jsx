import React from "react";

// Sample data for team members
const teamMembers = [
  {
    name: "Josué Aubert",
    role: "Lead",
    email: "josue.aubert@epfl.ch",
    section: "PH BA3",
    description: "",
    imgSrc: "/images/team_images/josué.png",
  },
  {
    name: "Aymeric Deslarzes",
    role: "Lead",
    email: "aymeric.deslarzes@epfl.ch",
    section: "PH BA3",
    description: "",
    imgSrc: "/images/team_images/Aymeric.png",
  },
  {
    name: "Alae Messaoudi",
    role: "Webmaster",
    email: "alae.messaoudi@epfl.ch",
    section: "IN BA3",
    description: "",
    imgSrc: "/images/team_images/Alae.png",
  },
  {
    name: "Jules Hamou",
    role: "Telescope operator",
    email: "jules.hamou@epfl.ch",
    section: "MA BA3",
    description: "",
    imgSrc: "/images/team_images/Jules.png",
  },
  {
    name: "Anna Husband",
    role: "Telescope operator",
    email: "anna.husband@epfl.ch",
    section: "PH BA3",
    description: "",
    imgSrc: "/images/team_images/Anna.png",
  },
  {
    name: "Avin Mohebi",
    role: "Telescope operator",
    email: "avin.mohebi@epfl.ch",
    section: "PH BA3",
    description: "",
    imgSrc: "/images/team_images/Avin.png",
  },
  {
    name: "Aurelien Genin",
    role: "Telescope operator, Systems manager",
    email: "aurelien.genin@epfl.ch",
    section: "MT MA1",
    description: "",
    imgSrc: "/images/team_images/Aurélien.png",
  },
  {
    name: "Clara Coquillard",
    role: "Telescope operator, Communication",
    email: "clara.coquillard@epfl.ch",
    section: "PH BA3",
    description: "",
    imgSrc: "/images/team_images/clara.png",
  },
  {
    name: "Clara Coquillard",
    role: "Telescope operator, Communication",
    email: "clara.coquillard@epfl.ch",
    section: "PH BA3",
    description: "",
    imgSrc: "/images/team_images/Alae.png",
  },
];

const TeamSlider = () => {
  return (
    <div className="w-full overflow-x-scroll flex p-4 ">
      <div className="flex  space-x-[1px]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="min-w-[300px] w-full md:max-w-[300px] min-h-[200px] p-8 flex flex-col text-black rounded-xl bg-black"
          >
            <div className="w-full h-[250px] bg-cover md:block hidden rounded-lg mb-2">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-[250px] object-cover md:block hidden rounded-lg mb-2"
              />
            </div>
            <div className="flex gap-x-2 mb-2">
              <div className="bg-[#B00000] text-md text-black px-2 py-0.5 rounded-md">
                {member.role}
              </div>
            </div>
            <p className="text-white font-semibold">{member.name}</p>
            <a
              className="text-[#B00000] hover:text-[#800000]"
              href={`mailto:${member.email}`}
            >
              {member.email}
            </a>
            <p className="text-white/40">{member.section}</p>
            <p className="text-white/40">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;