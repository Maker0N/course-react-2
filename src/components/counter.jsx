import React from "react";
const Counter = ({ id, value, name, onDelete, increment, decrement }) => {

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    return (
        <div>
            <span className="name">{name}</span>
            <span className={`${getBageClasses()} quant`}>{formatValue()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => increment(id)}
            >
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => decrement(id)}
            >
                -
            </button>
            <button
                className='btn btn-danger btn-sm m-2'
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
