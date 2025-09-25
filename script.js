const questions = [
  { q:"ถ้าเจอสถานการณ์อันตราย คุณจะเลือกทำอะไร?", answers:[
    {text:"สู้เพื่อปกป้องเพื่อน", house:"Gryffindor", class:"gryffindor"},
    {text:"หาทางแก้ด้วยความรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยกันทุกคน ไม่ทิ้งใคร", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้ไหวพริบเอาตัวรอด", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สมบัติวิเศษแบบไหน?", answers:[
    {text:"ดาบที่ไม่มีวันพ่าย", house:"Gryffindor", class:"gryffindor"},
    {text:"หนังสือที่มีคำตอบทุกคำถาม", house:"Ravenclaw", class:"ravenclaw"},
    {text:"หินที่รักษาทุกโรค", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แหวนแห่งอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบทำงานแบบไหน?", answers:[
    {text:"ผจญภัยและท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดวิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยเหลือผู้อื่นและทำงานเป็นทีม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"มุ่งมั่นและแข่งขันเพื่อเป้าหมาย", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณให้ความสำคัญกับอะไรที่สุด?", answers:[
    {text:"ความกล้าหาญและเกียรติ", house:"Gryffindor", class:"gryffindor"},
    {text:"ความรู้และปัญญา", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความซื่อสัตย์และความเมตตา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"อำนาจและความสำเร็จ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะเลือกสัตว์เลี้ยงตัวไหน?", answers:[
    {text:"สิงโต", house:"Gryffindor", class:"gryffindor"},
    {text:"แมวฉลาดแสนรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"สุนัขที่จงรักภักดี", house:"Hufflepuff", class:"hufflepuff"},
    {text:"งูที่ลึกลับ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากอยู่ในสถานที่แบบไหน?", answers:[
    {text:"ป่าและภูเขาที่ท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"ห้องสมุดและหอคอยสูง", house:"Ravenclaw", class:"ravenclaw"},
    {text:"สวนและทุ่งกว้างปลอดภัย", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ปราสาทลึกลับใต้ดิน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะทำอย่างไรถ้าเพื่อนโกหกคุณ?", answers:[
    {text:"เผชิญหน้าและซื่อสัตย์", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์เหตุผลก่อนตัดสินใจ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ให้อภัยและช่วยแก้ไข", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้สถานการณ์ให้เป็นประโยชน์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบทำกิจกรรมแบบไหน?", answers:[
    {text:"กีฬาและการผจญภัย", house:"Gryffindor", class:"gryffindor"},
    {text:"การเรียนและทดลองใหม่ๆ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยเหลือคนอื่นหรือทำงานอาสา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนเพื่อให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะเลือกสีชุดประจำตัวสีอะไร?", answers:[
    {text:"แดง-ทอง", house:"Gryffindor", class:"gryffindor"},
    {text:"น้ำเงิน-เงิน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เหลือง-ดำ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เขียว-เงิน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"สุดท้ายคุณคิดว่าความสำเร็จมาจาก?", answers:[
    {text:"ความกล้าหาญและการกระทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"ความรู้และการวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความซื่อสัตย์และช่วยเหลือผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ความฉลาดและความทะเยอทะยาน", house:"Slytherin", class:"slytherin"}
  ]},
  // 15 คำถามเพิ่มเติม (รวมเป็น 25 คำถาม)
  { q:"คุณชอบเรียนวิชาอะไรที่สุด?", answers:[
    {text:"การต่อสู้เวทมนตร์", house:"Gryffindor", class:"gryffindor"},
    {text:"การคิดค้นเวทมนตร์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"การดูแลสัตว์วิเศษ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"การวางแผนกลยุทธ์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะจัดการกับความล้มเหลวอย่างไร?", answers:[
    {text:"สู้ต่อและไม่ยอมแพ้", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และเรียนรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"อดทนและพยายามอีกครั้ง", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาวิธีใช้สถานการณ์ให้เป็นประโยชน์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะเลือกเดินทางไหน?", answers:[
    {text:"ผจญภัยในป่าลึก", house:"Gryffindor", class:"gryffindor"},
    {text:"ไปสำรวจห้องสมุดลับ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ท่องเที่ยวกับเพื่อนๆ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เดินทางเพื่อสร้างอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณคิดว่าเพื่อนที่ดีที่สุดคือ?", answers:[
    {text:"กล้าหาญและยืนหยัด", house:"Gryffindor", class:"gryffindor"},
    {text:"ฉลาดและคิดสร้างสรรค์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ซื่อสัตย์และคอยช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ทะเยอทะยานและมีไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะเลือกเครื่องดื่มในห้องอาหาร?", answers:[
    {text:"น้ำเสริมพลัง", house:"Gryffindor", class:"gryffindor"},
    {text:"น้ำสมองแจ่มใส", house:"Ravenclaw", class:"ravenclaw"},
    {text:"น้ำหวานอร่อยเพื่อเพื่อน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"น้ำสูตรลับเพื่อได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบเวลาเรียนแบบไหน?", answers:[
    {text:"แบบลงมือทำจริง", house:"Gryffindor", class:"gryffindor"},
    {text:"แบบทบทวนและคิดวิเคราะห์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"แบบทำงานกลุ่ม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แบบวางแผนและแข่งขัน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะเลือกอุปกรณ์เวทมนตร์แบบไหน?", answers:[
    {text:"ดาบวิเศษ", house:"Gryffindor", class:"gryffindor"},
    {text:"หนังสือเวทมนตร์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"กระเป๋าเก็บของวิเศษ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เครื่องรางวิเศษเพื่ออำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะใช้เวลาว่างอย่างไร?", answers:[
    {text:"ผจญภัยสำรวจโลก", house:"Gryffindor", class:"gryffindor"},
    {text:"อ่านหนังสือและทดลองเวทมนตร์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยเหลือเพื่อนหรือทำกิจกรรม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนและสร้างความได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะเลือกกลยุทธ์แข่งขันอย่างไร?", answers:[
    {text:"ใช้ความกล้าและใจเด็ด", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ร่วมมือและช่วยทีม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ฉวยโอกาสและใช้ไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]}
];

let players = [];
let currentPlayer = 0;
let currentQ = 0;

function startGame(){
  const names = document.getElementById("playerNames").value.split(",");
  players = names.map(name=>({name:name.trim(), score:{Gryffindor:0,Hufflepuff:0,Ravenclaw:0,Slytherin:0}}));
  document.getElementById("setup").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  currentPlayer=0; currentQ=0;
  showQuestion();
}

function showQuestion(){
  if(currentQ>=questions.length){
    currentPlayer++;
    currentQ=0;
    if(currentPlayer>=players.length){
      showResults();
      return;
    }
  }
  const player = players[currentPlayer];
  const q = questions[currentQ];
  let html = `<h2>${player.name} ตอบคำถาม</h2><p>${q.q}</p>`;
  q.answers.forEach(a=>{
    html += `<button class="${a.class}" onclick="choose('${a.house}')">${a.text}</button>`;
  });
  document.getElementById("quiz").innerHTML = html;
}

function choose(house){
  players[currentPlayer].score[house]++;
  currentQ++;
  showQuestion();
}

function showResults(){
  document.getElementById("quiz").style.display = "none";
  let html = "<h2>ผลลัพธ์ของผู้เล่น</h2>";

  const houseInfo = {
    Gryffindor: {desc:"กล้าหาญและเสียสละ", example:"เหมือน Harry, Hermione, Ron", color:"#c41e3a"},
    Hufflepuff: {desc:"ซื่อสัตย์และอดทน", example:"เหมือน Cedric Diggory", color:"#ffdb00"},
    Ravenclaw: {desc:"ฉลาดและคิดสร้างสรรค์", example:"เหมือน Luna Lovegood", color:"#222f5b"},
    Slytherin: {desc:"ทะเยอทะยานและมีไหวพริบ", example:"เหมือน Draco Malfoy", color:"#1a472a"}
  };

  players.forEach(p=>{
    let bestHouse = Object.keys(p.score).reduce((a,b)=>p.score[a]>p.score[b]?a:b);
    html += `<p style="color:${houseInfo[bestHouse].color}">
      <strong>${p.name}</strong> → ${bestHouse}<br>
      นิสัย: ${houseInfo[bestHouse].desc}<br>
      เหมือนใครที่สุด: ${houseInfo[bestHouse].example}</p>`;
  });

  document.getElementById("result").innerHTML = html;
}
