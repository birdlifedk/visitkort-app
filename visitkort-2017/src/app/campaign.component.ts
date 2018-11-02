import { Component, OnInit } from '@angular/core';
import { Campaign } from './campaign';

@Component({
  selector: 'campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent implements OnInit {
  title = 'Create your signature';

  showedit: boolean = false;
  showexport: boolean = false;
  showcopyalert: boolean = false;
  htmlexport: string = "";

  c: Campaign = {
    sender_name: "",
    sender_position_native: "",
    sender_position_english: "",
    sender_telephone_direct: "",
    sender_skypeid: "",
  };


  ngOnInit(): void {
    // this.getSomething()
    //   .then(with => this.campaign = with.somthing);
    this.edit();
  }

  viewExample(): void {
    this.showedit = true;
    this.c = {
      sender_name: "Toke F. Nyborg",
      sender_position_native: "International medarbejder, naturpolitik & fundraising",
      sender_position_english: "International Officer, policy Advocacy & Fundraising",
      sender_telephone_direct: "+45 33283810",
      sender_skypeid: "tokenyborg",
    };
  }

  edit(): void {
    this.showedit = true;
    this.c = {
      sender_name: "",
      sender_position_native: "",
      sender_position_english: "",
      sender_telephone_direct: "",
      sender_skypeid: ""
    };
  };

  export(): void {
    this.showexport = !this.showexport;
    let styleElement: string = document.getElementsByTagName('style')[3].innerText;
    let htmlContent: string = document.getElementById('signature').outerHTML;
    this.htmlexport = `<html encoding="utf8"><body><style>` + styleElement + `</style>\n` + htmlContent + `</body></html>`;
  };

  copy_text(element): void {
    //Before we copy, we are going to select the text.
    var text = document.getElementById('signature');
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    //add to clipboard.
    document.execCommand('copy');
    this.showcopyalert = true;
    setTimeout(() => {
      this.showcopyalert = false;
    }, 3000);
  }
}
