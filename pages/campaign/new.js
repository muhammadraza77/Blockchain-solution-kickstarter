import React,{Component} from 'react';
import factory from '../../ethereum/factory';


import web3 from '../../ethereum/web3'
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import {Router} from '../../routes';

class CampaignNew extends Component{
    state={
        minContribution:'',
        errmsg:'',
        loading:false,
    }

    onSubmit=async (event)=>{
        event.preventDefault();
        this.setState({loading:true,errmsg:''});
        try{

            const accounts= await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minContribution.replace(/\s+/, ""))
                .send({
                from: accounts[0]
            });

          
            console.log("**try ");
            Router.pushRoute('/');
        }catch(err){
            console.log("**catch");
            // console.log(err);
            this.setState({errmsg:err.message});
        }
        console.log("**exit");
        this.setState({loading:false});
    }
    render(){
        return(
            <Layout>
                <h2>Create New Campaigns !</h2>
                <Form onSubmit={this.onSubmit} error={!!this.state.errmsg}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label='Wei' labelPosition='right' 
                                value={this.state.minContribution}
                                onChange={event=>{this.setState({minContribution:event.target.value})}}
                        />
                    </Form.Field>
                    <Message error header='Opps!' content={this.state.errmsg}></Message>
                    <Button primary loading={this.state.loading}>Create !</Button>
                </Form>
            </Layout>
        ); 

    }
}

export default CampaignNew;


// import React, { Component } from 'react';
// import { Form, Button, Input, Message } from 'semantic-ui-react';
// import Layout from '../../components/Layout';
// import factory from '../../ethereum/factory';
// import web3 from '../../ethereum/web3';
// import { Router } from '../../routes';

// class CampaignNew extends Component {
//   state = {
//     minimumContribution: '',
//     errorMessage: '',
//     loading: false
//   };

//   onSubmit = async event => {
//     event.preventDefault();

//     this.setState({ loading: true, errorMessage: '' });

//     try {
//       const accounts = await web3.eth.getAccounts();

//       Router.pushRoute('/');
//     } catch (err) {
//       this.setState({ errorMessage: err.message });
//     }

//     this.setState({ loading: false });
//   };

//   render() {
//     return (
//       <Layout>
//         <h3>Create a Campaign</h3>

//         <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
//           <Form.Field>
//             <label>Minimum Contribution</label>
//             <Input
//               label="wei"
//               labelPosition="right"
//               value={this.state.minimumContribution}
//               onChange={event =>
//                 this.setState({ minimumContribution: event.target.value })}
//             />
//           </Form.Field>

//           <Message error header="Oops!" content={this.state.errorMessage} />
//           <Button loading={this.state.loading} primary>
//             Create!
//           </Button>
//         </Form>
//       </Layout>
//     );
//   }
// }

// export default CampaignNew;