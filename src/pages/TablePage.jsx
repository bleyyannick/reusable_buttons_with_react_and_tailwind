import Table from "../components/Table"

function TablePage() {
  const fruits = [
    {name:"Orange", color:"bg-orange-500",score: 5 }, 
    {name:"Apple", color:"bg-red-300",score: 3 }, 
    {name:"Banana", color:"bg-yellow-500",score: 1}, 
    {name:"Lime", color:"bg-green-500",score: 4 } 
  ]

  const config = [
    {
      label:"Fruits",
      render: (fruit) => fruit.name
    },
    {
      label:"Color", 
      render: (fruit)=> <div className={`p-3 m-2 ${fruit.color}`}></div>
    },
    {
      label:"Score", 
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500">Score</th>
    },
  ]
  const keyFn = (fruit) => fruit.name
  return (
    <div>
        <Table data={fruits} config={config} keyFn={keyFn}></Table>
    </div>
  )
}

export default TablePage