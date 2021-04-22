import React from 'react'
import Profile from './Profile'
import ImageCard from './ImageCard'
import AddressCard from './AddressCard'
import { BiDotsVerticalRounded } from 'react-icons/bi'

function DataList() {
    return (
        <>
            {/* navbar section */}
            <nav className="nav">
                <div className="nav-menu">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="nav-brand">
                    <h3 className="text-black">Chef Profile</h3>
                </div>
                <div className="dot"><BiDotsVerticalRounded /></div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-s-8 offset-md-2 mt-5 section_profile">
                        <Profile />
                        <ImageCard />
                        <AddressCard />
                    </div>
                </div>
            </div>


        </>
    )
}

export default DataList;
