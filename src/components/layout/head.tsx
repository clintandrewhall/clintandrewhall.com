import { createPortal } from 'react-dom';

const root = document.head;

export const Head = ({ children }: { children: React.ReactNode }) => {
  return createPortal(children, root);
};
