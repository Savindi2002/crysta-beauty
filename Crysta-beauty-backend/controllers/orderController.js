import Order from "../models/order";
export function createOrder(req,res){

    if (req.user == null){
        res.status(401).json({message:"Unauthorized"

        })
        return;
        
    }
  const body=req.body;

  const orderData={
        orderId:"",
        email:req.user.email,
        name:body.name,
        address:body.address,
        phoneNumber:body.phoneNumber,
        billItems:[],
        total:0
  }
  const lastBills=Order.find().sort({
    date:-1
  }).limit(1);

  if(lastBills.length == 0){
    orderData.orderId="ORD0001"
  }else{
    const lastBill=lastBills[0];

    const lastOrderId=lastBill.orderId;//"ORD0061"
    const lastOrderNumber=lastOrderId.replace("ORD","");//"0061"
    const lastOrderNumberInt=parseInt(lastOrderNumber);//61
    const newOrderNumberInt=lastOrderNumberInt+1;//62

    const newOrderNumberStr= String(newOrderNumberInt).padStart(4, '0'); //"0062"
    orderData.orderId="ORD"+newOrderNumberStr;

  }

  const order=new Order(orderData);
  order.save().then(()=>{
    res.json({
        message: "Order saved successfully",
    });
  }).catch((err)=>{
    console.log(err);
    res.status(500).json({
        message:"Order not saved",
    });
  });

}
