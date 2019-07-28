import React,{Component} from 'react';
import factory from '../ethereum/factory';
import { Card , Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';
class CampaignIndex extends Component{

    static async getInitialProps(){
        const campaigns=await factory.methods.getDeployedCampaigns().call();
        // console.log(campaigns);
        return {campaigns:campaigns};

    }
    renderlist(){
        const items= this.props.campaigns.map(address=>{
            return {
                header: address,
                description: <Link route={`/campaign/${address}`}><a>View Campaigns</a></Link>,
                fluid: true,
            } ;
        });

        return <Card.Group items={items} />;
    }

    render(){
        return(
            <Layout>
                <h3>Campaigns</h3>
                <Link route='campaign/new'><a><Button content='Add Campaign' icon='add circle' primary floated='right'/></a></Link>
                {this.renderlist()}
            </Layout>
        ); 

    }
}

export default CampaignIndex;