import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Member.module.scss';

const Member = ({ teamMembersData }) => {
  const { memberId } = useParams();

  // Find the member with the specified ID
  const member = teamMembersData.find(
    (member) => member.id === parseInt(memberId)
    );

  useEffect(() => {
    console.log(member);
  }, [member]);
    
  function addLineBreak(string) {
    // Check if the string contains a dot (.)
    if (string.includes('.')) {
      // Split the string into an array using the dot (.) as a separator
      const parts = string.split('.');
      
      // Join the parts back together with a line break (\n) in between
      return parts.join('.\n\n');
    }
    
    // Return the original string if no dot (.) is found
    return string;
  }
  
  // Example usage:
  const description = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Accusantium doloremque laudantium.';
  const formattedDescription = addLineBreak(member.fullDesc);
    console.log(formattedDescription);
    
  return (
    <div className={styles.member}>
      <h1>{member.name}</h1>
      <div className={styles.image}>
        <img src={member.img} alt={member.name} />
      </div>
      <p>{member.desc}</p>
      <h4>{formattedDescription}</h4>
    </div>
  );
};

export default Member;
