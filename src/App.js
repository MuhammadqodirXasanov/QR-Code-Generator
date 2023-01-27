import React from 'react';
import './App.css';

export function App() {
	const [temp, setTemp] = React.useState('');
	const [word, setWord] = React.useState('');
	const [qrCode, setQrCode] = React.useState('');

	React.useEffect(() => {
		setQrCode(
			`https://api.qrserver.com/v1/create-qr-code/?data=${word}&size=150x150`
		);
	}, [word]);

	function handleGenerator() {
		setWord(temp);
	}

	return (
		<div className='box'>
			<h1>QR Code Generator in React</h1>
			<div className='inputSec'>
				<input
					color='primary'
					type='text'
					placeholder='Enter URL...'
					onChange={(e) => {
						setTemp(e.target.value);
					}}
				/>
			</div>
			{word && localStorage.setItem('qrCode', qrCode)}
			<div>
				{word && <img src={localStorage.getItem('qrCode')} alt='qr code img' />}
			</div>
			<div className='btnAria'>
				<button sx={{ m: 2 }} variant='contained' onClick={handleGenerator}>
					Generate
				</button>
				<a href={qrCode} download='QRCode'>
					<button variant='outlined'>Download</button>
				</a>
			</div>
		</div>
	);
}
