import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectInputPath, decidedFilePath} from "./HeaderSlice";

import styles from "./Header.module.css";

export function Header() {
    const dispatch = useDispatch();
    const [inputPath, setInputPath] = useState('');
    async function openFile() {
        const filePath = await window.electronAPI.openFile();
        setInputPath(filePath);
        dispatch(decidedFilePath(filePath));
    };

    return (
        <div className={styles.headerContainer}>
            <input 
                className={styles.inputField}
                value={inputPath}
                onChange={(e) => setInputPath(e.target.value)}
            />
            <button onClick={openFile}>浏览</button>
        </div>
    )
}