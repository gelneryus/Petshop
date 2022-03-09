let senado = ''
if (document.title.includes('Senate')) {
    senado = 'Senate'
} else {
    senado = 'house'
}
let endpoint = `https://api.propublica.org/congress/v1/113/senate/members.json`
let init = {
    method: 'GET',
    headers: {
        "X-API-Key": "PCkHiMfdhVqMgvgmzIZr4opMMTwqguOBZRgMLjqb"
    }
}
let miembros = [];
var app = new Vue({
    el: '#app',
    data: {

        members: [],
        select: 'all',
        states: [],
        // check: ["R", "D", "ID"]
        checkD: true,
        checkR: true,
        checkI: true
    },
    methods: {},
    computed: {

        filterMembers() {
            return this.members.filter(member => {
                if (member.state == this.select || this.select == 'all') {
                    if (this.checkD && member.party == 'D') {
                        return member
                    }
                    if (this.checkR && member.party == 'R') {
                        return member
                    }
                    if (this.checkI && member.party == 'I') {
                        return member
                    }

                }
            })
        },


    }
})
fetch(endpoint, init)
    .then(response => {
        return response.json()
    }).then(d => {
        app.members = d.results[0].members

    })

/* let tableHeader = document.getElementById('table-head');
function getTableHeader() {
    return `
<tr>
<td>Senator</td>
<td>Name</td>
<td>Party afiliation</td>
<td>States</td>
<td>seniority</td>
<td>Votes whith party %</td>
</tr>
  `
}
function showHeader() {
    let headers = getTableHeader();
    tableHeader.innerHTML += headers
}
// let miembros = data.results[0].members
function cargarTabla() {
    let senateData = document.getElementById("senate-data")
    let democrats = document.getElementById("democrats")
    let republicans = document.getElementById("republicans")
    let independents = document.getElementById("independents")
    let selectedState = document.getElementById("selectStates")
    let arrayResultado = []

    if (democrats.checked) {
        arrayResultado.push(democrats.value)
    }
    if (republicans.checked) {
        arrayResultado.push(republicans.value)
    }
    if (independents.checked) {
        arrayResultado.push(independents.value)
    }
    let selectValue = selectedState.value
    senateData.innerHTML = ""
    miembros.forEach(member => {
        if (selectValue == 'all' && arrayResultado.includes(member.party)) {
            senateData.innerHTML += `
            <tr>
       <td><a href="${member.url}">${member.first_name}${member.last_name}</a> </td>
       <td>${member.first_name}${member.middle_name || ""}</td>
       <td>${member.party} </td>
       <td>${member.state} </td>
       <td>${member.seniority}</td>
       <td>${member.votes_with_party_pct}</td>
   </tr>  `}
        else {
            if (arrayResultado.includes(member.party) && selectValue == member.state) {
                senateData.innerHTML += `
                    <tr>
               <td><a href="${member.url}">${member.first_name}${member.last_name}</a> </td>
               <td>${member.first_name}${member.middle_name || ""}</td>
               <td>${member.party} </td>
               <td>${member.state} </td>
               <td>${member.seniority}</td>
               <td>${member.votes_with_party_pct}</td>
           </tr>  `
            }
        }
    })
}
cargarTabla();
cargarEstados();

function cargarEstados() {
    let filterStates = [];
    miembros.forEach(member => {
        if (!filterStates.includes(member.state))
            filterStates.push(member.state);
    });
    filterStates.forEach(states => {
        let option = document.createElement('option');
        option.innerHTML = states
        option.value = states
        document.getElementById('selectStates').appendChild(option)
    })
} */
