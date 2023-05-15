import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectInputPath, selectFilePath} from "./HeaderSlice";

const { dialog } = require('electron')

export function Header() {
    const dispatch = useDispatch();
    const [inputPath, setInputPath] = useState('');
    
    function openFileDialog() {
        dialog.showOpenDialog({
            properties: ['openFile', 'openDirectory']
        }).then(result => {
            if (!result.canceled) {

            }
        })
    }

    return (
        <>
            <input value={inputPath} />
            <button
            />
        </>
    )
}