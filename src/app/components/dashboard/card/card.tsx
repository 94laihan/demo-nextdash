import { MdInventory, MdNoteAlt, MdPeople, MdSupervisedUserCircle } from "react-icons/md";

export default function Card(props: CardType) {
    const {title, value, description, type} = props;
    return (
        <div className="w-full flex py-5 px-5 gap-5 bg-gradient-to-r from-blue-900 to-indigo-900 shadow-sm rounded-2xl">
            {renderIcon(type)}
            <div className="flex flex-col gap-5 w-full">
                <span className="text-3xl font-extrabold leading-none tracking-tight text-white">{title}</span>
                <span className="text-3xl font-extrabold leading-none tracking-tight text-[#00C9B7]">{value}</span>
                <span>{description}</span>
            </div>
        </div>
    );
}

function renderIcon(type: number) {
    let icon;
    switch(type) {
        case 1:
            icon = <MdInventory size={30}/>;
            break;
        case 2:
            icon = <MdPeople size={30}/>;
            break;
        default:
            icon = <MdNoteAlt size={30}/>
    }
    return (icon);
}

type CardType = {
    title: string,
    value: string,
    description: string
    type: number
}