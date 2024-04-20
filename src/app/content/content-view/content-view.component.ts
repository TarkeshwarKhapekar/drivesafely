import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContentService } from 'src/app/_service/content.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.css'],
})
export class ContentViewComponent implements OnInit {
  content_id: any = '';
  image: any;
  url: string = environment.image_url;
  video_url: string = environment.video_url;
  contentPreviewVideos: any = [];
  contentPreviewImages: any = [];
  imageurl: undefined;
  videourl: undefined;
  video: any;
  selectLng: any;
  selectedLng: any;

  currentSlide = 0;
  sliderData: any = [];
  selectedLang: any = 'en';
  constructor(
    private contentService: ContentService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.content_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getContentView();
    this.selectedLang = localStorage.getItem('selectedLang');
    if (this.selectedLang === 'en') {
      this.selectedLng = 'en';
      this.selectLng = 'en';
    } else {
      this.selectedLng = 'ja';
      this.selectLng = 'ja';
    }
  }

  contentDetails: any;
  getContentView = () => {
    this.spinner.show();
    this.contentService.contentView(this.content_id).subscribe({
      next: (res) => {
        this.contentDetails = res.data[0];
        this.image = res.data[0].images;
        this.video = res.data[0].videos[0];

        let index = 0;
        this.contentDetails.images.forEach((element: any) => {
          const path = `${this.url}/${this.contentDetails?.type}/${element}`;
          this.contentPreviewImages.push(path);
          this.sliderData.push({ index: index, src: path });
          index = index + 1;
        });

        this.contentDetails.videos.forEach((element: any) => {
          const videoPath = `${this.video_url}/${this.contentDetails?.type}/${element.videoURL}`;
          this.contentPreviewVideos.push(videoPath);
        });

        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: (err) => {},
    });
  };

  goBack() {
    window.history.back();
  }

  onSlideClick(index: number) {
    if (this.currentSlide !== index) {
      this.currentSlide = index;
    }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.sliderData.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.sliderData.length ? 0 : next;
  }

  getType(str: any): string {
    let translatedString = str;
    if (this.selectedLang == 'ja') {
      if (str === 'Advertisement') return '広告';

      if (str === 'Traffic Safety Information') return '交通安全情報';

      if (str === 'Articles & Blogs') return '記事とブログ';

      if (str === 'Other') return '他の';
    } else {
    }

    return translatedString;
  }
}
