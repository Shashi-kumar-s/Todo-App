import React from "react"
import { MdDeleteSweep } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { Box, Button } from "@mui/material"

const TodoList = (props) => {

  const { onSelect, id,list,onEdit } = props

  return (
    <Box className="flex items-center justify-between bg-black text-white mt-1 rounded-lg p-2">
      <li>{list}</li>
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
