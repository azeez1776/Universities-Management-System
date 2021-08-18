import React, { useContext } from 'react';
import './Nav.css';
import { Row, Col } from 'antd';
import { LoginContext } from '../Helper/Context'
import { Link, useHistory } from 'react-router-dom';


function Nav() {
    const linkStyle = {
        color: "black"
    }

    const history = useHistory();
    const { loggedIn, setLoggedIn } = useContext(LoginContext)


    const logout = async function () {
        try {
            const res = await fetch('/api/logout');

            if (res.status === 200) {
                setLoggedIn(false)
                history.push('/')
            } else {
                return res.json()
            }

            // const data = res.status === 200 ? 
            // history.push('/') : res.json();
            // return data;
        }
        catch (err) {
            console.log("Something wrong", err)
        }
    }

    return (
        <div className="nav">
            {/* {!loggedIn && <div />} */}
            {loggedIn &&
                (<Row gutter={[16, 16]} justify="end">
                    <Col>
                        <div className="nav_el">
                            <a><Link className="navLink" to='/Add'>Add University</Link></a>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav_el">
                            <a><Link className="navLink" to='/Explore'>Explore</Link></a>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav_el">
                            <a><Link className="navLink" onClick={logout} to='/'>Log Out</Link></a>
                        </div>
                    </Col>
                </Row>
                )
            }

        </div>
    )
}

export default Nav
