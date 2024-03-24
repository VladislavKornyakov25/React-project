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
            ],
            term: '',
            filter: 'all'
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

    searchEmployees = (items, term, filter) => {
        if (term.length === 0) {
            if (filter === 'all')  {
                return items;
            } else if (filter === 'rise') {
                return items.filter(item => item.isRised);            
            } else if (filter === 'salaryRate') {
                return items.filter(item => item.salary > 1000);                
            }            
        }
        if (filter === 'all') {
            return items.filter(elem => {
                return elem.name.indexOf(term) > -1;
            });
        } 
        if (filter === 'rise') {
            return items.filter(elem => {
                return elem.name.indexOf(term) > -1;
            }).filter(item => item.isRised);
        }
        if (filter === 'salaryRate') {            
            return items.filter(elem => {
                return elem.name.indexOf(term) > -1;
            }).filter(item => item.salary > 1000);
        }

        // items = items.filter(elem => {
        //     return elem.name.indexOf(term) > -1;
        // })
        // console.log(items);
        return items.filter(elem => {
            return elem.name.indexOf(term) > -1;
        });
        
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterChanged = (filter) => {
        console.log('filter = ' + filter);
        this.setState({filter});        
        // this.setState(({data}) => {
        //     
            
        // });  
    }
    filterEmployees = (items, filter) => {
        if (filter === 'all')  {
            return items;
        } else if (filter === 'rise') {
            return items.filter(item => item.isRised);            
        } else if (filter === 'salaryRate') {
            return items.filter(item => item.salary > 1000);
            
        }
    }

    render() {
        const {data, term, filter} = this.state;

        const numberOfEmployees = data.length;
        const numberOFIncreasedEmployees = data.filter(item => item.isIncreased).length;

        const visibleData = this.searchEmployees(data, term, filter);
        return (            
            <div className="app">
                <AppInfo 
                    numberOfEmployees={numberOfEmployees}
                    numberOFIncreasedEmployees={numberOFIncreasedEmployees}/> 
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilterChange={this.onFilterChanged}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                    
                <EmployeesAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
}

export default App;