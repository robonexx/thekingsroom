import { motion } from 'framer-motion';
import styles from './About.module.scss';
import { teamMembersData } from '../../assets/teamMembersData';
import TeamMember from '../../components/TeamMember';

const About = () => {
  console.log(teamMembersData);
  return (
    <div className={styles.about}>
      <section>
        <motion.h1
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            easings: 'ease-in-out',
            delay: 0,
          }}
        >
          The Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            easings: 'ease-in-out',
            delay: 0.3,
          }}
        >
          A collective of creative artists, an entertainment collective, radio
          shows, live events and workshops in dance and dj:ing. The Kings Room
          is a platform with new and experienced artists, where all together
          work to provide the best quality in music and dance. Our goal is to
          lead a team that raises the finests sides of the Urban culture by
          inspiring everyone around us.
        </motion.p>
      </section>
      <div className={styles.crew}>
        {teamMembersData ? (
          teamMembersData.map(({ name, desc, img, socials, id }) => (
            <TeamMember
              key={id}
              name={name}
              desc={desc}
              img={img}
              socials={socials}
              id={id}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default About;
