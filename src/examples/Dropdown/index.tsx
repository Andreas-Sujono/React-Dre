import React from 'react';
import { DropdownButton as CommonDropdownButton } from 'components/Dropdown';

const DropdownButton = () => {
    const renderMenuContent = () =>
    <div>
        Menu Content
    </div>
   return (
    <CommonDropdownButton button={<button>test</button>} menuContent={renderMenuContent()}/>
   )
}

export default DropdownButton;
