import { types, flow, getRoot } from "mobx-state-tree"
import { Store } from "@dhis2/d2-ui-core";

const query = {
    dashboards: {
        resource: 'dashboards.json',
        params: {
            fields: 'id,name',
            paging: 'false'
        }
    }
}

const ais = Store.create();
const is = Store.create();
ais.state = [];
is.state = [];
export const Settings = types
    .model("Settings", {
        title: 'CPX'
    }).actions(self => ({
        assignItems: (items) => {
            const assigned = self.assignedItemStore.state.concat(items);
            self.assignedItemStore.setState(assigned);
            return Promise.resolve();
        },
        unAssignItems: (items) => {
            const assigned = self.assignedItemStore.state.filter(item => items.indexOf(item) === -1);
            self.assignedItemStore.setState(assigned);
            return Promise.resolve();
        }
    })).actions(self => ({
        fetchDashboards: flow(function*() {
            const engine = getRoot(self).engine
            const { dashboards } = yield engine.query(query);
            let items = dashboards.dashboards.map(d => {
                return { text: d.name, value: d.id };
            });
            // self.itemStore.setState(items);
        })
    })).actions(self => ({
        afterCreate: () => {
            // self.itemStore.state = [];
            // self.assignedItemStore.state = [];
            self.fetchDashboards();
        }
    })).views(self => ({

    }))