/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Workspace.ts":
/*!**************************!*\
  !*** ./src/Workspace.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Workspace = /** @class */ (function () {
    function Workspace(positionWhenUnselected) {
        this.index = Workspace.workspaces.length;
        this.positionWhenUnselected = positionWhenUnselected;
        this.isSelected = false;
        Workspace.workspaces.push(this);
        // Add to DOM
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'workspace';
        document.querySelector('#workspaces').appendChild(this.htmlElement);
    }
    Workspace.select = function (index) {
        Workspace.workspaces.forEach(function (workspace) {
            workspace.isSelected = workspace.index === index;
            if (workspace.isSelected) {
                if (Workspace.isFullscreen) {
                    Workspace.fullscreenWorkspace(workspace);
                }
                else {
                    Workspace.centerWorkspace(workspace);
                }
            }
            else {
                workspace.htmlElement.style.top = workspace.positionWhenUnselected.y + 'px';
                workspace.htmlElement.style.left = workspace.positionWhenUnselected.x + 'px';
                workspace.htmlElement.style.bottom = Workspace.HEIGHT - workspace.positionWhenUnselected.y - 200 + 'px';
                workspace.htmlElement.style.right = Workspace.WIDTH - workspace.positionWhenUnselected.x - 200 + 'px';
                workspace.htmlElement.style.zIndex = '0';
            }
        });
    };
    Workspace.toggleSelectedFullscreen = function () {
        var workspace = Workspace.getSelectedWorkspace();
        if (Workspace.isFullscreen) {
            Workspace.centerWorkspace(workspace);
        }
        else {
            Workspace.fullscreenWorkspace(workspace);
        }
    };
    Workspace.getSelectedWorkspace = function () {
        return Workspace.workspaces.find(function (workspace) { return workspace.isSelected; });
    };
    Workspace.centerWorkspace = function (workspace) {
        workspace.htmlElement.style.top = '250' + 'px';
        workspace.htmlElement.style.left = '350' + 'px';
        workspace.htmlElement.style.bottom = '116' + 'px';
        workspace.htmlElement.style.right = '350' + 'px';
        workspace.htmlElement.style.zIndex = '1';
        Workspace.isFullscreen = false;
    };
    Workspace.fullscreenWorkspace = function (workspace) {
        workspace.htmlElement.style.top = '0';
        workspace.htmlElement.style.left = '0';
        workspace.htmlElement.style.bottom = '0';
        workspace.htmlElement.style.right = '0';
        workspace.htmlElement.style.zIndex = '1';
        Workspace.isFullscreen = true;
    };
    Workspace.workspaces = [];
    Workspace.WIDTH = 1600;
    Workspace.HEIGHT = 900;
    Workspace.isFullscreen = true;
    return Workspace;
}());
exports.default = Workspace;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Workspace_1 = __webpack_require__(/*! ./Workspace */ "./src/Workspace.ts");
var ws1 = new Workspace_1.default({ x: 100, y: 50 });
var ws2 = new Workspace_1.default({ x: 600, y: 50 });
var ws3 = new Workspace_1.default({ x: 1100, y: 50 });
console.log(Workspace_1.default.workspaces);
window['Workspace'] = Workspace_1.default;
Workspace_1.default.select(1);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbm9tZTQwLy4vc3JjL1dvcmtzcGFjZS50cyIsIndlYnBhY2s6Ly9nbm9tZTQwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dub21lNDAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ25vbWU0MC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7SUFXSSxtQkFBWSxzQkFBZ0M7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsYUFBYTtRQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDekMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFYSxnQkFBTSxHQUFwQixVQUFxQixLQUFLO1FBQ3RCLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBb0I7WUFDOUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQztZQUNqRCxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3RCLElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtvQkFDeEIsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUM1QztxQkFBTTtvQkFDSCxTQUFTLENBQUMsZUFBZSxDQUFDLFNBQVMs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QWMsSUFBSSxtQkFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztBQUNwRCxJQUFJLEdBQUcsR0FBYyxJQUFJLG1CQUFTLENBQUMsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0FBQ3BELElBQUksR0FBRyxHQUFjLElBQUksbUJBQVMsQ0FBQyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7QUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxtQkFBUyxDQUFDO0FBQ2hDLG1CQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O1VDUHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc2l0aW9uIGZyb20gXCIuL3B1YmxpYy9Qb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3Jrc3BhY2UgeyAvLyBUT0RPIFNlcGFyYXRlIGNsYXNzIGludG8gMjogV29ya3NwYWNlIC0+IERlc2t0b3BNYW5hZ2VyPyBhbmQgYSBsaXR0bGUgb25lIGNhbGxlZCBXb3Jrc3BhY2UgKGNsYXNzPyBpbnRlcmZhY2U/KVxuICAgIHB1YmxpYyBzdGF0aWMgd29ya3NwYWNlczogQXJyYXk8V29ya3NwYWNlPiA9IFtdO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0lEVEg6IG51bWJlciA9IDE2MDA7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBIRUlHSFQ6IG51bWJlciA9IDkwMDtcbiAgICBwdWJsaWMgc3RhdGljIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbldoZW5VbnNlbGVjdGVkOiBQb3NpdGlvbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbldoZW5VbnNlbGVjdGVkOiBQb3NpdGlvbikgeyAvLyBUT0RPIFdvcmtzcGFjZXMgd2lsbCB0byBoYXZlIDIgcG9zaXRpb25zOiBPbmUgZm9yIHRoZSBsZWZ0IGFuZCBvdGhlciBmb3IgdGhlIHJpZ2h0XG4gICAgICAgIHRoaXMuaW5kZXggPSBXb3Jrc3BhY2Uud29ya3NwYWNlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucG9zaXRpb25XaGVuVW5zZWxlY3RlZCA9IHBvc2l0aW9uV2hlblVuc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBXb3Jrc3BhY2Uud29ya3NwYWNlcy5wdXNoKHRoaXMpO1xuXG4gICAgICAgIC8vIEFkZCB0byBET01cbiAgICAgICAgdGhpcy5odG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTmFtZSA9ICd3b3Jrc3BhY2UnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd29ya3NwYWNlcycpLmFwcGVuZENoaWxkKHRoaXMuaHRtbEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc2VsZWN0KGluZGV4KTogdm9pZCB7XG4gICAgICAgIFdvcmtzcGFjZS53b3Jrc3BhY2VzLmZvckVhY2goKHdvcmtzcGFjZTogV29ya3NwYWNlKSA9PiB7XG4gICAgICAgICAgICB3b3Jrc3BhY2UuaXNTZWxlY3RlZCA9IHdvcmtzcGFjZS5pbmRleCA9PT0gaW5kZXg7XG4gICAgICAgICAgICBpZiAod29ya3NwYWNlLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoV29ya3NwYWNlLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgICAgICBXb3Jrc3BhY2UuZnVsbHNjcmVlbldvcmtzcGFjZSh3b3Jrc3BhY2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFdvcmtzcGFjZS5jZW50ZXJXb3Jrc3BhY2Uod29ya3NwYWNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB3b3Jrc3BhY2UucG9zaXRpb25XaGVuVW5zZWxlY3RlZC55ICsgJ3B4JztcbiAgICAgICAgICAgICAgICB3b3Jrc3BhY2UuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHdvcmtzcGFjZS5wb3NpdGlvbldoZW5VbnNlbGVjdGVkLnggKyAncHgnO1xuICAgICAgICAgICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS5ib3R0b20gPSBXb3Jrc3BhY2UuSEVJR0hUIC0gd29ya3NwYWNlLnBvc2l0aW9uV2hlblVuc2VsZWN0ZWQueSAtIDIwMCArICdweCc7XG4gICAgICAgICAgICAgICAgd29ya3NwYWNlLmh0bWxFbGVtZW50LnN0eWxlLnJpZ2h0ID0gV29ya3NwYWNlLldJRFRIIC0gd29ya3NwYWNlLnBvc2l0aW9uV2hlblVuc2VsZWN0ZWQueCAtIDIwMCArICdweCc7XG4gICAgICAgICAgICAgICAgd29ya3NwYWNlLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0b2dnbGVTZWxlY3RlZEZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgICAgIGxldCB3b3Jrc3BhY2U6IFdvcmtzcGFjZSA9IFdvcmtzcGFjZS5nZXRTZWxlY3RlZFdvcmtzcGFjZSgpO1xuICAgICAgICBpZiAoV29ya3NwYWNlLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgV29ya3NwYWNlLmNlbnRlcldvcmtzcGFjZSh3b3Jrc3BhY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgV29ya3NwYWNlLmZ1bGxzY3JlZW5Xb3Jrc3BhY2Uod29ya3NwYWNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2VsZWN0ZWRXb3Jrc3BhY2UoKTogV29ya3NwYWNlIHtcbiAgICAgICAgcmV0dXJuIFdvcmtzcGFjZS53b3Jrc3BhY2VzLmZpbmQoKHdvcmtzcGFjZTogV29ya3NwYWNlKSA9PiB3b3Jrc3BhY2UuaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2VudGVyV29ya3NwYWNlKHdvcmtzcGFjZTogV29ya3NwYWNlKSB7XG4gICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAnMjUwJyArICdweCc7XG4gICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzM1MCcgKyAncHgnO1xuICAgICAgICB3b3Jrc3BhY2UuaHRtbEVsZW1lbnQuc3R5bGUuYm90dG9tID0gJzExNicgKyAncHgnO1xuICAgICAgICB3b3Jrc3BhY2UuaHRtbEVsZW1lbnQuc3R5bGUucmlnaHQgPSAnMzUwJyArICdweCc7XG4gICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgIFdvcmtzcGFjZS5pc0Z1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmdWxsc2NyZWVuV29ya3NwYWNlKHdvcmtzcGFjZTogV29ya3NwYWNlKSB7XG4gICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICB3b3Jrc3BhY2UuaHRtbEVsZW1lbnQuc3R5bGUuYm90dG9tID0gJzAnO1xuICAgICAgICB3b3Jrc3BhY2UuaHRtbEVsZW1lbnQuc3R5bGUucmlnaHQgPSAnMCc7XG4gICAgICAgIHdvcmtzcGFjZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgIFdvcmtzcGFjZS5pc0Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHotaW5kZXg6IDA7dG9wOiAyNTBweDtyaWdodDogMzUwcHg7Ym90dG9tOiAxMTZweDtsZWZ0OiAzNTBweDtcbiAgICAgKi9cbn1cbiIsImltcG9ydCBXb3Jrc3BhY2UgZnJvbSBcIi4vV29ya3NwYWNlXCI7XG5cbmxldCB3czE6IFdvcmtzcGFjZSA9IG5ldyBXb3Jrc3BhY2Uoe3g6IDEwMCwgeTogNTB9KTtcbmxldCB3czI6IFdvcmtzcGFjZSA9IG5ldyBXb3Jrc3BhY2Uoe3g6IDYwMCwgeTogNTB9KTtcbmxldCB3czM6IFdvcmtzcGFjZSA9IG5ldyBXb3Jrc3BhY2Uoe3g6IDExMDAsIHk6IDUwfSk7XG5jb25zb2xlLmxvZyhXb3Jrc3BhY2Uud29ya3NwYWNlcyk7XG53aW5kb3dbJ1dvcmtzcGFjZSddID0gV29ya3NwYWNlO1xuV29ya3NwYWNlLnNlbGVjdCgxKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=