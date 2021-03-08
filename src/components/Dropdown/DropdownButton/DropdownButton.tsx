import React, { useState } from 'react';
import { DropdownContainer, ButtonContainer } from './DropdownButton.style';

interface IDropdownButtonProps {
    button: React.ReactNode;
    menuContent: React.ReactNode;
    height?: 'auto' | string;
    clickOutsideToClose?: boolean;
    isOpen?: boolean; // default for the first time
    hoverToOpen?: boolean;
    useCommonStyle?: boolean;
    useDefaultAnimation?: boolean;
    menuPosition?: 'down' | 'up' | 'right' | 'left'; // IN-PROGRESS
}

const DropdownButton: React.FunctionComponent<IDropdownButtonProps> = ({
  button,
  menuContent,
  height = 'auto',
  clickOutsideToClose = true,
  isOpen = false,
  hoverToOpen = false,
  useCommonStyle = true,
  useDefaultAnimation = true,
  menuPosition = 'down',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(isOpen);

  const handleButtonHover = () => {
    if (hoverToOpen) {
      setIsMenuOpen(true);
    }
  };

  return (
    <DropdownContainer>
      <ButtonContainer useCommonStyle={useCommonStyle} onHover={handleButtonHover}>
        {button}
      </ButtonContainer>
      <div>test</div>
    </DropdownContainer>
  );
};

export default DropdownButton;
