import { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [message, onClose]);

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50">
      {message}
    </div>
  );
};

export default Toast;
