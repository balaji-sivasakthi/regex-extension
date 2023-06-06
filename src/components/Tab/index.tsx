import React from 'react'

function Tab({active, setisSelect ,children}:any) {
  const handleClick = (event) => {
    setisSelect(prev=>!prev)
  }
  return (
    <button onClick={handleClick} className={`regex_tab ${active?"active":""}`}>{children}</button>
  )
}

export default Tab