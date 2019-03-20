import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  downloadFile(urls = []) { // ex ['url1', 'url2']
  	urls.map((item)=> {

  		let link=document.createElement('a'); // create a virtual a tag 
	    link.href=item; // Assign url to the tag 
	    link.download="true"; // set the document text
	    link.target = '_blank'; 
	    document.body.appendChild(link); // firefox fix 
	    link.click();	// programmatical click
	    link.remove();  // remove dom from the body

  	})
  }
}
