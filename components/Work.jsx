import WorkCards from "./WorkCards";

export default function Work() {
    return (
        <div className="flex flex-col bg-white py-4 px-12">
        <div className="py-4">
            <div className="pl-[116px] pr-[205px] py-8">
                <div className="text-7xl text-black">Title</div>
                <div className="lead-xl font-light ">Subtitle with a long long long long long long text</div>
            </div>
        </div>
        <WorkCards />
     </div>
    )
}
