`use client;

import React, { useState } from 'react';

declare const KNOWLEDGE_RULES = [
  { id: 1, title: 'Context Before Demand (å ë»)', desc: 'Lead with shared background/situational constraints before placing requests.' },
  { id: 2, title: 'Mianzijs (Face) Preservation', desc: 'Soften direct imperatives into indirect, collaborative inquiries.' },
  { id: 3, title: 'Hierarchical Alignment', desc: 'Explicitly acknowledge structural titles and group success.' },
  { id: 4, title: 'Relational Warmth (Guanixi)', desc: 'Begin with brief, context-appropriate relationship-building pleasuntanties.' },
  { id: 5, title: 'Collectivist Framing', desc: 'Reframe personal accountability as mutual project success.' },
];

const MOCK_REFRAMED = `Dear Mr. Zhang,

I hope this message finds you well and that your Q2 Planning initiatives are progressing smoothly.

As we approach the end of Q2, our team is currently preparing for our quarterly review meeting scheduled for Tuesday morning. In preparation for this important session, we would greatly appreciate any Q2 financial documentation you may be able to share at your convenience prior to the meeting.

Would you kindly let us know if there are any constraints we should be aware of, or if there is any additional context that would be helpful for us to consider?

We look forward to your continued partnership and are happy to discuss further at your convenience.

