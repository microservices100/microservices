import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import "./sidemenu.scss";

const SideMenu = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer} className='button'>
                Open
            </Button>
            <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default SideMenu;