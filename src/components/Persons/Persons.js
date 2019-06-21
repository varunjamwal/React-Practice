import React from 'react'
import Person from './Person/Person';
const persons = (props) => props.persons.map((person , key) => {
        return  <Person 
        click={() => props.clicked(key)}
        name={person.name} 
        age={person.age}
        key ={person.id}
        changed={(event) => props.changed(event,person.id)}/>
}); //to directly return something

export default persons;