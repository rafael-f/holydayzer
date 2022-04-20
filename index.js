import express from 'express';
const hoje = new Date();
const app = express();
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }]
app.get('/holidays', (req, res) => {
  res.send(`${holidays.map(dia => {
      return `<h2>${dia.date}</h2>
            <h3>${dia.name}</h3>`
  })}`);
});
app.listen(5000);
app.get('/is-today-holiday',(req,res)=>{
    const feriado = false;
    holidays.forEach(dia =>{
        if(hoje.toLocaleDateString()===dia.date){
        }});
        if(feriado) {
            res.send('Sim, hoje é nome-do-feriado')
        } else {
            res.send('Não, hoje não é feriado')
        }
})