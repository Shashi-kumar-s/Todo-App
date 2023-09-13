import React from "react"
import { MdDeleteSweep } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { Box, Button, Checkbox } from "@mui/material"

const TodoList = (props) => {

  const { onSelect,id,list,onEdit } = props

  return (
    <Box className="flex items-center justify-between bg-violet-500 text-white  mt-1 rounded-lg p-1">
      <li className=" font-bold"><Checkbox size="small" className="checkbox"/>{list.todo}</li>
      <Box>
        <Button onClick={() => onSelect(id)}>
          <MdDeleteSweep className="w-8 h-8 text-red-400" />
        </Button>
        <Button onClick={()=>onEdit(id)}>
        <FaEdit className="w-8 h-8 text-green-400" />
      </Button>
      </Box>
    </Box>
  )
}

export default TodoList
