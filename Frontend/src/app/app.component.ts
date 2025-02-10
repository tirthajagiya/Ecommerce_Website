import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { IntroductionPartComponent } from "./introduction-part/introduction-part.component";
import { CategoryComponent } from "./category/category.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, IntroductionPartComponent, CategoryComponent ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
