import React, { ReactElement } from 'react'
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
interface MenuItems {
  menu: string
  icon: ReactElement
}

const menuItems: MenuItems[] = [
  { menu: 'Onbox', icon: < InboxOutlinedIcon /> },
  { menu: 'Starred', icon: <StarOutlineOutlinedIcon /> },
  { menu: 'Send Email', icon: <MarkEmailReadOutlinedIcon/> },
  { menu: 'Drafts', icon: <ModeEditOutlinedIcon /> }
]

const Sidebar = () => {
  return (
    <Drawer
      anchor='left'
      open={ true }
      onClose={ () => console.info('Closing') }
    >
      <Box sx={ { width: 250 } }>
        <Box sx={ { padding: '5px 10px' } }>
          <Typography variant='h4'>
            Menú
          </Typography>
          <List>
            {
              menuItems.map(item => 
                <>
                  <ListItemButton key={ item.menu }>
                    <ListItemIcon>
                      { item.icon }
                    </ListItemIcon>
                    <ListItemText >
                      { item.menu }
                    </ListItemText>
                  </ListItemButton>
                  <Divider />
                </>
              )
            }
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Sidebar