import React, { Component } from 'react'
import { Card, Header, Icon, Form, Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { Consumer } from "../../App";

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    changeValue = (value, name) => {
        this.setState({[name]: value})
    }

    resetValue = () => {
        this.setState({ password: "" })
    }

    login = () => {
        axios
          .post('http://localhost:8000/pengguna/login', this.state)
          .then(res => {
            if (res.data.success) {
              this.context.setToken(res.data.token)
              this.props.history.push('/')
            } else {
              this.resetValue()
              alert('Username atau password anda salah')
            }
          })
      }

    render() {
        return (
            <Consumer>
                {
                    (context) => {
                        if (context.isLoggedIn()) {
                            this.history.push('/')
                        }
                        return (
                            <div style={styles.container}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>
                                        <Header icon textAlign="center">
                                            <Icon name="user circle" />
                                            <Header.Content>Masuk</Header.Content>
                                        </Header>
                                        </Card.Header>
                            
                                        <Form>
                                        <Form.Field>
                                            <Input
                                            fluid
                                            icon="user"
                                            iconPosition="left"
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={event => this.changeValue(event.target.value, 'username')}
                                            />
                                        </Form.Field>
                            
                                        <Form.Field>
                                            <Input
                                            fluid
                                            icon="lock"
                                            iconPosition="left"
                                            placeholder="Password"
                                            type="password"
                                            value={this.state.password}
                                            onChange={event => this.changeValue(event.target.value, 'password')}
                                            />
                                        </Form.Field>
                            
                                        <Form.Field>
                                            <Button positive fluid content="Masuk" onClick={this.login} />
                                        </Form.Field>
                            
                                        <Form.Field>
                                            <Link to="/daftar">
                                            <Button basic color="orange" fluid content="Daftar" />
                                            </Link>
                                        </Form.Field>
                                        </Form>
                                    </Card.Content>
                                    </Card>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

const styles = {
    container: {
      height: '100vh',
      marginTop: -60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }

export default Login