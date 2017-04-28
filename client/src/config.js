

function initConfig() {

    let config = { };

    if (process.env.NODE_ENV === 'development') {

        /* ---------- Config Development --------- */
        config = {
            ROOT_SERVRE_URL: 'http://localhost:8080/api'
        };

    }

    else if (process.env.NODE_ENV === 'production') {

        /* ---------- Config Production --------- */
        config = {
            ROOT_SERVRE_URL: 'http://localhost:8080/api'
        };

    }

    return config;

}

export const config = initConfig();

