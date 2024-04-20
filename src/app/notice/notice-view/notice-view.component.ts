import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NoticeService } from 'src/app/_service/notice.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-notice-view',
  templateUrl: './notice-view.component.html',
  styleUrls: ['./notice-view.component.css'],
})
export class NoticeViewComponent implements OnInit {
  notice_id: any = '';
  image: any;
  url: string = environment.image_url;
  noticePreviewImages: any = [];
  selectLng: any;
  selectedLng: any;
  selectedLang: any = 'ja';
  sliderData: any = [];

  constructor(
    private noticeService: NoticeService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.notice_id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getNoticeView();
    this.selectedLang = localStorage.getItem('selectedLang');
    if (this.selectedLang === 'en') {
      this.selectedLng = 'en';
      this.selectLng = 'en';
    } else {
      this.selectedLng = 'ja';
      this.selectLng = 'ja';
    }
  }

  noticeDetails: any;
  getNoticeView = () => {
    this.spinner.show();
    this.noticeService.noticeView(this.notice_id).subscribe({
      next: (res) => {
        this.noticeDetails = res.data[0];
        this.image = res.data[0].image;
        let index = 0;
        this.image.forEach((element: any) => {
          const path = `${this.url}/${this.noticeDetails?.type}/${element}`;
          this.noticePreviewImages.push(path);
          this.sliderData.push({ index: index, src: path });
          index = index + 1;
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

  getType(str: any): string {
    let translatedString = str;
    if (this.selectedLang == 'ja') {
      if (str === 'Notice from SDNC') return 'SDNCからのお知らせ';

      if (str === 'Transportation related information') return '交通関連情報';

      if (str === 'Notice regarding the application')
        return 'アプリケーションに関するお知らせ';

      if (str === 'Weather') return '天気';

      if (str === 'Road Construction') return '道路工事';

      if (str === 'Other') return '他の';
    } else {
    }
    return translatedString;
  }
}
