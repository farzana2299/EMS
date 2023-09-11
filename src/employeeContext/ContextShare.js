import React, { createContext, useState } from 'react'
//create context object
export const registerContext = createContext()

//context for delete alert
export const deleteContext = createContext()

function ContextShare({ children }) {
  //state
  const [registerData, setRegisterData] = useState("")
  const [deleteData, setDeleteData] = useState("")
  return (
    <div>
      <deleteContext.Provider value={{ deleteData, setDeleteData }}>
        <registerContext.Provider value={{ registerData, setRegisterData }}>
          {children}
        </registerContext.Provider>
      </deleteContext.Provider>
    </div>
  )
}

export default ContextShare