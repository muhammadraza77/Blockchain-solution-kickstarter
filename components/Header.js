import React from 'react';
import {Menu} from 'semantic-ui-react';

export default props=>{
    return (
        <div>
            <Menu style={{marginTop:'10px'}}>
                <Menu.Item>Crowd Coin </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>Campaign </Menu.Item>
                    <Menu.Item> + </Menu.Item>
                </Menu.Menu>
            </Menu>

        </div>
    );
}