import Socials from "./Socials";

const Footer = () => {
	return (
		<footer className="py-4 bg-zinc-50 dark:bg-slate-900 pt-20">
			<div className="w-full relative z-0 mx-auto p-4 flex items-center justify-center">
				<Socials style={'flex'}/>
				<span className="text-md text-zinc-400 sm:text-center">
					&copy;&nbsp;S M Morshed {new Date().getFullYear()}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
