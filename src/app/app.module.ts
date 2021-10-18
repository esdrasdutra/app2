import { DescricaoReduzida } from './shared/descricao-reduzida.pipe';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { DiversaoComponent } from './pages/diversao/diversao.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ComoUsarComponent } from './components/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './components/ordem-compra-sucesso/ordem-compra-sucesso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
