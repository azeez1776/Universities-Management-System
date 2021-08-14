import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import Button from '@material-ui/core/Button';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';
import { StylesProvider } from '@material-ui/styles';



function Login() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");

    let history = useHistory();
    const handleChange = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: name, password: pass })
        }).then(res => (res.status === 200) ? console.log("good"): res.json())
            .then(data => data.message ? setError(data.message) : null)
            .catch(err => console.log("error logging in", err))
        }
        console.log(error || "ops")
    return (
        <div className="form">
            <form onSubmit={handleChange}>
                <div className="form_info">
                    <Row gutter={[16, 16]}>

                        <Col span={24}  >
                            <Card style={{ width: 300, borderRadius: 10 }}>
                                <h1>Login</h1>

                                {/* <div className="form_user">
                                    <TextField id="form_user" label="username" variant="outlined" />
                                </div>

                                <div className="form_pass">
                                    <TextField id="form_password" label="password" variant="outlined" />
                                </div> */}
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
                                    <p><b>{error}</b></p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </form>
        </div >
    )
}

export default Login
