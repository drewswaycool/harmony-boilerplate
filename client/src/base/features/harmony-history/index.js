import createHistory from 'history/createBrowserHistory';

const history = {
    push: (path) => {
        window.location.href = "/#"+path;
    }
}
export default history;