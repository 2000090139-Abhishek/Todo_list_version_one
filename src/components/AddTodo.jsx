function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder=" Enter Todo Work"></input>
        </div>
        <div class="col">
          <input type="date" placeholder="YYYY/MM/DD"></input>
        </div>
        <div class="col">
          <button type="button" class="btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
