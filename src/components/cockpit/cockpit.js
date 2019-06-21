import React from 'react'
import './cockpit.css'
const cockpit = (props) => {
    const classes = [];
    const butclass = [];
    if(props.showPersons){
 butclass.push('but2');
    }
    else {
        butclass.length=0;
        butclass.push('but1');
    }
    if(props.persons.length <=2){
      classes.push('red');
    }
    if(props.persons.length <=1){
      classes.push('bold');
    }

    return(
        <div>
        <p className={classes.join(' ')}> Works !!!
        </p>
        <button 
        className = {butclass}
        onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default cockpit;