import React,{Component} from 'react';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Layout from './Layout';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class CampaignForm extends Component{
    state={
        value: '',
        errorMessage:'',
        loading:false
    }

    onSubmit=async (event)=>{
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        try{
            console.log("****");
            const contract=Campaign(this.props.address);
            const accounts=await web3.eth.getAccounts();
            await contract.methods.contribute().send({
                from:accounts[0],value:web3.utils.toWei(this.state.value,'ether')});

            Router.replaceRoute(`/campaigns/${this.props.address}`);          
        }catch(err){
            this.setState({ errorMessage: err.message });
            console.log(this.state.errorMessage,'************');
        }

        this.setState({ loading: false, value: '' });   


    }
    render(){
        return(
            
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
                <Form.Field>
                    <label>Contribute to Campaign</label>
                    <Input label='Ether' labelPosition='right' value={this.state.value} 
                            onChange={event=>{this.setState({value:event.target.value})}}/>
                </Form.Field>
                <Message error header='Opps!' content={this.state.errorMessage} ></Message>
                <Button primary loading={this.state.loading}>Contribute</Button>
            </Form>
        ); 

    }
}

export default CampaignForm;
