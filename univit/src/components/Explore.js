import { React, useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import Button from '@material-ui/core/Button';
import 'antd/dist/antd.css';
import './Explore.css';
import Loader from './Loader';


const baseUrl = 'http://localhost:5000/api/uni/';

function Explore() {

    const [uni, setUni] = useState([]);
    const [loader, setLoader] = useState(false);


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
            .then(res => {
                console.log(uni.name);
                res.json();
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        setLoader(true);
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {

                    setLoader(false);
                    setUni(data);
                }, 1000)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div className="Explore">
            {loader && <Loader />}
            <Row style={{ margin: 0 }} justify="start" gutter={[16, 16]}>
                {uni.map((post) => {
                    return (<Col >
                        <div className="card">
                            {/* {displayUni(uni)} */}
                            <div key={post._id}>
                                <Card hoverable={true} title={post.name} style={{ width: 280, borderRadius: 10 }} >
                                    <p>Mkoa:{post.region}</p>
                                    <p>Nafasi:{post.rank}</p>
                                    <Button onClick={() => handleDelete(post._id)} variant="contained" color="secondary">DELETE</Button>
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
