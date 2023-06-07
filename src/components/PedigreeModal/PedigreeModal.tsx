import React, { useState } from "react";
import Modal from "react-modal";
import { Parent, Pedigree } from "../../pages/admin/Update";
import { FiX } from "react-icons/fi";

import "./PedigreeModal.scss";

const PedigreeModal = ({
  openModal,
  setOpenModal,
  chosenParent,
  setPedigree,
  pedigree,
  index,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  chosenParent: Parent;
  pedigree: Pedigree;
  setPedigree: React.Dispatch<React.SetStateAction<Pedigree>>;
  index: number;
}) => {
  const [newTitle, setNewTitle] = useState<string>("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      style={customStyles}
    >
      <div className="modal-wrapper">
        <div className="name-input">
          <h3>Namne</h3>
          <input
            type="text"
            value={pedigree[index]?.name}
            onChange={(e) => {
              setPedigree((prevState) => {
                const updatedState = [...prevState];
                updatedState[index] = {
                  name: e.target.value,
                  titles: updatedState[index].titles,
                };
                return updatedState;
              });
            }}
          />
        </div>
        <div className="modal-titles">
          {pedigree[index]?.titles?.map((e) => (
            <div className="modal-title">
              {e}
              <FiX
                size={20}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPedigree((prevState) => {
                    const updatedState = [...prevState];
                    updatedState[index] = {
                      name: updatedState[index].name,
                      titles: updatedState[index].titles.filter(
                        (title) => title != e
                      ),
                    };
                    return updatedState;
                  });
                }}
              />
            </div>
          ))}
        </div>
        <div className="modal-form">
          <div className="input-field-container">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button
              className="title-btn"
              // onClick={() => {
              //   setPedigree((prevState) => {
              //     const updatedState = [...prevState];
              //     updatedState[index] = {
              //       name: updatedState[index].name,
              //       titles: [...updatedState[index].titles, newTitle],
              //     };
              //     return updatedState;
              //   });
              //   setNewTitle("");
              // }}
              onClick={() => {
                setPedigree((prevState) => {
                  const updatedState = [...prevState];
                  const titles = Array.isArray(updatedState[index].titles)
                    ? [...updatedState[index].titles]
                    : [];
                  updatedState[index] = {
                    name: updatedState[index].name,
                    titles: [...titles, newTitle],
                  };
                  return updatedState;
                });
                setNewTitle("");
              }}
            >
              Lägg till titel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PedigreeModal;
