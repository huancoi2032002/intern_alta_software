import React from "react"

type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return (
        <div>
            <h2 style={props.styles}>Container</h2>
        </div>
    )
}

