import React from 'react'

import FormGroup from '../../FormGroup'

export default (props) => {
    const branches = [
        'Baş ofis - Müştəri Xidmətləri Mərkəzi',
        'Mərkəz filialı',
        'Bakı filialı',
        'Yasamal filialı'
    ]

    const BranchOptions = () => (
        branches.map((branch, index) => {
            return <option value={branch} key={index}>{branch}</option>
        })
    )

    return (
        <div className="form-container">
            <FormGroup>
                <label>Müştəri kodu</label>
                <input type="text" placeholder="0062226" />
            </FormGroup>

            <FormGroup>
                <label>Adı</label>
                <input type="text" placeholder="Captain America Ltd" />
            </FormGroup>

            <FormGroup>
                <label>VÖEN</label>
                <input type="text" placeholder="1234567891" />
            </FormGroup>

            <FormGroup>
                <label>Filial</label>
                <select defaultValue=''>
                    <option value='' disabled hidden>Siyahıdan seçin</option>
                    <BranchOptions />
                </select>
            </FormGroup>
        </div>
    )
}
