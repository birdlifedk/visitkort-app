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
  htmlexport: string = "";

  c: Campaign = {
    id: 1,
    name: "Birdlife 2017",
    regards_native: "XXX",
    sender_name: "AAA",
    sender_position_native: "YYY",
    sender_position_english: "III",
    sender_telephone: "#########",
    sender_telephone_direct: "##########",
    sender_skypeid: "aaa",
    facebook_id: "bbb",
    instagram_id: "ddd",
    youtube_user: "uuu",
    partner_logo: "/assets/small/DOF_80pct.jpg",
    partner_name: "ppp",
    partner_address: "adadad",
    partner_zip: "zipzip",
    partner_site_url: "url"
  };


  ngOnInit(): void {
    // this.getSomething()
    //   .then(with => this.campaign = with.somthing);
  }

  viewExample(): void {
    this.showexport = false;
    this.c= {
    id: 1,
    name: "Birdlife 2017",
    regards_native: "Bedste hilsner",
    sender_name: "Toke F. Nyborg",
    sender_position_native: "International medarbejder, naturpolitik & fundraising",
    sender_position_english: "International Officer, policy Advocacy & Fundraising",
    sender_telephone: "+45 33283800",
    sender_telephone_direct: "+45 33283810",
    sender_skypeid: "tokenyborg",
    facebook_id: "birdlifedk",
    instagram_id: "danmarksfugle",
    youtube_user: "DOFBirdlife",
    partner_logo: "/assets/small/DOF_80pct.jpg",
    partner_name: "DOF/Birdlife Denmark",
    partner_address: "Vesterbrogade 140",
    partner_zip: "1620 København V",
    partner_site_url: "www.dof.dk"
  };
}

  edit(): void {
    this.showedit = true;
    this.c = {
      id: 1,
      name: "Birdlife 2017 - Make your own",
      regards_native: "",
      sender_name: "",
      sender_position_native: "",
      sender_position_english: "",
      sender_telephone: "",
      sender_telephone_direct: "",
      sender_skypeid: "",
      facebook_id: "",
      instagram_id: "",
      youtube_user: "",
      partner_logo: "",
      partner_name: "",
      partner_address: "",
      partner_zip: "",
      partner_site_url: ""
    };
  };
  export(): void {
    this.showexport = true;
    let styleElement : string = document.getElementsByTagName('style')[3].innerText;
    let htmlContent : string = document.getElementById('signature').outerHTML;
    this.htmlexport = `<html encoding="utf8"><body><style>` + styleElement + `</style>\n` + htmlContent + `</body></html>`;
  };
}
