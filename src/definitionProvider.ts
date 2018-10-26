import * as vscode from 'vscode';
import Global from './global/global';

export default class GlobalDefinitionProvider implements vscode.DefinitionProvider {
    global: Global;

    constructor(global: Global) {
        this.global = global;
    }

    provideDefinition(document: vscode.TextDocument, position: vscode.Position,
                             token: vscode.CancellationToken)
                             : vscode.ProviderResult<vscode.Definition> {
        var self = this;
        return new Promise<vscode.Location[]>((resolve, reject) => {
            try {
                resolve(self.global.provideDefinition(document, position));
            } catch (e) {
                return reject(e);
            }
        });
    }
}