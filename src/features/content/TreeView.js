import React, {useState} from 'react';
import CheckboxTree from 'react-checkbox-tree';

export function TreeView() {
    const [treeData, setTreeData] = useState('');

    return (
        <CheckboxTree />
    )
}