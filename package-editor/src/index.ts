export { BuildApplication };


class MyApplication {
    getAppName() {
        return "Leon App";
    }
}

function BuildApplication() {
    return new MyApplication();
}