import { compile } from 'path-to-regexp';

import config from './config';

type Path = {
    path: string,
    toPath: Function
};

function createPathObject(path: string): Path
{
    return {
        path: path,
        toPath: compile(path)
    };
}

export const root = createPathObject(config.baseurl);
export const login = createPathObject(config.baseurl + 'login');
export const modelA = createPathObject(config.baseurl + 'modela');
export const modelB = createPathObject(config.baseurl + 'modelb');

