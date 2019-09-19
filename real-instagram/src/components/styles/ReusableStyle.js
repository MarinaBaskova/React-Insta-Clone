import styled from 'styled-components';

const UserNameReusable = styled.span`font-weight: ${(props) => (props.font ? 'bold' : '900')};`;

export default UserNameReusable;
