import generateColors from './utils/color.js';
import objectAssign from 'object-assign';
import axios from 'axios';
import colorMap from './utils/colorMap.js';
import store from 'store';
// import themeDefalut from './utils/themeDefalut.js';
// 修改主题
export default (color) => { // color 为一个色值
    // console.log(themeDefalut);
    let colors = { primary: color };
    colors = objectAssign({}, colors, generateColors(colors.primary));
    // let styleData = themeDefalut;
    axios.get('https://unpkg.com/element-ui/lib/theme-default/index.css').then((data) => {
        let styleData = data;
        Object.keys(colorMap).forEach(key => {
            const value = colorMap[key];
            styleData = styleData.replace(new RegExp(key, 'ig'), value);
        });
        Object.keys(colors).forEach(key => {
            styleData = styleData.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + colors[key]);
        });
        const style = document.createElement('style');
        style.innerText = styleData;
        document.head.appendChild(style);
        store.set('themeColor', color);
    })
}