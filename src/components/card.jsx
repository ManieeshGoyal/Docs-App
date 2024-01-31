import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ doc, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      className="relative rounded-[2.8rem] bg-zinc-800/90 w-60  overflow-hidden  h-72 text-white px-5 py-8"
    >
      <BsFileEarmarkText size="1.2rem" />
      <p className="mt-4 text-sm leading-1">{doc.desc}</p>
      <div className="footer absolute left-0 bottom-0 w-full ">
        <div className="footer flex justify-between px-6 mb-7 w-full">
          {doc.fileSize}
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex justify-center items-center ">
            {doc.close ? (
              <FiDownload color="#ffffff" size=".8rem" />
            ) : (
              <IoMdClose color="#ffffff" size=".8rem" />
            )}
          </span>
        </div>
        {doc.tag.isOpen ? (
          <motion.div
            className={` ${
              doc.tag.tagTitle == "Upload" ? "bg-blue-600" : "bg-green-700"
            } w-full h-12 flex justify-center items-center text-sm`}
          >
            <h3>{doc.tag.tagTitle}</h3>
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
