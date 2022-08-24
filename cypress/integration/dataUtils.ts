class SharedDataUtils{
    getPaymentsData = ()=>{
        cy.request('GET','/NetCore/R365Payment/settings');
        
    }
}