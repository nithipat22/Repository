const questions = [
  { q:"ถ้าเจอสถานการณ์อันตราย คุณจะทำอะไร?", img:"https://source.unsplash.com/200x150/?danger,forest", answers:[
    {text:"สู้เพื่อปกป้องเพื่อน", house:"Gryffindor", class:"gryffindor"},
    {text:"หาทางแก้ด้วยความรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยกันทุกคน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้ไหวพริบเอาตัวรอด", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สมบัติวิเศษแบบไหน?", img:"https://source.unsplash.com/200x150/?treasure,magic", answers:[
    {text:"ดาบที่ไม่มีวันพ่าย", house:"Gryffindor", class:"gryffindor"},
    {text:"หนังสือที่มีคำตอบทุกคำถาม", house:"Ravenclaw", class:"ravenclaw"},
    {text:"หินที่รักษาทุกโรค", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แหวนแห่งอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบทำงานแบบไหน?", img:"https://source.unsplash.com/200x150/?teamwork,people", answers:[
    {text:"ผจญภัยและท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดวิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยเหลือผู้อื่นและทำงานเป็นทีม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"มุ่งมั่นและแข่งขันเพื่อเป้าหมาย", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบอยู่กับกลุ่มแบบไหน?", img:"https://source.unsplash.com/200x150/?friends,group", answers:[
    {text:"กลุ่มที่กล้าท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"กลุ่มที่ชอบเรียนรู้และคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"กลุ่มที่ช่วยเหลือกัน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"กลุ่มที่มีความทะเยอทะยาน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"ถ้าต้องแก้ปัญหาใหญ่ คุณจะทำอย่างไร?", img:"https://source.unsplash.com/200x150/?puzzle,problem", answers:[
    {text:"กล้าเสี่ยงและลงมือทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดให้รอบคอบและวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ขอความช่วยเหลือจากทุกคน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาวิธีได้เปรียบเพื่อเอาชนะ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สัตว์เลี้ยงแบบไหน?", img:"https://source.unsplash.com/200x150/?pet,animal", answers:[
    {text:"สิงโตหรือสัตว์กล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"นกฮูกหรือสัตว์ฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"หมาหรือสัตว์ซื่อสัตย์", house:"Hufflepuff", class:"hufflepuff"},
    {text:"งูหรือสัตว์ลึกลับ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"วันหยุดของคุณเป็นแบบไหน?", img:"https://source.unsplash.com/200x150/?holiday,fun", answers:[
    {text:"ไปผจญภัยกลางแจ้ง", house:"Gryffindor", class:"gryffindor"},
    {text:"อ่านหนังสือหรือทำวิจัย", house:"Ravenclaw", class:"ravenclaw"},
    {text:"พักผ่อนและช่วยเหลือคนอื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนทำสิ่งที่ได้ประโยชน์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังวิเศษแบบไหน?", img:"https://source.unsplash.com/200x150/?magic,spell", answers:[
    {text:"พลังกล้าหาญและต่อสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"พลังความรู้และสมอง", house:"Ravenclaw", class:"ravenclaw"},
    {text:"พลังช่วยเหลือและรักษา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"พลังอำนาจและความลึกลับ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจัดการกับความผิดพลาดอย่างไร?", img:"https://source.unsplash.com/200x150/?mistake,error", answers:[
    {text:"กล้าลุยแก้ไขทันที", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และหาทางแก้ไข", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ขอโทษและช่วยเหลือผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาทางใช้โอกาสให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบเรียนรู้แบบไหน?", img:"https://source.unsplash.com/200x150/?study,book", answers:[
    {text:"ลงมือทำและลองผิดลองถูก", house:"Gryffindor", class:"gryffindor"},
    {text:"ศึกษาและวิเคราะห์ข้อมูล", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เรียนรู้จากการช่วยเหลือคนอื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เรียนรู้เพื่อใช้ให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบใช้เวลาแบบไหนกับเพื่อน?", img:"https://source.unsplash.com/200x150/?friends,fun", answers:[
    {text:"ผจญภัยและสนุกสนาน", house:"Gryffindor", class:"gryffindor"},
    {text:"แลกเปลี่ยนความรู้และความคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยเหลือและอยู่ด้วยกัน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แข่งขันกันและสร้างโอกาส", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจัดการความกลัวอย่างไร?", img:"https://source.unsplash.com/200x150/?fear,challenge", answers:[
    {text:"เผชิญหน้ากล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดวิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"รับมืออย่างสงบและขอความช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้ไหวพริบเพื่อเอาชนะ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะทำอย่างไรถ้าต้องตัดสินใจยาก?", img:"https://source.unsplash.com/200x150/?decision,choice", answers:[
    {text:"กล้าตัดสินใจและลงมือทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์ทุกด้านก่อนตัดสินใจ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ปรึกษาเพื่อนและทำให้ดีที่สุด", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาทางที่ได้เปรียบที่สุด", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เพื่อนแบบไหน?", img:"https://source.unsplash.com/200x150/?friendship,happy", answers:[
    {text:"เพื่อนกล้าหาญและพร้อมช่วยเหลือ", house:"Gryffindor", class:"gryffindor"},
    {text:"เพื่อนฉลาดและสร้างสรรค์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เพื่อนซื่อสัตย์และอดทน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เพื่อนทะเยอทะยานและมีแผนการ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากเรียนรู้เรื่องอะไร?", img:"https://source.unsplash.com/200x150/?knowledge,learning", answers:[
    {text:"เรื่องที่ท้าทายและผจญภัย", house:"Gryffindor", class:"gryffindor"},
    {text:"เรื่องรอบด้านและซับซ้อน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เรื่องที่ช่วยเหลือผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เรื่องที่สร้างโอกาสและอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้อาวุธวิเศษแบบไหน?", img:"https://source.unsplash.com/200x150/?weapon,magic", answers:[
    {text:"ดาบหรืออาวุธกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"เครื่องมือที่ชาญฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"อุปกรณ์ที่ช่วยผู้อื่นได้", house:"Hufflepuff", class:"hufflepuff"},
    {text:"อุปกรณ์ที่ให้พลังและอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้ความสามารถพิเศษแบบไหน?", img:"https://source.unsplash.com/200x150/?superpower,magic", answers:[
    {text:"ความกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"ความรู้และไหวพริบ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความอดทนและช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ความทะเยอทะยานและอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะตอบสนองต่อความท้าทายอย่างไร?", img:"https://source.unsplash.com/200x150/?challenge,adventure", answers:[
    {text:"ลุยแบบไม่กลัว", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ขอความช่วยเหลือเพื่อน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาทางได้เปรียบและชนะ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สถานที่พักผ่อนแบบไหน?", img:"https://source.unsplash.com/200x150/?castle,magic", answers:[
    {text:"ป่าลึกและผจญภัย", house:"Gryffindor", class:"gryffindor"},
    {text:"ห้องสมุดและห้องเรียน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"สวนและสถานที่สงบ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หอคอยสูงและลึกลับ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เพื่อนร่วมทีมแบบไหน?", img:"https://source.unsplash.com/200x150/?teamwork,group", answers:[
    {text:"กล้าหาญและพร้อมสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"ฉลาดและคิดสร้างสรรค์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ซื่อสัตย์และอดทน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ทะเยอทะยานและวางแผน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบกิจกรรมแบบไหนในวันว่าง?", img:"https://source.unsplash.com/200x150/?adventure,fun", answers:[
    {text:"ปีนเขาหรือกีฬาเสี่ยง", house:"Gryffindor", class:"gryffindor"},
    {text:"แก้ปริศนาหรืออ่านหนังสือ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยงานสังคมหรือทำอาหาร", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แข่งขันเกมหรือวางแผน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะตอบสนองต่อความสำเร็จอย่างไร?", img:"https://source.unsplash.com/200x150/?success,achievement", answers:[
    {text:"เฉลิมฉลองและภูมิใจ", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และพัฒนาต่อ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"แบ่งปันกับเพื่อนและช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนก้าวต่อไปเพื่อมากขึ้น", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เวทมนตร์ประเภทไหน?", img:"https://source.unsplash.com/200x150/?magic,wand", answers:[
    {text:"เวทมนตร์ต่อสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"เวทมนตร์ปัญญา", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เวทมนตร์รักษา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เวทมนตร์ควบคุมหรืออำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะทำอย่างไรกับความลับ?", img:"https://source.unsplash.com/200x150/?secret,mystery", answers:[
    {text:"เผชิญหน้ากับความจริง", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และเก็บเป็นความรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เก็บไว้เพื่อปกป้องคนอื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้ให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังเหนือธรรมชาติแบบไหน?", img:"https://source.unsplash.com/200x150/?supernatural,magic", answers:[
    {text:"พลังต่อสู้และกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"พลังสมองและไหวพริบ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"พลังช่วยเหลือและปกป้อง", house:"Hufflepuff", class:"hufflepuff"},
    {text:"พลังอำนาจและวางแผน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากใช้เวลาช่วงเย็นอย่างไร?", img:"https://source.unsplash.com/200x150/?evening,relax", answers:[
    {text:"ผจญภัยหรือกีฬา", house:"Gryffindor", class:"gryffindor"},
    {text:"อ่านหนังสือหรือเรียนรู้สิ่งใหม่", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยงานหรือทำกิจกรรมกับเพื่อน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนและทำงานเพื่อเป้าหมาย", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สิ่งของวิเศษประเภทไหน?", img:"https://source.unsplash.com/200x150/?magic,item", answers:[
    {text:"อาวุธหรือเกราะกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"อุปกรณ์สมองหรือคัมภีร์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ของวิเศษช่วยคน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"อุปกรณ์ให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังด้านอารมณ์แบบไหน?", img:"https://source.unsplash.com/200x150/?emotion,power", answers:[
    {text:"ความกล้าและความอดทน", house:"Gryffindor", class:"gryffindor"},
    {text:"ความฉลาดและรอบคอบ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความเอื้อเฟื้อและอบอุ่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ความทะเยอทะยานและไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากเป็นผู้นำแบบไหน?", img:"https://source.unsplash.com/200x150/?leader,king", answers:[
    {text:"กล้าหาญและลงมือทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"ฉลาดและวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เอื้อเฟื้อและดูแลทีม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ทะเยอทะยานและมีไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้การผจญภัยแบบไหน?", img:"https://source.unsplash.com/200x150/?journey,adventure", answers:[
    {text:"เสี่ยงและท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"ซับซ้อนและใช้ความคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ร่วมมือกับผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"มีกลยุทธ์และประสบความสำเร็จ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สกิลพิเศษด้านไหน?", img:"https://source.unsplash.com/200x150/?skill,magic", answers:[
    {text:"ต่อสู้และกล้า", house:"Gryffindor", class:"gryffindor"},
    {text:"ความคิดสร้างสรรค์และฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ซื่อสัตย์และช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"อำนาจและไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เพื่อนสนิทแบบไหน?", img:"https://source.unsplash.com/200x150/?bestfriend,happy", answers:[
    {text:"กล้าหาญและพร้อมสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"ฉลาดและช่างคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ซื่อสัตย์และช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ทะเยอทะยานและมีแผนการ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้อุปกรณ์เวทมนตร์แบบไหน?", img:"https://source.unsplash.com/200x150/?magic,tool", answers:[
    {text:"ดาบหรืออาวุธกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"คัมภีร์และอุปกรณ์สมอง", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ของช่วยเหลือและปกป้อง", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เครื่องมือให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังปกป้องแบบไหน?", img:"https://source.unsplash.com/200x150/?protect,shield", answers:[
    {text:"กล้าหาญและเข้มแข็ง", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และป้องกันอย่างชาญฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"อดทนและช่วยเหลือผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนและใช้ไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากมีทักษะพิเศษด้านไหน?", img:"https://source.unsplash.com/200x150/?skill,ability", answers:[
    {text:"ความกล้าหาญและความเร็ว", house:"Gryffindor", class:"gryffindor"},
    {text:"สติปัญญาและความรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความอดทนและความเมตตา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ไหวพริบและอำนาจ", house:"Slytherin", class:"slytherin"}
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
    currentPlayer = 0;
    currentQ = 0;
    showQuestion();
}

function showQuestion(){
    if(currentQ >= questions.length){
        currentPlayer++;
        currentQ = 0;
        if(currentPlayer >= players.length){
            showResults();
            return;
        }
    }
    const player = players[currentPlayer];
    const q = questions[currentQ];
    let html = `<h2>${player.name} ตอบคำถาม</h2>
                <p>${q.q}</p>
                <img src="${q.img}" alt="question image">`;
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
