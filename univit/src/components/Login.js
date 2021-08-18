import React, { useState, useContext } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { Row, Col, Card, message } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../Helper/Context'



function Login() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const { loggedIn, setLoggedIn } = useContext(LoginContext)

    let history = useHistory();
    const handleChange = (e) => {
        e.preventDefault()
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: name, password: pass })
        }).then(res => {
            if (res.status === 200) {
                setLoggedIn(true)
                message.success('Logged In')
                history.push('/Explore')
            } else {
               return res.json()
            }
        })
            .then(data => {
                if (data) {
                    message.error(data.message)
                } else {
                    setError(data)
                    console.log(data)
                    return null
                }
            })
            .catch(err => console.log("error logging in", err))
    }
    return (
        <div className="form">
            <form onSubmit={handleChange}>
                <div className="form_info">
                <Row style={{ margin: 0 }} align="middle" justify="center" gutter={[16, 16]}>
                        <Col >
                            <Card style={{ width: 300, borderRadius: 10 }}>
                                <h1>Login</h1>
                                <div className="form_user">
                                    <label for="username">Username: </label>
                                    <input type="text" className="form_username" style={{ margin: 5 }} value={name} onChange={(e) => setName(e.target.value)} /><br />
                                </div>
                                <div className="form_pass">
                                    <label for="password">Password: </label>
                                    <input type="password" className="form_password" style={{ margin: 5, marginLeft: 16 }} value={pass} onChange={(e) => setPass(e.target.value)} /><br />
                                </div>
                                <div className="form_btn">
                                    <Button type="submit" variant="contained" color="primary" >
                                        Login
                                    </Button>
                                </div>
                            </Card>
                                    {/* <p style={{color:"red"}}><b>{error}</b></p> */}
                        </Col>
                    </Row>
                </div>
            </form>
        </div >
    )
}

export default Login
