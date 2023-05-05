import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";




const AddTransaction = () => {

    let { register, handleSubmit, formState: { errors } } = useForm();
    let dispatch = useDispatch();

    let validateAmount = (value) => {
        if (value == 0) {
            return "amount cannot be zero";
        }

    }

    const saveTransaction = (nyaData) => {
        // console.log(nyaData);

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: nyaData,
        });


    };

    return <>
        <div className="AddTrans-parent">
            <h3>Add Transaction</h3>
            <hr />
            <form action="" onSubmit={handleSubmit(saveTransaction)}>
                <div className="child-1">
                    <h3>Description</h3>
                    <input type="text" placeholder="Enter Detail Of Transaction" {...register('description', { required: true, pattern: /^[A-Za-z ]+$/i })} />
                    {errors.description && <p style={{ color: 'red' }}>Required</p>}
                </div>
                <div className="child-2">
                    <h3>Amount</h3>
                    <input type="number" placeholder="Enter Amount In Doller" {...register('amount', { required: true, validate: validateAmount })} />
                    {errors.amount && <p style={{ color: 'red' }}>Required</p>}
                </div>
                <div className="btnDiv">
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    </>
};

export default AddTransaction;