import { Box, TextField, Typography } from "@mui/material"
import React, {useState } from "react"
import TodoList from "./TodoList"
import { BsPlusCircleFill } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"

const Home = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState("")

  const handleChange = (evt) => {
    return setTodo(evt.target.value)
  }

  // edit and delete todo list
  const handleAdd = (e) => {
    e.preventDefault()
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId)
      const upDateTodos = todos.map((elem) =>
        elem.id === editTodo.id
          ? (elem = { id: elem.id, todo })
          : { id: elem.id, todo: elem.todo }
      )
      setTodos(upDateTodos)
      setEditId(0)
      setTodo("")
      return
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      setTodo("")
    }
  }

  // delete todo list
  const handleDelete = (id) => {
    const delTodo = todos.filter((list) => list.id !== id)
    setTodos([...delTodo])
  }

  // edit todo list
  const handleEdit = (id) => {
    const editData = todos.find((ele) => ele.id === id)
    setTodo(editData.todo)
    setEditId(id)
  }

  return (
    <Box className=" w-[90%] mdl:w-[50%] sml:w-[60%] lg:w-[50%] xl:w-[40%]  mx-auto  m-4 p-4 rounded-lg shadow-xl  bg-white border border-gray-300 text-center">
      <Box className="text-center py-3">
        <Typography variant="h1" component="h1" className="signup_title">
          Todo - List
        </Typography>
      </Box>
      <form className="w-[100%]" onSubmit={(e) => handleAdd(e)}>
        <Box className="input_box">
          <Box className="w-[100%] flex justify-between items-center">
            <TextField
              onChange={handleChange}
              className="input_field"
              type="text"
              value={todo}
              autoFocus={true}
              variant="standard"
              placeholder="Enter your todos"
              autoComplete="off"
            />
            {editId ? (
              <FaEdit className=" text-green-400 h-8 w-8" onClick={handleAdd} />
            ) : (
              <BsPlusCircleFill
                className=" text-violet-500 h-8 w-8"
                onClick={handleAdd}
              />
            )}
          </Box>
        </Box>
      </form>
      <Box className="mt-4">
        <ul>
          {todos.map((list) => {
            return (
              <TodoList
                key={list.id}
                id={list.id}
                list={list}
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
