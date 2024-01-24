import { RiCloseLine } from "react-icons/ri";
const SuccessMessage = () => {
    return (
        <div className="bg-emerald-100 h-[78px] flex flex-col justify-center p-4 rounded " >
            <div className="flex w-full justify-between">
                <h4 className="text-lime-700 font-medium">Successfully added member</h4>
    
                <button type="button" className="close" data-dismiss="alert">
                    <RiCloseLine className="text-teal-700"/>
                </button>
            </div>
            <p className="text-lime-700 text-sm">New members have received an invitation from you</p>
        </div>
    )
}


export default SuccessMessage