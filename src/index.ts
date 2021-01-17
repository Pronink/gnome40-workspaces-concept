import Workspace from "./Workspace";

let ws1: Workspace = new Workspace({x: 100, y: 50});
let ws2: Workspace = new Workspace({x: 600, y: 50});
let ws3: Workspace = new Workspace({x: 1100, y: 50});
console.log(Workspace.workspaces);
window['Workspace'] = Workspace;
Workspace.select(1);
