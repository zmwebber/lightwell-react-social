import * as React from 'react';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Popup = styled(PopperUnstyled)({
  zIndex: 1000,
});

export default function TwitterCardMenuList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      setAnchorEl(null);
    } else if (event.key === 'Escape' && anchorEl != null) {
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <MoreVertIcon
        id="composition-button"
        onClick={handleClick}
        sx={{ borderRadius: 0 }}
      >
      </MoreVertIcon>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={anchorEl}
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: 'md', bgcolor: 'background.body' }}
          >
            <MenuItem onClick={handleClose}>Not Interested in this Tweet</MenuItem>
            <MenuItem onClick={handleClose}>Unfollow</MenuItem>
            <MenuItem onClick={handleClose}>Block</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}