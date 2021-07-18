import React from 'react';
import './Nav.css';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <Row gutter={[16, 16]} justify="end">
                <Col>
                    <div className="nav_el">
                        <a><Link style={{ color: 'black' }} to='/Add'>Add</Link></a>
                    </div>
                </Col>
                <Col>
                    <div className="nav_el">
                        <a><Link style={{ color: 'black' }} to='/Explore'>Explore</Link></a>
                    </div>
                </Col>
                <Col>
                    <div className="nav_el">
                        <a><Link style={{ color: 'black' }} to='/Login'>Login</Link></a>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default Nav
