import Position from "./public/Position";

export default class Workspace { // TODO Separate class into 2: Workspace -> DesktopManager? and a little one called Workspace (class? interface?)
    public static workspaces: Array<Workspace> = [];
    public static readonly WIDTH: number = 1600;
    public static readonly HEIGHT: number = 900;
    public static isFullscreen: boolean = true;

    private readonly index: number;
    private readonly positionWhenUnselected: Position;
    private readonly htmlElement: HTMLElement;
    private isSelected: boolean;

    constructor(positionWhenUnselected: Position) { // TODO Workspaces will to have 2 positions: One for the left and other for the right
        this.index = Workspace.workspaces.length;
        this.positionWhenUnselected = positionWhenUnselected;
        this.isSelected = false;
        Workspace.workspaces.push(this);

        // Add to DOM
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'workspace';
        document.querySelector('#workspaces').appendChild(this.htmlElement);
    }

    public static select(index): void {
        Workspace.workspaces.forEach((workspace: Workspace) => {
            workspace.isSelected = workspace.index === index;
            if (workspace.isSelected) {
                if (Workspace.isFullscreen) {
                    Workspace.fullscreenWorkspace(workspace);
                } else {
                    Workspace.centerWorkspace(workspace);
                }
            } else {
                workspace.htmlElement.style.top = workspace.positionWhenUnselected.y + 'px';
                workspace.htmlElement.style.left = workspace.positionWhenUnselected.x + 'px';
                workspace.htmlElement.style.bottom = Workspace.HEIGHT - workspace.positionWhenUnselected.y - 200 + 'px';
                workspace.htmlElement.style.right = Workspace.WIDTH - workspace.positionWhenUnselected.x - 200 + 'px';
                workspace.htmlElement.style.zIndex = '0';
            }
        });
    }

    public static toggleSelectedFullscreen(): void {
        let workspace: Workspace = Workspace.getSelectedWorkspace();
        if (Workspace.isFullscreen) {
            Workspace.centerWorkspace(workspace);
        } else {
            Workspace.fullscreenWorkspace(workspace);
        }
    }

    public static getSelectedWorkspace(): Workspace {
        return Workspace.workspaces.find((workspace: Workspace) => workspace.isSelected);
    }

    private static centerWorkspace(workspace: Workspace) {
        workspace.htmlElement.style.top = '250' + 'px';
        workspace.htmlElement.style.left = '350' + 'px';
        workspace.htmlElement.style.bottom = '116' + 'px';
        workspace.htmlElement.style.right = '350' + 'px';
        workspace.htmlElement.style.zIndex = '1';
        Workspace.isFullscreen = false;
    }

    private static fullscreenWorkspace(workspace: Workspace) {
        workspace.htmlElement.style.top = '0';
        workspace.htmlElement.style.left = '0';
        workspace.htmlElement.style.bottom = '0';
        workspace.htmlElement.style.right = '0';
        workspace.htmlElement.style.zIndex = '1';
        Workspace.isFullscreen = true;
    }

    /**
     * z-index: 0;top: 250px;right: 350px;bottom: 116px;left: 350px;
     */
}