With respect,
[YU[İ\ˆ˜[YXÂ‚˜ÛÛœİSĞÒ×Ô•ST×Õ’QÓT‘HÂˆÈ[RYˆK]Nˆ	ĞÛÛ^™Y›Ü™H[X[™	ËYÚYÚˆ	Ò[ˆ\›ØXÚÙˆH[™ÙˆL‹‹‹‰È[™YY][™ÈÛÛ^\İX›\ÚYš\œİ	ÈKˆÈ[RYˆ‹]Nˆ	ÓZX[šH™\Ù\˜][Û‰ËYÚYÚˆ	İÛİ[Ü™X]H\™XÚX]IÈ[™	Ø][İ\ˆÛÛ™[šY[˜ÙIÈÛÙ[ˆ[\\˜]]™\ÉÈKˆÈ[RYˆ]Nˆ	Ô™[][Û˜[Ø\›]	ËYÚYÚˆ	ÓÜ[š[™ÈÚ\Ú\È[™XÚÛ›İÛYÙ[Ùˆ\™\œÚ\	ÈK—NÂ‚™^ÜY˜][[˜İ[ÛˆÛYJ
HÂˆÛÛœİÙ[XZ[˜YÙ][XZ[˜YHH\ÙTİ]J	ÉÊNÂˆÛÛœİÜ™[][ÛœÚ\Ù]™[][ÛœÚ\HH\ÙTİ]J	ÉÊNÂˆÛÛœİØ[˜[^™YÙ][˜[^™YHH\ÙTİ]J˜[ÙJNÂˆÛÛœİÛØY[™ËÙ]ØY[™×HH\ÙTİ]J˜[ÙJNÂˆÛÛœİØÛÜYYÙ]ÛÜYYHH\ÙTİ]J˜[ÙJNÂˆÛÛœİÜ™Yš[™R[œ]Ù]™Yš[™R[œ]HH\ÙTİ]J	ÉÊNÂ‚ˆÛÛœİ[™P[˜[^™HH

HOˆÂˆYˆ
Y[XZ[˜Yš[J
JH™]\›ÂˆÙ]ØY[™ÊYJNÂˆÙ][Y[İ]


HOˆÈÙ]ØY[™Ê˜[ÙJNÈÙ][˜[^™Y
YJNÈKLŒ
NÂˆNÂ‚ˆÛÛœİ[™PÛÜHH

HOˆÂˆ˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
SĞÒ×Ô‘Q”SQQ
NÂˆÙ]ÛÜYY
YJNÂˆÙ][Y[İ]


HOˆÙ]ÛÜYY
˜[ÙJKŒ
NÂˆNÂ‚ˆ™]\›ˆ
ˆ]ˆİ[O^Üİ[\ËœYÙUÜ˜\\ŸO‚ˆXY\ˆİ[O^Üİ[\ËšXY\ŸO‚ˆ]ˆİ[O^Üİ[\ËšXY\“YO‚ˆÜ[ˆİ[O^Üİ[\ËšXY\“ÙÛßO¸¦n¦7ëÏÜÜ[‚ˆÜ[ˆİ[O^Üİ[\ËšXY\•]_O‘[XZ[İ[\™HœšYÙOÜÜ[‚ˆÜ[ˆİ[O^Üİ[\ËšXY\“ÙÛßO¸¦c4çÏÜÜ[‚ˆÙ]‚ˆ]ˆİ[O^Üİ[\ËšXY\”šYÚO‚ˆÜ[ˆİ[O^Üİ[\ËšXY\˜YÙ_OŒˆØXTÈ][]OÜÜ[‚ˆÜ[ˆİ[O^Üİ[\ËšXY\•™\œÚ[ÛŸOŒKŒ[\œš\ÙOÜÜ[‚ˆÙ]‚ˆÚXY\‚ˆXZ[ˆİ[O^Üİ[\Ë›XZ[‘ÜšYO‚ˆ]ˆİ[O^Üİ[\Ë›YÛÛ[[ŸO‚ˆÙXİ[Ûˆİ[O^Üİ[\Ë˜Ø\™O‚ˆ]ˆİ[O^Üİ[\Ë˜Ø\™XY\ŸO‚ˆˆİ[O^Üİ[\Ë˜Ø\™]_O•HÛÜ™H™Yœ˜[Z[™ÈÛÜšÜÜXÙOÚ‚ˆÜ[ˆİ[O^Üİ[\Ë˜Ø\™˜YÙ_O’[œ]ÜÜ[‚ˆÙ]‚ˆ]ˆİ[O^Üİ[\Ë™›Ü›QÜ›İ\O‚ˆX™[İ[O^Üİ[\Ë›X™[O•\™Ù]İ[\™OÛX™[Ï‚ˆÙ[Xİİ[O^ŞË‹‹œİ[\ËœÙ[Xİ˜XÚÙÜ›İ[™ÛÛÜˆ	ÈÌYLLØ‰ß_H\ØX›Y‚ˆÜ[ÛÚ[˜H<'è§ÏÛÜ[Û‚ˆÜÙ[Xİ‚ˆÙ]‚ˆ]ˆİ[O^Üİ[\Ë™›Ü›QÜ›İ\O‚ˆX™[İ[O^Üİ[\Ë›X™[O”™[][ÛœÚ\ÛÛ^ÛX™[‚ˆÙ[Xİİ[O^Üİ[\ËœÙ[XİH˜[YO^Ü™[][ÛœÚ\HÛÚ[™ÙO^ÊJHOˆÙ]™[][ÛœÚ\
K\™Ù]˜[YJ_O‚ˆÜ[Ûˆ˜[YOHˆ”Ù[XİÛÛ^‹‹ÛÜ[Û‚ˆÜ[Ûˆ˜[YOHœ›ÜÜXİ“™]È›ÜÜXİÈÛÛİ]™XXÚÛÜ[Û‚ˆÜ[Ûˆ˜[YOH™[™Üˆ“Û™ËU\›H™[™ÜÛÜ[Û‚ˆÜ[Ûˆ˜[YOH™Ûİ™\››Y[”Ù[š[ÜˆÛİ™\››Y[Ù™šXÚX[ÛÜ[Û‚ˆÜ[Ûˆ˜[YOHœY\ˆ”Y\‹]ËTY\ˆÛÛXYİYOÛÜ[Û‚ˆÜÙ[Xİ‚ˆÙ]‚ˆ]ˆİ[O^Üİ[\Ë™›Ü›QÜ›İ\O‚ˆX™[İ[O^Üİ[\Ë›X™[O”˜]ÈÙ\İ\›ˆ[XZ[˜YÛX™[‚ˆ^\™XHİ[O^Üİ[\Ë^\™X_HXÙZÛ\H™K™Ë‹Ù[™YHHLˆš[˜[˜ÚX[™\ÜHY\Ù^H[Ü›š[™ËˆÈ›İ™H]Kˆˆ˜[YO^Ù[XZ[˜YHÛÚ[™ÙO^Ê
JHOˆÙ][XZ[˜Y
K\™Ù]˜[YJJ_H›İÜÏ^Í_HÏ‚ˆÙ]‚ˆ]Ûˆİ[O^ŞË‹‹œİ[\Ëœš[X\P‹‹‹ŠØY[™ÈY[XZ[˜Yš[J
HÈİ[\Ë˜‘\ØX›YˆßJ__HÛÛXÚÏ^Ú[™P[˜[^™_H\ØX›Y^ÛØY[™ÈY[XZ[˜Yš[J
OŸBˆÛØY[™ÈÈ	Ğ[˜[^š[™Ë‹‹‰Èˆ	Ğ[˜[^™H	ˆ™Yœ˜[YH˜Y	ßBˆØ]Û‚ˆÜÙXİ[Û‚ˆÙXİ[Ûˆİ[O^Üİ[\Ë˜Ø\™O‚ˆ]ˆİ[O^Üİ[\Ë˜Ø\™XY\ŸO‚ˆˆİ[O^Üİ