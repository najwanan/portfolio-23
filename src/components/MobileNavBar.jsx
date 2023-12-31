import { useState, useRef, useEffect } from 'react';
import { withRouter } from 'next/router';
import HamReg from '../assets/HamReg.svg';
import HamX from '../assets/HamX.png';


function MobileNavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeButton = useRef(null);
	const router = withRouter();

	useEffect(() => {
		setMenuOpen(false);
	}, [router]);

	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add('no-scroll');
			closeButton.current.scrollIntoView();
		} else {
			document.body.classList.remove('no-scroll');
		}
	}, [menuOpen]);

	return (
		<>
			<div className="md:hidden flex place-items-center justify-between h-16 bg-du-gray bg-spec-black-600">
				<div className="flex p-4 w-1/5">
					<a href="/">
						{/* <Image className="object-scale-down object-center" src={} alt="logo" /> */}
					</a>
				</div>
				<div className="flex justify-center text-white w-3/5">
					<p className="text-xs md:text-base">Sustainable Progress & Equality Collective</p>
				</div>
				<div className="flex justify-center w-1/5">
					<button className="flex pr-6" onClick={() => setMenuOpen(prev => !prev)}>
						<img className="object-center h-18 w-18" src={HamReg} alt="logo" />
					</button>
				</div>
			</div>

			<div className={menuOpen ? 'relative' : 'invisible'}>
				<div
					className="fixed top-0 right-0 pl-28 pr-8 h-screen z-20 w-4/5 text-right bg-spec-black-600"
					style={{ overflowY: 'scroll' }}
				>
					<div className="grid grid-rows-11 gap-3 place-content-evenly text-white text-2xl">
						<button className="pb-12 pt-10 text-right" ref={closeButton} onClick={() => setMenuOpen(prev => !prev)}>
							Close <img src={HamX} className="inline" />
						</button>
						<a href="/">Home</a>
						<br />
						<a href="/">About</a>
						<br />
						<a href="/">Work</a>
						<br />
						<a href="/">Learn</a>
						<br />
						<a href="/">Contact</a>
						<br />
						
					</div>
				</div>
			</div>
		</>
	);
}

export default MobileNavBar;