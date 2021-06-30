import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();

    //Home redirection
    useEffect(() => {
        setTimeout(()=> {
            router.push("/")
        },4000)
    },[])

    return (
        <div className="not__found">
            <h1 className="my-3">Ops, This web page does not exist</h1>
            <h4 className="mt-5">Go back to our homepage or wait to be redirected</h4>
            <Link href="/">
                <a className="link__override"><h5>Go Home</h5></a>
            </Link>
        </div>
    );
};

export default NotFound;