import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.scss";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading?: boolean;
  title: string;
  message: string;
}

const SucessModal = ({
  isOpen,
  onClose,
  loading,
  title,
  message,
}: SuccessModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      <div className="container">
        <div>
          <h2>Tack för ditt meddelande!</h2>
        </div>
        <div>
          <p>Vi svarar dig så fort vi kan!</p>
        </div>
        <button className="close-btn">Stäng</button>
      </div>
    </Modal>
  );
};

export default SucessModal;
