import React, {FC} from 'react';
import styled from 'styled-components';

import {colors} from './../../styledHelpers/colors';
// import { fontSize } from '../../styledHelpers/fontSize';

const Wrapper = styled.div`
    position: relative;
    width: 50vw;

    box-shadow: 0px 2px 7px -1px rgb(185, 185, 185);
    background-color: ${colors.whiteDMLM};
    font-size: 4vw;
    border-radius: 5px;

    .arrow-down{
        height: 1rem;
    }

    .filterbar{
        margin: 0;
        padding: 1.3rem;
        height: 8vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-disactive{
        visibility: hidden;
        height: 0;
    }

    .container-active{
        position: absolute;
        width: 50vw;
        min-height: 1vh;
        background-color: ${colors.whiteDMLM};
        box-shadow: 0px 2px 7px -1px rgb(185, 185, 185);
        margin-top: .5rem;
        border-radius: 5px;
        padding: .5rem 1rem;
        transition: all .4s ease-out;


        button {
            background: none;
            border: none;
            display: flex;
            font-size: 4vw;
            margin: .3rem;
        }

        button:hover {
            font-weight: bold;
        }
    }


`;


const showFilter = () => {
    const container = document.getElementById("filtersID");

    if(container?.className === "container-disactive"){
        container.classList.add("container-active");
        container?.classList.remove("container-disactive");
    }else{
        container?.classList.add("container-disactive");
        container?.classList.remove("container-active");
    }
}

export const Filterbar: FC = () => {
    return(
        <Wrapper>
            <div className="filterbar" onClick={showFilter}>
                <p>Filter by Region</p>
                <img className="arrow-down" src="./icons/keyboard_arrow_down.svg" alt="Arrow Down"></img>
            </div>

            <div id="filtersID" className="container-disactive">
                <button>Africa</button>
                <button>America</button>
                <button>Asia</button>
                <button>Europe</button>
                <button>Oceania</button>
            </div>
        </Wrapper>

    );
}