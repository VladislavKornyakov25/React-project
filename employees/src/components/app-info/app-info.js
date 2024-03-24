import './app-info.css';

const AppInfo = (props) => {
    const {numberOfEmployees, numberOFIncreasedEmployees} = props;
    return (
        <div className="app-info">
            <h1>Company employee accounting</h1>
            <h2>All employees: {numberOfEmployees}</h2>
            <h2>Salary bonus to: {numberOFIncreasedEmployees}</h2>
        </div>
    );
}

export default AppInfo;