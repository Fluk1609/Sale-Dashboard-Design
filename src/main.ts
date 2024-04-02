import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0TXxbf1x0ZFBMYlxbQHBPMyBoS35RckVgW3ZedXZVQmdcWUV0'
);
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
