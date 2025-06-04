import { IoPerson } from "react-icons/io5";


export default function DashboardGymplan() {
    return(
        <div className="box">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg md:text-2xl">Members</h2>
                <a href="" className="text-sm text-blue-500 hover:underline">See all</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex flex-col w-full gap-3 bg-[#232024] p-5 rounded-lg items-center justify-center sm:text-xl">
                    <h4 className="text-center">Basic Gym</h4>
                    <h3>2500/-</h3>
                    <span className="flex gap-2 items-center justify-center"><IoPerson className="text-[#FFDD4A]"/>3</span>
                </div>
                
                <div className="flex flex-col w-full gap-3 bg-[#232024] p-5 rounded-lg items-center justify-center sm:text-xl">
                    <h4 className="text-center">Basic Gym</h4>
                    <h3>2500/-</h3>
                    <span className="flex gap-2 items-center justify-center"><IoPerson className="text-[#FFDD4A]"/>3</span>
                </div>
                
                <div className="flex flex-col w-full gap-3 bg-[#232024] p-5 rounded-lg items-center justify-center sm:text-xl">
                    <h4 className="text-center">Basic Gym</h4>
                    <h3>2500/-</h3>
                    <span className="flex gap-2 items-center justify-center"><IoPerson className="text-[#FFDD4A]"/>3</span>
                </div>
                
               
            </div>

        </div>
    )
}