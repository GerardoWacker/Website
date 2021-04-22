import React from "react";
import './footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <span>&copy; 2021 Gerardo Wacker. Made in <img style={{verticalAlign:"bottom", width: "20px", paddingTop: "3px"}} src={"https://i.rar.vg/7Bq0HxkiuHDFFGZH2orEt7wTlZZNZvJo.svg"} alt="Argentina" /> with ♥</span>
            </div>
        )
    }
}