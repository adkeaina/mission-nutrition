import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomepageRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to /home immediately after the component is mounted
        navigate('/home');
    }, [navigate]);  // Empty dependency array to run once when the component mounts

  return null;  // Since we're redirecting, we don't need to render anything here
};

export default HomepageRedirect;