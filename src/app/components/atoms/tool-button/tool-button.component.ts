import { Component, input, output } from '@angular/core';
// import { LucideAngularModule, MousePointer2 } from 'lucide-angular';

type Tool = 'select' | 'pen' | 'rectangle' | 'oval';

@Component({
  selector: 'app-tool-button',
  imports: [],
  templateUrl: './tool-button.component.html',
  styleUrls: ['./tool-button.component.css'],
})
export class ToolButtonComponent {
  type = input.required<Tool>();
  isActive = input<boolean>(false);
  onActivate = output<Tool>();
}
