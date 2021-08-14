import React from 'react';
import './Nav.css';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

function Nav() {
    const linkStyle = {
        color: "black"
    }
    return (
        <div className="nav">
            <Row gutter={[16, 16]} justify="end">
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
                        <a><Link className="navLink" to='/'>Log Out</Link></a>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Nav
