import React from "react"
import { FaEdit } from "react-icons/fa"
import { Box, Button, Checkbox, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import propTypes from "prop-types"

const TodoList = (props) => {
  const { deleteTodo, id, list, editTodo, handleCheckBox, checked } = props

  return (
    <Box className="flex items-center todo_List bg-black text-white  mt-1 rounded-lg flex-col sml:flex-row">
      <Box className=" flex items-center w-[100%] sml:w-[100%]">
        <Box>
          <Checkbox
            size="small"
            checked={checked ? true : false}
            className="checkbox"
            onChange={() => handleCheckBox(id)}
          />
        </Box>
        <Box className="flex-wrap ">{list}</Box>
      </Box>
      <Box className="flex items-center task_status w-[100%] sml:w-[50%] justify-between sml:justify-end pl-3">
        <Box>
          {checked === true && (
            <Typography className=" text-white task_complete">
              Task completed
            </Typography>
          )}
        </Box>
        <Box className="flex  sml:flex-row">
          <Button className="btn_edit-delete" onClick={() => editTodo(id)}>
            <FaEdit className="w-6 h-6 text-green-400" />
          </Button>
          <Button className="btn_edit-delete" onClick={() => deleteTodo(id)}>
            <FontAwesomeIcon icon={faTrash} className=" w-5 h-5 text-red-400" />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

TodoList.propTypes = {
  id: proptTypes.number,
  list: proptTypes.string,
  deleteTodo: proptTypes.func,
  editTodo: proptTypes.func,
  handleCheckBox: proptTypes.func,
  checked: proptTypes.bool,
}

export default TodoList
