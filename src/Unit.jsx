import React from "react";

export default function Unit({race,gender,sexualOrientation,comment,parent}){
    return (
            <div>
                <div className="card bg-c-blue order-card">
                    <div className="card-block">
                        <h6 className="m-b-20">***Race: {race}</h6>
                        <p>***Gender: {gender}</p>
                        <p className="m-b-0"><span className="f-right">***Sexual Orientation: {sexualOrientation}</span></p>
                        <p>***Parent: {parent}</p>
                        <p>Comment: {comment}</p>
                    </div>
                </div>
            </div>

    )
}