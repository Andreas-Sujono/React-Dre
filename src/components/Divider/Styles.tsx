import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Line = styled.div`
    width: ${(props) => props.textLeft || props.width};
    height: ${(props) => props.thick};
    background: ${(props) => props.color};
`;

export const StyledText = styled.div`
    font-size: 1em;
    padding: 0 ${(props) => props.textGap};
`;
