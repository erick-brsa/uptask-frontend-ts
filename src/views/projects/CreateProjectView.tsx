import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import ProjectForm from '@/components/ProjectForm';
import { ProjectFormData } from '@/types/index';
import { createProject } from '@/services/ProjectAPI';

export default function CreateProjectView() {
	const initialValues: ProjectFormData = {
		projectName: '',
		clientName: '',
		description: ''
	};

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ defaultValues: initialValues });

	const handleForm = (data: ProjectFormData) => {
		createProject(data);
	};

	return (
		<div className="max-w-3xl mx-auto">
			<h1 className="text-5xl font-black">Crear Proyecto</h1>
			<p className="text-2xl font-light text-gray-500 mt-5">
				Llena el siguiente formulario para crear un proyecto
			</p>
			<nav className="my-5">
				<Link
					to="/"
					className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
				>
					Volver a Proyectos
				</Link>
			</nav>

			<form
				className="mt-10 bg-white shadow-lg p-10 rounded-lg"
				onSubmit={handleSubmit(handleForm)}
				noValidate
			>
				<ProjectForm errors={errors} register={register} />

				<input
					type="submit"
					className="bg-fuchsia-600 w-full hover:bg-fuchsia-700 p-3 uppercase font-bold cursor-pointer text-white transition-colors"
					value="Crear Proyecto"
				/>
			</form>
		</div>
	);
}
