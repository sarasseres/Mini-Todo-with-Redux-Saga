import * as PartTodo from '../Components/PartTodo';
import * as CreateTodo from '../Components/CreateTodo';

const Todos = () => {
  // ;
  return (
    <>
      <div className="container  my-3">
        <p className="h2 text-center text-dark fw-bold">Todo List</p>
        <CreateTodo.CreateTodo />
        <PartTodo.Todo />;
      </div>
    </>
  );
};
export default Todos;
