import React,{Component} from 'react';
import web3 from '../../ethereum/web3';
import { Card , Button, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import {Link} from '../../routes';
import Campaign from '../../ethereum/campaign';
import Campform from '../../components/CampaigForm';
// import {Link} from '../../routes';
class CampaignShow extends Component{

    static async getInitialProps(props){
        // const address=argument.query.address;
        
        // const contract=Campaign(address);
        // const summary= await contract.methods.getSummary().call();
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0].toNumber(),
            balance: summary[1].toString(),
            requestsCount: summary[2].toNumber(),
            approversCount: summary[3].toNumber(),
            manager: summary[4]
          };
    

    }
    renderCards() {
        const {
          balance,
          manager,
          minimumContribution,
          requestsCount,
          approversCount
        } = this.props;
    
        const items = [
          {
            header: manager,
            meta: 'Address of Manager',
            description:
              'The manager created this campaign and can create requests to withdraw money',
            style: { overflowWrap: 'break-word' },
            color: 'teal'
          },
          {
            header: minimumContribution,
            meta: 'Minimum Contribution (wei)',
            description:
              'You must contribute at least this much wei to become an approver',
              color: 'teal'
          },
          {
            header: requestsCount,
            meta: 'Number of Requests',
            description:
              'A request tries to withdraw money from the contract. Requests must be approved by approvers',
              color: 'teal'
          },
          {
            header: approversCount,
            meta: 'Number of Approvers',
            description:
              'Number of people who have already donated to this campaign',
              color: 'teal'
          },
          {
            header: web3.utils.fromWei(balance+'', 'ether'),
            meta: 'Campaign Balance (ether)',
            description:
              'The balance is how much money this campaign has left to spend.',
              color: 'teal'
          }
        ];
    
        return <Card.Group itemsPerRow={2} items={items} />;
      }    

    render(){
        return(
            <Layout>
                <h3>{this.props.minimumContribution}</h3>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>

                    <Grid.Column width={6}>
                        <Campform address={this.props.address}></Campform>
                    </Grid.Column>

                    <Grid.Row>
                        <Grid.Column>
                        <Link route={`/campaign/${this.props.address}/requests`}>
                            <a>
                            <Button primary>View Requests</Button>
                            </a>
                        </Link>
                        </Grid.Column>
                    </Grid.Row>


                </Grid>

            </Layout>
        ); 

    }
}

export default CampaignShow;