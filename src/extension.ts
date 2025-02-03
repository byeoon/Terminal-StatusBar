import * as vscode from 'vscode';

let statusBar: vscode.StatusBarItem;
var terminalArray = vscode.workspace.getConfiguration('terminal-statusbar').get('terminalArray');

export function activate(context: vscode.ExtensionContext) {
	console.log('Activated Terminal StatusBar!');

	statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 50);
	statusBar.command = "terminal-statusbar.openTerminal";
	statusBar.text = `$(terminal-view-icon) Terminal (${vscode.window.terminals[0].name})`;
	statusBar.tooltip = `Opens the terminal.`;
	statusBar.show();

	const openStatusBar = vscode.commands.registerCommand('terminal-statusbar.openTerminal', () => {
		vscode.window.terminals[0].show();
		// if shown then hide
	});
	
	context.subscriptions.push(openStatusBar);
}
export function deactivate() {
	console.log("Terminal StatusBar is now deactivated.");
}