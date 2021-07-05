import LeftNav from './leftNav/index.js';
import ScTreeTable from './treeTable/index.vue';

const components = [
    LeftNav,
    ScTreeTable
]
const install = function (Vue, opts = {}) {
    if (Vue.prototype.$isServer) return;
    components.map(component => {
        if (component.props.hasOwnProperty('themes')) {
            component.props.themes.default = () => {
                return opts
            }
        }
        Vue.component(component.name, component);
    });
};

export default {
    version: '1.0.0',
    install,
    LeftNav,
    ScTreeTable
};