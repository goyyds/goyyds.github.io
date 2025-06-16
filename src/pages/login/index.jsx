import React, {useState} from 'react';

import Layout from '@theme/Layout';
import JSON from "qs";

const [username, setUsername] = "";
const [password, setPassword] = "";
const [error, setError] = "";

const handleSubmit = async (e) => {
    e.preventDefault();


};

export default function Index() {
    return (
        <div className="container margin-vert--xl">
            <h1>用户登录</h1>
            <form onSubmit={handleSubmit}>
                <div className="margin-bottom--md">
                    <label>
                        用户名：
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="input--text"
                        />
                    </label>
                </div>
                <div className="margin-bottom--md">
                    <label>
                        密码：
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input--text"
                        />
                    </label>
                </div>
                {error && <div className="alert alert--danger margin-bottom--md">{error}</div>}
                <button type="submit" className="button button--primary">
                    登录
                </button>
            </form>
        </div>
    );
}
