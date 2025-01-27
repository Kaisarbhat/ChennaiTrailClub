'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '..';

function RegisterButton({ eventData }) {
  const { id, name, shortName, resultLink } = eventData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: '100%' }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '100%' }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center py-5 px-4"
    >
      <Button
        title={
          resultLink
            ? `Result of ${name} (${shortName})`
            : `Register for ${name} (${shortName})`
        }
        link={resultLink ? `${resultLink}` : `/events/register/${id}`}
        classname="bg-primary text-black md:text-[20px] xs:text-sm font-bold rounded-[42px] xs:px-6 xs:py-3 md:py-4 md:px-7 mt-4 hover:bg-black hover:text-primary xs:h-11 md:h-[60px] md:w-[445px] xs:w-[315px]"
        icon={true}
      />
    </motion.div>
  );
}

export default RegisterButton;
