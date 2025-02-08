import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavMenu from '@/components/NavMenu';
import Logo from '@/components/Logo';

export default function AppLayout() {
	return (
		<>
			<header className="bg-gray-800 py-5">
				<div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center px-10">
					<div className="w-64">
						<Logo />
					</div>
					
					<NavMenu />
				</div>
			</header>

			<section className="max-w-4xl mx-auto mt-10 p-5">
				<Outlet />
			</section>

			<footer className="py-5">
				<p className="text-center">
					Todos los derechos reservados {new Date().getFullYear()}
				</p>
			</footer>

			<ToastContainer 
				pauseOnHover={false}
				pauseOnFocusLoss={false}
			/>
		</>
	);
}
