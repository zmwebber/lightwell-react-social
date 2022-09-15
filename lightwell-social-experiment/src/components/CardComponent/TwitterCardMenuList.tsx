import DeleteForever from '@mui/icons-material/DeleteForever';
import Edit from '@mui/icons-material/Edit';
import MoreVert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import * as React from 'react';

export default function TwitterCardMenuList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /*
    Todo:
    Add functionality to edit and delete button when crud operations are added to DB
  */
  const onClickEdit = (event: any) => {
    console.log("This will edit at some point");
    setAnchorEl(null);
  }

  const onClickDelete = (event: any) => {
    console.log("This will delete at some point");
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        id="positioned-demo-button"
        aria-controls={open ? 'positioned-demo-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="positioned-demo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="positioned-demo-button"
        placement="bottom-end"
      >
        <MenuItem onClick={onClickEdit}>
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit post
        </MenuItem>
        <ListDivider />
        <MenuItem onClick={onClickDelete} variant="soft" color="danger">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}