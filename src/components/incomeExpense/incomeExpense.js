import { useSelector } from "react-redux";




const IncomeExpense = () => {
    let data = useSelector(store => store);
    console.log(data);

    let income = 0;
    let expense = 0;
    let currBalance = 0;

    for (let myExpense of data.expenses) {
        expense += +myExpense.amount;

    };
    currBalance += expense;
    for (let myIncome of data.income) {
        income += +myIncome.amount
    };
    currBalance += income

    const myStyle = {
        fontSize: "30px",
    }

    return <>
        <h2>Expense Tracker </h2>
        <div>
            <h3>Current Balance</h3>
            <h3 style={currBalance > 0 ? { color: "black", fontSize: "30px" } : { color: "red", fontSize: "30px" }}>${currBalance}.00</h3>
            {currBalance < 0 && <p style={{ color: "red" }}>Your Balance Is Insufficient!</p>}
        </div>
        <div className="IEparent">
            <div className="IE1">
                <h4>INCOME</h4>
                <h4>${income}.00</h4>
            </div>
            <hr style={{
                margin: '0',
                height: '65px',
                position: 'relative',
                top: '15px',
            }} />
            <div className="IE2">
                <h4>EXPENSE</h4>
                <h4>${expense}.00</h4>
            </div>
        </div>
    </>
};


export default IncomeExpense;