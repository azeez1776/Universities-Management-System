import { React, useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import Button from '@material-ui/core/Button';
import 'antd/dist/antd.css';
import './Explore.css';
import Loader from './Loader';
import { useHistory } from 'react-router-dom';


const baseUrl = '/api/uni/';

function Explore() {

    const [uni, setUni] = useState([]);
    const [loader, setLoader] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const history = useHistory();

    const handleUpdate = (id) => {
        fetch(baseUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    const handleDelete = (id) => {
        fetch(baseUrl + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .catch(err => console.log(err))

    }

    useEffect(() => {
        // setLoader(true);
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {

                    // setLoader(false);
                    setUni(data);
                }, 500)
            })
            .catch((err) => {
                console.log(err);
                history.push('/')
            });
    }, [uni]);

    return (
        <div className="Explore">
            {loader && <Loader />}
            <Row style={{ margin: 0 }} justify="start" gutter={[16, 16]}>
                {uni.map((post) => {
                    return (<Col >
                        <div className="card">
                            <div key={post._id}>
                                <Card hoverable={true} title={post.name} style={{ width: 280, borderRadius: 10 }} >
                                    <p>Mkoa:{post.region}</p>
                                    <p>Nafasi:{post.rank}</p>
                                    <Button onClick={() => handleDelete(post._id)} variant="contained" color="secondary">DELETE</Button>
                                    <Button onClick={() => handleUpdate(post._id)} variant="contained" style={{ marginLeft: 70 }} color="primary">EDIT</Button>
                                </Card>
                            </div>

                        </div>
                    </Col>)
                })}
            </Row>

        </div>
    )
}

export default Explore
