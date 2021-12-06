import './Window.scss';
import Draggable from 'react-draggable'; // The default
import {forwardRef, useImperativeHandle, useState} from "react";


function Window(props, ref) {
    const [hidden, toggleHidden] = useState(props.hidden)
    useImperativeHandle(ref, () => ({
        toggle() {
            toggleHidden(!hidden);
        }

    }));
    const hideElement = () => {
        toggleHidden(!hidden);
    }
    return (
        <Draggable handle={`.${props.className}__control-bar-dragzone`}>
            <div className={`${props.className}__wrapper window__wrapper ${hidden ? 'hidden' : ''}`}>
                <div className={`${props.className}__control-bar window__control-bar`}>
                    <div className={`${props.className}__control-bar-actions window__control-bar-actions`}>
                        <div className={`${props.className}__control-bar-close window__control-bar-close`}
                             onClick={hideElement}>x
                        </div>
                        <div className={`${props.className}__control-bar-minimize window__control-bar-minimize`}>-</div>
                        <div className={`${props.className}__control-bar-maximize window__control-bar-maximize`}>+</div>
                    </div>
                    <div className={`${props.className}__control-bar-dragzone window__control-bar-dragzone`}>
                        0
                    </div>
                </div>
                {props.content}
            </div>
        </Draggable>
    )
}

export default forwardRef(Window)