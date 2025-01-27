
const Add_new =(props) =>{

    const {
        newName,
        newNumber,
        addPersonHandler,
        setNumberHandler,
        newNameHandler
    } = props;

    return(

        <div>
            <form
                onSubmit={addPersonHandler}
            >
                Name:
                <input
                    value={newName}
                    onChange={newNameHandler}
                >
               
                </input>
                Phone number:
                <input
                    value={newNumber}
                    onChange={setNumberHandler}
                >
                    
                </input>

                <button
                    type="submit"
                >
                    Add
                </button>
            </form>


        </div>
    )

}

export default Add_new;