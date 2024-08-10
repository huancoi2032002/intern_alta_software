type StatusProps = {
    status: 'loading' | 'success' | 'error', // Union of string literals
}

export const Status = (props: StatusProps) => {
    let message 
    if(props.status === 'loading'){
        message = 'Loading...'
    }else if(props.status === 'success') {
        message = 'Data fetched successfully'
    }else if(props.status === 'error') {
        message = 'Error fetch data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}


