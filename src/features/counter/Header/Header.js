import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export function Header() {
    const dispatch = useDispatch();
    const [inputPath, setInputPath] = useState('');

    return (
        <>
            <input value={inputPath} />
        </>
    )
}