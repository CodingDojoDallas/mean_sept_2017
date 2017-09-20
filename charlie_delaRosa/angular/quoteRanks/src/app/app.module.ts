import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { QuoteDashboardComponent } from './quote-dashboard/quote-dashboard.component';
import { QuoteNewComponent } from './quote-dashboard/quote-new/quote-new.component';
import { QuoteListComponent } from './quote-dashboard/quote-list/quote-list.component';
import { QuoteSingleComponent } from './quote-dashboard/quote-single/quote-single.component';

@NgModule({
	declarations: [
		AppComponent,
		QuoteDashboardComponent,
		QuoteNewComponent,
		QuoteListComponent,
		QuoteSingleComponent
		],
	imports: [
		BrowserModule,
		FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
