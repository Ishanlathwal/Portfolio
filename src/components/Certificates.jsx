import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { CertificatesCard } from "./Cards/CertificatesCard";
import { certificates } from "../constants";

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant(0.5)}>
          <h2 className={styles.sectionHeadText}>My Certificates</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificatesCard
            key={certificate.id}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");
