import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXbox, faSteam } from '@fortawesome/free-brands-svg-icons';
import { faClipboard, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

function IconsFormatter(props: any) {
    let element: any = null;

    if (props.type.toUpperCase() === 'PLATFORM') {
        const list = props.list.sort();
        element = platformIcons(list).map((x: any) => x);
    }

    else if (props.type.toUpperCase() === 'ACTIONS') {
        const id = props.id;
        element = actionIcons(id).map((x: any) => x);
    }

    return element;
};

function platformIcons(platformsList: any) {
    const compList: any = [];

    if (platformsList.length > 0) {
        platformsList.map((p: any) => {
            switch (p.toUpperCase()) {
            case 'XBOX':
                compList.push(<FontAwesomeIcon icon={faXbox} className="mr-3" title="XBox" />);
                break;
            case 'STEAM':
                compList.push(<FontAwesomeIcon icon={faSteam} className="mr-3" title="Steam"/>);
                break;
            default:
                break;
            }
        });
    };

    return compList;
};

function actionIcons(id: any) {
    const compList: any = [];

    compList.push(detailsIcon(id));
    compList.push(editIcon(id));
    compList.push(deleteIcon(id));

    return compList;
};

function detailsIcon(dataId: any) {
    return <FontAwesomeIcon icon={faClipboard} className="mr-3" title="Details"/>;
}

function editIcon(dataId: any) {
    return <FontAwesomeIcon icon={faPencilAlt} className="mr-3" title="Edit"/>;
}

function deleteIcon(dataId: any) {
    return <FontAwesomeIcon icon={faTrash} className="mr-3" title="Delete"/>
}

export default (IconsFormatter);