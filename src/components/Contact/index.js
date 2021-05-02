import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Control, Form, Group, MessageBody, Button, NotificationP  } from './ContactElements';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
         }
    }

    
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    sendEmail = (e) => {
        e.preventDefault();
    

        emailjs.sendForm('service_2hoewhi', 'template_esvutmj', e.target, 'user_K4DQFjNgm7nW1IPA2FcT0')
            .then((result) => {
                console.log(result.text);
                this.setState({
                    emailSent: true
                });
            }, (error) => {
                console.log(error.text);
                this.setState({
                    emailSent: false
                });
            });
            this.setState({ 
                name: '',
                email: '',
                message: '',
                disabled: false,
                emailSent: null
             })
    }

    render() { 
        return ( 

            <Form onSubmit={this.sendEmail}>
                <Group>
                    <Control placeholder="Full Name" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </Group>

                <Group>
                    <Control placeholder="Email" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                </Group>

                <Group>
                    <MessageBody placeholder="Message" id="message" name="message" as="textarea"  value={this.state.message} onChange={this.handleChange} />
                </Group>

                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                    Send
                </Button>

                {this.state.emailSent === true && <NotificationP className="d-inline success-msg">Email Sent. Thank you for your message!</NotificationP>}
                {this.state.emailSent === false && <NotificationP  className="d-inline error-msg">Email Not Sent</NotificationP>}
            </Form>
             

         );
    }
}
 
export default Contact;
