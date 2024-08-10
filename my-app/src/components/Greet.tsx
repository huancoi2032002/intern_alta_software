type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggeIn: boolean,
}

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
    return(
        <div>
            <h2>
                {
                    props.isLoggeIn ? `Chào mừng ${props.name}! Bạn có ${messageCount} chưa đọc` : 'Chao mung'
                }
            </h2>
        </div>
    )
}


