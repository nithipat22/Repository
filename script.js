
// ====== คำถาม 50 ข้อ (รูปใช้ picsum.photos seed เพื่อไม่ให้ซ้ำ และขึ้นได้แน่นอน) ======
const questions = [
  { q:"ถ้าเจอสถานการณ์อันตราย คุณจะทำอะไร?", img:"https://picsum.photos/seed/q1/200/150", answers:[
    {text:"สู้เพื่อปกป้องเพื่อน", house:"Gryffindor", class:"gryffindor"},
    {text:"หาทางแก้ด้วยความรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยกันทุกคน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้ไหวพริบเอาตัวรอด", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สมบัติวิเศษแบบไหน?", img:"https://picsum.photos/seed/q2/200/150", answers:[
    {text:"ดาบที่ไม่มีวันพ่าย", house:"Gryffindor", class:"gryffindor"},
    {text:"หนังสือที่มีคำตอบทุกคำถาม", house:"Ravenclaw", class:"ravenclaw"},
    {text:"หินที่รักษาทุกโรค", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แหวนแห่งอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบทำงานแบบไหน?", img:"https://picsum.photos/seed/q3/200/150", answers:[
    {text:"ผจญภัยและท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดวิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยเหลือผู้อื่นและทำงานเป็นทีม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"มุ่งมั่นและแข่งขันเพื่อเป้าหมาย", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบอยู่กับกลุ่มแบบไหน?", img:"https://picsum.photos/seed/q4/200/150", answers:[
    {text:"กลุ่มที่กล้าท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"กลุ่มที่ชอบเรียนรู้และคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"กลุ่มที่ช่วยเหลือกัน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"กลุ่มที่มีความทะเยอทะยาน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"ถ้าต้องแก้ปัญหาใหญ่ คุณจะทำอย่างไร?", img:"https://picsum.photos/seed/q5/200/150", answers:[
    {text:"กล้าเสี่ยงและลงมือทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดให้รอบคอบและวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ขอความช่วยเหลือจากทุกคน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาวิธีได้เปรียบเพื่อเอาชนะ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สัตว์เลี้ยงแบบไหน?", img:"https://picsum.photos/seed/q6/200/150", answers:[
    {text:"สิงโตหรือสัตว์กล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"นกฮูกหรือสัตว์ฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"หมาหรือสัตว์ซื่อสัตย์", house:"Hufflepuff", class:"hufflepuff"},
    {text:"งูหรือสัตว์ลึกลับ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"วันหยุดของคุณเป็นแบบไหน?", img:"https://picsum.photos/seed/q7/200/150", answers:[
    {text:"ไปผจญภัยกลางแจ้ง", house:"Gryffindor", class:"gryffindor"},
    {text:"อ่านหนังสือหรือทำวิจัย", house:"Ravenclaw", class:"ravenclaw"},
    {text:"พักผ่อนและช่วยเหลือคนอื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนทำสิ่งที่ได้ประโยชน์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังวิเศษแบบไหน?", img:"https://picsum.photos/seed/q8/200/150", answers:[
    {text:"พลังกล้าหาญและต่อสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"พลังความรู้และสมอง", house:"Ravenclaw", class:"ravenclaw"},
    {text:"พลังช่วยเหลือและรักษา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"พลังอำนาจและความลึกลับ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจัดการกับความผิดพลาดอย่างไร?", img:"https://picsum.photos/seed/q9/200/150", answers:[
    {text:"กล้าลุยแก้ไขทันที", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และหาทางแก้ไข", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ขอโทษและช่วยเหลือผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาทางใช้โอกาสให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบเรียนรู้แบบไหน?", img:"https://picsum.photos/seed/q10/200/150", answers:[
    {text:"ลงมือทำและลองผิดลองถูก", house:"Gryffindor", class:"gryffindor"},
    {text:"ศึกษาและวิเคราะห์ข้อมูล", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เรียนรู้จากการช่วยเหลือคนอื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เรียนรู้เพื่อใช้ให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบใช้เวลาแบบไหนกับเพื่อน?", img:"https://picsum.photos/seed/q11/200/150", answers:[
    {text:"ผจญภัยและสนุกสนาน", house:"Gryffindor", class:"gryffindor"},
    {text:"แลกเปลี่ยนความรู้และความคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยเหลือและอยู่ด้วยกัน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แข่งขันกันและสร้างโอกาส", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจัดการความกลัวอย่างไร?", img:"https://picsum.photos/seed/q12/200/150", answers:[
    {text:"เผชิญหน้ากล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดวิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"รับมืออย่างสงบและขอความช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้ไหวพริบเพื่อเอาชนะ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะทำอย่างไรถ้าต้องตัดสินใจยาก?", img:"https://picsum.photos/seed/q13/200/150", answers:[
    {text:"กล้าตัดสินใจและลงมือทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์ทุกด้านก่อนตัดสินใจ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ปรึกษาเพื่อนและทำให้ดีที่สุด", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาทางที่ได้เปรียบที่สุด", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เพื่อนแบบไหน?", img:"https://picsum.photos/seed/q14/200/150", answers:[
    {text:"เพื่อนกล้าหาญและพร้อมช่วยเหลือ", house:"Gryffindor", class:"gryffindor"},
    {text:"เพื่อนฉลาดและสร้างสรรค์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เพื่อนซื่อสัตย์และอดทน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เพื่อนทะเยอทะยานและมีแผนการ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากเรียนรู้เรื่องอะไร?", img:"https://picsum.photos/seed/q15/200/150", answers:[
    {text:"เรื่องที่ท้าทายและผจญภัย", house:"Gryffindor", class:"gryffindor"},
    {text:"เรื่องรอบด้านและซับซ้อน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เรื่องที่ช่วยเหลือผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เรื่องที่สร้างโอกาสและอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้อาวุธวิเศษแบบไหน?", img:"https://picsum.photos/seed/q16/200/150", answers:[
    {text:"ดาบหรืออาวุธกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"เครื่องมือที่ชาญฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"อุปกรณ์ที่ช่วยผู้อื่นได้", house:"Hufflepuff", class:"hufflepuff"},
    {text:"อุปกรณ์ที่ให้พลังและอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้ความสามารถพิเศษแบบไหน?", img:"https://picsum.photos/seed/q17/200/150", answers:[
    {text:"ความกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"ความรู้และไหวพริบ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความอดทนและช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ความทะเยอทะยานและอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะตอบสนองต่อความท้าทายอย่างไร?", img:"https://picsum.photos/seed/q18/200/150", answers:[
    {text:"ลุยแบบไม่กลัว", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ขอความช่วยเหลือเพื่อน", house:"Hufflepuff", class:"hufflephuff"},
    {text:"หาทางได้เปรียบและชนะ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สถานที่พักผ่อนแบบไหน?", img:"https://picsum.photos/seed/q19/200/150", answers:[
    {text:"ป่าลึกและผจญภัย", house:"Gryffindor", class:"gryffindor"},
    {text:"ห้องสมุดและห้องเรียน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"สวนและสถานที่สงบ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หอคอยสูงและลึกลับ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เพื่อนร่วมทีมแบบไหน?", img:"https://picsum.photos/seed/q20/200/150", answers:[
    {text:"กล้าหาญและพร้อมสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"ฉลาดและคิดสร้างสรรค์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ซื่อสัตย์และอดทน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ทะเยอทะยานและวางแผน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบกิจกรรมแบบไหนในวันว่าง?", img:"https://picsum.photos/seed/q21/200/150", answers:[
    {text:"ปีนเขาหรือกีฬาเสี่ยง", house:"Gryffindor", class:"gryffindor"},
    {text:"แก้ปริศนาหรืออ่านหนังสือ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยงานสังคมหรือทำอาหาร", house:"Hufflepuff", class:"hufflepuff"},
    {text:"แข่งขันเกมหรือวางแผน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะตอบสนองต่อความสำเร็จอย่างไร?", img:"https://picsum.photos/seed/q22/200/150", answers:[
    {text:"เฉลิมฉลองและภูมิใจ", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และพัฒนาต่อ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"แบ่งปันกับเพื่อนและช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนก้าวต่อไปเพื่อมากขึ้น", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เวทมนตร์ประเภทไหน?", img:"https://picsum.photos/seed/q23/200/150", answers:[
    {text:"เวทมนตร์ต่อสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"เวทมนตร์ปัญญา", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เวทมนตร์รักษา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เวทมนตร์ควบคุมหรืออำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะทำอย่างไรกับความลับ?", img:"https://picsum.photos/seed/q24/200/150", answers:[
    {text:"เผชิญหน้ากับความจริง", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และเก็บเป็นความรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เก็บไว้เพื่อปกป้องคนอื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้ให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังเหนือธรรมชาติแบบไหน?", img:"https://picsum.photos/seed/q25/200/150", answers:[
    {text:"พลังต่อสู้และกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"พลังสมองและไหวพริบ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"พลังช่วยเหลือและปกป้อง", house:"Hufflepuff", class:"hufflepuff"},
    {text:"พลังอำนาจและวางแผน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากใช้เวลาช่วงเย็นอย่างไร?", img:"https://picsum.photos/seed/q26/200/150", answers:[
    {text:"ผจญภัยหรือกีฬา", house:"Gryffindor", class:"gryffindor"},
    {text:"อ่านหนังสือหรือเรียนรู้สิ่งใหม่", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยงานหรือทำกิจกรรมกับเพื่อน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนและทำงานเพื่อเป้าหมาย", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สิ่งของวิเศษประเภทไหน?", img:"https://picsum.photos/seed/q27/200/150", answers:[
    {text:"อาวุธหรือเกราะกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"อุปกรณ์สมองหรือคัมภีร์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ของวิเศษช่วยคน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"อุปกรณ์ให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังด้านอารมณ์แบบไหน?", img:"https://picsum.photos/seed/q28/200/150", answers:[
    {text:"ความกล้าและความอดทน", house:"Gryffindor", class:"gryffindor"},
    {text:"ความฉลาดและรอบคอบ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความเอื้อเฟื้อและอบอุ่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ความทะเยอทะยานและไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากเป็นผู้นำแบบไหน?", img:"https://picsum.photos/seed/q29/200/150", answers:[
    {text:"กล้าหาญและลงมือทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"ฉลาดและวางแผน", house:"Ravenclaw", class:"ravenclaw"},
    {text:"เอื้อเฟื้อและดูแลทีม", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ทะเยอทะยานและมีไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้การผจญภัยแบบไหน?", img:"https://picsum.photos/seed/q30/200/150", answers:[
    {text:"เสี่ยงและท้าทาย", house:"Gryffindor", class:"gryffindor"},
    {text:"ซับซ้อนและใช้ความคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ร่วมมือกับผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"มีกลยุทธ์และประสบความสำเร็จ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้สกิลพิเศษด้านไหน?", img:"https://picsum.photos/seed/q31/200/150", answers:[
    {text:"ต่อสู้และกล้า", house:"Gryffindor", class:"gryffindor"},
    {text:"ความคิดสร้างสรรค์และฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ซื่อสัตย์และช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"อำนาจและไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้เพื่อนสนิทแบบไหน?", img:"https://picsum.photos/seed/q32/200/150", answers:[
    {text:"กล้าหาญและพร้อมสู้", house:"Gryffindor", class:"gryffindor"},
    {text:"ฉลาดและช่างคิด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ซื่อสัตย์และช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ทะเยอทะยานและมีแผนการ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้อุปกรณ์เวทมนตร์แบบไหน?", img:"https://picsum.photos/seed/q33/200/150", answers:[
    {text:"ดาบหรืออาวุธกล้าหาญ", house:"Gryffindor", class:"gryffindor"},
    {text:"คัมภีร์และอุปกรณ์สมอง", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ของช่วยเหลือและปกป้อง", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เครื่องมือให้ได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้พลังปกป้องแบบไหน?", img:"https://picsum.photos/seed/q34/200/150", answers:[
    {text:"กล้าหาญและเข้มแข็ง", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และป้องกันอย่างชาญฉลาด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"อดทนและช่วยเหลือผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนและใช้ไหวพริบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากมีทักษะพิเศษด้านไหน?", img:"https://picsum.photos/seed/q35/200/150", answers:[
    {text:"ความกล้าหาญและความเร็ว", house:"Gryffindor", class:"gryffindor"},
    {text:"สติปัญญาและความรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความอดทนและความเมตตา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ไหวพริบและอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะทำอย่างไรเมื่อเห็นคนถูกเอาเปรียบ?", img:"https://picsum.photos/seed/q36/200/150", answers:[
    {text:"เข้าช่วยและปกป้อง", house:"Gryffindor", class:"gryffindor"},
    {text:"หาหลักฐานและวางแผนช่วย", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ให้กำลังใจและช่วยเหลือทันที", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้กลยุทธ์เพื่อเปลี่ยนสถานการณ์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณคิดว่าอะไรสำคัญที่สุดในทีม?", img:"https://picsum.photos/seed/q37/200/150", answers:[
    {text:"ความกล้าและการเสียสละ", house:"Gryffindor", class:"gryffindor"},
    {text:"ความรู้และการคิดวิเคราะห์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความซื่อสัตย์และความเมตตา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เป้าหมายและกลยุทธ์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะจัดการกับความล้มเหลวอย่างไร?", img:"https://picsum.photos/seed/q38/200/150", answers:[
    {text:"ลุกขึ้นสู้ใหม่", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์ข้อผิดพลาดและเรียนรู้", house:"Ravenclaw", class:"ravenclaw"},
    {text:"รับผิดชอบและรับการสนับสนุน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาทางเปลี่ยนเป็นข้อได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณชอบแก้ปัญหาด้วยวิธีไหน?", img:"https://picsum.photos/seed/q39/200/150", answers:[
    {text:"ลงมือทำทันที", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดและวิเคราะห์ก่อนทำ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ปรึกษาและทำร่วมกับผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"หาวิธีที่ทำให้เราได้เปรียบ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากให้คนอื่นจดจำข้อดีของคุณอะไร?", img:"https://picsum.photos/seed/q40/200/150", answers:[
    {text:"ความกล้าหาญและจิตใจไม่ยอมแพ้", house:"Gryffindor", class:"gryffindor"},
    {text:"ความฉลาดและการคิดลึก", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความเมตตาและความซื่อสัตย์", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ความทะเยอทะยานและความสามารถเปลี่ยนแปลง", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากเรียนรู้อะไรจากผู้ใหญ่ที่สุด?", img:"https://picsum.photos/seed/q41/200/150", answers:[
    {text:"ความกล้าในการตัดสินใจ", house:"Gryffindor", class:"gryffindor"},
    {text:"ความรอบรู้และประสบการณ์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ความเมตตาและการดูแลผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"การสร้างเครือข่ายและโอกาส", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะทำอย่างไรเมื่อเพื่อนต้องการความช่วยเหลือ?", img:"https://picsum.photos/seed/q42/200/150", answers:[
    {text:"ลุยช่วยทันที", house:"Gryffindor", class:"gryffindor"},
    {text:"วิเคราะห์และเสนอวิธีที่ดีที่สุด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"อยู่เป็นกำลังใจและช่วยจริงจัง", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ช่วยโดยคิดผลประโยชน์ระยะยาว", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณคิดว่าความกล้าหาญหมายถึงอะไร?", img:"https://picsum.photos/seed/q43/200/150", answers:[
    {text:"เผชิญหน้าแม้กลัว", house:"Gryffindor", class:"gryffindor"},
    {text:"คิดและลงมือแม้เสี่ยงทางปัญญา", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ยอมรับความผิดพลาดและช่วยผู้อื่น", house:"Hufflepuff", class:"hufflepuff"},
    {text:"กล้าตั้งเป้าหมายและฝ่าฟันเพื่อมัน", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะใช้ทรัพยากรจำกัดอย่างไรให้เกิดประโยชน์ที่สุด?", img:"https://picsum.photos/seed/q44/200/150", answers:[
    {text:"ลงมือให้เกิดผลทันที", house:"Gryffindor", class:"gryffindor"},
    {text:"วางแผนและใช้ให้คุ้มค่าที่สุด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"แบ่งปันและช่วยกันใช้", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ใช้เพื่อสร้างผลประโยชน์เพิ่มขึ้น", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"ถ้ามีโอกาสเปลี่ยนแปลงโลก คุณจะทำอะไรแรก?", img:"https://picsum.photos/seed/q45/200/150", answers:[
    {text:"ต่อสู้เพื่อลบความอยุติธรรม", house:"Gryffindor", class:"gryffindor"},
    {text:"สร้างระบบความรู้และการศึกษา", house:"Ravenclaw", class:"ravenclaw"},
    {text:"สร้างเครือข่ายช่วยเหลือชุมชน", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางนโยบายที่เพิ่มโอกาสให้บางกลุ่ม", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะรับมือกับคู่แข่งที่เก่งกว่าอย่างไร?", img:"https://picsum.photos/seed/q46/200/150", answers:[
    {text:"สู้ด้วยกำลังและใจ", house:"Gryffindor", class:"gryffindor"},
    {text:"เรียนรู้และปรับวิธีการ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ร่วมมือหรือหาทีมที่เข้มแข็ง", house:"Hufflepuff", class:"hufflepuff"},
    {text:"วางแผนแล้วหาจุดอ่อนเพื่อชนะ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณจะเลือกช่วยใครเมื่อต้องเลือกได้แค่คนเดียว?", img:"https://picsum.photos/seed/q47/200/150", answers:[
    {text:"ช่วยคนที่ต้องการที่สุดทันที", house:"Gryffindor", class:"gryffindor"},
    {text:"เลือกโดยวิเคราะห์ผลลัพธ์ที่ดีที่สุด", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ช่วยคนที่มีความสัมพันธ์กับเรา", house:"Hufflepuff", class:"hufflepuff"},
    {text:"เลือกเพื่อประโยชน์ระยะยาว", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากได้อาชีพในโลกเวทมนตร์แบบไหน?", img:"https://picsum.photos/seed/q48/200/150", answers:[
    {text:"นักรบหรือนักผจญภัย", house:"Gryffindor", class:"gryffindor"},
    {text:"นักวิจัยหรือนักวิชาการ", house:"Ravenclaw", class:"ravenclaw"},
    {text:"หมอหรือนักสังคมสงเคราะห์", house:"Hufflepuff", class:"hufflepuff"},
    {text:"ผู้นำองค์กรหรือผู้วางกลยุทธ์", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"คุณอยากมีสัญลักษณ์ประจำตัวแบบไหน?", img:"https://picsum.photos/seed/q49/200/150", answers:[
    {text:"สิงโตหรือสัญลักษณ์ของความกล้า", house:"Gryffindor", class:"gryffindor"},
    {text:"นกฮูกหรือคัมภีร์", house:"Ravenclaw", class:"ravenclaw"},
    {text:"ดอกไม้หรือมือที่ช่วยเหลือ", house:"Hufflepuff", class:"hufflepuff"},
    {text:"งูหรือเครื่องหมายอำนาจ", house:"Slytherin", class:"slytherin"}
  ]},
  { q:"อะไรทำให้คุณภูมิใจที่สุด?", img:"https://picsum.photos/seed/q50/200/150", answers:[
    {text:"การกล้าตัดสินใจและลงมือทำ", house:"Gryffindor", class:"gryffindor"},
    {text:"ความรู้และการเข้าใจโลก", house:"Ravenclaw", class:"ravenclaw"},
    {text:"การช่วยเหลือผู้อื่นและความสัมพันธ์", house:"Hufflepuff", class:"hufflepuff"},
    {text:"การสร้างสิ่งที่เปลี่ยนแปลงได้", house:"Slytherin", class:"slytherin"}
  ]}
];
let players = [];
let currentPlayer = 0;
let currentQ = 0;

// ================== เริ่มเกม ==================
document.getElementById("startBtn").addEventListener("click", startGame);

function startGame(){
  const names = document.getElementById("playerNames").value.split(",");
  players = names.map(name=>({
    name:name.trim(),
    score:{Gryffindor:0,Hufflepuff:0,Ravenclaw:0,Slytherin:0}
  }));
  document.getElementById("setup").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  currentPlayer = 0; currentQ = 0;
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
  let html = `<h2>${player.name} ตอบคำถาม</h2>
              <p>${q.q}</p>
              <img src="${q.img}" alt="รูปประกอบคำถาม" style="max-width:100%;height:auto;">`;
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
  document.getElementById("result").style.display = "block";
  let html = "<h2>ผลลัพธ์ของผู้เล่น</h2>";

  const houseInfo = {
    Gryffindor: {desc:"กล้าหาญและเสียสละ", example:"Harry Potter, Hermione Granger, Ron Weasley", color:"#c41e3a", img:"https://i.imgur.com/5YJrWjC.png"},
    Hufflepuff: {desc:"ซื่อสัตย์และอดทน", example:"Cedric Diggory, Nymphadora Tonks", color:"#ffdb00", img:"https://i.imgur.com/0y9F8tU.png"},
    Ravenclaw: {desc:"ฉลาดและคิดสร้างสรรค์", example:"Luna Lovegood, Cho Chang", color:"#222f5b", img:"https://i.imgur.com/wr6r8Rf.png"},
    Slytherin: {desc:"ทะเยอทะยานและมีไหวพริบ", example:"Draco Malfoy, Severus Snape", color:"#1a472a", img:"https://i.imgur.com/U5q5JQo.png"}
  };

  players.forEach(p=>{
    let bestHouse = Object.keys(p.score).reduce((a,b)=>p.score[a]>p.score[b]?a:b);
    html += `<div style="border:2px solid ${houseInfo[bestHouse].color}; padding:10px; margin-bottom:10px;">
      <h3 style="color:${houseInfo[bestHouse].color}">${p.name} → ${bestHouse}</h3>
      <img src="${houseInfo[bestHouse].img}" alt="${bestHouse}" style="width:100px;height:auto;">
      <p><strong>นิสัย:</strong> ${houseInfo[bestHouse].desc}</p>
      <p><strong>เหมือนใคร:</strong> ${houseInfo[bestHouse].example}</p>
    </div>`;
  });

  document.getElementById("result").innerHTML = html;
}