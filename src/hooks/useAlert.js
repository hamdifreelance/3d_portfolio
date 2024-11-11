//  A Custom hook
// Hooks don't return any jsx, it returns an object or an array of values
import { useState } from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    // this hook will return an object of alert, showAlert, hideAlert
    return { alert, showAlert, hideAlert };
};

export default useAlert;