import { decorate,observable,action } from "mobx"
import { Settings } from './models/Settings';

// export const Store = types
//     .model("Store", {
//         engine: types.frozen(),
//         settings: types.optional(Settings, {}),
//         dashboards: types.optional(types.frozen(), []),
//         demo: 3
//     })

export class Store{
    engine;
    settings = new Settings(this.engine);
    constructor(engine){
        this.engine = engine;
        this.settings.engine = engine;
    }
}


decorate(Store,{
    settings:observable,
    engine:observable
})
