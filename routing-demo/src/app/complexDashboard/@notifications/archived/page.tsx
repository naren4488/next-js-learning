import Card from "@/components/card";
import Link from "next/link";


export default function ArchivedNotifications(){
    return <Card>
        <div>Archived Notification</div>
        <Link href='/complexDashboard'>Default</Link>
    </Card>
}