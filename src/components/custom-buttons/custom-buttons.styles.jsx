import styled from 'styled-components';


export const CustomButtonContainer = styled.div`
    button {
        min-width: 100px;
        width: auto;
        /* border-radius: 5px; */
        height: 35px;
        letter-spacing: 0.5px;
        line-height: 28px;
        padding: 0 18px 0 18px;
        font-size: 12px;
        border: none;
        outline: none;
        cursor: pointer;
        @media screen and (max-width: 767px) { 
        width: 100%;
    }
    }
`;