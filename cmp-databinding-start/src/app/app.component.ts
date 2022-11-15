import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer(ServerData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: ServerData.serverName,
      content: ServerData.serverContent
    });
  }

  onAddBlueprint(bluepringData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluepringData.serverName,
      content: ServerData.serverContent
    });
  }
}
