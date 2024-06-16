import React from 'react';
import { useTelegram } from "../hooks/useTelegram";

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className="header">
            <button onClick={onClose}>Закрыть</button>
            <span className="username">
                {user?.username || 'No username available'}
            </span>
        </div>
    );
};

export default Header;
