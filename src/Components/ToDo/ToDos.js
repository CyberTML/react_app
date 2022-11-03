
import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import './ToDos.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function ToDos() {
  
  function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }

  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]); 

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };


  return (
    <div className="todo-container">
          <div className="todo-body">            
              <div className="todo-header text-center">
                <h1>ToDo List</h1>
                <br />
                <section className='button-area'>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label><b>Add Todo</b></Form.Label>
                    <Form.Control type='text' className='input' value={value} onChange={e => setValue(e.target.value)} placeholder="Add New Todo" />
                  </Form.Group>
                  <Button variant='primary mb-3' type='submit'>
                    Submit
                  </Button>
                </Form>                                                             
                </section>
                <br />
                <Form addTodo={addTodo} />
                <div>
                  {todos.map((todo, index) => (
                  <Card>
                    <Card.Body>
                      <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                        />
                    </Card.Body>
                  </Card>
                  ))}
                </div>                  
              </div>                                                                
          </div>
      </div>    
  )
}
