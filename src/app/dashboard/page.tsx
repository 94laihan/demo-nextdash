import { auth } from "../auth";
import Card from "../components/dashboard/card/card";
import Rightbar from "../components/dashboard/rightbar/rightbar";
import Transaction from "../components/dashboard/transaction/transaction";

export default async function DashboardPage() {
    return (
        <div className="w-full mt-10 gap-6 flex">
            <div className="flex flex-1 flex-col gap-10">
                <div className="flex gap-10">
                    <Card title="Total Stock" value="250" type={1} description="This is the number of current stock type"/>
                    <Card title="Total User" value="5" type={2} description="This is the number of current active users"/>
                </div>
                <Transaction/>
            </div>
            <div className=" w-[25%]">
                <Rightbar/>
            </div>
        </div>
    );
}