const eticket = (ticketProps) => {
  const {orderId, ticketId,eventTitle,title, date, location, eventImage,ticketQr} = ticketProps;

  const ticket = `</head><body class="body"><div dir="ltr" class="es-wrapper-color"><!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#f6f6f6"></v:fill>
    </v:background>
<![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="border-width:5px 5px 1px;border-style:solid;border-color:#b45f06"><tbody><tr><td class="es-p20t es-p20r es-p20l esd-structure" align="left" bgcolor="#134" style="background-color:#134"><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="180" valign="top"><![endif]--><table class="es-left" cellspacing="0" cellpadding="0" align="left"><tbody><tr><td class="es-m-p0r es-m-p20b esd-container-frame" width="175" valign="top" align="center"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr>
<td align="center" class="esd-block-image" style="font-size: 0">
<a target="_blank">
    <img class="adapt-img" src="https://ecpptcr.stripocdn.email/content/guids/CABINET_97ac192a92554ed804922d1e113e0b09e749996a630f1760e4133996d0840a01/images/logosin_back.png" alt="" width="85">
</a>
</td>
</tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]--><table class="es-right" cellspacing="0" cellpadding="0" align="right"><tbody><tr><td class="esd-container-frame" width="355" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr>
<td align="left" class="esd-block-text es-text-3911">
<p style="color:#b45f06;font-size:16px;line-height:150%"><strong>Muchisimas gracias por confiar en nosotros! A continuacion, se encuentra su Eticket! Esperamos que disfrute de su evento!</strong></p>
</td>
</tr><tr>
<td align="left" class="esd-block-text"><p>​</p></td>
</tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table><table class="es-content" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="border-style:solid;border-width:5px;border-color:#b45f06"><tbody><tr>
<td class="esd-structure es-p20r es-p20l es-p40t" align="left">

<!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-left" align="left">
  
<tbody><tr>
      
  <td width="265" class="esd-container-frame" align="left">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
          <tbody><tr>
<td align="center" class="esd-block-image" style="font-size: 0">
<a target="_blank">
    <img class="adapt-img" src="${eventImage}" alt="" width="265">
</a>
</td>
</tr><tr>
<td align="center" class="esd-block-spacer es-p20" style="font-size: 0">
<table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer">
    <tbody>
        <tr>
            <td style="border-bottom: 1px solid #cccccc;; background: none; height: 1px; width: 100%; margin: 0px 0px 0px 0px"></td>
        </tr>
    </tbody>
</table>
</td>
</tr></tbody></table>
  </td>

      
</tr>

</tbody></table>
<!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
<table cellpadding="0" cellspacing="0" class="es-right" align="right">
  
<tbody><tr>
      
  <td width="265" class="esd-container-frame" align="left">
      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
          <tbody><tr>
<td align="center" class="esd-block-image" style="font-size: 0">
<a target="_blank">
    <img class="adapt-img" src="https://ecpptcr.stripocdn.email/content/guids/CABINET_97ac192a92554ed804922d1e113e0b09e749996a630f1760e4133996d0840a01/images/commons_qr_code.png" alt="" width="116">
</a>
</td>
</tr></tbody></table>
  </td>

      
</tr>

</tbody></table>
<!--[if mso]></td></tr></table><![endif]-->
</td>
</tr><tr><td class="es-p20t es-p20r es-p20l esd-structure" align="left"><table cellspacing="0" cellpadding="0" align="right" class="es-right" width="100%"><tbody><tr>
      
  <td class="esd-container-frame" width="550" valign="top" align="center">
      <table width="100%" cellspacing="0" cellpadding="0">
          <tr>
<td align="center" class="esd-block-text">
<h4 style="font-family:verdana,geneva,sans-serif">Order ID: ${orderId}</h4>
</td>
</tr><tr>
<td align="center" class="esd-block-text">
<h4 style="font-family:verdana,geneva,sans-serif">Ticket ID: ${ticketId}</h4>
</td>
</tr><tr>
<td align="center" class="esd-block-spacer es-p20" style="font-size: 0">
<table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer">
    <tbody>
        <tr>
            <td style="border-bottom: 1px solid #cccccc;; background: none; height: 1px; width: 100%; margin: 0px 0px 0px 0px"></td>
        </tr>
    </tbody>
</table>
</td>
</tr><tr>
<td align="center" class="esd-block-text">
<h3 style="font-family:verdana,geneva,sans-serif">${eventTitle}</h3>
</td>
</tr><tr>
<td align="center" class="esd-block-text">
<h3 style="font-family:verdana,geneva,sans-serif">${title}</h3>
</td>
</tr><tr>
<td align="center" class="esd-block-text">
<h3 style="font-family:verdana,geneva,sans-serif">${location}</h3>
</td>
</tr><tr>
<td align="center" class="esd-block-text">
<h3 style="font-family:verdana,geneva,sans-serif">${date}</h3>
</td>
</tr><tr>
<td align="center" class="esd-block-text">
<p>​</p>
</td>
</tr></table>
  </td>

      
</tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table class="esd-footer-popover es-footer" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe" align="center"><table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="border-style:solid;border-width:0 5px 5px;border-color:#b45f06"><tbody><tr><td class="esd-structure es-p40t es-p35r es-p35b es-p35l" align="left" bgcolor="#134" style="background-color:#134"><!--[if mso]><table width="530" cellpadding="0" cellspacing="0"><tr><td width="250" valign="top"><![endif]--><table class="es-left" cellspacing="0" cellpadding="0" align="left"><tbody><tr><td class="es-m-p20b esd-container-frame" width="250" align="left"><table width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-empty-container" style="display: none;" align="center"></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="250" valign="top"><![endif]--><table class="es-right" cellspacing="0" cellpadding="0" align="right"><tbody><tr>
      
  <td class="esd-container-frame" width="250" align="left">
      <table width="100%" cellspacing="0" cellpadding="0">
          <tbody><tr>
<td align="right" class="esd-block-image" style="font-size: 0">
<a target="_blank">
    <img class="adapt-img" src="https://ecpptcr.stripocdn.email/content/guids/CABINET_97ac192a92554ed804922d1e113e0b09e749996a630f1760e4133996d0840a01/images/letra.png" alt="" width="170">
</a>
</td>
</tr></tbody></table>
  </td>

      
</tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body>`;

  return ticket;
};

module.exports = eticket;
