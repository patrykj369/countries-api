import React, {FC} from 'react';
import styled from 'styled-components';

import {device} from './../../styledHelpers/deviceWidth';
import { Navbar } from '../Navbar/Navbar';

const MyComponent = styled.div`
    min-height: 100vh;
    margin: 0 auto;
    @media ${device.mobileS}{
    }
`;

export const MainPage: FC = () => {
    return (
        <MyComponent>
            <Navbar/>
        </MyComponent>
    )
}
