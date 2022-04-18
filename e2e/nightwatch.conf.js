module.exports = {
    src_folders: ['e2e/specs'],
    output_folder: 'e2e/reports',

    test_settings: {
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            },

            webdriver: {
                start_process: true,
                port: 4444,
                server_path: require('geckodriver').path
            }
        }
    }
};
