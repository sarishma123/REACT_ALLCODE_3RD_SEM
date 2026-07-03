const ConditionalRendering = () => {
    let num = 10;
    
    return (
        <div>
            <h3>Conditional Rendering example</h3>
            
            {/* 1. Ternary operator (if/else) */}
            {num % 2 === 0 ? <p>{num} is Even</p> : <p>{num} is Odd</p>}

            {/* 2. Logical AND operator (render only if true) */}
            {num <= 15 && <p>{num} is not greater than 15</p>}
        </div>
    );
};

export default ConditionalRendering;

