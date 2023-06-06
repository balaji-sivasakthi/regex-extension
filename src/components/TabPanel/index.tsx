import React from 'react'

function TabPanel({active, children}:any) {
  return (
    <div style={{display:active?`none`:"block"}} className='regex_tab_panel'>{children}</div>
  )
}

export default TabPanel