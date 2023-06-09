export const templateContentString = `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

   <head>
      <title></title>
      <style type="text/css">
         html {
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
         }

         body {
            margin: 0;
            padding: 0;
         }

         .link {
            color: #333333;
         }

         @media screen and (max-width: 620px) {
            *[class].block {
               display: block !important;
            }

            *[class].hide {
               display: none !important;
            }

            *[class].rel {
               position: relative !important;
            }

            *[class].abs {
               position: absolute !important;
            }

            *[class].show {
               display: block !important;
               width: auto !important;
               overflow: visible !important;
               float: none !important;
               max-height: inherit !important;
               line-height: inherit !important;
            }

            /* ALIGNMENT */
            *[class].aligncenter {
               text-align: center !important;
            }

            *[class].alignleft {
               text-align: left !important;
            }

            *[class].alignright {
               text-align: right !important;
            }

            *[class].valigntop {
               vertical-align: top !important;
            }

            *[class].valigncenter {
               vertical-align: middle !important;
            }

            *[class].centertable {
               margin: 0 auto !important;
            }

            *[class].floatleft {
               float: left !important;
            }

            *[class].floatright {
               float: right !important;
            }

            /*** heights & widths ****/
            *[class].width1 {
               width: 1px !important;
            }

            *[class].width2 {
               width: 2px !important;
            }

            *[class].width3 {
               width: 3px !important;
            }

            *[class].width4 {
               width: 4px !important;
            }

            *[class].width5 {
               width: 5px !important;
            }

            *[class].width6 {
               width: 6px !important;
            }

            *[class].width7 {
               width: 7px !important;
            }

            *[class].width8 {
               width: 8px !important;
            }

            *[class].width9 {
               width: 9px !important;
            }

            *[class].width10 {
               width: 10px !important;
            }

            *[class].width11 {
               width: 11px !important;
            }

            *[class].width12 {
               width: 12px !important;
            }

            *[class].width13 {
               width: 13px !important;
            }

            *[class].width14 {
               width: 14px !important;
            }

            *[class].width15 {
               width: 15px !important;
            }

            *[class].width18 {
               width: 18px !important;
            }

            *[class].width19 {
               width: 19px !important;
            }

            *[class].width20 {
               width: 20px !important;
            }

            *[class].width22 {
               width: 22px !important;
            }

            *[class].width25 {
               width: 25px !important;
            }

            *[class].width27 {
               width: 27px !important;
            }

            *[class].width30 {
               width: 30px !important;
            }

            *[class].width35 {
               width: 35px !important;
            }

            *[class].width40 {
               width: 40px !important;
            }

            *[class].width45 {
               width: 45px !important;
            }

            *[class].width50 {
               width: 50px !important;
            }

            *[class].width65 {
               width: 65px !important;
            }

            *[class].width77 {
               width: 77px !important;
            }

            *[class].width85 {
               width: 85px !important;
            }

            *[class].width87 {
               width: 87px !important;
            }

            *[class].width90 {
               width: 90px !important;
            }

            *[class].width94 {
               width: 94px !important;
            }

            *[class].width95 {
               width: 95px !important;
            }

            *[class].width96 {
               width: 96px !important;
            }

            *[class].width100 {
               width: 100px !important;
            }

            *[class].width104 {
               width: 104px !important;
            }

            *[class].width105 {
               width: 105px !important;
            }

            *[class].width110 {
               width: 110px !important;
            }

            *[class].width111 {
               width: 111px !important;
            }

            *[class].width118 {
               width: 118px !important;
            }

            *[class].width125 {
               width: 125px !important;
            }

            *[class].width128 {
               width: 128px !important;
            }

            *[class].width130 {
               width: 130px !important;
            }

            *[class].width131 {
               width: 131px !important;
            }

            *[class].width133 {
               width: 133px !important;
            }

            *[class].width136 {
               width: 136px !important;
            }

            *[class].width138 {
               width: 138px !important;
            }

            *[class].width139 {
               width: 139px !important;
            }

            *[class].width140 {
               width: 140px !important;
            }

            *[class].width142 {
               width: 142px !important;
            }

            *[class].width143 {
               width: 143px !important;
            }

            *[class].width148 {
               width: 148px !important;
            }

            *[class].width150 {
               width: 150px !important;
            }

            *[class].width152 {
               width: 152px !important;
            }

            *[class].width153 {
               width: 153px !important;
            }

            *[class].width155 {
               width: 155px !important;
            }

            *[class].width156 {
               width: 156px !important;
            }

            *[class].width160 {
               width: 160px !important;
            }

            *[class].width165 {
               width: 165px !important;
            }

            *[class].width170 {
               width: 170px !important;
            }

            *[class].width171 {
               width: 171px !important;
            }

            *[class].width180 {
               width: 180px !important;
            }

            *[class].width189 {
               width: 189px !important;
            }

            *[class].width194 {
               width: 194px !important;
            }

            *[class].width208 {
               width: 208px !important;
            }

            *[class].width210 {
               width: 210px !important;
            }

            *[class].width212 {
               width: 212px !important;
            }

            *[class].width214 {
               width: 214px !important;
            }

            *[class].width240 {
               width: 240px !important;
            }

            *[class].width242 {
               width: 242px !important;
            }

            *[class].width246 {
               width: 246px !important;
            }

            *[class].width245 {
               width: 245px !important;
            }

            *[class].width250 {
               width: 250px !important;
            }

            *[class].width256 {
               width: 256px !important;
            }

            *[class].width258 {
               width: 258px !important;
            }

            *[class].width260 {
               width: 260px !important;
            }

            *[class].width264 {
               width: 264px !important;
            }

            *[class].width266 {
               width: 266px !important;
            }

            *[class].width268 {
               width: 268px !important;
            }

            *[class].width276 {
               width: 276px !important;
            }

            *[class].width278 {
               width: 278px !important;
            }

            *[class].width286 {
               width: 286px !important;
            }

            *[class].width296 {
               width: 296px !important;
            }

            *[class].width298 {
               width: 298px !important;
            }

            *[class].width300 {
               width: 300px !important;
            }

            *[class].width305 {
               width: 305px !important;
            }

            *[class].width310 {
               width: 310px !important;
            }

            *[class].width318 {
               width: 318px !important;
            }

            *[class].width320 {
               width: 320px !important;
            }

            *[class].width323 {
               width: 323px !important;
            }

            *[class].width324 {
               width: 324px !important;
            }

            *[class].width330 {
               width: 330px !important;
            }

            *[class].width340 {
               width: 340px !important;
            }

            *[class].width350 {
               width: 350px !important;
            }

            *[class].hauto {
               height: auto !important;
            }

            *[class].height1 {
               height: 1px !important;
            }

            *[class].height2 {
               height: 2px !important;
            }

            *[class].height3 {
               height: 3px !important;
            }

            *[class].height4 {
               height: 4px !important;
            }

            *[class].height5 {
               height: 5px !important;
            }

            *[class].height6 {
               height: 6px !important;
            }

            *[class].height7 {
               height: 7px !important;
            }

            *[class].height8 {
               height: 8px !important;
            }

            *[class].height9 {
               height: 9px !important;
            }

            *[class].height10 {
               height: 10px !important;
            }

            *[class].height11 {
               height: 11px !important;
            }

            *[class].height12 {
               height: 12px !important;
            }

            *[class].height13 {
               height: 13px !important;
            }

            *[class].height14 {
               height: 14px !important;
            }

            *[class].height15 {
               height: 15px !important;
            }

            *[class].height18 {
               height: 18px !important;
            }

            *[class].height20 {
               height: 20px !important;
            }

            *[class].height21 {
               height: 21px !important;
            }

            *[class].height24 {
               height: 24px !important;
            }

            *[class].height25 {
               height: 25px !important;
            }

            *[class].height27 {
               height: 27px !important;
            }

            *[class].height30 {
               height: 30px !important;
            }

            *[class].height32 {
               height: 32px !important;
            }

            *[class].height35 {
               height: 35px !important;
            }

            *[class].height40 {
               height: 40px !important;
            }

            *[class].height41 {
               height: 41px !important;
            }

            *[class].height42 {
               height: 42px !important;
            }

            *[class].height45 {
               height: 45px !important;
            }

            *[class].height46 {
               height: 46px !important;
            }

            *[class].height47 {
               height: 47px !important;
            }

            *[class].height50 {
               height: 50px !important;
            }

            *[class].height53 {
               height: 53px !important;
            }

            *[class].height67 {
               height: 67px !important;
            }

            *[class].height76 {
               height: 76px !important;
            }

            *[class].height80 {
               height: 80px !important;
            }

            *[class].height86 {
               height: 86px !important;
            }

            *[class].height130 {
               height: 130px !important;
            }

            *[class].height140 {
               height: 140px !important;
            }

            *[class].height189 {
               height: 189px !important;
            }

            *[class].height203 {
               height: 203px !important;
            }

            *[class].height319 {
               height: 319px !important;
            }

            *[class].height322 {
               height: 322px !important;
            }

            *[class].height330 {
               height: 330px !important;
            }

            *[class].height350 {
               height: 350px !important;
            }

            /*** padding/margin ****/
            *[class].paddingl0 {
               padding-left: 0px !important;
            }

            *[class].paddingl15 {
               padding-left: 15px !important;
            }

            *[class].paddingl55 {
               padding-left: 55px !important;
            }

            *[class].paddingr0 {
               padding-right: 0px !important;
            }

            *[class].paddingr15 {
               padding-right: 15px !important;
            }

            *[class].paddingr55 {
               padding-right: 55px !important;
            }

            *[class].paddingb15 {
               padding-bottom: 15px !important;
            }

            *[class].paddingl16 {
               padding-left: 16px !important;
            }

            *[class].margina {
               margin: auto !important;
            }

            *[class].margint6 {
               margin-top: 6px !important;
            }

            *[class].margint15 {
               margin-top: 15px !important;
            }

            *[class].margint30 {
               margin-top: 30px !important;
            }

            *[class].marginb9 {
               margin-bottom: 9px !important;
            }

            *[class].marginb15 {
               margin-bottom: 15px !important;
            }

            *[class].marginb30 {
               margin-bottom: 30px !important;
            }

            /*** fonts ****/
            *[class].font11 {
               font-size: 11px !important;
            }

            *[class].font12 {
               font-size: 12px !important;
            }

            *[class].font13 {
               font-size: 13px !important;
            }

            *[class].font14 {
               font-size: 14px !important;
            }

            *[class].font15 {
               font-size: 15px !important;
            }

            *[class].font16 {
               font-size: 16px !important;
            }

            *[class].font18 {
               font-size: 18px !important;
            }

            *[class].font19 {
               font-size: 19px !important;
            }

            *[class].font25 {
               font-size: 25px !important;
            }

            *[class].font32 {
               font-size: 32px !important;
            }

            *[class].line13 {
               line-height: 13px !important;
            }

            *[class].line14 {
               line-height: 14px !important;
            }

            *[class].line16 {
               line-height: 16px !important;
            }

            *[class].line17 {
               line-height: 17px !important;
            }

            *[class].line20 {
               line-height: 20px !important;
            }

            *[class].line21 {
               line-height: 21px !important;
            }

            *[class].line22 {
               line-height: 22px !important;
            }

            *[class].line23 {
               line-height: 23px !important;
            }

            *[class].line24 {
               line-height: 24px !important;
            }

            *[class].line29 {
               line-height: 29px !important;
            }

            *[class].line34 {
               line-height: 34px !important;
            }

            /*** positioning ***/
            *[class].tor3_p21 {
               top: 21px !important;
            }

            *[class].top0 {
               top: 0px !important;
            }

            *[class].tor3_p12 {
               top: 12px !important;
            }

            *[class].tor3_p30 {
               top: 30px !important;
            }

            *[class].tor3_p32 {
               top: 32px !important;
            }

            *[class].tor3_p189 {
               top: 189px !important;
            }

            *[class].left0 {
               left: 0 !important;
            }

            *[class].left15 {
               left: 15 !important;
            }

            *[class].left77 {
               left: 77px !important;
            }

            *[class].left78 {
               left: 78px !important;
            }

            *[class].left138 {
               left: 138px !important;
            }

            *[class].left143 {
               left: 143px !important;
            }

            *[class].left153 {
               left: 138px !important;
            }

            *[class].left156 {
               left: 156px !important;
            }

            *[class].left178 {
               left: 178px !important;
            }

            *[class].cap {
               display: table-caption !important;
            }

            *[class].head {
               display: table-header-group !important;
            }

            *[class].foot {
               display: table-footer-group !important;
            }

            *[class].bggrey {
               background-color: #cacaca !important;
            }

            *[class].bgwhite {
               background-color: #ffffff !important;
            }

            /*** DIV alignment ***/
            *[class].columnl {
               display: table-cell;
               width: 77px !important;
            }

            *[class].columnr {
               display: table-cell;
               width: 189px !important;
            }
         }
      </style>
   </head>

   <body width="100%" style="padding:0; margin:0;" bgcolor="#ffffff"><img width="1" height="1" src="" />
      <!--[if gte mso 9]>
     <style>
        .mr15{ margin-right:15px !important;}
        .ml15{ margin-left:15px !important;}
        .mlr10{ margin-left:10px; margin-right:10px !important;}
        .mr5lr5 { margin-left:5px !important; margin-right:5px !important;}
        .mr20lr20 { margin-left:20px !important; margin-right:20px !important;}
        .cta{ margin-left:60px !important; margin-right:60px !important; margin-top:10px !important; margin-bottom:10px !important;}
     </style>
     <![endif]-->
      <center>
         <table cellspacing=" 0" cellpadding="0" width="100%">
            <tr>
               <td align="center" valign="top" bgcolor="#ffffff">
                  <table border="0" cellspacing="0" cellpadding="0" width="540" class="width350">
                     <tr>
                        <td width="20" align="center" class="width10"></td>
                        <!-- EMAIL HTML BODY -->
                        <td width="500" align="left" valign="top" class="width330" style="direction:ltr;">
                           <!-- preheader -->
                           <div style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:24px; color:#555555;" class="hide">
                              <a class="preview_link" href="" style="color:#666666; text-decoration:underline;">
                                 <span class="preview_title">Preview Title</span>
                              </a>
                           </div>
                           <!-- preheader -->
                           <!-- HEADER -->
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="10" style="line-height:10px;" class="hide">
                                    <span>&nbsp;</span>
                                 </td>
                              </tr>
                           </table>
                           <!-- logo and nav -->
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="10" style="line-height:10px;" class="height10"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <table align="center" cellpadding="0" cellspacing="0" width="500" class="width330">
                              <tr>
                                 <th width="119" align="center" class="block width330">
                                    <a class="logo_link" href="">
                                       <img class="logo_image" src="/placeholder.jpg" border="0" vspace="0" alt="" hspace="0" style="border-radius: 9px; width: 100px; height: 50px; object-fit: cover;" />
                                 </th>
                                 <!-- width="371" -->
                                 <th width="471" align="right" class="block width330 aligncenter">
                                    <table cellspacing="0" cellpadding="0">
                                       <tr>
                                          <td height="1" style="line-height:1px;" class="height8">
                                             <span>&nbsp;</span>
                                          </td>
                                       </tr>
                                    </table>
                                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:3; color:#333333; font-weight:normal;">
                                       <a class="menu_a_link" href="" style="color:#333333; text-decoration:none;">
                                          <span class="menu_a_title">Menu A Title</span>
                                       </a> &nbsp;&nbsp;&nbsp;|&nbsp; <a class=" menu_b_link" href="" style="color:#333333; text-decoration:none;">
                                          <span class="menu_b_title">Menu B Title</span>
                                       </a>&nbsp;&nbsp;&nbsp;|&nbsp; <a class="menu_c_link" href="" style="color:#333333; text-decoration:none;">
                                          <span class="menu_c_title">Menu C Title</span>
                                       </a>
                                    </div>
                                    <table cellspacing="0" cellpadding="0">
                                       <tr>
                                          <td height="1" style="line-height:1px;"><span>&nbsp;</span></td>
                                       </tr>
                                    </table>
                                 </th>
                                 <td width="10" class="hide"></td>
                              </tr>
                           </table>
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="10" style="line-height:10px;" class="height10"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <table align="center" cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="1" style="line-height:1px;" bgcolor="#dddddd" width="500" class="width330"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="15" style="line-height:15px;"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- logo and nav -->
                           <!-- /HEADER -->
                           <!-- MAIN CONTENT -->
                           <table cellpadding="0" cellspacing="0">
                              <tr>
                                 <td width="7"></td>
                                 <td width="493" align="left" valign="top" class="width323">
                                    <table cellspacing="0" cellpadding="0">
                                       <tr>
                                          <td height="24" style="line-height:24px;" class="height15"><span>&nbsp;</span></td>
                                       </tr>
                                    </table>
                                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#333333;" class="font12 line16">
                                       <table>
                                          <tr>
                                             <td>
                                                <a class="main_link" href="">
                                                   <img class="main_image" src="/placeholder.jpg" style="height: 150px; width: 500px; border-radius: 15px; object-fit:cover" />
                                                </a>
                                             </td>
                                          </tr>
                                       </table>
                                       <table style="width: 100%;">
                                          <tr style="text-align:center;">
                                             <td>
                                                <strong style="font-size: x-large; line-height:3;">
                                                   <span class="main_title"> Main Title </span>
                                                </strong>
                                                <p class="main_text" style="font-size: medium; line-height:1.5;">
                                                   Main Text: 
                                                   Una motiva ad hoc faciendum est quod quattuor potentiae sunt mathematicae quattuor vectores. Ita, normae transmutationis normae adhibitae, si potentiae electricae et magneticae in uno compage inertiae referentiae cognoscuntur, possunt simpliciter computari in quolibet alio membro inertiae relationis.
                                                </p>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td height="12" style="line-height:12px;" class="height12"><span>&nbsp;</span></td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <table class="table_content" style="width: 100%;">
                                                </table>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td height="12" style="line-height:12px;" class="height12"><span>&nbsp;</span></td>
                                          </tr>
                                          <tr>
                                             <td>
                                                <table style="width: 100%;">
                                                   <tr style="text-align:center;">
                                                      <td>
                                                         <a class="icon_one_link" href="">
                                                            <img class="icon_one_image" src="/placeholder.jpg" width="90" style="margin:auto; border-radius: 50%;" />
                                                         </a>
                                                      </td>
                                                      <td>
                                                         <a class="icon_two_link" href="">
                                                            <img class="icon_two_image" src="/placeholder.jpg" width="90" style="margin:auto; border-radius: 50%;" />
                                                         </a>
                                                      </td>
                                                      <td>
                                                         <a class="icon_three_link" href="">
                                                            <img class="icon_three_image" src="/placeholder.jpg" width="90" style="margin:auto; border-radius: 50%;" />
                                                         </a>
                                                      </td>
                                                      <td>
                                                         <a class="icon_four_link" href="">
                                                            <img class="icon_four_image" src="/placeholder.jpg" width="90" style="margin:auto; border-radius: 50%;" />
                                                         </a>
                                                      </td>
                                                   </tr>
                                                   <tr>
                                                      <td height="12" style="line-height:12px;" class="height12"><span>&nbsp;</span></td>
                                                   </tr>
                                                   <tr style="text-align:center;">
                                                      <td style="padding: 0px 10px;">
                                                         <span class="icon_a_title" dir="auto">Icon A Title</span>
                                                      </td>
                                                      <td style="padding: 0px 10px;">
                                                         <span class="icon_b_title" dir="auto">Icon B Title</span>
                                                      </td>
                                                      <td style="padding: 0px 10px;">
                                                         <span class="icon_c_title" dir="auto">Icon C Title</span>
                                                      </td>
                                                      <td style="padding: 0px 10px;">
                                                         <span class="icon_d_title" dir="auto">Icon D Title</span>
                                                      </td>
                                                   </tr>
                                                </table>
                                             </td>
                                          </tr>
                                       </table>
                                    </div>
                                    <table cellspacing="0" cellpadding="0">
                                       <tr>
                                          <td height="11" style="line-height:11px;" class="height7">
                                             <span>&nbsp;</span>
                                          </td>
                                       </tr>
                                    </table>
                                 </td>
                              </tr>
                           </table>
                           <!-- /MAIN CONTENT -->
                           <!-- SPACER -->
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="13" style="line-height:13px;"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- SPACER -->
                           <table cellspacing="0" cellpadding="0" class="table_content">
                              <tr>
                                 <td height="13" style="line-height:13px;"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- SPACER -->
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="13" style="line-height:13px;"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- ACTION BUTTON -->
                           <table cellpadding="0" cellspacing="0" align="center">
                              <tr>
                                 <td width="20" class="width10"></td>
                                 <td width="450" align="center" valign="top" class="width310">
                                    <table cellspacing="0" cellpadding="0">
                                       <tr>
                                          <td height="12" style="line-height:12px;" align="center">
                                             <span>&nbsp;</span>
                                          </td>
                                       </tr>
                                    </table>
                                    <!-- button -->
                                    <table width="280" cellpadding="10" cellspacing="0" bgcolor="#FFFFFF">
                                       <tr>
                                          <!--[if mso 16]>
                                          <table align="center" cellpadding="0" cellspacing="0" border="0">
                                             <tbody>
                                             	<tr>
                                                   <td align="center" style="-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; color: #333333; display: block;" valign="middle" width="100%">
                                                      <a class="action_link" href="" style="color: #333333; font-size:16px; font-weight: bold; font-family: Arial, sans-serif; text-decoration: none; line-height:40px; height: 40px; width:240px; display:inline-block" target="_blank">
                                                         <span class="action_title">Action Title</span>
                                                      </a>
                                                   </td>
		                                          </tr>
		                                       </tbody>
		                                       </table>
		                                    <![endif]-->
                                          <!--[if (lt mso 16)|(gt mso 16)]>
                                             <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" class="action_link" href="" arcsize="10%" stroke="f" fillcolor="#06dcb7" style="-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; color: #333333; display: block;">
                                                <w:anchorlock></w:anchorlock>
                                                <center style="color: #333333; font-size:16px; font-weight: bold; font-family: Arial, sans-serif; text-decoration: none; line-height:40px; height: 40px; width:240px; display:inline-block">
                                                   <span class="action_title">Action Title</span>
                                                </center>
                                             </v:roundrect>									
                                          <![endif]-->
                                          <!--[if !mso]-->
                                          <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing: 0;">
                                             <tbody>
                                                <tr>
                                                   <td align="center" bgcolor="#e4f4fc" style="-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; color: #333333; display: block;">
                                                      <a class="action_link" href="" style="color: #333333; font-size:16px; font-weight: bold; font-family: Arial, sans-serif; text-decoration: none; line-height:40px; height: 40px; width:240px; display:inline-block"><span class="action_title">Action Title</span></a>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                          <!--[endif]-->
                                       </tr>
                                    </table>
                                    <!-- button -->
                                 </td>
                                 <td width="25" class="width10"></td>
                              </tr>
                           </table>
                           <!-- /ACTION BUTTON -->
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="19" style="line-height:19px;"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- SPACER -->
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="30" style="line-height:30px;" class="height20"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- EXTRA MESSAGE -->
                           <table cellpadding="0" cellspacing="0" width="500" class="width330">
                              <tr>
                                 <td width="493" align="left" valign="top" class="width323">
                                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:16px; color:#999999;" class="font12 line16">
                                       <div class="a-row" style="text-align: center;"><span class="term_text a-size-base" dir="auto">Term Text: Possunt simpliciter computari in quolibet alio membro inertiae relationis.</span></div>
                                    </div>
                                 </td>
                              </tr>
                           </table>
                           <!-- /EXTRA MESSAGE -->
                           <!-- SPACER -->
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="30" style="line-height:30px;" class="height20"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="3" style="line-height:3px;" bgcolor="#f5f6f7" width="500" class="width330"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="19" style="line-height:19px;"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- FOOTER -->
                           <table cellpadding="0" cellspacing="0">
                              <tr>
                                 <td width="10" class="width6"></td>
                                 <td width="480" align="left" valign="top" class="width318">
                                    <div class="copyright_text" style="font-family:Arial, Helvetica, sans-serif; font-size:10px; line-height:12px; color:#666666; font-weight:normal;"> Copyright Text <br><br>
                                       <span>This message was sent from: <a class="email_link" href=""><strong class="email_text">Email Text</Strong></a></span><br>
                                    </div>
                                    <table cellspacing="0" cellpadding="0">
                                       <tr>
                                          <td height="1" style="line-height:1px;" class="height27"><span>&nbsp;</span></td>
                                       </tr>
                                    </table>
                                 </td>
                                 <td width="10" class="width6"></td>
                              </tr>
                           </table>
                           <table cellspacing="0" cellpadding="0">
                              <tr>
                                 <td height="20" style="line-height:20px;"><span>&nbsp;</span></td>
                              </tr>
                           </table>
                           <!-- /FOOTER -->
                        </td>
                        <!-- EMAIL HTML BODY -->
                        <td width="20" align="center" class="width10"></td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </center>
   </body>

</html>



`; 