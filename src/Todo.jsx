export default function Todo(props) {
  const { task, isDone } = props;
  return (
    <>
        {/* Conditional rendering */}
        <li><strong>Task:</strong> {task}; <strong>Is Done:</strong> {isDone? "Done" : "Not done yet"} 
        </li>
      
    </>
  );
}
