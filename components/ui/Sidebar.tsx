import React from 'react'
import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const menuItems: string[] = ['Onbox', 'Starred', 'Send Email', 'Drafts']

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
              menuItems.map((text, index) => (
                <ListItemButton key={ text }>
                  <ListItemIcon>
                    { index % 2 ?
                      <InboxOutlinedIcon />
                      : < EmailOutlinedIcon />
                    }
                  </ListItemIcon>
                  <ListItemText primary={ text } />
                </ListItemButton>
              ))
            }
          </List>
          <Divider />
          <List>
            {
              menuItems.map((text, index) => (
                <ListItemButton key={ text }>
                  <ListItemIcon>
                    { index % 2 ?
                      <InboxOutlinedIcon />
                      : < EmailOutlinedIcon />
                    }
                  </ListItemIcon>
                  <ListItemText primary={ text } />
                </ListItemButton>
              ))
            }
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Sidebar