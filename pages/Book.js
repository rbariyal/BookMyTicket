import React, {useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'; 
import { useRouter } from "next/router";
const Book= () => {
const [show,setShow]=useState();
const router = useRouter();
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
        if(!router.isReady) return
        const {moviename} = router.query;
       setShow(moviename)

      }, [router.isReady]);
      
  
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: ""
    })

    function handleChange(e) {
        setUserDetail({
            ...userDetail, [e.target.name]: e.target.value
        })
    }
    
    function handleFormSubmit(e) {
        e.preventDefault()
        
        let movieBookingDetail = {
            MovieName: show,
            userDetail
        }
       let localStorageMoviesData = localStorage.getItem(movieBookingDetail)
       if(!localStorageMoviesData)
       {
        localStorage.setItem('movieBookingDetail',JSON.stringify(movieBookingDetail));
       }
    
        setUserDetail({
            name: "",
            email: ""
        })
        alert('You Booked your ticket succefully!')
    }

    return (
        <div className="m-4">
            { <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Show Name</Form.Label>
                            <Form.Control defaultValue={show && show} disabled type="test" placeholder="Show Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUserName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control required name="name" value={userDetail.name} onChange={handleChange} type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required name="email" value={userDetail.email} onChange={handleChange} type="email" placeholder="Enter email" />
                        
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Book the show
                        </Button>
                    </Form>

            }
        </div>
    )
}

export default Book;