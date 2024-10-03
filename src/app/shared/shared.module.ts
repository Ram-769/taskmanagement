import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { ChipsModule } from 'primeng/chips';
import {PanelModule} from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ToastModule,
    TooltipModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    TriStateCheckboxModule,
    TableModule,
    FileUploadModule,
    CalendarModule,
    CheckboxModule,
    ListboxModule,
    RadioButtonModule,
    PanelModule,
    RouterModule,
    FormsModule,
    ChipsModule,
    ToastModule,
    AccordionModule,
    MegaMenuModule,
    MenuModule,
    MultiSelectModule,
    OverlayPanelModule,
    DialogModule,
    TabViewModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    KeyFilterModule,
    FileUploadModule,
    HttpClientModule,
    ProgressSpinnerModule,
    BlockUIModule
  ],
  exports:[
    CommonModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    PasswordModule,
    TriStateCheckboxModule,
    TableModule,
    FileUploadModule,
    CalendarModule,
    CheckboxModule,
    RouterModule,
    FormsModule,
    RadioButtonModule,
    PanelModule,
    ChipsModule,
    AccordionModule,
    ToastModule,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    MultiSelectModule,
    OverlayPanelModule,
    DialogModule,
    TabViewModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    KeyFilterModule,
    FileUploadModule,
    HttpClientModule,
    ProgressSpinnerModule,
    BlockUIModule
    
    
   
  ]
})
export class SharedModule { }
