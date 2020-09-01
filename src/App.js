import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ClipboardIcon from 'react-clipboard-icon'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    const [number, serNumber] = useState(100);
    const [anjay, setAnjay] = useState('');

    const submit = useCallback(() => {
        if (number > 0) {
            setAnjay("Anjay ".repeat(number));
        }
    }, [number]);

    useEffect(() => {
        if (anjay.length) {
            toast.success('Anjay Berhasil!!!');
        }
    }, [anjay]);

    return (
        <div className="App">
            <header className="App-header">
                <div className='title'><strong>Anjay</strong> <span style={{fontSize: '70%'}}>Generator</span></div>
                <input className='input' type='number' value={number} onChange={(e) => serNumber(e.target.value)}/>
                <button className='button' onClick={submit}>Anjaaayyy!!</button>

                {anjay.length > 0 && <div className='anjay-area'>
                    <ClipboardIcon
                        size={20}
                        style={{fill: 'white', position: 'absolute', right: 4, cursor: 'pointer', zIndex: 99}}
                        onClick={() => {
                            navigator.clipboard.writeText(anjay);
                            toast('Anjay!! berhasil di copy!');
                        }}
                    />
                    {anjay}
                </div>}
            </header>
            <ToastContainer position="bottom-center"/>
        </div>
    );
}

export default App;
