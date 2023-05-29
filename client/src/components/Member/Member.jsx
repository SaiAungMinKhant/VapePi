import React from "react"
import './Member.scss'
import v5 from '../../assets/v5.png'
import v7 from '../../assets/v7.png'
import v12 from '../../assets/v12.png'

function Member() {
    return (
        <div className="member">
            <div className="box item-1">
                <div className="items-1">
                    <h1>Membership Program</h1>
                    <p>Be a Vape Pi member and get our<br/>special exclusive offers</p>
                    <button>View</button>
                </div>
            </div>
            <div className="box item-2">
                <img src={v12} alt="#" />
                <div className="item-info">
                    <h1>Devices</h1>
                    <p>Find the best for <br/>you here!</p>
                </div>
            </div>
            <div className="box item-3">
                <div className="img-con">
                        <img src={v7} alt="#" />
                </div>
                <div className="item-info">
                        <h1>Pods</h1>
                        <p>Variety of choices<br/>available</p>
                </div>
            </div>  
            <div className="box item-4">
                <div className="img-con">
                    <img src={v5} alt="#" />
                </div>
                <div className="item-info">
                    <h1>Disposable</h1>
                    <p>Easy clean &<br/>superb flavor</p>
                </div>
            </div>
        </div>
    )
}

export default Member;
