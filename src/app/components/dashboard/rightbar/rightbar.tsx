
export default function Rightbar() {
    return (
        <div className="fixed">
            <div className=" relative py-5">
                <div className="absolute bottom-[30%] right-0 w-[80%] h-[80%]">
                    <img src="/cell9.png" alt="" className=" object-cover opacity-30"></img>
                </div>
                <div className="flex flex-col gap-4 pr-5">
                    <span className="font-extrabold text-lg">🔥Available now</span>
                    <h3 className="font-bold text-2xl">How to use the first version of the stock dashboard</h3>
                    <span className="text-sm">Take 5 mins to learn !!!</span>
                    <p>A dashboard is a way of displaying various types of visual data in one place. Usually, a dashboard is intended to convey different, but related information in an easy-to-digest form.
                    </p>
                </div>
            </div>
            <div className=" relative py-5">
                <div className="flex flex-col gap-4 pr-5">
                    <span className="font-extrabold text-lg">🚀🚀🚀Coming soon</span>
                    <h3 className="font-bold text-2xl">New server actions are available, graph is coming up!</h3>
                    <span className="text-sm">Boost your productivity</span>
                    <p>A dashboard is a way of displaying various types of visual data in one place. Usually, a dashboard is intended to convey different, but related information in an easy-to-digest form.
                    </p>
                </div>
            </div>
        </div>
    );
}