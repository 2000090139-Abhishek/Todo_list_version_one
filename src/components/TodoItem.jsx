function TodoItem(){
  let todoName="Buy Milk";
  let todoDate="4/10/2023";

  return(
  
    <div class="container ">
        <div class="row Ab-row">
          <div class="col-6">
            {todoName}
          </div>
          <div class="col">
          {todoDate}
          </div>
          <div class="col">
          <button type="button" class="btn btn-danger Ab-button">
          Delete</button>
          </div>
        </div>
      </div>

  );
}

export default TodoItem;