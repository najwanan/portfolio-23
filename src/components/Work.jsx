import WorkCards from "./WorkCards";

export default function Work() {
    return (
        <section className="z-10">
        <div id="Work" className="flex flex-col z-10  bg-port-cream py-4 md:px-12">
        <div className="py-4">
            {/* <div className="pl-[116px] pr-[205px] py-8"> */}
                <div className="text-5xl md:text-7xl font-extrabold text-poppins text-black pt-10">FEATURED WORK</div>
                <div className="lead-xl font-mono font-light ">A selection of recent projects</div>
            {/* </div> */}
        </div>
        <WorkCards />
            </div>
            </section>
    )
}
