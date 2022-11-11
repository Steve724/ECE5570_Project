import React from "react";
import Unit from "./Unit";
import Stars from "./Stars";
export default function Box(){
    return (
        <dvi>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <h5>Intersectionality strength: 3</h5>
                            <h5>Rating: 3 stars</h5>
                            {/*<Stars/>*/}
                            <Unit race="black" gender="female" sexualOrientation="straight" comment="*comment*"/>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5>Intersectionality strength: 2</h5>
                            <h5>Rating: 4.5 stars</h5>
                            <Unit race="asian" gender="female" sexualOrientation="gay" parent="yes" comment="*comment*"/>
                            <Unit race="white" gender="female" sexualOrientation="straight" comment="*comment*"/>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5>Intersectionality strength: 1</h5>
                            <h5>Rating: 4.7 stars</h5>
                            <Unit race="black" gender="male" sexualOrientation="gay" comment="*comment*"/>
                            <Unit race="black" gender="male" sexualOrientation="gay" comment="person2 comment"/>
                            <Unit race="white" gender="male" sexualOrientation="straight" comment="*comment*"/>
                        </div>
                    </div>
                </div>
        </dvi>

    )
}