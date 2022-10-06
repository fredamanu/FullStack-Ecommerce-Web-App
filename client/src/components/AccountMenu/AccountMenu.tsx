import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Avatar,
  Menu,
  MenuItem,
  Box,
  Divider,
  IconButton,
  Tooltip,
  ListItemIcon,
} from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ListAltIcon from '@mui/icons-material/ListAlt'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { userLogOut } from '../../redux/actions/user'
import { useNavigate } from 'react-router-dom'

const AccountMenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  // @ts-ignore:next-line
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(userLogOut())
    setUser(null)
    navigate('/')
  }

  return (
    <div>
      {user ? (
        <React.Fragment>
          <Box
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar
                  alt={user?.firstName}
                  sx={{ width: 42, height: 42, marginTop: -3 }}
                  src={user?.image}
                >
                  {user?.firstName.charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#6b7688',
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'rgba(0, 0, 0, 0)',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={()=> navigate(`/account/${user._id}`)}>
              <Avatar
                sx={{ fontSize: '33px', marginRight: '5px', color: '#6b7688' }}
              />
              My Account
            </MenuItem>
            <MenuItem onClick={()=> navigate(`/orders/${user._id}`)}>
              <ListAltIcon
                sx={{ fontSize: '33px', marginRight: '5px', color: '#6b7688' }}
              />
              My Orders
            </MenuItem>
            <Divider style={{ background: 'grey' }} />

            <MenuItem onClick={()=> navigate("/account")}>
              <ListItemIcon>
                <Settings
                  sx={{
                    fontSize: '25px',
                    marginRight: '5px',
                    color: '#6b7688',
                  }}
                />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout
                  sx={{
                    fontSize: '25px',
                    marginRight: '5px',
                    color: '#6b7688',
                  }}
                />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      ) : (
        <div style={{marginTop: -10}}>   
        <a href="/signin" >
        <p style={{ textTransform: 'none' }}>
          <span>
            <PersonOutlineIcon />
          </span>
          {/* Sign In */}
        </p>
      </a></div>
      )}
    </div>
  )
}

export default AccountMenu
