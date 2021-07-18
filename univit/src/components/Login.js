import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import Button from '@material-ui/core/Button';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router';
import { StylesProvider } from '@material-ui/styles';



function Login() {
    let history = useHistory();
    const handleChange = () => {
        history.push('/Explore');
    }
    return (
        <div className="form">
            <form>
                <div className="form_info">
                    <Row gutter={[16, 16]}>

                        <Col span={24}  >
                            <Card style={{ width: 300, borderRadius: 10 }}>
                                <h1>Login</h1>

                                <div className="form_user">
                                    <TextField id="form_user" label="username" variant="outlined" />
                                </div>

                                <div className="form_pass">
                                    <TextField id="form_password" label="password" variant="outlined" />
                                </div>

                                <div className="form_btn">
                                    <Button variant="contained" color="primary" onClick={handleChange}>
                                        Login
                            </Button>
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
