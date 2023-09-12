import { Box, Button, FormControl, FormGroup, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import TodoList from "./TodoList"

const Home = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])


  const handleChange = (evt) => {
    setTodo(evt.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (todo !== "") {
      setTodos((list) => {
        return [...list, todo]
      })
    }
    setTodo("")
  }

  const handleDelete = (id) => { 
    setTodos((list) => {
      return list.filter((ele, index) => {
        return index !== id
      })
    })
  }

  const handleEdit=(id)=>{
   console.log(id);
   const editData=todos.filter((ele,index)=> index ===id)
   setTodo(editData)
  }


  return (
    <Box className=" w-[90%] mdl:w-[50%] sml:w-[60%] lg:w-[50%] xl:w-[40%]  mx-auto  m-4 p-4 rounded-lg shadow-xl  bg-white border border-gray-300 text-center">
        <Box className="text-center py-3">
          <Typography variant="h3" component="h3" className="signup_title">
            Todo List
          </Typography>
        </Box>
      <form className="w-[100%]" onSubmit={(e)=>handleAdd(e)}>
        <Box className="input_box">
          <Box className="w-[100%]">
            <TextField
              onChange={handleChange}
              className="input_field"
              type="text"
              value={todo}
              autoFocus={true}
              variant="standard"
              placeholder="Enter your todos"
            />
          </Box>
          <Box>
            <Button variant="outlined" type="submit" >
              Add
            </Button>
          </Box>
        </Box>
      </form>
      <Box>
        <ul>
          {todos.map((list, index) => {
            return (
              <TodoList
                key={index}
                list={list}
                id={index}
                onSelect={handleDelete}
                onEdit={handleEdit}
              />
            )
          })}
        </ul>
      </Box>
    </Box>
  )
}

export default Home
