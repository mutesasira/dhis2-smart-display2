import { types, flow } from "mobx-state-tree"
import { Settings } from './models/Settings';

export const Store = types
    .model("Store", {
        engine: types.frozen(),
        settings: types.optional(Settings, {}),
        dashboards: types.optional(types.frozen(), []),
        demo: 3
    })