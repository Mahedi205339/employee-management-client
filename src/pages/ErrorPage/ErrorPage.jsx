import { Link } from 'react-router-dom';
import errorPhoto from '../../assets/not-found.png'
const ErrorPage = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>

            <div>
                <h3 className="text-2xl text-center">404: Page not found</h3>
                <img src={errorPhoto} alt="" />
                <Link to='/'>
                    <button className='px-2 py-1 border border-blue-500 font-bold rounded'>Go to home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;