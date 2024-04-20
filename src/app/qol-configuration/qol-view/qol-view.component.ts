import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../environments/environment';
import { QolResultService } from 'src/app/_service/qol-result.service';

@Component({
  selector: 'app-qol-view',
  templateUrl: './qol-view.component.html',
  styleUrls: ['./qol-view.component.css'],
})
export class QolViewComponent implements OnInit {
  qol_id: any = '';
  image: any;
  url: string = environment.image_url;
  video_url: string = environment.video_url;
  qolPreviewVideos: any = [];
  qolPreviewImages: any = [];
  imageurl: undefined;
  videourl: undefined;
  video: any;
  qolDetails: any;
  selectLng: any;
  selectedLng: any;
  selectedLang = localStorage.getItem('selectedLang');
  constructor(
    private qolResultService: QolResultService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.qol_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getQolView();
    this.selectedLang = localStorage.getItem('selectedLang');
    if (this.selectedLang === 'en') {
      this.selectedLng = 'en';
      this.selectLng = 'en';
    } else {
      this.selectedLng = 'ja';
      this.selectLng = 'ja';
    }
  }

  getQolView = () => {
    this.spinner.show();
    this.qolResultService.qolView(this.qol_id).subscribe({
      next: (res) => {
        this.qolDetails = res.data[0];
        this.image = res.data[0].images;
        this.video = res.data[0].videos;
        this.qolDetails.images.forEach((element: any) => {
          const path = `${this.url}/Other/${element}`;
          this.qolPreviewImages.push(path);
        });

        this.qolDetails.videos.forEach((element: any) => {
          const videoPath = `${this.video_url}/Other/${element.videoURL}`;
          this.qolPreviewVideos.push(videoPath);
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
}
