import React from 'react'

function AddressCard() {
    return (
        <div>
            <div className=" col-12 col-sm-12 col-md-8 address shadow mt-4 p-3 mb-4">
                <div className="">
                    <h6 className="">Address</h6>
                    <p className="add_one" style={{ borderBottom: '2px solid gray' }}>
                        Akshya Nagar 1st Block 1st cross</p>
                    <p className="add_two" style={{ borderBottom: '2px solid gray' }}>
                        Rammurthy Nagar, Delhi- 260016</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard;
