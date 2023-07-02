import {
	Navigate,
	Route,
	Routes
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import ConstructionScreen from "./screens/construction/Construction";

const Layout = ({ children }) => {

	return (
		<>
			<div className="app__container">
				<Container fluid className="app__main ">
					{children}
				</Container>
			</div>
		</>
	);
};

function App() {
	return (
		<Routes>
			<Route
				path="/underconstruction"
				exact
				element={
					<Layout>
						<ConstructionScreen />
					</Layout>
				}
			></Route>
			<Route path="*" element={<Navigate to="/underconstruction" />}></Route>

		</Routes>
	);
}

export default App;
