import WorkCards from "./WorkCards";

export default function Work() {
    return (
        <div className="flex flex-col bg-white py-4 px-12">
        <div className="py-4">
            <div className="pl-[116px] pr-[205px] py-8">
                <div className="text-7xl font-extrabold text-poppins text-black">WORK</div>
                <div className="lead-xl font-mono font-light ">A selection of my recent work</div>
            </div>
        </div>
        <WorkCards />
     </div>
    )
}