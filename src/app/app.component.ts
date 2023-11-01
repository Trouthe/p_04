import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p_04';
  btnStyle: string [] = ['btn-active', 'btn-default', 'btn-default', 'btn-default', 'btn-default', 'btn-default'];
  btnState: number = 0;

  contentSets: any[] = [
    { title: 'We create marketing solutions', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Sit amet dictum sit amet. Nunc sed velit dignissim sodales ut eu sem.' },
    { title: 'We buy your inventory', description: 'Scales is the first e-commerce accelerator in the region, with professional management that takes your company towards accelerated growth, spreading your brand, marketing it, and selling across the Gulf countries through e-commerce markets.' },
    { title: 'We study customer behavior', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac ut consequat semper viverra nam libero justo laoreet sit.' },
    { title: 'Building strategic plans', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet. Vehicula ipsum a arcu cursus.' },
    { title: 'Doing logistics services', description: 'Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Non nisi est sit amet. Ut venenatis tellus in metus vulputate. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh.' },
    { title: 'Espanding in the Gulf countries', description: 'Lectus mauris ultrices eros in. Scelerisque fermentum dui faucibus in ornare quam viverra. Tempus urna et pharetra pharetra. Donec massa sapien faucibus et molestie. Sit amet consectetur adipiscing elit duis.' }
  ];

  currentContentIndex : number = 0;
  changeContent(index: number) {
    this.currentContentIndex = index;
  }

  changeState (index: number) {
    // this.btnStyle[index] = (this.btnStyle[index] === 'btn-default') ? 'btn-active' : 'btn-default';
    if (this.btnState !== index) {
      this.btnStyle[this.btnState] = 'btn-default';
      this.btnStyle[index] = 'btn-active';
      this.btnState = index;
    }
  }
}
