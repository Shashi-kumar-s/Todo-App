import { Box, Button, Radio, RadioGroup, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import TodoList from "./TodoList"
import { faCirclePlus, faPen } from "@fortawesome/free-solid-svg-icons"
import TextInput from "../Component/TextInput/TextInput"
import FontAwesome from "../Component/FontAwesome/FontAwesome"
import ButtonCategory from "../Component/Button/Button"

const Home = () => {
  const [todoInput, setTodoInput] = useState("")
  const [allTodos, setAllTodos] = useState([])
  const [editId, setEditId] = useState("")
  const [listOfTodos, setListOfTodos] = useState([])
  

  const handleChange = (e) => {
    return setTodoInput(e.target.value)
  }
  useEffect(() => {
    setListOfTodos(allTodos)
  }, [allTodos])

  const handleAdd = (e) => {
    e.preventDefault()
    if (todoInput !== "") {
      setAllTodos([{ id: Date.now(), todoInput, checked: false }, ...allTodos])
    }

    if (editId) {
      const updateTodos = allTodos.map((elem) =>
        elem.id === editId
          ? (elem = { id: elem.id, checked: elem.checked, todoInput })
          : { id: elem.id,checked:elem.checked, todoInput: elem.todoInput }
      )
      setAllTodos(updateTodos)
      setEditId(0)
      setTodoInput("")
      return
    }
    setTodoInput("")
  }

  const handleDelete = (id) => {
    const deleteTodo = allTodos.filter((task) => task.id !== id)
    setAllTodos(deleteTodo)
  }

  const handleEdit = (id) => {
    allTodos.map((task) => {
      if (task.id === id) {
        setTodoInput(task.todoInput)
        setEditId(id)
      }
    })
  }

  const handleCheckBox = (id) => {
    const checkData = allTodos.map((elem) =>
      elem.id === id
        ? (elem = {
            id: elem.id,
            checked: (elem.checked = !elem.checked),
            todoInput: elem.todoInput,
          })
        : {
            id: elem.id,
            checked: elem.checked,
            todoInput: elem.todoInput,
          }
    )
    setAllTodos(checkData)

  }

  const handleAll = () => {
    setListOfTodos(allTodos)
  }

  const handleComplete = () => {
    setListOfTodos("")
    const completeTask = allTodos.filter((ele) => ele.checked)
    setListOfTodos(completeTask)
  }

  const handleInComplete = () => {
    setListOfTodos("")
    const InCompleteTask = allTodos.filter((ele) => !ele.checked)
    setListOfTodos(InCompleteTask)
  }

  const handleDeleteAll = () => {
    setAllTodos([])
  }

  const handleDeleteSelected = () => {
     const selectChecked = allTodos.filter((ele) => !ele.checked)
     setAllTodos(selectChecked)
  }
  console.log(allTodos,"alll++++++++++++++");


  return (
    <Box className=" w-[90%] mdl:w-[50%] sml:w-[60%] lg:w-[50%] xl:w-[40%]  mx-auto  m-4 p-4 rounded-lg shadow-xl  bg-white border border-gray-300 text-center wraper-1">
      <Box className="text-center py-3">
        <Typography variant="h1" component="h1" className="signup_title pb-3">
          TODO - APP
        </Typography>
      </Box>
      <form className="w-[100%] form_box" onSubmit={handleAdd}>
        <Box className="input_box px-6 pt-2">
          <Box className=" w-[100%] flex justify-between items-center px-4">
            <TextInput
              onChange={handleChange}
              className={"input_field"}
              type={"text"}
              value={todoInput}
              autoFocus={true}
              variant={"standard"}
              placeholder={"Enter Your Todos Here..."}
              autoComplete={"off"}
            />
            {editId ? (
              <FontAwesome
                iconName={faPen}
                className={" text-blue-900 h-6 w-6 cursor-pointer"}
                onClick={handleAdd}
              />
            ) : (
              <FontAwesome
                iconName={faCirclePlus}
                className={" text-blue-700 h-8 w-8 cursor-pointer"}
                onClick={handleAdd}
              />
            )}
          </Box>
        </Box>
        <Box className="flex justify-evenly items-center my-4 flex-wrap">
          {allTodos.length !== 0 ? (
            <>
              <ButtonCategory
                value={"All"}
                variant={"contained"}
                onClick={handleAll}
                className="mb-4"
              />
              <ButtonCategory
                value={"complete"}
                variant={"contained"}
                onClick={handleComplete}
                className="mb-4"

              />
              <ButtonCategory
                value={"Incomplete"}
                variant={"contained"}
                onClick={handleInComplete}
                className="mb-4"

              />
              <ButtonCategory
                value={"Delete All"}
                variant={"contained"}
                onClick={handleDeleteAll}
                className="mb-4"


              />
              <ButtonCategory
                value={"Delete Selected"}
                variant={"contained"}
                onClick={handleDeleteSelected}
                className="mb-4"

              />
              <hr />
            </>
          ) : (
            " "
          )}
        </Box>
      </form>
      <Box className="mt-2 p-3 input_data">
        <ul>
          {listOfTodos.map((list) => {
            return (
              <TodoList
                key={list.id}
                id={list.id}
                list={list.todoInput}
                checked={list.checked}
                deleteTodo={handleDelete}
                editTodo={handleEdit}
                handleCheckBox={handleCheckBox}
              />
            )
          })}
        </ul>
      </Box>
    </Box>
  )
}

export default Home
