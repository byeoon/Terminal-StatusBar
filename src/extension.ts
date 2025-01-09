import * as vscode from 'vscode';
let statusBar: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	const openTerminal = 'terminal-statusbar.openTerminal';
	console.log('Activated Terminal StatusBar!');

	statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBar.command = openTerminal;
	statusBar.text = `$(terminal-view-icon) Terminal`;
	statusBar.show();

	const disposable = vscode.commands.registerCommand('terminal-statusbar.about', () => {
		vscode.window.showInformationMessage('v1.0 - This is the initial release of the plugin! ');
	});

	const openStatusBar = vscode.commands.registerCommand('terminal-statusbar.openTerminal', () => {
		vscode.window.terminals[0].show();
		// if shown then hide
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(openStatusBar);
}

export function deactivate() {
	console.log("Terminal StatusBar is now deactivated.")
}
