import React from "react";
import mainLogo from "../media/icon/main logo.svg"
import arrow from "../media/icon/arrow.svg"

const Login = () => {
    return (
        <>
            <div class="wrapper">
                <form action="">
                    <img src={mainLogo} alt="Главный логотип" />
                    <h2>IT - RUN</h2>
                    <h2>Добро пожаловать! </h2>

                    <div class="input-group">
                        <span class="icon">
                            <ion-icon name="person"></ion-icon>
                            <p>ввидите логин</p>
                        </span>
                        <input type="text" placeholder="it-run-login" required />
                    </div>
                    <div class="input-group">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                            <p>ввидите пароль</p>
                        </span>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" class="btn">Войти
                        <img src={arrow}  alt="Кнопка входа"/>
                    </button>
                </form >
            </div >
        </>
    )
}

export default Login;