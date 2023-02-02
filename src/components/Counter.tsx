import React, {useState} from "react";
import classes from './style.module.scss';

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={classes.counterButton}>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}> +1 </button>
        </div>
    )
}
