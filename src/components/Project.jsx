import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal.jsx";

const Project = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      key={item.id}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative">
        <img className="rounded-2xl" src={item.image} alt="image" />
        <motion.div
          className="absolute inset-0 bg-white opacity-0 flex items-center justify-center"
          whileHover={{ opacity: 0.9 }}
        >
          <div className="absolute top-0 mt-24 text-center ">
            <h3 className="text-4xl font-semibold text-pink-900">
              {item.name}
            </h3>
            <p className="text-lg text-accent">{item.technology}</p>
          </div>

          <div className="absolute bottom-0 mb-24">
            <button
              className="btn btn-lg bg-pink-900 hover:bg-accent-hover"
              onClick={openModal}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>

      <p className="capitalize text-accent text-sm mt-5 mb-1">
        {item.category}{" "}
      </p>

      <a href={item.href} target="_blank" rel="noopener noreferrer">
        <h3 className="text-2xl font-semibold capitalize mb-3 hover:text-pink-900">
          {item.name}
        </h3>
      </a>
      {isModalOpen && <Modal item={item} onClose={closeModal} />}
    </div>
  );
};

export default Project;
