import styled from 'styled-components';

export const Container = styled.div.attrs({
  className: 'common-phone-number-input',
})`
  .react-tel-input {
    .country-list .country.highlight {
      background: ${props => `${props?.dropdownStyle?.activeBackgroundColor}`};
    }
    .country-list li:hover {
      background: ${props => `${props?.dropdownStyle?.activeBackgroundColor}`};
    }
  }
`;
