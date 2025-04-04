import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
// import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BlogComponent } from './blog/blog.component';
import { WriteBlogComponent } from './write-blog/write-blog.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "blog",
        component: BlogComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "category",
        component: CategoryComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "wishlist",
        component: WishlistComponent
    },
    {
        path: "write-blog",
        component: WriteBlogComponent
    },
    {
        path: "add-category",
        component: AddCategoryComponent
    },
    {
        path: "product",
        component: ProductComponent
    },
    {
        path: "product/:id",
        component: SingleProductComponent
    },
    {
        path: "add-product",
        component: AddProductComponent
    },
    {
        path:"profile", 
        component: ProfileComponent
    }
];
