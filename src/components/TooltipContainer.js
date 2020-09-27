/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Sep 27 2020 19:57:38 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

// more: https://github.com/atomiks/tippyjs-react

const coloredTooltipCSS = {
    color: 'yellow',
}

const ColoredTooltip = () => {
    return <span style={coloredTooltipCSS}>Colored React Component</span>
}

const customChildCSS = {
    backgroundColor: 'rebeccapurple',
    color: '#fff',
    padding: '16px',
    display: 'inline-block'
}

const CustomChild = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} style={customChildCSS}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})

function TooltipContainer() {
    return (
        <div>
            {/* Text in Tooltip */}
            <div style={{ paddingTop: '20px' }}>
                <Tippy content='Basic Tooltip'>
                    <button>Tippy Component</button>
                </Tippy>
            </div>

            {/* HTML/React component in Tooltip */}
            <div style={{ paddingTop: '20px' }}>
                <Tippy content={<ColoredTooltip />}>
                    <button>Tippy Component</button>
                </Tippy>
            </div>

            {/* Children Component in Tooltip */}
            {/* Advance Tooltip */}
            <div style={{ paddingTop: '20px' }}>
                <Tippy
                    content={<ColoredTooltip />}
                    arrow={true} // true, false
                    delay={500} // ms
                    placement='top-start' // top, bottom, left, right
                    // top-start
                >
                    <CustomChild />
                </Tippy>
            </div>
        </div>
    )
}

export default TooltipContainer
