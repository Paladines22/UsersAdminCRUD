import React from 'react';

const Modal = ({ isVisible, children }) => {
  return (
    <>
      {isVisible && (
        <div className=" flex flex-row justify-center items-center inset-0 absolute bg-[rgba(0,0,0,0.5)] p-2">
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
