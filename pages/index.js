import React,{Component} from 'react';
import factory from '../ethereum/factory';
import { Card , Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
class CampaignIndex extends Component{

    static async getInitialProps(){
        const campaigns=await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);
        return {campaigns:campaigns};

    }
    renderlist(){
        const items= this.props.campaigns.map(address=>{
            return {
                header: address,
                description: <a>View Campaigns</a>,
                fluid: true,
            } ;
        });

        return <Card.Group items={items} />;
    }

    render(){
        return(
            <Layout>
                <h3>Campaigns</h3>
                <Button content='Add Campaign' icon='add circle' primary floated='right'/>
                {this.renderlist()}
            </Layout>
        ); 

    }
}

export default CampaignIndex;