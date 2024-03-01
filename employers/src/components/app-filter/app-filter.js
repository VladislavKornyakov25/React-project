import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All emplyees
            </button>
            <button 
                className="btn btn-light-outline-light"
                type="button">
                    Emplyees to level up
            </button>
            <button 
                className="btn btn-light-outline-light"
                type="button">
                    Salary rate more then 1000$
            </button>   
        </div>      
       
    
    );
}

export default AppFilter;
