import styled from "styled-components";
import InstagramIcon from "../../assets/images/instagram-icon.png";
import EmailIcon from "../../assets/images/email-icon.png";

const ContactBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  span {
    margin-bottom: 10px;
    :first-child {
      border-bottom: 3px solid black;
    }
  }
`;

const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
  border: 2px solid black;
  cursor: pointer;
  margin-bottom: 10px;
  :hover {
    background-color: lightgray;
  }
  img {
    margin-right: 10px;
    max-width: 25px;
    max-height: 25px;
  }
`;

const contact = () => {
  return (
    <ContactBox>
      <span>GET IN TOUCH!</span>
      <span>Feel free to contact me to work on your project</span>
      <ContactLink
        target="_blank"
        href="https://www.instagram.com/gabrielnagib1979/"
      >
        <img src={InstagramIcon} alt="Instagram" />
        Follow me on Instagram
      </ContactLink>
      <ContactLink target="_blank" href="mailto:gabrielnagib79@gmail.com">
        <img src={EmailIcon} alt="Instagram" />
        gabrielnagib79@gmail.com
      </ContactLink>
    </ContactBox>
  );
};

export default contact;
