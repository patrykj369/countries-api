import React, {FC} from 'react';
import styled from 'styled-components'

import {device} from './../../styledHelpers/deviceWidth'

const MyComponent = styled.div`
    background-color: aqua;
    min-height: 100vh;
    margin: 0 auto;
    @media ${device.mobileS}{
        max-width: 320px;
    }
`;

export const MainPage: FC = () => {
    return (
        <MyComponent>
            <h1>test nowej strony w react - countries app</h1>
        </MyComponent>
    )
}
