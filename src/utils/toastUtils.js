import { toast, Bounce } from 'react-toastify';
const toastStyle = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  transition: Bounce,
};
export const showError = (message) => {
  toast.error(message, toastStyle);
};

export const showSuccess = (message) => {
  toast.success(message, toastStyle);
};
