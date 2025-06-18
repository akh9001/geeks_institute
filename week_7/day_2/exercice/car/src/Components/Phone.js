import{ useState } from 'react';

const Phone = () => {
	const [brand, setBrand] = useState("Samsung");
	const [model, setModel] = useState("Galaxy S20");
	const [color, setColor] = useState("Black");
	const [year, setYear] = useState(2020);
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: "20px" }}>
			<h2>My Phone Details</h2>
			<div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "10px", width: "600px" }}>
				<p>Color: {color}</p>
				<button style={{padding:"6px", border:"1px solid #ccc", borderRaduis: "5px", borderRadius: "5px"}} onClick={() => setColor("Blue")}>Change Color to Blue</button>
				<button style={{padding:"6px", border:"1px solid #ccc", borderRaduis: "5px", borderRadius: "5px"}} onClick={() => setColor("White")}>Change Color to White</button>
			</div>
			<div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "10px", width: "600px" }}>
				<p>Brand: {brand}</p>
				<button style={{padding:"6px", border:"1px solid #ccc", borderRaduis: "5px", borderRadius: "5px"}} onClick={() => setBrand("Apple")}>Change Brand to Apple</button>
				<button style={{padding:"6px", border:"1px solid #ccc", borderRaduis: "5px", borderRadius: "5px"}} onClick={() => setBrand("Samsung")}>Change Brand to Samsung</button>
		   </div>
			
			<div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "10px", width: "600px" }}>
				<p>Model: {model}</p>
				<button style={{padding:"6px", border:"1px solid #ccc", borderRaduis: "5px", borderRadius: "5px"}} onClick={() => setModel("iPhone 13")}>Change Model to iPhone 13</button>
				<button style={{padding:"6px", border:"1px solid #ccc", borderRaduis: "5px", borderRadius: "5px"}} onClick={() => setModel("Galaxy S21")}>Change Model to Galaxy S21</button>				
			</div>
			<div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "10px", width: "600px" }}>
				<p> Year : {year} </p>
				<button style={{ padding: "6px", border: "1px solid #ccc", borderRaduis: "5px", borderRadius: "5px" }} onClick={() => setYear(2021)}>Change Year to 2021</button>
				<button style={{ padding: "6px", border: "1px solid #ccc", borderRaduis: "5px", borderRadius: "5px" }} onClick={() => setYear(2022)}>Change Year to 2022</button>
			</div>
  		</div>
	);
}

export default Phone;