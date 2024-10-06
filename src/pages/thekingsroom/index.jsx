import React from "react";
import styles from "./tkr.module.scss";
import { AnimatedText } from "../../components/Animations/AnimatedText";
import { SlideInLeft } from "../../components/Animations/reveal/SlideInLeft";
import { Reveal } from "../../components/Animations/reveal/Reveal";

const TheKingsroom = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Reveal>
          <h2>What is The Kings Room?</h2>
        </Reveal>
        <SlideInLeft>
          <p>
            A collective & platform with new and experienced artists( Djs,
            Producers, Dancers, Photographers, Videographers, ), where all
            together can share / grow / support each other in a global scale.
            The name come from the idea to give our listeners a majestic moment,
            with high levels quality in all aspect that we are connected. We
            believe strongly in the concept and aim of promoting culture and
            social awareness
          </p>
        </SlideInLeft>
      </div>
      <div>
        <Reveal>
          <h2>What are the goals?</h2>
        </Reveal>
        <SlideInLeft>
          <p>
            The goal is to lead a team that raises the finesses sides of the
            difference cultures by inspiring everyone around us with quality on
            our services.
          </p>
        </SlideInLeft>
      </div>
      <div>
        <SlideInLeft>
          <h2>
            OUTSTANDING SERVICE <br />
            <span>
              – Exceeding the expectations of our audience, clients and within
              the team.
            </span>
          </h2>
        </SlideInLeft>
        <SlideInLeft>
          <h2>
            CREATE AND EMERGE <br />
            <span>
              - We’re always giving room for creativity and we are always on a
              constant search for improvement..
            </span>
          </h2>
        </SlideInLeft>
        <div>
          <SlideInLeft>
            <h2>
              THANK YOU “STRATEGY” <br />
              <span>
                – We make sure to NOT FORGET too be grateful for their presence,
                we praise them and we earn their loyalty .
              </span>
            </h2>
          </SlideInLeft>
        </div>
        <SlideInLeft>
          <h2>
            LEAVING A LEGACY <br />
            <span>
              – As we stay humble and grateful too our roots, we live then pass
              on the valour to people around us on this journey.
            </span>
          </h2>
        </SlideInLeft>
      </div>
      <div>
        <h2>What we provide the our team members?</h2>
        <SlideInLeft>
          <p>
            Full support on they projects as much we can, right now
            unfortunately we don’t have any financial support but we want to use
            our social media platform. The project have been up for couple of
            years and we accept that things should be better, but what better
            than the awareness and desire to get better and want to grow with
            people around us ? So we are ready to step up and do be comfortable
            with anything, always willing to learn and get better as artists and
            community
          </p>
        </SlideInLeft>
      </div>
      <div>
        <h2>What we expect from our team members?</h2>
        <SlideInLeft>
          <p>
            To support each other in our projects, to don’t lose the fire to
            want to succeed, to remember we here to support, so be free to talk
            to us ! We want our members to remember that is this new era we are
            stronger together and that we really would love to have proud to
            represent us on your social media platform.
          </p>
        </SlideInLeft>
      </div>
    </div>
  );
};

export default TheKingsroom;
