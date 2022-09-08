import React from 'react';
import { shell } from 'electron';
import { Button } from 'tea-component';

import './login-about.scss';
import loginBg from '../../assets/icon/login-bg.png';

export const LoginAbout = (): JSX.Element => {
    return (
        <div className="login-about">
            <section className="login-about__header">
                <span className="login-about__header--logo" />
                <span className="login-about__header--tc-text">财乎</span>
            </section>
            <section className="login-about__text">
                <p>
                    上财乎，学投资
                </p>
                <p>
                    新手入门，名师课堂，随到随学
                </p>
            </section>
            <section className="login-about__logo" >
                <img src={loginBg}></img>
            </section>
            {/* <section className="login-about__button">
                <Button type="weak" className="login-about__button--purchase" onClick={handlePurchaseClick}>立即注册</Button>
                <Button type="text" className="login-about__button--contact" onClick={handleContactClick}>联系我们</Button>
            </section> */}
        </div>
    )
};