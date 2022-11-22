import DeleteForever from '@mui/icons-material/DeleteForever';
import Edit from '@mui/icons-material/Edit';
import MoreVert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import {OnDelete} from "../../redux/ducks/tweetDuck/TweetAction";

export default function TwitterCardMenuList(props: any) {
  const tweetState = useSelector((state: RootStore) => state.tweetArray);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickEdit = (event: any) => {
    console.log("This will edit at some point");
    setAnchorEl(null);
  }

  const onClickDelete = (event: any, id: string) => {
    dispatch(OnDelete(id));
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
        {/* <MenuItem onClick={onClickEdit}>
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit post
        </MenuItem> */}
        <ListDivider />
        <MenuItem onClick = {event => onClickDelete(event, props.id)} variant="soft" color="danger">
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}