import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreloaderComponent } from "./preloader/preloader.component";
import { HeaderComponent } from "./header/header.component";
import { IntroductionPartComponent } from "./introduction-part/introduction-part.component";
import { CategoryComponent } from "./category/category.component";
import { BestSellingProductComponent } from "./best-selling-product/best-selling-product.component";
import { ProductImageComponent } from "./product-image/product-image.component";
import { FeaturedProductComponent } from "./featured-product/featured-product.component";
import { DiscountSectionComponent } from "./discount-section/discount-section.component";
import { PopulerProductComponent } from "./populer-product/populer-product.component";
import { JustArrivedComponent } from "./just-arrived/just-arrived.component";
import { RecentBlogComponent } from "./recent-blog/recent-blog.component";
import { DownloadSectionComponent } from "./download-section/download-section.component";
import { PeopleLookingComponent } from "./people-looking/people-looking.component";
import { FeaturesComponent } from "./features/features.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreloaderComponent, HeaderComponent, IntroductionPartComponent, CategoryComponent, BestSellingProductComponent, ProductImageComponent, FeaturedProductComponent, DiscountSectionComponent, PopulerProductComponent, JustArrivedComponent, RecentBlogComponent, DownloadSectionComponent, PeopleLookingComponent, FeaturesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
