import React from 'react';
import { Link } from 'react-router-dom';

function Button({ to, label, onClick }) {
    return (
        <div className="relative inline-flex h-[40px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-auto cursor-pointer">
            <Link to={to} onClick={onClick}>
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    {label}
                </span>
            </Link>
        </div>
    );
}

export default Button;
