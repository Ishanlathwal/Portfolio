/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

export const CertificatesCard = ({
  index,
  certificate,
  name,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 1, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{certificate}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{company}</p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      {console.log(certificate)}
    </div>
  </motion.div>
);
