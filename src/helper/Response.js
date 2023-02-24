export function pagination(pagesize, currentpage, data) {
    let value = data.slice(pagesize * (currentpage - 1 ), pagesize * currentpage).slice(0, pagesize); //นำ data มาดึงตามจำนวน page

    return {
        statusCode: 200,
        taskStatus: true,
        message: 'Success',
        pagin: {
            totalrow: data.length, //การนับจำนวน [] จำนวน object
            pagesize: pagesize, //บอกว่าเราต้องการดึงข้อมูลเท่าไหร่ต่อหน้า
            currentpage: currentpage, //ข้อมูลที่เราทำการส่งมา
            totalpage: Math.ceil(data.length / pagesize), //การคำนวณว่าเรามีทั้งหมดกี่หน้า 
        },
        data: value,
    };
}