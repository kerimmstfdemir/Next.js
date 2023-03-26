import { notFound } from "next/navigation" 

const ErrorPage = ({ searchParams }) => {
    if (searchParams.error === "true") {
        throw new Error("This is an error!")
    }

    if ( searchParams.test === "true") {
        notFound()
    }
    
    return (
        <h2>Error Component Page</h2>
    )
}

export default ErrorPage