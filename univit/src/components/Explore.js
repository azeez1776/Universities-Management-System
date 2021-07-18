import { React, useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import Button from '@material-ui/core/Button';
import 'antd/dist/antd.css';
import './Explore.css';
import Loader from './Loader';

const baseUrl = 'http://localhost:5000/api/uni';

function Explore() {

    const [uni, setUni] = useState([]);
    const [loader, setLoader] = useState(false);


    const handleDelete = () => {
        fetch(baseUrl, {
            method: 'DELETE',
            headers: {
                'COntent-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
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
                            <div key={post.index}>
                                <Card hoverable={true} title={post.name} style={{ width: 280, borderRadius: 10 }} >
                                    <p>Mkoa:{post.region}</p>
                                    <p>Nafasi:{post.rank}</p>
                                    <Button onClick={() => handleDelete()} variant="contained" color="primary">DELETE</Button>
                                </Card>
                                {/* console.log(post.name) */}
                            </div>

                        </div>
                    </Col>)
                })}
            </Row>

        </div>
    )
}

export default Explore
