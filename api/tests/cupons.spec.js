const { api, getHeaders } = require('../config/apiConfig');
const { expect } = require('chai');
const contract = require('../contracts/cupons.contracts');  

describe('[US-0003] - API de Cupons', () => {

    it('CT-009 - Listar todos os cupons', async () => {
        const response = await api.get('/coupons')
            .set(getHeaders()) 
            .expect(200);

        expect(response.body).to.be.an('array');
    });

    it('CT-010 - Buscar cupom pelo ID', async () => {
        const cupomID = 5157;  
        const response = await api.get(`/coupons/${cupomID}`)
            .set(getHeaders()) 
            .expect(200);

        expect(response.body).to.have.property('id', cupomID);
    });

    function generate3DigitNumber() {
        return Math.floor(100 + Math.random() * 900);
    }
    const random3digits = generate3DigitNumber();
    const cupomCode = `Ganhe${random3digits}`;

    it('CT-011 - Criar um cupom de desconto válido', async () => {
        const novoCupom = {
            code: cupomCode,  
            amount: "50",       
            discount_type: "percent",  
            description: "Cupom de 50% de desconto", 
        };
    
        const response = await api.post('/coupons')
            .set(getHeaders()) 
            .send(novoCupom)   
            .expect(201);      

        await contract.cuponsCreateSchema.validateAsync(response.body);


        expect(response.body).to.have.property('code').that.equals(novoCupom.code.toLowerCase());  
        expect(parseFloat(response.body.amount).toFixed(2)).to.equal(parseFloat(novoCupom.amount).toFixed(2)); 
        expect(response.body).to.have.property('discount_type', novoCupom.discount_type);
    });
    
    
    
    it('CT-012 - Criar cupom de desconto com código já existente', async () => {
        const cupomDuplicado = {
            code: cupomCode,  
            amount: "10",
            discount_type: "percent",
            description: "Cupom de 10% de desconto"
        };

        await api.post('/coupons')
            .set(getHeaders()) 
            .send(cupomDuplicado)
            .expect(201);  // 

        const response = await api.post('/coupons')
            .set(getHeaders()) 
            .send(cupomDuplicado)
            .expect(400);  
        expect(response.body).to.have.property('message').that.includes("O código de cupom já existe");
    });
});
