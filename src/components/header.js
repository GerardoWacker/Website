import React from 'react'
import Link from '../router/link'
import './header.css'
import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'

export default class Header extends React.Component {
    render() {
        const { isSmall } = this.props

        if(isSmall)
            return (
                <div className="header-small">
                <div className="content">
                    <div className="texts">
                        <p>
                            <a href="/#about">
                                <span className="title">Gerardo Wacker.</span>
                            </a>
                        </p>
                        <p>
                            <span className="texts-large">Buenos Aires based developer.</span>
                        </p>
                    </div>
                </div>
            </div>
        )
        else
            return(
            <div className="header">
                <div className="content">
                    <div className="texts">
                        <p>
                            <a href="#about">
                                <span className="title">Gerardo Wacker.</span>
                            </a>
                        </p>
                        <p>
                            <span className="texts-large">Buenos Aires based developer.</span>
                        </p>
                        <p className="icons">
                            <Link to="https://www.twitter.com/GerardoWacker"><FiTwitter size={30} /></Link>
                            <Link to="https://www.github.com/GerardoWacker"><FiGithub size={30} /></Link>
                            <Link to="mailto:ge@rar.vg"><FiMail size={35} /></Link>
                        </p>
                        <a href="#about">
                            <p className="arrow">
                                <IoIosArrowDown size={30}/>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}