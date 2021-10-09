import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import Button from '../button';
import Marginer from '../marginer';

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SCREENS } from '../responsive';

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        py-1
        px-2
        md:py-2
        md:px-9
    `}
`

const ItemContainer = styled.div`
    ${tw`flex relative`};
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`;

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mx-2
        md:mx-5
    `}
`;

const DateCalendar = styled(Calendar)<{ offset? : boolean }>`
    position: absolute;
    max-width: none;
    top: 3.2em;
    left: 0;
    user-select: none;

    ${({ offset }) => offset && css`
        left: -7em;
    `}
    @media (min-width: ${SCREENS.md}) {
        left: -2em;
    }
`

function BookCard() {
    const [startDate, setStartDate] = useState(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleStartDateCalendar = ()=>{
        if(isReturnCalendarOpen){
            setReturnCalendarOpen(false)
        }
        setStartCalendarOpen(!isStartCalendarOpen);
    }

    const toggleReturnDateCalendar = ()=>{
        if(isStartCalendarOpen){
            setStartCalendarOpen(false)
        }
        setReturnCalendarOpen(!isReturnCalendarOpen);
    }

    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown}/> 
                </SmallIcon>
                {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate} />}
            </ItemContainer>
            <LineSeparator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}/> 
                </SmallIcon>
                {isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate} offset />}
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em"/>
            <Button text="Book Your Ride"/>
        </CardContainer>
    )
}

export default BookCard
