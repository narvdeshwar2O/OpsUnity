import { useState } from 'react';

/**
 * Custom hook for managing modal state
 * @param {boolean} initialState - Initial open state of the modal (default: false)
 * @returns {Object} Object containing isOpen state and control functions
 */
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
    setIsOpen // Direct setter for more control if needed
  };
};