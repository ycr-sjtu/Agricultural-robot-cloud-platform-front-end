// 获取assets静态资源
const getAssetsFile = (url: string) => {
    // @ts-ignore
    return new URL(`../assets/imagebox/${url}`, import.meta.url).href;
};
export default {
    getAssetsFile,
};
