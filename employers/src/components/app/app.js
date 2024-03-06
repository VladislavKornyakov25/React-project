import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John Smith', salary: 800, isIncreased: true, isRised: true, id: 1 },
                { name: 'Alex Crown', salary: 3000, isIncreased: false, isRised: false, id: 2 },
                { name: 'Mike Ivanovoch', salary: 5000, isIncreased: false, isRised: false, id: 3 }
            ]
        };
        this.maxId = 4;        
    }
    
    deleteItem = (id) => {
        console.log('deleteItem');
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);            
            // const newArr = [...before, ...after];            
            // return { data: newArr}
            return {
                data: data.filter(item => item.id !== id)
            }
        });                  
    }

    addItem = (name, salary) => { 
        if (salary && name) {
            const newItem = {
                name: name,
                salary: salary,
                isIncreased: false,
                isRised:false,
                id: this.maxId++
            }       
            this.setState(({data}) => {            
                const newArr = [...data, newItem];                       
                return {
                    data: newArr
                }
            });       
        } 
                            
    } 
    
    onToggleProp = (id, prop) => {
        
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem = {...old, isIncreased: !old.isIncreased};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data: newArr
        //     }
        // });

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })            
        }));        
    }

    // onToggleRise = (id) => {        
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, isRised: !item.isRised}
    //             }
    //             return item;
    //         })            
    //     }));     
    // }

    render() {
        const numberOfEmployees = this.state.data.length;
        const numberOFIncreasedEmployees = this.state.data.filter(item => item.isIncreased).length;
        return (
            <div className="app">
                <AppInfo 
                    numberOfEmployees={numberOfEmployees}
                    numberOFIncreasedEmployees={numberOFIncreasedEmployees}/> 
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                    
                <EmployeesAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;