import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons
import './Team.css';
import yg from './img/yg.jpg';
import kt from './img/khalil.jpg';

const Team = () => {
  // Function to render each team member
  const renderMember = (member) => {
    return (
      <div className="member" key={member.name}>
        <div className="member-text">
          <img className="member-img" src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
          <span>{member.title}</span>
        </div>
        <div className="member-social">
          {member.socialMedia.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.platform === 'linkedin' && <FaLinkedin />}
            </a>
          ))}
        </div>
      </div>
    );
  };

  // Define team members' data
  const teamMembers = [
    {
      name: 'Youssef Ghaoui',
      title: 'ML Engineer',
      image: yg,
      socialMedia: [
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/youssef-ghaoui-3a82a222a/' }
      ]
    },
    {
      name: 'Hatem Nefzi',
      title: 'Software Engineer',
      image: 'img/member/2.jpg',
      socialMedia: [
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/nefzi-hatem-aa7047285/' }
      ]
    },
    {
      name: 'Khalil Trabelsi',
      title: 'Software Engineer',
      image: kt,
      socialMedia: [
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/khalil-trabelsi-softwareengin/' }
      ]
    }
  ];

  return (
    <section className="team-section spad">
      <div className="containerT">
        <div className="section-title text-center">
          <h2>Meet Our Team</h2>
          <p>Our experts in the field of cryptocurrency can always help you with any of your questions!</p>
        </div>
        <div className="team-members clearfix">
          {teamMembers.map((member) => renderMember(member))}
        </div>
      </div>
    </section>
  );
};

export default Team;
