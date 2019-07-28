import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';
export default props=>{
    return (
        <div>
            <Menu style={{marginTop:'10px'}}>
                <Link route="/"><Menu.Item>Crowd Coin </Menu.Item></Link>

                <Menu.Menu position='right'>
                    <Link route="/"><Menu.Item>Campaign </Menu.Item></Link>
                    <Link route="/campaign/new"><Menu.Item> + </Menu.Item></Link>
                    
                </Menu.Menu>
            </Menu>

        </div>
    );
}