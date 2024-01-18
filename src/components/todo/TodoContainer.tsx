import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />

        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-3">
        <div className="bg-white w-full h-full rounded-xl space-y-3">
          {todos.map((item) => (
            <TodoCard {...item} />
          ))}
          {/* <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard /> */}
        </div>
        {/* <div className=" bg-white text-2xl font-semibold p-5 flex justify-center items-center rounded-xl">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
