import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
    <center class="todo-container">
      <p><AppName></AppName></p>
      <AddTodo></AddTodo>

      
      <br/>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            Buy Milk
          </div>
          <div class="col">
          4/10/2023
          </div>
          <div class="col">
          <button type="button" class="btn btn-danger">
          Delete</button>
          </div>
        </div>
      </div>


    </center>
  );
  
}

export default App
