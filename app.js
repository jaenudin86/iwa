const _0x3e3e9c=_0x405b;(function(_0x2de56a,_0x38757b){const _0xdd58d4=_0x405b,_0x24afb2=_0x2de56a();while(!![]){try{const _0x295728=parseInt(_0xdd58d4(0x134))/0x1*(-parseInt(_0xdd58d4(0x128))/0x2)+-parseInt(_0xdd58d4(0x120))/0x3+-parseInt(_0xdd58d4(0x11b))/0x4*(-parseInt(_0xdd58d4(0x123))/0x5)+parseInt(_0xdd58d4(0x13a))/0x6*(parseInt(_0xdd58d4(0x11c))/0x7)+-parseInt(_0xdd58d4(0x12a))/0x8*(parseInt(_0xdd58d4(0x15d))/0x9)+parseInt(_0xdd58d4(0x131))/0xa*(parseInt(_0xdd58d4(0x160))/0xb)+-parseInt(_0xdd58d4(0x142))/0xc*(parseInt(_0xdd58d4(0x158))/0xd);if(_0x295728===_0x38757b)break;else _0x24afb2['push'](_0x24afb2['shift']());}catch(_0x48f964){_0x24afb2['push'](_0x24afb2['shift']());}}}(_0xda46,0x4c11e));import _0x5c75a7 from'express';function _0x405b(_0x5d08b5,_0x11d95d){const _0xda4652=_0xda46();return _0x405b=function(_0x405b66,_0x130e3a){_0x405b66=_0x405b66-0x11a;let _0x20c4d8=_0xda4652[_0x405b66];return _0x20c4d8;},_0x405b(_0x5d08b5,_0x11d95d);}import _0x127a9b from'dotenv';import _0x1c8790 from'./routes/userRoute.js';import _0x18e33e from'path';import{connectToWhatsappv2,disconnectFromWhatsapp,sendMessage,sendMessageWithDocument,getListGroup,sendMessageToGroup,checkNumber,getMessage}from'./whatsapp.js';import _0x23e399 from'fs';_0x127a9b[_0x3e3e9c(0x12f)]();const app=_0x5c75a7(),port=process['env'][_0x3e3e9c(0x12c)]||0xbb8;function _0xda46(){const _0x4c65f4=['HgWQx','kWhGs','/getListGroup','15405Acpdbz','use','OmKFK','/send-message','/send-message-with-document','1556073pDXwhI','faFVs','XRgmw','11LnitWR','log','cwd','MmpKH','XlaXh','dXErh','ypTMs','join','10284XIFvRl','99631tnqnCT','gYpcD','zfrmQ','post','181032buVSWw','readFileSync','listen','335VrfaFu','urlencoded','Failed','YnTqH','document','10SjTWGh','Failed\x20to\x20generate\x20QR\x20code','24JffPtN','/disconnect','PORT','tGMxb','json','config','fileName','4859890jNRiMK','video','get','66684NfDKRy','status','GPqht','OodEA','set','RmGfH','252CAxqMB','difgp','jgrug','error','NvOUo','unXVW','views','NlmTh','324NFBMDJ','caption','Message\x20sent\x20successfully','eARxV','/connect','fRkpm','YZrBx','Failed\x20to\x20send\x20message','Menunggu\x20pesan\x20baru\x20dari\x20WhatsApp','ejs','image','MWKFh','qrCode','VwEyN','tYqUK','/getMessage','body','ZCzsh','Nomor\x20terdaftar\x20di\x20WhatsApp'];_0xda46=function(){return _0x4c65f4;};return _0xda46();}app[_0x3e3e9c(0x138)]('view\x20engine',_0x3e3e9c(0x14b)),app[_0x3e3e9c(0x138)](_0x3e3e9c(0x140),_0x18e33e[_0x3e3e9c(0x11a)](process[_0x3e3e9c(0x162)](),_0x3e3e9c(0x140))),app[_0x3e3e9c(0x159)](_0x5c75a7[_0x3e3e9c(0x124)]({'extended':!![]})),app['use'](_0x5c75a7[_0x3e3e9c(0x12e)]()),app[_0x3e3e9c(0x159)]('/',_0x1c8790),app[_0x3e3e9c(0x133)](_0x3e3e9c(0x146),async(_0xbf363e,_0x3682c1)=>{const _0x197b15=_0x3e3e9c,_0x511e86={'aGWfl':function(_0x3ebbed,_0x40216e){return _0x3ebbed(_0x40216e);},'fRkpm':_0x197b15(0x129)},{waKey:_0x3df310}=_0xbf363e[_0x197b15(0x152)];try{const _0x22537e=await _0x511e86['aGWfl'](connectToWhatsappv2,_0x3df310);_0x22537e[_0x197b15(0x14e)]?_0x3682c1[_0x197b15(0x12e)](_0x22537e):_0x3682c1[_0x197b15(0x12e)](_0x22537e);}catch(_0x34a3b5){_0x3682c1[_0x197b15(0x135)](0x1f4)[_0x197b15(0x12e)]({'error':_0x511e86[_0x197b15(0x147)]});}}),app['get'](_0x3e3e9c(0x12b),async(_0x21a130,_0x2c0482)=>{const _0x5ec158=_0x3e3e9c,_0x59fa40={'YZrBx':function(_0x20a3c9,_0x15fc6a){return _0x20a3c9(_0x15fc6a);}},{waKey:_0x583ea1}=_0x21a130[_0x5ec158(0x152)];try{const _0x2e7887=await _0x59fa40[_0x5ec158(0x148)](disconnectFromWhatsapp,_0x583ea1);_0x2c0482[_0x5ec158(0x12e)](_0x2e7887);}catch(_0x4b5ffb){_0x2c0482['status'](0x1f4)[_0x5ec158(0x12e)]({'error':_0x5ec158(0x125)});}}),app['post'](_0x3e3e9c(0x15b),async(_0x2eb193,_0x16fcf0)=>{const _0x1f97b5=_0x3e3e9c,_0xc8902e={'YnTqH':_0x1f97b5(0x127),'XlaXh':_0x1f97b5(0x143),'ZCzsh':_0x1f97b5(0x130),'gYpcD':_0x1f97b5(0x14c),'eARxV':function(_0xbd583,_0x3fac8c,_0x3a014c){return _0xbd583(_0x3fac8c,_0x3a014c);},'kWhGs':_0x1f97b5(0x132),'tYqUK':function(_0x421676,_0x1a2bdb,_0x44ebea){return _0x421676(_0x1a2bdb,_0x44ebea);},'faFVs':'Message\x20sent\x20successfully','tGMxb':_0x1f97b5(0x149)},{id:_0x43907b,text:_0xb023bc}=_0x2eb193[_0x1f97b5(0x152)];try{if(_0xb023bc[_0xc8902e[_0x1f97b5(0x126)]]!=null){const _0x480174=_0x23e399[_0x1f97b5(0x121)](_0xb023bc[_0xc8902e[_0x1f97b5(0x126)]]),_0x5844e7=_0xb023bc[_0xc8902e[_0x1f97b5(0x164)]],_0x1c4675=_0xb023bc[_0xc8902e[_0x1f97b5(0x153)]],_0x563357={'caption':_0x5844e7,'document':_0x480174,'fileName':_0x1c4675};await sendMessage(_0x43907b,_0x563357);}else{if(_0xb023bc[_0xc8902e[_0x1f97b5(0x11d)]]){const _0x2a2289=_0x23e399[_0x1f97b5(0x121)](_0xb023bc['image']),_0x6832d7=_0xb023bc[_0x1f97b5(0x143)],_0x32bdb1=_0xb023bc[_0x1f97b5(0x130)],_0x59b900={'caption':_0x6832d7,'image':_0x2a2289,'fileName':_0x32bdb1};await _0xc8902e[_0x1f97b5(0x145)](sendMessage,_0x43907b,_0x59b900);}else{if(_0xb023bc[_0xc8902e[_0x1f97b5(0x156)]]){const _0x2111d0=_0x23e399[_0x1f97b5(0x121)](_0xb023bc[_0xc8902e[_0x1f97b5(0x156)]]),_0xef4f33=_0xb023bc['caption'],_0x40ecfd=_0xb023bc[_0xc8902e[_0x1f97b5(0x153)]],_0x1b6915={'caption':_0xef4f33,'video':_0x2111d0,'fileName':_0x40ecfd};await _0xc8902e[_0x1f97b5(0x150)](sendMessage,_0x43907b,_0x1b6915);}else{const _0x1cdc04={'text':_0xb023bc};await _0xc8902e[_0x1f97b5(0x145)](sendMessage,_0x43907b,_0x1cdc04);}}}_0x16fcf0[_0x1f97b5(0x135)](0xc8)[_0x1f97b5(0x12e)]({'message':_0xc8902e[_0x1f97b5(0x15e)],'status':!![],'statusCode':0xc8});}catch(_0x172358){console[_0x1f97b5(0x13d)](_0x172358),_0x16fcf0[_0x1f97b5(0x135)](0x1f4)[_0x1f97b5(0x12e)]({'message':_0xc8902e[_0x1f97b5(0x12d)],'status':![],'statusCode':0x1f4});}}),app['post'](_0x3e3e9c(0x15c),async(_0x598b72,_0x234fa4)=>{const _0x4cc8a7=_0x3e3e9c,_0x538e14={'MWKFh':function(_0x36eb56,_0x25b545,_0x257a31){return _0x36eb56(_0x25b545,_0x257a31);},'OodEA':_0x4cc8a7(0x149)},{id:_0x3dfe01,text:_0x3769b5,pdf_document_path:_0x19541b}=_0x598b72['body'];try{const _0x52cd78=_0x23e399[_0x4cc8a7(0x121)](_0x19541b),_0x217d57={'text':_0x3769b5,'document':_0x52cd78};await _0x538e14[_0x4cc8a7(0x14d)](sendMessageWithDocument,_0x3dfe01,_0x217d57),_0x234fa4['status'](0xc8)[_0x4cc8a7(0x12e)]({'success':!![],'message':'Message\x20sent\x20successfully'});}catch(_0xed6989){console[_0x4cc8a7(0x13d)](_0xed6989),_0x234fa4[_0x4cc8a7(0x135)](0x1f4)[_0x4cc8a7(0x12e)]({'success':![],'message':_0x538e14[_0x4cc8a7(0x137)]});}}),app['post'](_0x3e3e9c(0x157),async(_0x5947fb,_0x37c246)=>{const _0x20b198=_0x3e3e9c,_0x336838={'RmGfH':function(_0x4f742e,_0x1d26a7){return _0x4f742e(_0x1d26a7);},'ItATw':'Error\x20saat\x20mendapatkan\x20daftar\x20grup:','jgrug':'Gagal\x20mendapatkan\x20daftar\x20grup'},{waKey:_0x521629}=_0x5947fb[_0x20b198(0x152)];try{const _0x4debfb=await _0x336838[_0x20b198(0x139)](getListGroup,_0x521629);_0x37c246[_0x20b198(0x135)](0xc8)[_0x20b198(0x12e)]({'success':!![],'groups':_0x4debfb});}catch(_0x3e8576){console[_0x20b198(0x13d)](_0x336838['ItATw'],_0x3e8576),_0x37c246[_0x20b198(0x135)](0x1f4)[_0x20b198(0x12e)]({'success':![],'message':_0x336838[_0x20b198(0x13c)]});}}),app[_0x3e3e9c(0x11f)]('/sendMessageToGroup',async(_0x1e8119,_0x23bcf4)=>{const _0x55221f=_0x3e3e9c,_0x922f30={'VwEyN':function(_0x28c25b,_0x595576){return _0x28c25b!=_0x595576;},'NvOUo':_0x55221f(0x127),'OmKFK':_0x55221f(0x143),'NlmTh':_0x55221f(0x130),'XRgmw':function(_0x32e273,_0x22a45c,_0x4c09b2,_0x676768){return _0x32e273(_0x22a45c,_0x4c09b2,_0x676768);},'dXErh':_0x55221f(0x14c),'GPqht':function(_0xe15fee,_0x3b0e40,_0x1a6459,_0x401ff8){return _0xe15fee(_0x3b0e40,_0x1a6459,_0x401ff8);},'NrjiB':function(_0x1a624c,_0x24c8a6,_0x35550b,_0x5807cd){return _0x1a624c(_0x24c8a6,_0x35550b,_0x5807cd);},'difgp':_0x55221f(0x144)},{id:_0x4d3158,text:_0x39ed4a,waKey:_0x13e304}=_0x1e8119[_0x55221f(0x152)];try{if(_0x922f30[_0x55221f(0x14f)](_0x39ed4a[_0x922f30[_0x55221f(0x13e)]],null)){const _0x142092=_0x23e399[_0x55221f(0x121)](_0x39ed4a['document']),_0x541c15=_0x39ed4a[_0x922f30[_0x55221f(0x15a)]],_0x50061f=_0x39ed4a[_0x922f30[_0x55221f(0x141)]],_0x1b0a61={'caption':_0x541c15,'document':_0x142092,'fileName':_0x50061f};await _0x922f30['XRgmw'](sendMessageToGroup,_0x4d3158,_0x1b0a61,_0x13e304);}else{if(_0x39ed4a[_0x55221f(0x14c)]){const _0x142362=_0x23e399[_0x55221f(0x121)](_0x39ed4a[_0x922f30[_0x55221f(0x165)]]),_0x48a580=_0x39ed4a['caption'],_0x328d72=_0x39ed4a[_0x922f30[_0x55221f(0x141)]],_0x322c1f={'caption':_0x48a580,'image':_0x142362,'fileName':_0x328d72};await _0x922f30[_0x55221f(0x15f)](sendMessageToGroup,_0x4d3158,_0x322c1f,_0x13e304);}else{if(_0x39ed4a[_0x55221f(0x132)]){const _0x14cc16=_0x23e399[_0x55221f(0x121)](_0x39ed4a[_0x55221f(0x132)]),_0x5f5591=_0x39ed4a[_0x55221f(0x143)],_0xe560e1=_0x39ed4a[_0x55221f(0x130)],_0x18c9dc={'caption':_0x5f5591,'video':_0x14cc16,'fileName':_0xe560e1};await _0x922f30[_0x55221f(0x136)](sendMessageToGroup,_0x4d3158,_0x18c9dc,_0x13e304);}else{const _0x54a9f1={'text':_0x39ed4a};await _0x922f30['NrjiB'](sendMessageToGroup,_0x4d3158,_0x54a9f1,_0x13e304);}}}_0x23bcf4[_0x55221f(0x135)](0xc8)[_0x55221f(0x12e)]({'message':_0x922f30[_0x55221f(0x13b)],'status':!![],'statusCode':0xc8});}catch(_0x270992){console[_0x55221f(0x13d)](_0x270992),_0x23bcf4[_0x55221f(0x135)](0x1f4)[_0x55221f(0x12e)]({'message':_0x55221f(0x149),'status':![],'statusCode':0x1f4});}}),app[_0x3e3e9c(0x11f)]('/checkNumber',async(_0x20a449,_0x47d7c4)=>{const _0x1234fc=_0x3e3e9c,_0x23fc8e={'ypTMs':'Nomor\x20tidak\x20terdaftar\x20di\x20WhatsApp','zfrmQ':'Error\x20saat\x20memeriksa\x20nomor\x20WhatsApp'},{waKey:_0x3dc8b3,phone_number:_0x420710}=_0x20a449['body'];try{const _0x52385d=await checkNumber(_0x3dc8b3,_0x420710);_0x52385d['some'](_0x5b8f5e=>_0x5b8f5e['exists'])?_0x47d7c4[_0x1234fc(0x135)](0xc8)[_0x1234fc(0x12e)]({'message':_0x1234fc(0x154),'status':!![],'statusCode':0xc8}):_0x47d7c4[_0x1234fc(0x135)](0xc8)[_0x1234fc(0x12e)]({'message':_0x23fc8e[_0x1234fc(0x166)],'status':![],'statusCode':0xc8});}catch(_0x3040e8){console[_0x1234fc(0x13d)](_0x3040e8),_0x47d7c4[_0x1234fc(0x135)](0x1f4)[_0x1234fc(0x12e)]({'message':_0x23fc8e[_0x1234fc(0x11e)],'status':![],'statusCode':0x1f4});}}),app[_0x3e3e9c(0x11f)](_0x3e3e9c(0x151),async(_0x5c7ffb,_0x10a3cc)=>{const _0x4a266e=_0x3e3e9c,_0xf49339={'MmpKH':function(_0x231c04,_0x443ea0){return _0x231c04(_0x443ea0);},'HgWQx':_0x4a266e(0x14a),'unXVW':'Error\x20saat\x20memeriksa\x20nomor\x20WhatsApp'},{waKey:_0x4faccd}=_0x5c7ffb[_0x4a266e(0x152)];try{await _0xf49339[_0x4a266e(0x163)](getMessage,_0x4faccd),_0x10a3cc['status'](0xc8)[_0x4a266e(0x12e)]({'message':_0xf49339[_0x4a266e(0x155)],'status':!![],'statusCode':0xc8});}catch(_0x48c1bd){console[_0x4a266e(0x13d)](_0x48c1bd),_0x10a3cc['status'](0x1f4)[_0x4a266e(0x12e)]({'message':_0xf49339[_0x4a266e(0x13f)],'status':![],'statusCode':0x1f4});}}),app[_0x3e3e9c(0x122)](port,()=>{const _0x221280=_0x3e3e9c;console[_0x221280(0x161)]('Server\x20is\x20running\x20on\x20http://localhost:'+port);});