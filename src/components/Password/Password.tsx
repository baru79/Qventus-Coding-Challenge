import usePassword from '../../hooks/usePassword';
import './Password.css';
import { useState } from 'react';
// import { passwordReqs } from '../../utils';

const Password = () => {
    const [password, setPassword] = useState('');
    const passwordReqs = usePassword();
    return (
        <>
            <p className="title">Password Component</p>
            <div className="container">
                <input
                    aria-label="password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ul>
                    {passwordReqs.map((req, index) => {
                        const { text, validate } = req || {};
                        const badgeStatus = validate(password) ? 'accept' : 'deny';
                        const badgeSymbol = validate(password) ? '✔' : 'x';
                        return (
                            <li className="listItem" key={`req-${index}`}>
                                <span
                                    className={`badge ${badgeStatus}`}
                                    aria-label={`badge-${index}`}
                                >
                                    {badgeSymbol}
                                </span>
                                <span>{text}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Password;
