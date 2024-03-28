
import React from 'react';
import styled from 'styled-components';

const OurTeam = () => {
  return (
    <StyledOurTeam>
      <h2>Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="/team-member1.jpg" alt="Team Member 1" />
          <h3>Youssef Ghaoui</h3>
          <p>team member</p>
          <a href="https://www.linkedin.com/in/youssef-ghaoui-3a82a222a/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-member">
          <img src="/team-member2.jpg" alt="Team Member 2" />
          <h3>Hatem Nefzi</h3>
          <p>team member</p>
          <a href="https://www.linkedin.com/in/nefzi-hatem-aa7047285/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="team-member">
          <img src="/team-member3.jpg" alt="Team Member 3" />
          <h3>Khalil Trab</h3>
          <p>team member</p>
          <a href="https://www.linkedin.com/in/trabelsi-khalil-848783171/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </StyledOurTeam>
  );
};

export default OurTeam;

// Styled Components for OurTeam
const StyledOurTeam = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .team-members {
    display: flex;
    justify-content: space-between;
  }

  .team-member {
    flex: 0 0 calc(33.33% - 20px);
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .team-member img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  .team-member h3 {
    margin-bottom: 10px;
  }

  .team-member p {
    color: #666;
    margin-bottom: 15px;
  }

  .team-member a img {
    width: 30px;
    margin-top: 10px;
  }
`;
