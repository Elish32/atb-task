import React from "react"

import CustomerInfo from "./CustomerInfo"
import UserInfo from "./UserInfo"

import './index.css'


export default (props) => {

    const steps = [
        "MÜŞTƏRİ MƏLUMATI",
        "İSTİFADƏÇİ MƏLUMATI",
        "HÜQUQLAR",
        "TƏSDİQ"
    ]

    const [step, setStep] = React.useState(0);

    const prev = () => {
        if (step > 0) setStep(step - 1)
    }

    const next = () => {
        if (step < steps.length) setStep(step + 1)
    }

    const submit = () => {
        alert('submitted')
    }

    return (
        <>
            <div className="tabSteps">
                {steps.map((_step, i) => {
                    return (
                        <div key={i} className={`step${step === i ? " active" : ""} ${step < i ? " completed" : ""}`}>
                            <div className="dot"></div>
                            <div className="dot whiteDot"></div>
                            <span>{_step}</span>
                        </div>
                    );
                })}
            </div>
            <div className="step-content">
                {step === 0 && (
                    <CustomerInfo />
                )}
                {step === 1 && (
                    <UserInfo />
                )}
            </div>

            <div className="buttonsWrapper">
                {step > 0 && <button className="prevButton col-2" onClick={prev}>Geri</button>}
                {step + 1 < steps.length && <button className="nextButton col-2" onClick={next}>İrəli</button>}
                {step === steps.length - 1 && <button className="nextButton col-2" onClick={submit}>TƏSDİQ</button>}
            </div>
        </>
    )
}
