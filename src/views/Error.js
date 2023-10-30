import MainNavigation from "../components/Organisms/MainNavigation/MainNavigation"

const ErrorPage = () => {
	return (
		<>
			<MainNavigation />
			<main>
				<h1>An error occurred!</h1>
				<p>Coud not find this page!😥</p>
			</main>
		</>
	)
}

export default ErrorPage