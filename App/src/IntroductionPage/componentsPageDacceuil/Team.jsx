import React from 'react';
import './Team.css';
import yg from './img/yg.jpg';
import kt from './img/khalil.jpg';
const Team = () => {
  // Function to render each team member
  const renderMember = (member) => {
    return (
      
      <div className="member" key={member.name}>
        <div className="member-text">
          <img className="member-img set-bg" src={member.image}></img>
          <h2>{member.name}</h2>
          <span>{member.title}</span>
        </div>
        <div className="member-social">
          {member.socialMedia.map((link) => (
            <a key={link.platform} href={link.url}><i className={`fa fa-${link.platform}`}></i></a>
          ))}
        </div>
        <div className="member-info">
          <div className="member-img mf set-bg" style={{ backgroundImage: `url(${member.image})` }}></div>
          <div className="member-meta">
            <h2>{member.name}</h2>
            <span>{member.title}</span>
          </div>
          {/* <p>{member.description}</p> */}
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
        // { platform: 'facebook', url: 'https://www.facebook.com/' },
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/youssef-ghaoui-3a82a222a/' },
        // { platform: 'twitter', url: 'https://www.twitter.com/' }
      ],
      description: 'Youssef is an expert in business development and a valued member of our team. He excels at bringing new ideas to the table and helping clients achieve their goals.'
    },
    {
      name: 'Hatem Nefzi',
      title: 'Software Egineer',
      image: 'img/member/2.jpg',
      socialMedia: [
        // { platform: 'facebook', url: 'https://www.facebook.com/' },
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/nefzi-hatem-aa7047285/' },
        // { platform: 'twitter', url: 'https://www.twitter.com/' }
      ],
      description: 'Hatem leads the marketing team and has a wealth of experience in the industry. His expertise and creativity bring innovation to our marketing strategies.'
    },
    {
      name: 'Khalil Trabelsi',
      title: 'Sofware Engineer',
      image: kt,
      socialMedia: [
        // { platform: 'facebook', url: 'https://www.facebook.com/' },
        { platform: 'linkedin', url: 'https://www.linkedin.com/in/khalil-trabelsi-softwareengin/' },
        // { platform: 'twitter', url: 'https://www.twitter.com/' }
      ],
      description: 'Khalil is our product manager, ensuring that every product meets the highest standards. His attention to detail and dedication are vital to our success.'
    }
  ];

  return (
    <section className="team-section spad">
      <div className="containerT">
        <div className="section-title text-center">
          <h2>Meet Our Team</h2>
          <p>Our experts in the field of crypto currency can always help you with any of your questions!</p>
        </div>
        <div className="team-members clearfix">
          {teamMembers.map((member) => renderMember(member))}
        </div>
      </div>
    </section>
  );
};

export default Team;
