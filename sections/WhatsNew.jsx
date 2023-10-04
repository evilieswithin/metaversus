'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, NewFeatures } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title="| What's New?" />
        <TitleText title={<>What's New about Metaversus</>} />
        <div className='mt-[48px] flex flex-wrap justify-between gap-6'>
          {newFeatures.map((feature) => (
            <NewFeatures key={feature} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src='/whats-new.png'
          alt='whats-new'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
