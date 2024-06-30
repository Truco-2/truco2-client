import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookies = (name: string, content: string, exp: number) => {
    cookies.set(name, content, {
        expires: new Date(exp * 1000),
    });
};

export const getCookies = (name: string) => {
    return cookies.get(name);
};

export const cleanCookies = (name: string) => {
    cookies.remove(name);
};
