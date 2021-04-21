import styled from 'styled-components';



export const HeroContainer = styled.div` 
width: 100%;

.container {
    position: relative;
}

.content {
    position: absolute;
    z-index: 3;
    top: 25px;
    left: 80px;
}

.button-container {
    position: absolute;
    z-index: 3;
    top: 100px;
    left: 80px;
}

.button {
    background-color: #ddd;
}

.text {
    color: white;
    font-size: 1.5rem;
    font-family: MBCorpo Text,DaimlerCS-;
}
`;