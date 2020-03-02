import { decorate,observable,action } from "mobx"
import GroupStore from './GroupStore';
const query = {
    dashboards: {
        resource: 'dashboards.json',
        params: {
            fields: 'id,name,dashboardItems[*]',
            paging: 'false'
        }
    }
}


export class Settings{
    assignedItemStore = GroupStore.create({state:[]});
    itemStore = GroupStore.create({state:[]});
    dashboards = [];
    engine;

    constructor(engine){
        this.engine = engine;
    }

    assignItems= (items) => {
        const assigned = this.assignedItemStore.state.concat(items);
        this.assignedItemStore.setState(assigned);
        return Promise.resolve();
    }
    unAssignItems= (items) => {
        const assigned = this.assignedItemStore.state.filter(item => items.indexOf(item) === -1);
        this.assignedItemStore.setState(assigned);
        return Promise.resolve();
    }

    fetchDashboards= async ()=> {
        const { dashboards } = await this.engine.query(query);
        let items = dashboards.dashboards.map(d => {
            return { text: d.name, value: d.id };
        });
        this.dashboards = dashboards.dashboards
        this.itemStore.setState(items)
    }
}

decorate(Settings,{
    assignedItemStore:observable,
    itemStore:observable,
    engine:observable,

    assignItems:action,
    unAssignItems:action,
    fetchDashboards:action

})