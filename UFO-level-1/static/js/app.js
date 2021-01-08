// from data.js
let tableData = data;

// YOUR CODE HERE!
let TableBody = d3.select("tbody")
function createTable(data){
    TableBody.html("")
    data.forEach(rowData =>{
        let row = TableBody.append("tr")
        Object.values(rowData).forEach(value => {
            let cellData = row.append("td")
            cellData.text(value)
        });
    });
}
createTable(tableData)

let filterButton = d3.select('#filter-btn')
filterButton.on("click",function(){
    let input = d3.select('#datetime').property("value")
    let filterData= tableData.filter(d=>d.datetime===input)
    createTable(filterData)

})