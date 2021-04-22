import React from "react";
import './footer.css'
import argentina from '../static/1f1e6-1f1f7.svg'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <span>&copy; 2021 Gerardo Wacker. Made in <img style={{verticalAlign:"bottom", width: "20px", paddingTop: "3px"}} src={argentina} alt="Argentina" /> with ♥</span>
            </div>
        )
    }
}