import { useState } from 'react';

type Props = {}

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'} Page
      </button>
    </div>
  );
};

export default Navbar;
