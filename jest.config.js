module.exports = {
    verbose: true,
    moduleNameMapper: {
        "^.+\\.(css|sass)$": "identity-obj-proxy",
        "module_name_(.*)": "<rootDir>/substituted_module_$1.js"
    },
};