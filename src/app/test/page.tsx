const Page = () => {
    const handleForm = async(formData: any)=>{
        "use server"
        console.log(formData);
        const username = formData.get('username');
        console.log("hello, ", username);
    }
    return  (
        <div>
            <form action={handleForm}>
                <input type='text' className=" text-black" name="username"/>
                <button>Send</button>
            </form>
        </div>
    );
}

export default Page