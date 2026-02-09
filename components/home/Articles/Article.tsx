import Link from "next/link"

function Article({name, date, id}: {name: string, date: string, id: string}) {
    return (
        <div className="flex flex-col w-[80%] md:w-68.25 h-93 gap-2">
            <div className="bg-[#B5B5B5] w-full h-67.5 rounded-xl relative">
                <span className="absolute bottom-0 px-2 py-1 bg-[#E7E7E777] right-0 rounded-br-xl rounded-tl-xl text-[12px]">{date}</span>
            </div>
            <div className="bg-primary-400 h-40 rounded-xl p-2 flex flex-col items-center justify-between">
                <h5>{name}</h5>
                <button className="bg-primary-600 w-full rounded-sm h-8.75 flex justify-center items-center text-background cursor-pointer"><Link href={id}>بخوانید</Link></button>
            </div>
        </div>
    )
}

export default Article