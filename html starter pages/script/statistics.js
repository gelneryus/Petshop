let endpoint = `https://api.propublica.org/congress/v1/113/senate/members.json`
let init = {
    method: 'GET',
    headers: {
        "X-API-Key": "PCkHiMfdhVqMgvgmzIZr4opMMTwqguOBZRgMLjqb"
    }
}

fetch(endpoint, init)
    .then(response => {
        return response.json()
    }).then(data => {
        members = data.results[0].members
    })

        // estadistica()
        // function estadistica() {
        //     var statistics = {
        //         democratas: [],
        //         totalDemocratas: 0,
        //         republicanos: [],
        //         totalRepuplicanos: 0,
        //         independientes: [],
        //         totalIndependientes: 0,
        //         total: 0,
        //     }


/*  //primera tabla y primeros calculos
 members.forEach(member => {
     if (member.party == 'D') {
         statistics.democratas.push(member)
     }
     if (member.party == 'R') {
         statistics.republicanos.push(member)
     }
     if (member.party == 'ID') {
         statistics.independientes.push(member)
     }
 })
 let totalDemocratas = statistics.democratas.length
 let totalRepublicanos = statistics.republicanos.length
 let totalIndependientes = statistics.independientes.length
 let total = totalDemocratas + totalRepublicanos + totalIndependientes

 let total_Democrata = document.getElementById('totalDemocrata');
 total_Democrata.innerHTML = totalDemocratas

 let total_Republicano = document.getElementById('totalRepublicano');
 total_Republicano.innerHTML = totalRepublicanos

 let total_independiente = document.getElementById('totalInde');
 total_independiente.innerHTML = totalIndependientes

 let sumaTotal = document.getElementById('all');
 sumaTotal.innerHTML = total
 console.log(total)

 let porcentajeD = 0
 statistics.democratas.forEach(dem => {
     return porcentajeD += dem.votes_with_party_pct
 })
 porcentajeD = (porcentajeD / statistics.democratas.length);

 let porcentajeR = 0
 statistics.republicanos.forEach(repu => {
     return porcentajeR += repu.votes_with_party_pct
 })
 porcentajeR = (porcentajeR / statistics.republicanos.length);

 let sumaIn = 0
 statistics.independientes.forEach(ind => {
     if (ind.votes_with_party_pct != null) {
         console.log(ind.votes_with_party_pct)
         sumaIn += ind.votes_with_party_pct
     }
     return sumaIn += ind.votes_with_party_pct
 })
 let porcentajeIn = 0
 if (statistics.independientes.length != 0) {
     porcentajeIn = (porcentajeIn / statistics.independientes.length)
 }

 let porcentajeTotal = (totalDemocratas + totalIndependientes + totalRepublicanos / 3);
 console.log(porcentajeTotal)

 let all = document.getElementById('%');
 all.innerHTML = porcentajeTotal.toFixed(2) + '%'

 let vD = document.getElementById('vD');
 vD.innerHTML = porcentajeD.toFixed(2) + '%'

 let vR = document.getElementById('vR');
 vR.innerHTML = porcentajeR.toFixed(2) + '%';

 let vIn = document.getElementById('vIn');
 if (porcentajeIn.toFixed(2) == 'NaN') {
     vIn.innerHTML = ''
 }
 else { vIn.innerHTML = porcentajeIn.toFixed(2) + '%'; }

 //tablas 2 calculo y ordenamiento metodo sort()
 let least = document.querySelector('#least-engaged');
 let menosComprometidos = [];
 least.innerHTML = ''

 let porcentaje10 = Math.floor(total * 0.10);
 menosComprometidos = members.sort((a, b) => {
     if (a.missed_votes < b.missed_votes) {
         return -1
     }
     if (a.missed_votes > b.missed_votes) {
         return 1
     }
     return 0
 })

 for (let i = 0; i < porcentaje10; i++) {
     let missedPor = 0
     if (missedPor == '0' || 'NaN') {
         missedPor = 0
     } else {
         let missedPor = (menosComprometidos[i].missed_votes / menosComprometidos[i].total_votes * 100).toFixed(2)
     };
     least.innerHTML += `<tr>
<td><a href="${menosComprometidos[i].url}">${menosComprometidos[i].first_name}${menosComprometidos[i].last_name}</a></td>
<td>${menosComprometidos[i].missed_votes}</td>
<td> % ${missedPor}</td>
</tr>`
 }

 let masComprometidos = [];
 let most = document.querySelector('#most-engaged');
 masComprometidos = members.sort((a, b) => {
     if (a.missed_votes > b.missed_votes) {
         return -1
     }
     if (a.missed_votes < b.missed_votes) {
         return 1
     }
     return 0
 })

 for (let i = 0; i < porcentaje10; i++) {
     let missedPor = (masComprometidos[i].missed_votes / masComprometidos[i].total_votes * 100).toFixed(2);
     most.innerHTML += `<tr>
<td><a href="${masComprometidos[i].url}">${masComprometidos[i].first_name}${masComprometidos[i].last_name}</a></td>
<td>${masComprometidos[i].missed_votes}</td>
<td> % ${missedPor}</td>
</tr>`
 }
}

}) */


