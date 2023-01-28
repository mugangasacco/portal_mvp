import { FrappeProvider } from 'frappe-react-sdk';

function App() {
	return (
		<div className="bg-mgreen flex flex-wrap mb-4 min-h-screen absolute inset-0">
			<FrappeProvider>
				<div className=" w-full sm:w-1/2 flex items-center justify-center p-10">
					<div className="flex flex-col w-full items-center justify-center text-center">
						<p className=" text-2xl mb-5 text-center text-white">
							Iyi sisteme iri kuvugururwa <br></br>turayisubizaho
							mu giho gito kiri imbere.
						</p>
						<img
							className="w-1/2"
							src="/assets/portal_mvp/portal/msacco_logo.png"
						/>
					</div>
				</div>
				<div className="w-full sm:w-1/2 flex items-center justify-center p-3">
					<div className="flex px-7 py-14 flex-col items-center justify-center bg-white rounded-xl w-full sm:w-3/4  text-center">
						<button class="btn btn-green w-full mb-4">
							Saba Inguzanyo kuri:{' '}
							<strong>loan.application@mugangasacco.rw</strong>
						</button>
						{/* <button class="btn btn-orange w-full">
							Uzuza Amakuru
						</button> */}
						<p className="font-bold text-lg mt-2 text-left text-mgreen">
							<strong>Ukeneye ubufasha? </strong>
							<hr />
							Hamagara: <strong>0788 124 500</strong>
							<br />
							Twandikire kuri{' '}
							<strong>info@mugangasacco.rw</strong>
						</p>
					</div>
				</div>
			</FrappeProvider>
		</div>
	);
}

export default App;
