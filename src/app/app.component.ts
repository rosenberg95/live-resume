import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Poul Rosenberg - Live Resume";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Java Developer, DevOps Engineer, Poul Rosenberg Live Resume, Management, Business, Poul Rosenberg Resume, Poul Rosenberg CV, Curriculum Poul Rosenberg" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Poul Karl Rosenberg" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2021-09-30", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a graduate from the Technical University of Denmark. Find out more in my live résumé!" }
    );
  }
}
