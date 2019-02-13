import * as H from 'history';

export const getNavClickHandler = (history: H.History) => (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { currentTarget: el } = e;
    history.push(el.hash.slice(1));
}