const ContanctUs = () =>{

    return (
        <div className="about-us-container">
        <h1 className="font-bold text-lg m-2 p-2">Contact Us</h1>
        <p className="font-bold text-lg mx-2 p-2">This page provides information about contact information ...</p>
        <form>
            <input type="text" className="border border-s-orange-50 rounded-lg p-2 m-2 " placeholder="name"/>
            <button className="bg-green-400 border border-black rounded-lg justify-center p-2 m-2" placeholder="button">Submit</button>
         </form>
        </div>
    )
}

export default ContanctUs;