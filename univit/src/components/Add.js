import { React, useEffect, useState } from 'react'
import { Card, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import './Add.css';

function Add() {



    // const post = () => {
    //     fetch('http://localhost:5000/api/uni', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify()
    //     })
    //         .then(response => response.json())
    //         .then(data => setAddUni(data))
    // }
    // console.log(addUni)

    // useEffect(() => {
    //    post();

    // }, []);
    const [addUni, setAddUni] = useState({ name: "", region: "", rank: "" });
    const [pending, setPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        setPending(true)

        e.preventDefault();
        fetch('http://localhost:5000/api/uni', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addUni)
        })
            .then(response => {
                setTimeout(() => {

                    response.json();
                    history.push('/Explore');
                    setPending(false);
                }, 1000)
            })


    }

    useEffect(() => {

    }, [])


    return (
        <div className="Add">
            <Row style={{ margin: 0 }} align="middle" justify="center" gutter={[16, 16]}>
                <Col>
                    <Card title="ADD UNIVERSITY" style={{ width: 400, borderRadius: 10 }}>
                        <div className="Univ_inputs">
                            <form onSubmit={handleSubmit}>
                                <div className="univ_name">
                                    <label for="University Name">University Name</label>
                                    <input onChange={e => setAddUni({ ...addUni, name: e.target.value })} value={addUni.name} style={{ margin: 5, marginLeft: 12 }} /><br />
                                </div>
                                <div className="univ_region">
                                    <label for="University Region">University Region</label>
                                    <input onChange={e => setAddUni({ ...addUni, region: e.target.value })} value={addUni.region} style={{ margin: 5 }} /><br />
                                </div>
                                <div className="univ_rank">
                                    <label for="University Rank">University Rank</label>
                                    <input onChange={e => setAddUni({ ...addUni, rank: e.target.value })} value={addUni.rank} style={{ margin: 5, marginLeft: 16 }} /><br />
                                </div>
                                <div>

                                    {pending && <input disabled type="submit" className="btn" style={{ marginLeft: 130, marginTop: 10, borderRadius: 5, width: 100, height: 35, border: "none" }} value="ADDING"></input>}
                                    {!pending && <input type="submit" className="btn" style={{ marginLeft: 130, marginTop: 10, borderRadius: 5, width: 100, height: 35, fontSize: 15, border: "none" }} value="ADD"></input>}


                                </div>
                            </form>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Add
