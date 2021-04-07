import React, { useState, memo, useRef } from 'react';
import ClickOutsidehandler from 'components/ClickOutsideHandler';
import { SearchIcon } from 'components/Icon';
import { SearchContainer, IconContainer, StyledInput } from './SearchBar.style';

interface Styles {
  containerStyle?: Record<string, any>;
  inputStyle?: Record<string, any>;
  inputDisabledStyle?: Record<string, any>;
  iconStyle?: Record<string, any>;
}

interface ISearchBarProps {
  // input props
  value: string;
  onChange: (value: string, e: any) => void;
  placeholder?: string;
  disabled?: boolean;

  // others
  width: string;
  onSearch?: (searchvalue?: string) => void;
  showIcon?: boolean;
  iconWidth?: string;
  searchIcon?: React.ReactNode;
  iconPosition?: 'left' | 'right',
  isExpand?: boolean;
  clickOutsideToCollapse?: boolean;
  styles?: Styles
}

const SearchBar: React.FunctionComponent<ISearchBarProps> = ({
  // input props
  value,
  onChange,
  placeholder = '',
  disabled = false,

  // others
  width,
  onSearch = () => null,
  showIcon = true,
  iconWidth = '36px',
  searchIcon = <SearchIcon />,
  iconPosition = 'left',
  isExpand = true,
  clickOutsideToCollapse = false,
  styles = {
    containerStyle: {},
    inputStyle: {},
    inputDisabledStyle: {},
    iconStyle: {}
  },
}) => {
  const [isInputExpanded, setIsInputExpanded] = useState(isExpand);
  const inputRef = useRef<HTMLInputElement>(null);
  const props = {
    iconWidth, iconPosition, widthString: width, isInputExpanded
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange(e.target.value, e);
  };

  const handleSearch = () => {
    if (isInputExpanded) onSearch(value);
    else setIsInputExpanded(true);
    inputRef.current?.focus();
  };

  const handleClickOutside = () => {
    if (clickOutsideToCollapse && isInputExpanded) {
      setIsInputExpanded(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const renderIcon = () => (
    <IconContainer
      style={styles.iconStyle}
      onClick={handleSearch}
      className="dre-icon-container"
      {...props}
    >
      {searchIcon}
    </IconContainer>
  );

  return (
    <ClickOutsidehandler onOutsideClick={handleClickOutside}>
      <SearchContainer
        style={styles.containerStyle}
        className="dre-search-bar"
        {...props}
      >
        {showIcon && iconPosition === 'left' && renderIcon() }
        <StyledInput
          value={value}
          onChange={handleChange}
          onFocus={() => setIsInputExpanded(true)}
          placeholder={placeholder}
          disabled={disabled}
          style={!disabled ? styles.inputStyle : { ...styles.inputStyle, ...styles.inputDisabledStyle }}
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className="dre-search-input"
          {...props}
        />
        {showIcon && iconPosition === 'right' && renderIcon() }
      </SearchContainer>
    </ClickOutsidehandler>
  );
};

export default memo(SearchBar);
