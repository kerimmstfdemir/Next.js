const ErrorPage = ({ searchParams }) => {
    if (searchParams.error === "true") {
        throw new Error("This is an error!")
    }
    
    return (
        <h2>Error Component Page</h2>
    )
}

export default ErrorPage