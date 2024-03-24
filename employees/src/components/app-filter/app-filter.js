import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    buttonClick = (event) => {
        let buttons = document.querySelectorAll('.btn');
        const buttonEnabled = 'btn btn-light',
              buttonDisabled = 'btn btn-light-outline-light';

        buttons.forEach(button => button.className = buttonDisabled)       
        event.currentTarget.className = buttonEnabled;
        this.props.onFilterChange(event.currentTarget.getAttribute('data-filter'));

    }
    render() {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button"
                    onClick={this.buttonClick}
                    data-filter="all">
                        All emplyees
                </button>
                <button 
                    className="btn btn-light-outline-light"
                    type="button"
                    onClick={this.buttonClick}
                    data-filter="rise">
                        Emplyees to level up
                </button>
                <button 
                    className="btn btn-light-outline-light"
                    type="button"
                    onClick={this.buttonClick}
                    data-filter="salaryRate">
                        Salary rate more then 1000$
                </button>   
            </div>
        );
    }
}

export default AppFilter;
