import React from 'react'
import Title from '../hooks/Title'
import Button from './Button'
import Count from './Count'


const ParentComponent = ({age,salary}) => {
    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button />
            <Count text="Age" count={salary}/>
            <Button/>
        </div>
    )
}

export default ParentComponent