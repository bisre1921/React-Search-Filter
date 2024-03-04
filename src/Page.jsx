const Page = ({user}) => {
  return (
    <div>
        <table className="w-full my-[50px] mx-0">
            <tbody>
                <tr className="mb-[20px]">
                    <th className="w-[250px] text-left text-[20px]">name</th>
                    <th className="w-[250px] text-left text-[20px]">surename</th>
                    <th className="w-[250px] text-left text-[20px]">email</th>
                </tr>
                {user.map(userData => (
                    <tr key={userData.id} className="mb-[20px]">
                    <td className="w-[250px] text-[20px]">{userData.first_name}</td>
                    <td className="w-[250px] text-[20px]">{userData.last_name}</td>
                    <td className="w-[250px] text-[20px]">{userData.email}</td>
                  </tr>
                ))}
                
            </tbody>
        </table>
    {/* <div className="flex gap-16">
        <div>
            <h1>name</h1>
        </div>
        <div>
            <h1>surename</h1>
        </div>
        <div>
            <h1>email</h1>
        </div>
    </div>
    <div className="flex gap-16">
        <div>
            <h1>{firstName}</h1>
        </div>
        <div>
            <h1>{lastName}</h1>
        </div>
        <div>
            <h1>{email}</h1>
        </div>
    </div> */}
    </div>
  )
}

export default Page