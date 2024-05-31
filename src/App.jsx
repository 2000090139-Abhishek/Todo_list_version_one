
function App() {
  return (
    <center class="todo-container">
      <h1>Todo List App</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type = "text" placeholder=" Enter Todo Work"></input>
          </div>
          <div class="col">
          <input type="date" placeholder="YYYY/MM/DD"></input>
          
          </div>
          <div class="col">
          <button type="button" class="btn btn-success">ADD</button>
          </div>
        </div>
      </div>
    </center>
  );
  
}

export default App
