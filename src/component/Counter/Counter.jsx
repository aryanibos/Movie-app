import { useEffect, useState } from "react";

function Counter() {
    const [result, setResult] = useState(0);

    function handleClick() {
        setResult(result + 1);
    }

    useEffect(() => {
        function manipulationDOM() {
            console.log("LifeCycle: componentDidMount");
            document.title = `Result: ${result}`;
        }
        manipulationDOM();
    }, [result]);

    return (
        <div>
            <p> Result : {result}</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default Counter;