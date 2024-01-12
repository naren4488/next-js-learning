import Card from "@/components/card";
import Link from "next/link";

export default function NotificationsPage(){
    return <Card>
        <div>Notification</div>
        <Link href='/complexDashboard/archived'>Archived</Link>
    </Card>
}