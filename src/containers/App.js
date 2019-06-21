import React,{ useState } from 'react';
import Radium from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';


const App = props => {
 const [personState, setPersons ] = useState({
    persons : [                                     //New Method using useState hook
      {id: 'sdsa1',name : 'varun', Age : 23},
      {id: 'asdd1',name : 'P1', Age : 30}
    ],
    });
   const [switchView,setSwitch] = useState({
    showPersons: false
   }) 
 
    const [ otherState,setOtherState] = useState('some other value'); //Used to keep state of an object unchanged on accessing a hook
    console.log(personState,otherState);
    
        const  NameChangeHandler = (event,id) =>{
          // console.log('was clicked');s
          // DONT DO IT --- this.state.persons[0].name = 'VJ';
          const personIndex = personState.persons.findIndex(p  => {
            return p.id === id;
          });
 
          const person = {... personState.persons[personIndex]};

          person.name = event.target.value;
          const persons = [...personState.persons]
          persons[personIndex] = person;

          setPersons ({
            persons : persons})
        }

        const deletePersonsHandler = (personIndex) => {

          const person1 = [...personState.persons ];  //spread operator...copies the array...u can use slice() too
           person1.splice (personIndex,1);
          setPersons({persons : person1})
        }
         const togglePersonsHandler = ( ) =>{
           const doesShow = switchView.showPersons;
           setSwitch({
             showPersons: !doesShow
         } )
         console.log(switchView.showPersons);
        }
         

        let persons = null;
        if(switchView.showPersons){
          persons= (
            
              <Persons
               persons={personState.persons}
               clicked={deletePersonsHandler}
               changed={NameChangeHandler }/>
            
          );
        }
        
  return (
    <div className="App">
      <header className="App-header">
          <Cockpit
            showPersons = {switchView.showPersons}
            persons = {personState.persons}
            clicked={togglePersonsHandler} />
         {persons}
      </header>
      

     
    </div>
  );
}


export default App;
 
// Old method to use states 
//import React,{Component} from 'react';
//class App extends Component {
//   state = {
//   persons : [
//     {name : 'varun', Age : 23},
//     {name : 'P1', Age : 30}
//   ]
//   }
//   SwitchNameHandler = () =>{
//     // console.log('was clicked');
//     // DONT DO IT --- this.state.persons[0].name = 'VJ';
//     this.setState({persons : [
//       {name : 'varun new', Age : 23},
//       {name : 'P1 new', Age : 30}
//     ]})
//   }

//non-dynamic lists
    /* <Person 
            name={personState.persons[0].name} 
            age={personState.persons[0].Age}
            click={SwitchNameHandler.bind(this,"Varun ??" )}> Wassup
            </Person>
          <Person 
            name={personState.persons[1].name} 
            age={personState.persons[1].Age}
            changed={NameChangeHandler}> Wassup   
            </Person> */