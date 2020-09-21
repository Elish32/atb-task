import React from "react"

import FormGroup from '../FormGroup'

import './index.css'

export default (props) => {
    return (
        <div className={`modal${props.modal ? ' active' : ''}`}>

            <div className="modal__header">
                <span>İstifadəçi məlumatları</span>
                <i className="material-icons" onClick={props.toggle}>highlight_off</i>
            </div>

            <FormGroup>
                <label htmlFor="ssa">S.A.A.</label>
                <input type="text" placeholder="Kamilov Kamil Kamaleddin oqlu" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="fin">FİN Kod</label>
                <input type="text" placeholder="6S5AQ89" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="kamil.kk@gmail.com" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="code">Kod sözü</label>
                <input type="text" placeholder="starboy" />
            </FormGroup>

            <FormGroup>
                <label htmlFor="number">Mobil nömrə</label>
                <input type="text" placeholder="+994501234567" />
            </FormGroup>

            <FormGroup className="checkbox">
                <input type="checkbox" id="otp_checkbox" />
                <span className="checkmark"></span>
                <label htmlFor="otp_checkbox">SMS OTP</label>
            </FormGroup>

            <button className="addButton">Əlavə et</button>
        </div>
    )
}