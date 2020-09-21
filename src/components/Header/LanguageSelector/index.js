import React from 'react'

const Flag = (props) => {
    return (
        <img src={"images/flags/" + props.name} alt="test" width="15px" height="15px" />
    )
}

export default () => {

    const options = [
        {
            name: 'AZ',
            icon: 'az.png'
        },
        {
            name: 'EN',
            icon: 'en.png'
        },
        {
            name: 'RU',
            icon: 'ru.png'
        }
    ]

    const [active, setActive] = React.useState(false)
    const [selected, setSelected] = React.useState(0)

    return (
        <div className={`select${active ? ' active' : ''}`} onClick={() => setActive(!active)}>
            <div className="option selectedOption">
                <Flag name={options[selected].icon} />
                <span>{options[selected].name}</span>
                <i className="material-icons">{active ? 'arrow_drop_up' : 'arrow_drop_down'}</i>
            </div>
            <div className="options">
                {options.map((option, index) => {
                    if (option.name !== options[selected].name)
                        return (
                            <div className="option" onClick={() => setSelected(index)} key={index}>
                                <Flag name={option.icon} />
                                <span>{option.name}</span>
                            </div>
                        )
                    return null
                })}
            </div>
        </div>
    )
}