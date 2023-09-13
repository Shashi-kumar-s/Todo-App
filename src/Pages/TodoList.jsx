import React from "react"
import { FaEdit } from "react-icons/fa"
import { Box, Button, Checkbox, Typography } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const TodoList = (props) => {
  const { onSelect, id, list, onEdit, checked, handleCheck } = props

  return (
    <Box className="flex items-center justify-between bg-black text-white  mt-1 rounded-lg p-1">
      <li className=" font-bold">
        <Checkbox
          size="small"
          className="checkbox"
          onClick={() => handleCheck(id)}
        />
        {list.todo}
      </li>
      <Box className="flex items-center justify-between">
        {checked === true ? (
          <Typography className=" text-white task_complete">
            Task completed
          </Typography>
        ) : (
          ""
        )}
        <Button onClick={() => onEdit(id)}>
          <FaEdit className="w-6 h-6 text-green-400" />
        </Button>
        <Button onClick={() => onSelect(id)}>
          <FontAwesomeIcon icon={faTrash} className=" w-5 h-5 text-red-400" />
        </Button>
      </Box>
    </Box>
  )
}

export default TodoList
