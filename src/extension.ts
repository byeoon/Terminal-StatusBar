import * as vscode from 'vscode';
let statusBar: vscode.StatusBarItem;
const terminalArray = vscode.workspace.getConfiguration('terminal-statusbar').get('terminalArray');

export function activate(context: vscode.ExtensionContext) {
	const openTerminal = 'terminal-statusbar.openTerminal';
	console.log('Activated Terminal StatusBar!');

	statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBar.command = openTerminal;
	statusBar.text = `$(terminal-view-icon) Terminal (${vscode.window.terminals[0].name})`;
	statusBar.tooltip = `Opens the first terminal window`;
	statusBar.show();

	const about = vscode.commands.registerCommand('terminal-statusbar.about', () => {
		vscode.window.showInformationMessage('v1.0.1 - Multiple bug fixes and tweaks.');
		vscode.window.showInformationMessage("Terminal Array Setting: " + terminalArray);
	});

	const openStatusBar = vscode.commands.registerCommand('terminal-statusbar.openTerminal', () => {
		vscode.window.terminals[0].show();
		// if shown then hide
	});
	context.subscriptions.push(openStatusBar);
	context.subscriptions.push(about);
}

export function deactivate() {
	console.log("Terminal StatusBar is now deactivated.")
}
