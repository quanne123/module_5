import {useState} from "react";

function Counter2() {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        const newValue = count + 2;
        setCount(newValue);
    };
    return (
        <div>
            Giá trị{count}
            <div>
                <button onClick={handleClick}>Tăng thêm 2 </button>
            </div>
        </div>
    );
}
export default Counter2;
