import LineChart from "./line-chart"

function BarChart(){
    return <h1>Bar chart in DashBoard</h1>
}


export default function DashBoard(){
    return <>
    <h1>Dashboard</h1>
    <BarChart/>
    <LineChart/>
    </>
}