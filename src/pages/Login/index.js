import React, { useContext, useState } from 'react'
import { Card, Header, Icon, Form, Input, Button } from "semantic-ui-react";
import axios from 'axios'
import { UserContext } from "../../App";

function Login(props) {
    const context = useContext(UserContext)

    const [input, setInput] = useState({
        username: "",
        password: ""
    })

    function changeValue(value, name) {
        setInput({...input, [name]: value})
    }

    function resetValue() {
        setInput({ password: "" })
    }

    function login() {
        axios
          .post('http://localhost:8000/admin/login', input)
          .then(res => {
            if (res.data.success) {
              context.login(res.data.token)
              props.history.push('/')
            } else {
              resetValue()
              alert('Username atau password anda salah')
            }
          })
      }

    if (context.isLoggedIn()) {
        props.history.push('/')
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
                            value={input.username}
                            onChange={event => changeValue(event.target.value, 'username')}
                            />
                        </Form.Field>
            
                        <Form.Field>
                            <Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                            value={input.password}
                            onChange={event => changeValue(event.target.value, 'password')}
                            />
                        </Form.Field>
            
                        <Form.Field>
                            <Button positive fluid content="Masuk" onClick={login} />
                        </Form.Field>
                        </Form>
                    </Card.Content>
                    </Card>
            </div>
        )
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