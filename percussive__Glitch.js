inlets = 2;
outlets = 1;

var grid;

function bang() {
	grid = this.patcher.getnamed("glitchGrid");
	grid.random();
}