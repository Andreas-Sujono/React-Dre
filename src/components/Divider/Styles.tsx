import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

interface ILineProps {
    color: string;
    width: string;
    thick: string;
    textLeft?: string;
}
export const Line = styled.div < ILineProps > `
    width: ${(props) => props.textLeft || props.width};
    height: ${(props) => props.thick};
    background: ${(props) => props.color};
`;

interface IStyledText {
    textGap: string;
}
export const StyledText = styled.div < IStyledText > `
    font-size: 1em;
    padding: 0 ${(props) => props.textGap};
`;
