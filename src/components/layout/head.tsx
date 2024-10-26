import { createPortal } from 'react-dom';

const root = document.head;
export const Head = ({ children }: { children: React.ReactNode }) => {
  console.log('head', root, children);
  return createPortal(children, root);
};
