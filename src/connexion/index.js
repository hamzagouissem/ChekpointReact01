import React from 'react'
import './style.css'

export default function Connexion() {
    return (
        <div>
            <div clessName="form">
                <form action="" methode="post">
                    <h1>Se connecter</h1>
                    <div>
                        <label htmFor="">Email</label>

                        <input type="text"></input>
                    </div>
                    <div>
                        <label htmFor="">Password</label>

                        <input type="password"></input>
                    </div>
                    <button>Connexion</button>
                </form>
            </div>
        </div>
    )
}
