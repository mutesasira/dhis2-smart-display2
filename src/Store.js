import { types } from "mobx-state-tree"
import {Settings} from './models/Settings'
export const Store = types
    .model("Store", {
        settings:types.optional(Settings,{}),
        demo:3
    })