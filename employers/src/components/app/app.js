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
                { name: 'John Smith', salary: 800, isIncreased: true, id: 1 },
                { name: 'Alex Crown', salary: 3000, isIncreased: false, id: 2 },
                { name: 'Mike Ivanovoch', salary: 5000, isIncreased: false, id: 3 }
            ]
        }
    }
    
    deleteItem = (id) => {
        console.log('deleteItem');
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            
            // const newArr = [...before, ...after];
            
            // return {
            //     data: newArr
            // }

            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => { 
        console.log('Add item function');
        console.log('name ='  + name);
        console.log('salary' + salary);
        
        this.setState(({data}) => {            
            const newArr = [...data];
            newArr.push({name: name, salary: salary, isIncreased: true, id: data.length + 1});
            console.log(newArr);
            return {
                data: newArr
            }
        });                    
    } 

    render() {
        return (
            <div className="app">
                <AppInfo/> 
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;