let Lisofstudent = () => {
    let student = [
        { id: 101, name: "ankit", marks: { math: 55, science: 65, english: 75 }, contactno: 9841021073 },
        { id: 102, name: "karuna", marks: { math: 50, science: 67, english: 71 }, contactno: 9843143669 },
        { id: 103, name: "neha", marks: { math: 58, science: 36, english: 79 }, contactno: 9840077345 }
    ];

    return (
        <div> {/* Added missing opening div tag */}
            <h4>Student Details</h4>
            <ul>
                {student.map(({ id, name, marks, contactno }) => (
                    <li key={id}>
                        <h5>ID: {id}</h5>
                        <p>Name: {name}</p>
                        <div>
                            <strong>Marks:</strong>
                            <p>English: {marks.english}</p> {/* Changed social to english */}
                            <p>Science: {marks.science}</p>
                            <p>Math: {marks.math}</p>
                        </div>
                        <p>Contact Number: {contactno}</p> {/* Displayed as string since it's not an array */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lisofstudent;
