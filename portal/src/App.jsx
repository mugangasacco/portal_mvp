import './App.css';
import { FrappeProvider } from 'frappe-react-sdk';
function App() {
	return (
		<div className="App">
			<FrappeProvider>
				<div className="bg-mgreen h-screen w-screen grid md:grid-cols-2 gap-4">
					<div className=" w-full h-full flex items-center justify-center p-10">
						<div className="flex flex-col w-full items-center justify-center text-center">
							<p className=" text-3xl mb-5 text-center text-white">
								This Website is under maintenance, <br></br>We
								will back soon
							</p>
							<img className="w-80" src="/msacco_logo.png" />
						</div>
					</div>
					<div className="w-full h-full flex items-center justify-center">
						<div className="flex p-12 flex-col items-center justify-center bg-white rounded-3xl w-2/3 h-1/3 text-center">
							Please use the following email in the meantime
							<div className="bg-mgreen m-2 rounded-lg text-white w-full p-4">
								<a
									href="mailto:loans.application@mugangasacco.rw"
									className=" font-bold"
								>
									Loan: loans.application@mugangasacco.rw
								</a>
							</div>
							<div className="bg-morange m-2 rounded-lg text-white w-full p-4">
								<a
									href="mailto:loans.application@mugangasacco.rw"
									className=" font-bold"
								>
									Other: info@mugangasacco.rw
								</a>
							</div>
						</div>
					</div>
				</div>
			</FrappeProvider>
		</div>
	);
}

export default App;
