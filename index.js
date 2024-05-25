import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {


    const today = new Date();
    const day = today.getDay();

   

    let type = "a weekday";
    let adv = "it's time to work bruhh";

    if(day === 0 || day === 6){
        let type = "a weekend";
        let adv = "it's time to sleep and play games";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
