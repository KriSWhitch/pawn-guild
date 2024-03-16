import React from 'react'

export default function Modal({
    onCancelClick,
    htmlMarkup,
    onNextClick,
    component: Component,
    text,
    nextText = "Next",
    cancelText = "Cancel",
    ...restProps
}) {
    return (
        <div className="report-modal__backdrop">
            <div className="report-modal__container">
                {htmlMarkup &&
                    <div className="html-markup__container" dangerouslySetInnerHTML={{ __html: htmlMarkup }} />
                }
                {Component &&
                    <Component {...restProps} />
                }
                {text &&
                    <div className="report-modal__text">{text}</div>
                }
                {onNextClick &&
                    <div onClick={() => onNextClick()} className="report-modal__button">{nextText}</div>
                }
                {onCancelClick &&
                    <div onClick={() => onCancelClick()} className="report-modal__button">{cancelText}</div>
                }
            </div>
        </div>
    );
}