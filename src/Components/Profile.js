import React from 'react'
import { FcApproval } from "react-icons/fc";
import { FaRegStar } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { BiDish } from "react-icons/bi";

function Profile(props) {
    return (
        <>
            <div className="">
                <img className="img-center" src={'https://pbs.twimg.com/profile_images/1307907733090230272/DRVi1OaZ_400x400.jpg'} alt="profile_pic" />
                <div className="mt-4">
                    <h4 className="verify"><FcApproval />Verified</h4>
                    <h4 className="rating"><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></h4>
                </div>

                <div className="row ml-2 mt-4 detail " style={{ borderTop: '2px solid red', width: '97%', marginBottom: '10px' }}>
                    <div className="col-4 col-md-4 col-sm-4 mt-2">
                        <ImHome style={{ fontSize: 30, marginLeft: 15 }} />
                        <p style={{ borderBottom: '2px solid red', width: '40px', marginBottom: '10px' }}>Currently <br />Working in</p>
                        <h5>4 house</h5>

                    </div>
                    <div className="col-4 col-md-4 col-sm-4 ">
                        <BiDish style={{ fontSize: 30, marginLeft: 15 }} />
                        <p style={{ borderBottom: '2px solid red', width: '40px', marginBottom: '10px' }}>Expert in <br />cuisines</p>
                        <h5>North Indian,<br /> Chinese</h5>
                    </div>
                    <div className="col-4 col-md-4 col-sm-4 ">
                        <BiDish style={{ fontSize: 30, marginLeft: 15 }} />
                        <p style={{ borderBottom: '2px solid red', width: '40px', marginBottom: '10px' }}>signature <br /> Dishes</p>
                        <h5>Kachodi-kadhi<br /> Rajma Rice</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
