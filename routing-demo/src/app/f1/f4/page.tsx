import Link from "next/link";

export default function pageF4(){
    return <>
    <h1>F4 page</h1>
    
    <div>
        <Link href='/f1/f3'>go to f3</Link>
        <br/>
        <Link href='/about'>go to about page</Link>
    </div>
    </>
}