import { Link } from 'react-router-dom';
import Navbar from '../components/header/Navbar';

const Error404 = () => {
    return (
        <>
            <Navbar />
            <div className='text-center absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
                <h2 className='font-bold text-6xl text-rose-500 mb-12 cursor-pointer'>ERROR: 404 NOT FOUND!</h2>
                <Link to="/" className="px-4 py-2 rounded-2xl bg-rose-500 text-white">To Back</Link>
            </div>
        </>
    )
}

export default Error404